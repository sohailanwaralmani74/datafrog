let currentFileName = 'document.xml';
let currentFileSize = 0;
let rawXmlText = '';
let generatedWordHtml = '';

function escapeHtml(value) {
  return String(value)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/\"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

const dropzone = document.getElementById('dropzone');
const fileInput = document.getElementById('fileInput');
const fileMeta = document.getElementById('fileMeta');
const metaFilename = document.getElementById('metaFilename');
const metaFilesize = document.getElementById('metaFilesize');
const docTitleInput = document.getElementById('docTitleInput');
const styleModeSelect = document.getElementById('styleModeSelect');
const parseError = document.getElementById('parseError');
const errorMessage = document.getElementById('errorMessage');
const conversionPanel = document.getElementById('conversionPanel');
const xmlEditor = document.getElementById('xmlEditor');
const resultArea = document.getElementById('resultArea');
const wordPaper = document.getElementById('wordPaper');
const wordStats = document.getElementById('wordStats');
const copyBtn = document.getElementById('copyBtn');

if (dropzone) {
  ['dragenter', 'dragover'].forEach(name => {
    dropzone.addEventListener(name, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.style.borderColor = '#2563eb';
      dropzone.style.background = '#eff6ff';
    });
  });

  ['dragleave', 'drop'].forEach(name => {
    dropzone.addEventListener(name, (e) => {
      e.preventDefault();
      e.stopPropagation();
      dropzone.style.borderColor = '#cbd5e1';
      dropzone.style.background = '#f8fafc';
    });
  });

  dropzone.addEventListener('drop', (e) => {
    const files = e.dataTransfer.files;
    if (files && files.length > 0) processUploadedFile(files[0]);
  });

  dropzone.addEventListener('click', (e) => {
    if (e.target.tagName !== 'INPUT' && e.target.tagName !== 'LABEL') fileInput.click();
  });
}

window.handleFileSelect = function(event) {
  const file = event.target.files[0];
  if (file) processUploadedFile(file);
};

function processUploadedFile(file) {
  currentFileName = file.name;
  currentFileSize = file.size;

  metaFilename.textContent = currentFileName;
  metaFilesize.textContent = 'Size: ' + (currentFileSize > 1024 ? (currentFileSize / 1024).toFixed(1) + ' KB' : currentFileSize + ' bytes');
  fileMeta.style.display = 'block';

  const reader = new FileReader();
  reader.onload = function(e) {
    rawXmlText = e.target.result;
    xmlEditor.value = rawXmlText;
    conversionPanel.style.display = 'block';
    resultArea.style.display = 'none';
    conversionPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  };
  reader.readAsText(file);
}

window.generateWordDoc = function() {
  parseError.style.display = 'none';
  const text = xmlEditor.value.trim();
  if (!text) return;

  try {
    const parser = new DOMParser();
    const doc = parser.parseFromString(text, 'text/xml');
    const err = doc.getElementsByTagName('parsererror');
    if (err && err.length > 0) {
      throw new Error(err[0].textContent.split('\n')[0] || 'Invalid XML markup.');
    }

    const root = doc.documentElement;
    const title = docTitleInput.value.trim() || root.nodeName + ' Document';

    const metaPairs = [];
    if (root.attributes) {
      Array.from(root.attributes).forEach(function(a) {
        metaPairs.push({ key: a.name, val: a.value });
      });
    }

    let recordNodes = [];
    const children = Array.from(root.children);
    if (children.length > 0) {
      const hasGrandchildren = children.some(function(c) { return c.children.length > 0; });
      if (children.length === 1 && hasGrandchildren) {
        recordNodes = Array.from(children[0].children);
      } else {
        recordNodes = children;
      }
    } else {
      recordNodes = [root];
    }

    const headersSet = new Set();
    const rows = [];

    recordNodes.forEach(function(node) {
      const row = {};

      if (node.attributes) {
        Array.from(node.attributes).forEach(function(a) {
          headersSet.add(a.name);
          row[a.name] = a.value;
        });
      }

      if (node.children.length > 0) {
        Array.from(node.children).forEach(function(c) {
          headersSet.add(c.nodeName);
          row[c.nodeName] = c.textContent.trim();
        });
      } else {
        headersSet.add(node.nodeName);
        row[node.nodeName] = node.textContent.trim();
      }

      rows.push(row);
    });

    const headers = Array.from(headersSet);
    let docBody = '';
    docBody += '<div style="font-family: Calibri, Arial, sans-serif; color: #1e293b;">';
    docBody += '<h1 style="color: #1e3a8a; font-size: 26pt; font-weight: bold; margin-bottom: 6pt; border-bottom: 2pt solid #1e3a8a; padding-bottom: 6pt;">';
    docBody += escapeHtml(title);
    docBody += '</h1>';

    if (metaPairs.length > 0) {
      docBody += '<div style="background-color: #f1f5f9; border-left: 4pt solid #2563eb; padding: 10pt 14pt; margin-bottom: 20pt;">';
      docBody += '<p style="margin: 0; font-size: 11pt; font-weight: bold; color: #1e293b; margin-bottom: 4pt;">Document Metadata:</p>';
      docBody += '<table style="width: 100%; border-collapse: collapse; font-size: 10pt;">';

      metaPairs.forEach(function(m) {
        docBody += '<tr><td style="padding: 2pt 4pt; font-weight: bold; width: 140pt; color: #475569;">';
        docBody += escapeHtml(m.key);
        docBody += ':</td><td style="padding: 2pt 4pt; color: #0f172a;">';
        docBody += escapeHtml(m.val);
        docBody += '</td></tr>';
      });

      docBody += '</table></div>';
    }

    if (rows.length > 0 && headers.length > 0) {
      docBody += '<h2 style="color: #1e3a8a; font-size: 16pt; font-weight: bold; margin-top: 18pt; margin-bottom: 8pt;">';
      docBody += 'Structured Data Table (' + rows.length + ' Records)</h2>';
      docBody += '<table style="width: 100%; border-collapse: collapse; margin-top: 8pt; margin-bottom: 24pt; font-size: 10.5pt;" border="1" cellpadding="6" cellspacing="0">';
      docBody += '<thead><tr style="background-color: #1e3a8a; color: #ffffff;">';

      headers.forEach(function(h) {
        docBody += '<th style="padding: 6pt 8pt; font-weight: bold; border: 1pt solid #cbd5e1; text-align: left;">';
        docBody += escapeHtml(h);
        docBody += '</th>';
      });

      docBody += '</tr></thead><tbody>';

      rows.forEach(function(r, i) {
        docBody += '<tr style="background-color: ' + (i % 2 === 0 ? '#ffffff' : '#f8fafc') + ';">';

        headers.forEach(function(h) {
          docBody += '<td style="padding: 6pt 8pt; border: 1pt solid #cbd5e1; color: #334155;">';
          docBody += r[h] !== undefined ? escapeHtml(r[h]) : '';
          docBody += '</td>';
        });

        docBody += '</tr>';
      });

      docBody += '</tbody></table>';
    }

    docBody += '</div>';

    wordPaper.innerHTML = docBody;
    generatedWordHtml = docBody;
    wordStats.textContent = 'Generated formatted Word document with ' + rows.length + ' tabular records';
    resultArea.style.display = 'block';
    resultArea.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
  } catch (err) {
    errorMessage.textContent = err.message || 'Failed to parse XML for Word conversion';
    parseError.style.display = 'block';
  }
};

window.downloadWordDoc = function() {
  if (!generatedWordHtml) return;

  const fullHtml = [
    '<html xmlns:o="urn:schemas-microsoft-com:office:office" xmlns:w="urn:schemas-microsoft-com:office:word" xmlns="http://www.w3.org/TR/REC-html40">',
    '<head>',
    '<meta charset="utf-8">',
    '<title>' + escapeHtml(docTitleInput.value || 'Document') + '</title>',
    '<style>',
    '@page Section1 { size: 8.5in 11.0in; margin: 1.0in 1.0in 1.0in 1.0in; mso-header-margin: .5in; mso-footer-margin: .5in; mso-paper-source: 0; }',
    'div.Section1 { page: Section1; }',
    'body { font-family: Calibri, Arial, sans-serif; font-size: 11pt; color: #1e293b; }',
    'table { border-collapse: collapse; width: 100%; }',
    'th { background-color: #1e3a8a; color: #ffffff; }',
    '</style>',
    '</head>',
    '<body>',
    '<div class="Section1">',
    generatedWordHtml,
    '</div>',
    '</body>',
    '</html>'
  ].join('\n');

  const blob = new Blob([fullHtml], { type: 'application/msword;charset=utf-8' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  const baseName = currentFileName.replace(/\.[^/.]+$/, '') || 'document';
  a.href = url;
  a.download = baseName + '.doc';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
};

window.copyWordHTML = function() {
  if (!generatedWordHtml) return;
  navigator.clipboard.writeText(generatedWordHtml).then(() => {
    const orig = copyBtn.textContent;
    copyBtn.textContent = '✓ Copied!';
    copyBtn.style.background = '#059669';
    setTimeout(() => {
      copyBtn.textContent = orig;
      copyBtn.style.background = '#0284c7';
    }, 2000);
  });
};

function loadSampleXml() {
  currentFileName = 'service_agreement.xml';

  const sample =
    '<?xml version="1.0" encoding="UTF-8"?>\n' +
    '<contract agreement_id="AGR-2026-778" effective_date="2026-10-01" jurisdiction="Delaware">\n' +
    '  <parties>\n' +
    '    <provider>Apex Data Systems Inc.</provider>\n' +
    '    <client>Pacific Retail Partners LLC</client>\n' +
    '  </parties>\n' +
    '  <milestones>\n' +
    '    <milestone id="M1" phase="Architecture Design">\n' +
    '      <deliverable>Infrastructure Blueprint &amp; Data Models</deliverable>\n' +
    '      <target_date>2026-11-15</target_date>\n' +
    '      <fee_usd>24000</fee_usd>\n' +
    '      <signoff_required>true</signoff_required>\n' +
    '    </milestone>\n' +
    '    <milestone id="M2" phase="Core Pipeline Build">\n' +
    '      <deliverable>Automated XML &amp; Parquet Lakehouse Ingestion</deliverable>\n' +
    '      <target_date>2026-12-20</target_date>\n' +
    '      <fee_usd>38500</fee_usd>\n' +
    '      <signoff_required>true</signoff_required>\n' +
    '    </milestone>\n' +
    '    <milestone id="M3" phase="Integration &amp; QA">\n' +
    '      <deliverable>End-to-End Stress Testing &amp; Security Audit</deliverable>\n' +
    '      <target_date>2027-01-25</target_date>\n' +
    '      <fee_usd>19500</fee_usd>\n' +
    '      <signoff_required>true</signoff_required>\n' +
    '    </milestone>\n' +
    '  </milestones>\n' +
    '  <payment_terms>Net 30 days upon deliverable acceptance</payment_terms>\n' +
    '</contract>';

  currentFileSize = sample.length;
  metaFilename.textContent = currentFileName;
  metaFilesize.textContent = 'Size: ' + (currentFileSize / 1024).toFixed(1) + ' KB';
  fileMeta.style.display = 'block';
  xmlEditor.value = sample;
  conversionPanel.style.display = 'block';
  resultArea.style.display = 'none';
  conversionPanel.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

window.resetTool = function() {
  fileInput.value = '';
  rawXmlText = '';
  xmlEditor.value = '';
  wordPaper.innerHTML = '';
  fileMeta.style.display = 'none';
  conversionPanel.style.display = 'none';
  resultArea.style.display = 'none';
  parseError.style.display = 'none';
};