---
layout: main
title: "Unix Timestamp Converter - Epoch to Date, Browser-Based & Private"
description: "Free online Unix timestamp converter. Convert epoch time to human-readable date and back, instantly in your browser. Batch conversion supported. No data leaves your device."
keywords: "unix timestamp converter, epoch converter, epoch to date, timestamp to date, convert epoch time, unix time converter, epoch time converter, current unix timestamp, date to epoch, datetime to unix timestamp, online epoch converter, timestamp converter online, unix epoch time now, batch timestamp converter, epoch to human readable date"
---

<style>
.epoch-wrap{background:#1e1e1e;border-radius:10px;padding:20px;display:flex;flex-direction:column;gap:16px;min-height:100px}
.panel-card{background:#252526;border-radius:8px;border:1px solid #3c3c3c;overflow:hidden}
.panel-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#2d2d2d;border-bottom:1px solid #3c3c3c;flex-wrap:wrap;gap:8px}
.panel-title{font-size:13px;font-weight:500;color:#cccccc;letter-spacing:.3px}
.panel-sub{font-size:11px;color:#6a9955;margin-top:2px}
.btn-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.epoch-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:4px;font-size:12px;font-family:inherit;cursor:pointer;border:1px solid #555;background:#3a3a3a;color:#cccccc;transition:background .15s}
.epoch-btn:hover{background:#4a4a4a}
.epoch-btn.primary{background:#0e639c;border-color:#0e639c;color:#fff}
.epoch-btn.primary:hover{background:#1177bb}
.epoch-btn:disabled{opacity:.4;cursor:not-allowed}

.live-clock{display:flex;flex-wrap:wrap;gap:18px;padding:14px 16px;align-items:center}
.live-clock-item{display:flex;flex-direction:column;gap:2px}
.live-clock-label{font-size:10px;color:#7a7a7a;letter-spacing:.5px;text-transform:uppercase}
.live-clock-value{font-family:var(--font-mono,'Fira Mono',monospace);font-size:18px;color:#9cdcfe;font-weight:600}

.epoch-grid{display:grid;grid-template-columns:1fr 1fr;gap:16px}
@media (max-width:760px){.epoch-grid{grid-template-columns:1fr}}

.field-row{padding:14px 16px;display:flex;flex-direction:column;gap:10px}
.epoch-input{width:100%;background:#1b1b1b;color:#9cdcfe;font-family:var(--font-mono,'Fira Mono',monospace);font-size:13px;padding:10px 12px;border:1px solid #3c3c3c;border-radius:5px;outline:none}
.epoch-input::placeholder{color:#4a4a4a}
.epoch-input:focus{border-color:#0e639c}
.select-row{display:flex;gap:8px;flex-wrap:wrap}
.epoch-select{background:#1b1b1b;color:#cccccc;font-family:inherit;font-size:12px;padding:7px 10px;border:1px solid #3c3c3c;border-radius:5px;outline:none}

.result-box{padding:14px 16px;display:flex;flex-direction:column;gap:8px}
.result-line{display:flex;justify-content:space-between;align-items:center;gap:10px;background:#1b1b1b;border:1px solid #3c3c3c;border-radius:5px;padding:9px 12px}
.result-line-label{font-size:11px;color:#7a7a7a;min-width:78px}
.result-line-val{font-family:var(--font-mono,'Fira Mono',monospace);font-size:12.5px;color:#d4d4d4;word-break:break-all;flex:1}
.result-line-val.empty{color:#4a4a4a;font-style:italic}
.mini-copy{background:none;border:none;color:#6a9955;cursor:pointer;font-size:13px;padding:2px 4px;flex-shrink:0}
.mini-copy:hover{color:#9cdcfe}

.batch-ta{width:100%;min-height:140px;max-height:220px;background:#1b1b1b;color:#9cdcfe;font-family:var(--font-mono,'Fira Mono',monospace);font-size:12px;padding:12px;border:none;resize:vertical;outline:none;line-height:1.6}
.batch-ta::placeholder{color:#4a4a4a}
.batch-output{padding:0;max-height:260px;overflow-y:auto}
.batch-table{width:100%;border-collapse:collapse;font-family:var(--font-mono,'Fira Mono',monospace);font-size:12px}
.batch-table th{position:sticky;top:0;background:#2d2d2d;color:#7a7a7a;text-align:left;padding:8px 12px;font-weight:500;border-bottom:1px solid #3c3c3c}
.batch-table td{padding:7px 12px;color:#d4d4d4;border-bottom:1px solid #2a2a2a;word-break:break-all}
.batch-table td.err{color:#f97583}
.batch-empty{padding:24px;text-align:center;color:#4a4a4a;font-size:12px}

.toast{position:fixed;bottom:24px;right:24px;padding:10px 18px;border-radius:6px;font-size:12px;font-family:var(--font-mono,monospace);z-index:999;opacity:0;transform:translateY(8px);transition:opacity .25s,transform .25s;pointer-events:none;max-width:320px}
.toast.success{background:#1e293b;border:1px solid #2d7a4a;color:#6fcf97}
.toast.error{background:#1e293b;border:1px solid #8b3333;color:#f97583}
.toast.show{opacity:1;transform:translateY(0)}

.badge {
  display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px;
  border-radius: 20px; font-size: 12px; font-weight: 500;
  border: 1px solid var(--border); background: var(--surface-2); color: var(--ink-2);
}
.badge.green { background: var(--green-light); border-color: #bbf7d0; color: var(--green); }
.badge.blue  { background: var(--accent-light); border-color: #bfdbfe; color: var(--accent); }
.badge.amber { background: var(--amber-light); border-color: #fde68a; color: var(--amber); }

.section { margin-bottom: 56px; margin-top: 56px; }
h2 {
  font-size: clamp(20px, 3vw, 27px); font-weight: 700; color: var(--ink);
  margin-bottom: 16px; padding-bottom: 10px; border-bottom: 2px solid var(--border); letter-spacing: -0.3px;
}
h3 { font-size: 18px; font-weight: 700; color: var(--ink); margin: 28px 0 8px; }
p { margin-bottom: 16px; color: var(--ink-2); }
p:last-child { margin-bottom: 0; }
strong { color: var(--ink); font-weight: 700; }
code {
  font-family: var(--font-code); font-size: 13.5px; background: var(--surface-3);
  border: 1px solid var(--border); border-radius: 4px; padding: 1px 6px; color: #be123c;
}

pre {
  background: #0f172a; color: #e2e8f0; border-radius: var(--radius); padding: 20px 24px;
  overflow-x: auto; font-family: var(--font-code); font-size: 13px; line-height: 1.7;
  margin: 16px 0 24px; border: 1px solid #1e293b;
}
.code-lang {
  font-family: var(--font-ui); font-size: 11px; color: var(--ink-3); text-transform: uppercase;
  letter-spacing: .8px; font-weight: 600; margin-bottom: 6px;
}
.c-key { color: #7dd3fc; } .c-str { color: #86efac; } .c-cmt { color: #64748b; font-style: italic; }
.c-kw  { color: #f472b6; } .c-fn  { color: #fbbf24; } .c-num { color: #fb923c; }

.tbl-wrap { overflow-x: auto; margin: 16px 0 24px; }
table { width: 100%; border-collapse: collapse; font-family: var(--font-ui); font-size: 14px; }
th { background: var(--surface-3); border: 1px solid var(--border); padding: 10px 14px; text-align: left; font-weight: 600; color: var(--ink); white-space: nowrap; }
td { border: 1px solid var(--border); padding: 9px 14px; color: var(--ink-2); vertical-align: top; }
tr:nth-child(even) td { background: var(--surface-2); }

.callout { border-left: 4px solid; padding: 16px 20px; border-radius: 0 var(--radius) var(--radius) 0; margin: 20px 0; }
.callout.info  { border-color: var(--accent); background: var(--accent-light); }
.callout.warn  { border-color: var(--amber); background: var(--amber-light); }
.callout.ok    { border-color: var(--green); background: var(--green-light); }
.callout p { margin: 0; font-size: 15px; }
.callout strong { display: block; margin-bottom: 4px; font-family: var(--font-ui); font-size: 12px; text-transform: uppercase; letter-spacing: .8px; }
.callout.info strong { color: var(--accent); } .callout.warn strong { color: var(--amber); } .callout.ok strong { color: var(--green); }

.faq-item { border: 1px solid var(--border); border-radius: var(--radius); margin-bottom: 12px; overflow: hidden; }
.faq-q { padding: 16px 20px; font-family: var(--font-ui); font-weight: 600; font-size: 15px; color: var(--ink); background: var(--surface-2); cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none; list-style: none; }
.faq-q::-webkit-details-marker { display: none; }
details[open] .faq-q { border-bottom: 1px solid var(--border); background: var(--surface); }
.faq-a { padding: 16px 20px; font-size: 15px; color: var(--ink-2); line-height: 1.7; }
.faq-chevron { font-size: 18px; color: var(--ink-3); transition: transform .2s; }
details[open] .faq-chevron { transform: rotate(90deg); }

.lang-grid { display: grid; grid-template-columns: repeat(auto-fit, minmax(240px, 1fr)); gap: 20px; margin: 16px 0 24px; }
.lang-card { border: 1px solid var(--border); border-radius: var(--radius); overflow: hidden; }
.lang-card-head { padding: 10px 14px; background: var(--surface-3); font-family: var(--font-ui); font-size: 12px; font-weight: 700; text-transform: uppercase; letter-spacing: .8px; color: var(--ink-2); border-bottom: 1px solid var(--border); }
.lang-card pre { margin: 0; border-radius: 0; border: none; font-size: 12px; padding: 14px; }

.hero { padding: 56px 0 40px; border-bottom: 1px solid var(--border); margin-bottom: 48px; }
.hero-eyebrow { font-family: var(--font-ui); font-size: 12px; font-weight: 600; letter-spacing: 1.2px; text-transform: uppercase; color: var(--accent); margin-bottom: 12px; }
.hero-lead { font-size: 19px; color: var(--ink-2); max-width: 640px; margin-bottom: 28px; }
.hero-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; font-family: var(--font-ui); }

@media (max-width: 600px) {
  h1 { font-size: 26px; }
  .hero { padding: 32px 0 28px; }
  .epoch-grid{grid-template-columns:1fr}
}
</style>

<!-- ================================================================
  BLOCK 1 — HERO (place ABOVE the tool)
  Carries the WebApplication microdata: name + description.
================================================================ -->
<div id="epoch-converter-hero"
     itemscope itemtype="https://schema.org/WebApplication"
     style="display: flex; flex-direction: column; justify-content: center; margin: 1rem;">

  <meta itemprop="applicationCategory" content="DeveloperApplication">
  <meta itemprop="operatingSystem" content="Any (runs in browser)">
  <meta itemprop="browserRequirements" content="Requires JavaScript">
  <meta itemprop="isAccessibleForFree" content="true">
  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="display:none">
    <meta itemprop="price" content="0">
    <meta itemprop="priceCurrency" content="USD">
  </div>

  <h1 itemprop="name">Unix Timestamp Converter — Convert Epoch Time to Date and Back</h1>

  <p itemprop="description">
    Convert epoch time to a readable date, or convert a date to its unix timestamp — instantly, in
    your browser. Works as a unix epoch converter, a linux timestamp converter, and a unix time
    calculator for batches of values, all without uploading anything.
  </p>

  <div class="hero-badges">
    <span class="badge green">✓ 100% Client-Side</span>
    <span class="badge blue">✓ Seconds &amp; Milliseconds</span>
    <span class="badge amber">✓ Batch Conversion</span>
    <span class="badge">✓ UTC &amp; Local Timezone</span>
    <span class="badge">✓ Free Forever</span>
  </div>
</div>

<section id="epoch-converter-tool" aria-label="Unix Timestamp Converter Tool" style="display: flex; justify-content: center" itemscope itemtype="https://schema.org/WebPage">
<div style="width: 15%;"></div>
<div style="width: 69%;">

<div class="epoch-wrap">

  <div class="panel-card">
    <div class="live-clock">
      <div class="live-clock-item">
        <div class="live-clock-label">Current Unix Timestamp</div>
        <div class="live-clock-value" id="live-seconds">—</div>
      </div>
      <div class="live-clock-item">
        <div class="live-clock-label">Milliseconds</div>
        <div class="live-clock-value" id="live-ms">—</div>
      </div>
      <div class="live-clock-item">
        <div class="live-clock-label">UTC</div>
        <div class="live-clock-value" id="live-utc" style="font-size:13px;color:#cccccc">—</div>
      </div>
      <button class="epoch-btn" id="btn-copy-live" style="margin-left:auto"><i class="ti ti-copy" aria-hidden="true"></i> Copy</button>
    </div>
  </div>

  <div class="epoch-grid">

    <div class="panel-card">
      <div class="panel-header">
        <div>
          <div class="panel-title"><i class="ti ti-arrow-right" aria-hidden="true" style="font-size:14px;margin-right:6px;color:#e2c08d"></i>Epoch → Date</div>
          <div class="panel-sub">Paste a timestamp, choose a unit and timezone</div>
        </div>
      </div>
      <div class="field-row">
        <input id="epoch-in" class="epoch-input" placeholder="e.g. 1750329600" inputmode="numeric">
        <div class="select-row">
          <select id="epoch-unit" class="epoch-select">
            <option value="s">Seconds</option>
            <option value="ms">Milliseconds</option>
          </select>
          <select id="epoch-tz" class="epoch-select">
            <option value="utc">UTC</option>
            <option value="local">Local Timezone</option>
          </select>
          <button class="epoch-btn primary" id="btn-to-date"><i class="ti ti-bolt" aria-hidden="true"></i> Convert</button>
        </div>
      </div>
      <div class="result-box">
        <div class="result-line"><span class="result-line-label">ISO 8601</span><span class="result-line-val empty" id="out-iso">—</span><button class="mini-copy" data-copy="out-iso"><i class="ti ti-copy" aria-hidden="true"></i></button></div>
        <div class="result-line"><span class="result-line-label">Readable</span><span class="result-line-val empty" id="out-readable">—</span><button class="mini-copy" data-copy="out-readable"><i class="ti ti-copy" aria-hidden="true"></i></button></div>
        <div class="result-line"><span class="result-line-label">Relative</span><span class="result-line-val empty" id="out-relative">—</span><button class="mini-copy" data-copy="out-relative"><i class="ti ti-copy" aria-hidden="true"></i></button></div>
      </div>
    </div>

    <div class="panel-card">
      <div class="panel-header">
        <div>
          <div class="panel-title"><i class="ti ti-arrow-left" aria-hidden="true" style="font-size:14px;margin-right:6px;color:#79b8ff"></i>Date → Epoch</div>
          <div class="panel-sub">Pick a date and time to get its timestamp</div>
        </div>
      </div>
      <div class="field-row">
        <input id="date-in" class="epoch-input" type="datetime-local" style="color-scheme: dark;">
        <div class="select-row">
          <select id="date-tz" class="epoch-select">
            <option value="local">Treat as Local Timezone</option>
            <option value="utc">Treat as UTC</option>
          </select>
          <button class="epoch-btn primary" id="btn-to-epoch"><i class="ti ti-bolt" aria-hidden="true"></i> Convert</button>
        </div>
      </div>
      <div class="result-box">
        <div class="result-line"><span class="result-line-label">Seconds</span><span class="result-line-val empty" id="out-seconds">—</span><button class="mini-copy" data-copy="out-seconds"><i class="ti ti-copy" aria-hidden="true"></i></button></div>
        <div class="result-line"><span class="result-line-label">Milliseconds</span><span class="result-line-val empty" id="out-millis">—</span><button class="mini-copy" data-copy="out-millis"><i class="ti ti-copy" aria-hidden="true"></i></button></div>
      </div>
    </div>

  </div>

  <div class="panel-card">
    <div class="panel-header">
      <div>
        <div class="panel-title"><i class="ti ti-list" aria-hidden="true" style="font-size:14px;margin-right:6px;color:#b392f0"></i>Batch Conversion</div>
        <div class="panel-sub">One value per line — epoch numbers or dates, mixed is fine</div>
      </div>
      <div class="btn-row">
        <button class="epoch-btn" id="btn-batch-clear">Clear</button>
        <button class="epoch-btn primary" id="btn-batch-run"><i class="ti ti-bolt" aria-hidden="true"></i> Convert All</button>
      </div>
    </div>
    <textarea id="batch-in" class="batch-ta" placeholder="1750329600&#10;1750416000000&#10;2026-06-19T12:00:00Z" spellcheck="false"></textarea>
    <div class="batch-output" id="batch-output">
      <div class="batch-empty">Results will appear here as a table</div>
    </div>
  </div>

</div>

<div class="toast" id="toast" role="alert" aria-live="assertive"></div>



<!-- ================================================================
  BLOCK 2 — CONTENT (place BELOW the tool body)
  margin-top: 3rem keeps it visually separated from the tool.
  FAQ section is marked up with FAQPage microdata directly in the
  HTML (in addition to the JSON-LD at the bottom) for redundancy.
================================================================ -->
<section class="section" style="max-width:900px;margin:3rem auto 0;">

<h2>Convert Epoch Time, Unix Time, and Date Values Instantly</h2>
<p>
Whether you think of it as an <strong>epoch unix converter</strong>, a <strong>linux timestamp converter</strong>,
or simply a way to <strong>convert epoch</strong> values, this tool does the same job either direction: turn a raw
<strong>unix time stamp</strong> into a date you can read, or turn a date back into its matching epoch value. Paste
a number above to convert epoch time to date, or pick a date and time to run it the other way — both work in
seconds and milliseconds, and the live counter at the top keeps a running <strong>unix epoch clock</strong> so
there's always a current reference value on hand.
</p>

<h3>Batch-Convert Unix Time Online</h3>
<p>
The batch panel works as a small <strong>unix time calculator</strong> for lists — paste a column of values to
convert unix time to date, or date to unix timestamp, for many entries at once instead of one at a time. It's
handy when cleaning a timestamp column from a CSV or JSON export, and since everything runs client-side, you
can convert unix time online with logs or database values you'd rather not send anywhere.
</p>

</section>

<section class="section" itemscope itemtype="https://schema.org/FAQPage" style="max-width:900px;margin:48px auto 0;">

<h2>Unix Time &amp; Epoch Converter — Frequently Asked Questions</h2>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">What is unix time?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
Unix time — also called the unix epoch or epoch timestamp — is the number of seconds elapsed since
January 1, 1970, 00:00:00 UTC. It's how most systems store a moment in time as a single number.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Is "unix time stamp" the same thing as "unix time"?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
Yes — "unix time," "unix time stamp," and "epoch timestamp" all refer to the same value: seconds
(or milliseconds) elapsed since the 1970 epoch. They're used interchangeably across documentation
and tools.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Is unix time measured in seconds or milliseconds?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
Both formats exist. The original unix time format uses seconds (a 10-digit number today), while
JavaScript's Date.now() and many logging systems use milliseconds (13 digits). This converter
handles either, and auto-detects which one you've pasted in the batch tool.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">How do I convert unix time to date?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
Paste the timestamp into the Epoch → Date panel, select seconds or milliseconds, and click
Convert. You'll get the result as ISO 8601, a readable date, and relative time.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">How do I convert a date to unix timestamp?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
Use the Date → Epoch panel: pick the date and time, choose UTC or local timezone, and click
Convert to get the matching unix timestamp in both seconds and milliseconds.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Can I convert unix time online without installing anything?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
Yes. This is a browser-based unix time converter — there's nothing to install, no account, and no
files are uploaded. All conversion happens locally using JavaScript's built-in Date object.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">What is the live counter at the top of this page?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
It's a live unix epoch clock — the current unix timestamp, updating every second in both seconds
and milliseconds, alongside the equivalent UTC time. It's the same value you'd get from
Date.now() or time.time() right now.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Is a linux timestamp converter different from a unix timestamp converter?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
No. Linux and Unix systems measure time from the same 1970 epoch, so a "linux timestamp
converter" and a "unix timestamp converter" perform the identical conversion.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Can I convert a whole list of timestamps at once?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
Yes — use the batch panel to paste multiple values, one per line. It accepts a mix of epoch
numbers and dates, and converts each line individually, returning the results as a table.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">What does "FROM_UNIXTIME" mean — is that related to this tool?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
FROM_UNIXTIME() is a SQL function (MySQL/MariaDB) that converts a unix timestamp stored in a
database column into a readable date — the same conversion this tool performs, just run inside a
database query instead of a browser.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">How do I convert unix time to UTC specifically?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
Set the timezone selector in the Epoch → Date panel to "UTC" before converting. The result will
reflect UTC exactly, with no local timezone offset applied.
</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Is it safe to paste timestamps from logs or a production database here?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">
Yes. Conversion happens entirely client-side in your browser — nothing you paste is sent to a
server, so it's safe to use with internal logs or production values.
</span>
</div>
</details>

</section>

<script>
(function(){
  function pad(n){ return String(n).padStart(2,'0'); }
  function showToast(msg, type){
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast ' + type + ' show';
    setTimeout(function(){ t.className = 'toast ' + type; }, 1800);
  }
  function copyText(text){
    if(!text || text === '—') return;
    navigator.clipboard.writeText(text).then(function(){
      showToast('Copied to clipboard', 'success');
    }).catch(function(){ showToast('Copy failed', 'error'); });
  }

  // Live clock
  function tickLive(){
    var now = new Date();
    var s = Math.floor(now.getTime()/1000);
    document.getElementById('live-seconds').textContent = s;
    document.getElementById('live-ms').textContent = now.getTime();
    document.getElementById('live-utc').textContent =
      now.getUTCFullYear()+'-'+pad(now.getUTCMonth()+1)+'-'+pad(now.getUTCDate())+' '+
      pad(now.getUTCHours())+':'+pad(now.getUTCMinutes())+':'+pad(now.getUTCSeconds())+' UTC';
  }
  tickLive();
  setInterval(tickLive, 1000);
  document.getElementById('btn-copy-live').addEventListener('click', function(){
    copyText(document.getElementById('live-seconds').textContent);
  });

  function relativeTime(date){
    var diffMs = date.getTime() - Date.now();
    var diffSec = Math.round(diffMs/1000);
    var abs = Math.abs(diffSec);
    var units = [['year',31536000],['month',2592000],['day',86400],['hour',3600],['minute',60],['second',1]];
    for (var i=0;i<units.length;i++){
      var name = units[i][0], secs = units[i][1];
      if (abs >= secs || name === 'second'){
        var val = Math.round(abs/secs);
        var label = val + ' ' + name + (val !== 1 ? 's' : '');
        return diffSec >= 0 ? 'in ' + label : label + ' ago';
      }
    }
  }

  function setResult(id, value){
    var el = document.getElementById(id);
    el.textContent = value;
    el.classList.toggle('empty', !value);
  }

  // Epoch -> Date
  document.getElementById('btn-to-date').addEventListener('click', function(){
    var raw = document.getElementById('epoch-in').value.trim();
    if (!raw || isNaN(Number(raw))) { showToast('Enter a valid numeric timestamp', 'error'); return; }
    var unit = document.getElementById('epoch-unit').value;
    var ms = unit === 's' ? Number(raw) * 1000 : Number(raw);
    var d = new Date(ms);
    if (isNaN(d.getTime())) { showToast('Could not parse timestamp', 'error'); return; }
    var tz = document.getElementById('epoch-tz').value;
    var iso = d.toISOString();
    var readable = tz === 'utc'
      ? d.getUTCFullYear()+'-'+pad(d.getUTCMonth()+1)+'-'+pad(d.getUTCDate())+' '+pad(d.getUTCHours())+':'+pad(d.getUTCMinutes())+':'+pad(d.getUTCSeconds())+' UTC'
      : d.toLocaleString();
    setResult('out-iso', iso);
    setResult('out-readable', readable);
    setResult('out-relative', relativeTime(d));
  });

  // Date -> Epoch
  document.getElementById('btn-to-epoch').addEventListener('click', function(){
    var raw = document.getElementById('date-in').value;
    if (!raw) { showToast('Pick a date and time', 'error'); return; }
    var tz = document.getElementById('date-tz').value;
    var d = tz === 'utc' ? new Date(raw + 'Z') : new Date(raw);
    if (isNaN(d.getTime())) { showToast('Invalid date', 'error'); return; }
    setResult('out-seconds', Math.floor(d.getTime()/1000));
    setResult('out-millis', d.getTime());
  });

  // copy buttons for result lines
  document.querySelectorAll('.mini-copy').forEach(function(btn){
    btn.addEventListener('click', function(){
      copyText(document.getElementById(btn.dataset.copy).textContent);
    });
  });

  // Batch conversion
  function parseLine(line){
    line = line.trim();
    if (!line) return null;
    if (/^-?\d+$/.test(line)){
      var num = Number(line);
      var ms = line.length > 10 ? num : num * 1000; // heuristic: 10 digits = seconds
      var d = new Date(ms);
      if (isNaN(d.getTime())) return { input: line, error: true };
      return { input: line, type: 'epoch', output: d.toISOString() };
    }
    var d2 = new Date(line);
    if (isNaN(d2.getTime())) return { input: line, error: true };
    return { input: line, type: 'date', output: Math.floor(d2.getTime()/1000) + ' (s) / ' + d2.getTime() + ' (ms)' };
  }

  document.getElementById('btn-batch-run').addEventListener('click', function(){
    var lines = document.getElementById('batch-in').value.split('\n');
    var rows = lines.map(parseLine).filter(Boolean);
    var out = document.getElementById('batch-output');
    if (!rows.length){ out.innerHTML = '<div class="batch-empty">Results will appear here as a table</div>'; return; }
    var html = '<table class="batch-table"><thead><tr><th>Input</th><th>Type</th><th>Result</th></tr></thead><tbody>';
    rows.forEach(function(r){
      if (r.error){
        html += '<tr><td>'+r.input+'</td><td class="err">error</td><td class="err">could not parse</td></tr>';
      } else {
        html += '<tr><td>'+r.input+'</td><td>'+r.type+'</td><td>'+r.output+'</td></tr>';
      }
    });
    html += '</tbody></table>';
    out.innerHTML = html;
  });
  document.getElementById('btn-batch-clear').addEventListener('click', function(){
    document.getElementById('batch-in').value = '';
    document.getElementById('batch-output').innerHTML = '<div class="batch-empty">Results will appear here as a table</div>';
  });
})();
</script>

</div>
<div style="width: 16%;"></div>
</section>

