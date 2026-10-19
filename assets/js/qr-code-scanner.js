(() => {
  'use strict';

  function initQrScanner() {
    const byId = id => document.getElementById(id);
    const file = byId('qr-file');
    const drop = byId('qr-drop');
    const upload = byId('qr-upload');
    const fileName = byId('qr-file-name');
    const preview = byId('qr-preview');
    const scan = byId('qr-scan');
    const results = byId('qr-results');
    const result = byId('qr-result');
    const status = byId('qr-status');
    const canvas = byId('qr-canvas');
    const video = byId('qr-video');
    const start = byId('qr-start');
    const stop = byId('qr-stop');
    const copy = byId('qr-copy');
    const open = byId('qr-open');

    if (![file, drop, upload, fileName, preview, scan, results, result, status, canvas, video, start, stop, copy, open].every(Boolean)) {
      console.error('QR Scanner: required page elements are missing.');
      return;
    }

    const ctx = canvas.getContext('2d', { willReadFrequently: true });
    if (!ctx) {
      status.textContent = 'This browser could not start the image scanner. Please try another browser.';
      return;
    }

    let selectedFile = null;
    let scannerPromise = null;
    let stream = null;
    let timer = null;

    function setStatus(message) {
      status.textContent = message;
    }

    function setResult(value) {
      result.value = value || '';
      open.hidden = true;
      open.removeAttribute('href');
      if (!value) return;
      try {
        const url = new URL(value);
        if (url.protocol === 'https:' || url.protocol === 'http:') {
          open.href = url.href;
          open.hidden = false;
        }
      } catch (_) {}
    }

    function loadFile(f) {
      selectedFile = null;
      scan.hidden = true;
      scan.disabled = true;
      preview.hidden = true;
      preview.removeAttribute('src');
      results.hidden = true;
      setResult('');
      if (!f) {
        fileName.textContent = 'No image selected.';
        setStatus('Choose an image to scan.');
        return;
      }

      const validType = !f.type || /^image\/(png|jpeg|gif|webp)$/i.test(f.type);
      const validName = /\.(png|jpe?g|gif|webp)$/i.test(f.name);
      if (!validType || !validName) {
        fileName.textContent = 'Unsupported file type.';
        setStatus('Choose a PNG, JPG, GIF, or WebP image.');
        return;
      }

      fileName.textContent = 'Loading ' + f.name + '…';
      setStatus('Loading image preview…');
      const url = URL.createObjectURL(f);
      preview.onload = () => {
        selectedFile = f;
        preview.hidden = false;
        scan.hidden = false;
        scan.disabled = false;
        fileName.textContent = 'Ready: ' + f.name;
        setStatus('Image loaded. Click Scan image to check for a QR code.');
        URL.revokeObjectURL(url);
      };
      preview.onerror = () => {
        fileName.textContent = 'Could not open ' + f.name;
        setStatus('This file is not a readable image.');
        URL.revokeObjectURL(url);
      };
      preview.src = url;
    }

    function loadScanner() {
      // Prefer the browser's built-in QR decoder when available. It avoids a
      // network dependency for many users and keeps image processing local.
      if (window.jsQR) return Promise.resolve();
      if (scannerPromise) return scannerPromise;
      scannerPromise = new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = 'https://cdnjs.cloudflare.com/ajax/libs/jsQR/1.4.0/jsQR.min.js';
        script.onload = () => {
          if (window.jsQR) resolve();
          else {
            scannerPromise = null;
            reject(new Error('The QR decoder could not start. Reload the page and try again.'));
          }
        };
        script.onerror = () => {
          scannerPromise = null;
          reject(new Error('The QR decoder could not load. Check your connection or content blocker, then try again.'));
        };
        document.head.appendChild(script);
      });
      return scannerPromise;
    }

    async function decode(source) {
      const width = source.naturalWidth || source.videoWidth;
      const height = source.naturalHeight || source.videoHeight;
      if (!width || !height) throw new Error('The image is not ready. Please try another image.');
      const scale = Math.min(1, 1800 / Math.max(width, height));
      canvas.width = Math.max(1, Math.round(width * scale));
      canvas.height = Math.max(1, Math.round(height * scale));
      ctx.drawImage(source, 0, 0, canvas.width, canvas.height);

      // Use native decoding first when the browser supports it.
      if ('BarcodeDetector' in window) {
        try {
          const detector = new BarcodeDetector({ formats: ['qr_code'] });
          const matches = await detector.detect(canvas);
          if (matches.length && matches[0].rawValue) {
            setResult(matches[0].rawValue);
            results.hidden = false;
            setStatus('QR code found. Check the decoded content before opening any link.');
            return true;
          }
        } catch (error) {
          // Some browsers expose BarcodeDetector but do not support QR decoding.
          console.warn('Built-in QR decoder unavailable; trying the fallback.', error);
        }
      }

      if (!window.jsQR) await loadScanner();
      if (!window.jsQR) throw new Error('No QR decoder is available in this browser.');
      const pixels = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const code = window.jsQR(pixels.data, pixels.width, pixels.height, { inversionAttempts: 'attemptBoth' });
      if (!code) return false;
      setResult(code.data);
      results.hidden = false;
      setStatus('QR code found. Check the decoded content before opening any link.');
      return true;
    }

    upload.addEventListener('click', event => {
      event.stopPropagation();
      file.click();
    });
    drop.addEventListener('click', event => {
      if (event.target !== upload) file.click();
    });
    drop.addEventListener('keydown', event => {
      if (event.key === 'Enter' || event.key === ' ') {
        event.preventDefault();
        file.click();
      }
    });
    ['dragenter', 'dragover'].forEach(name => drop.addEventListener(name, event => {
      event.preventDefault();
      drop.classList.add('df-over');
    }));
    ['dragleave', 'drop'].forEach(name => drop.addEventListener(name, event => {
      event.preventDefault();
      drop.classList.remove('df-over');
    }));
    drop.addEventListener('drop', event => loadFile(event.dataTransfer.files && event.dataTransfer.files[0]));
    file.addEventListener('change', () => loadFile(file.files && file.files[0]));

    scan.addEventListener('click', async () => {
      if (!selectedFile || !preview.complete || !preview.naturalWidth) {
        setStatus('Upload a valid image before scanning.');
        return;
      }
      scan.disabled = true;
      setStatus('Scanning image…');
      setResult('');
      results.hidden = true;
      try {
        if (!(await decode(preview))) {
          results.hidden = false;
          setStatus('No readable QR code was found. Try a clearer image with the entire QR code visible.');
        }
      } catch (error) {
        console.error('QR image scan failed:', error);
        setStatus(error && error.message ? error.message : 'Could not scan this image.');
      } finally {
        scan.disabled = false;
      }
    });

    function stopCamera() {
      if (timer) {
        clearInterval(timer);
        timer = null;
      }
      if (stream) {
        stream.getTracks().forEach(track => track.stop());
        stream = null;
      }
      video.srcObject = null;
      start.disabled = false;
      stop.disabled = true;
    }

    start.addEventListener('click', async () => {
      start.disabled = true;
      setStatus('Preparing camera…');
      try {
        if (!navigator.mediaDevices || !navigator.mediaDevices.getUserMedia) {
          throw new Error('Camera access is unavailable. Use HTTPS or upload an image instead.');
        }
        stream = await navigator.mediaDevices.getUserMedia({
          video: { facingMode: { ideal: 'environment' } },
          audio: false
        });
        video.srcObject = stream;
        await video.play();
        stop.disabled = false;
        setStatus('Camera running. Point it at a QR code.');
        let frameBusy = false;
        timer = setInterval(async () => {
          if (frameBusy || video.readyState < 2) return;
          frameBusy = true;
          try {
            if (await decode(video)) stopCamera();
          } catch (error) {
            console.error('QR camera scan failed:', error);
            setStatus(error && error.message ? error.message : 'Camera scan failed. Try uploading an image instead.');
            stopCamera();
          } finally {
            frameBusy = false;
          }
        }, 400);
      } catch (error) {
        stopCamera();
        setStatus(error && error.message ? error.message : 'Camera could not start. Check browser permissions.');
      }
    });

    stop.addEventListener('click', () => {
      stopCamera();
      setStatus('Camera stopped.');
    });

    copy.addEventListener('click', async () => {
      if (!result.value) {
        setStatus('There is no result to copy.');
        return;
      }
      try {
        await navigator.clipboard.writeText(result.value);
        setStatus('Result copied.');
      } catch (_) {
        result.focus();
        result.select();
        setStatus('Automatic copying was blocked. Copy the selected result manually.');
      }
    });

    window.addEventListener('pagehide', stopCamera);
    setStatus('Upload an image or start the camera.');
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initQrScanner, { once: true });
  } else {
    initQrScanner();
  }
})();
