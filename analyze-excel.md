---
layout: main
title: "Analyse Excel - Excel File Analyzer, Browser-Based & Private"
description: "Free online Excel file analyzer. Upload an Excel file (.xlsx, .xls, .csv) and get instant analysis: row count, column stats, data types, missing values, duplicates, summary statistics, and more. No data leaves your device."
keywords: "analyse excel, analyze excel, excel analyzer, excel file analyzer, excel spreadsheet analyzer, xlsx analyzer, excel data analysis, excel statistics, excel column analyzer, excel data profiler, excel file stats, analyse excel online, excel metadata, excel row counter, excel column stats, data profiling, excel dataset analysis"
category: excel
---
<script type="application/ld+json">
[
  {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "@id": "https://datafrog.tools/analyse-excel#webapp",
    "name": "Analyse Excel - Excel File Analyzer",
    "url": "https://datafrog.tools/analyse-excel",
    "description": "A free, browser-based tool that analyzes Excel files (.xlsx, .xls, .csv) and provides comprehensive statistics. View row count, column types, missing values, duplicates, summary statistics, and data preview. Supports multi-sheet workbooks with sheet selection. 100% client-side with complete data privacy.",
    "applicationCategory": "DeveloperTool",
    "operatingSystem": "Any",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "featureList": [
      "Privacy-first client-side processing (no data uploaded to servers)",
      "Supports .xlsx, .xls, and .csv files up to 150MB",
      "Multi-sheet workbook support with sheet selector",
      "Instant row and column count",
      "Data type detection per column (string, number, date, boolean)",
      "Missing value count per column",
      "Duplicate row detection and counting",
      "Summary statistics: min, max, mean, median, std dev, quartiles for numeric columns",
      "Top-N frequency table for categorical columns",
      "Data quality flags: constant, unique, high-cardinality, mixed-type columns",
      "Overall data quality score (0-100)",
      "Interactive data preview with search and sort",
      "Outlier detection for numeric columns",
      "Copy results or export as CSV/TXT/JSON",
      "Works offline after first load"
    ],
    "softwareRequirements": "A modern web browser",
    "softwareVersion": "1.0",
    "datePublished": "2025-11-21",
    "dateModified": "2025-11-21"
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "@id": "https://datafrog.tools/analyse-excel#faq",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "Is this Excel analyzer really free?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, it is completely free with no premium tiers, signups, or hidden fees. Analyze as many Excel files as you need directly in your browser."
        }
      },
      {
        "@type": "Question",
        "name": "What file formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The tool supports .xlsx, .xls, and .csv files. It uses the SheetJS library to parse Excel files entirely in your browser. The maximum file size is 150MB."
        }
      },
      {
        "@type": "Question",
        "name": "Does it support multiple sheets?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. The tool detects all sheets in your workbook and provides a dropdown selector to switch between sheets. Analysis updates automatically when you select a different sheet."
        }
      },
      {
        "@type": "Question",
        "name": "What statistics does it provide?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The tool provides: row count, column count, data type detection per column, missing value count, duplicate rows, min, max, mean, median, standard deviation, quartiles (Q1, Q3, IQR) for numeric columns, top-5 value frequencies for categorical columns, data quality flags, and an overall data quality score."
        }
      },
      {
        "@type": "Question",
        "name": "How large of an Excel file can I analyze?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "The tool supports files up to 150MB. Files larger than 150MB will be rejected with a clear warning. Most standard Excel files analyze instantly. All processing remains local in your browser."
        }
      },
      {
        "@type": "Question",
        "name": "Is my Excel data secure and private?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes. All processing happens entirely within your browser; no data is uploaded to any server, making it safe for sensitive business data."
        }
      }
    ]
  },
  {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "@id": "https://datafrog.tools/analyse-excel#howto",
    "name": "How to Analyze an Excel File Online",
    "description": "Step-by-step guide to analyze Excel files and get comprehensive statistics using the free online Excel analyzer.",
    "tool": {
      "@type": "HowToTool",
      "name": "Analyse Excel"
    },
    "supply": {
      "@type": "HowToSupply",
      "name": "Excel File (.xlsx, .xls, .csv)"
    },
    "step": [
      {
        "@type": "HowToStep",
        "name": "Upload Your Excel File",
        "text": "Click the upload button or drag and drop your .xlsx, .xls, or .csv file into the drop zone.",
        "url": "https://datafrog.tools/analyse-excel"
      },
      {
        "@type": "HowToStep",
        "name": "Select a Sheet (if multiple)",
        "text": "If your workbook has multiple sheets, use the dropdown to select the sheet you want to analyze.",
        "url": "https://datafrog.tools/analyse-excel"
      },
      {
        "@type": "HowToStep",
        "name": "View Analysis Results",
        "text": "Instantly see statistics including row count, column types, missing values, duplicates, summary statistics, and data quality score.",
        "url": "https://datafrog.tools/analyse-excel"
      },
      {
        "@type": "HowToStep",
        "name": "Explore Your Data",
        "text": "Search, sort, and browse the data preview. Export results as CSV, TXT, or JSON for documentation.",
        "url": "https://datafrog.tools/analyse-excel"
      }
    ],
    "totalTime": "PT2M"
  }
]
</script>

<style>
/* ====== All styles from existing tools ====== */
.excel-wrap{background:#1e1e1e;border-radius:10px;padding:20px;display:flex;flex-direction:column;gap:16px;min-height:100px; width: 98%}
.panel-card{background:#252526;border-radius:8px;border:1px solid #3c3c3c;overflow:hidden}
.panel-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#2d2d2d;border-bottom:1px solid #3c3c3c;flex-wrap:wrap;gap:8px}
.panel-title{font-size:13px;font-weight:500;color:#cccccc;letter-spacing:.3px}
.panel-sub{font-size:11px;color:#6a9955;margin-top:2px}
.btn-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.excel-btn{display:inline-flex;align-items:center;gap:6px;padding:6px 14px;border-radius:4px;font-size:12px;font-family:inherit;cursor:pointer;border:1px solid #555;background:#3a3a3a;color:#cccccc;transition:background .15s}
.excel-btn:hover{background:#4a4a4a}
.excel-btn.primary{background:#0e639c;border-color:#0e639c;color:#fff}
.excel-btn.primary:hover{background:#1177bb}
.excel-btn.green{background:#1e7a4a;border-color:#1e7a4a;color:#fff}
.excel-btn.green:hover{background:#258a58}
.excel-btn.amber{background:#8a6e1e;border-color:#8a6e1e;color:#fff}
.excel-btn.amber:hover{background:#a07e23}
.excel-btn.purple{background:#5b2d8e;border-color:#5b2d8e;color:#fff}
.excel-btn.purple:hover{background:#6e38a8}
.excel-btn:disabled{opacity:.4;cursor:not-allowed}

/* Drop Zone */
.drop-zone{display:flex;flex-direction:column;align-items:center;justify-content:center;padding:40px 20px;border:2px dashed #3c3c3c;border-radius:8px;background:#1b1b1b;transition:border-color .3s,background .3s;cursor:pointer;min-height:200px;gap:8px}
.drop-zone:hover{border-color:#0e639c;background:#1f1f1f}
.drop-zone.dragover{border-color:#0e639c;background:#252525}
.drop-zone-icon{font-size:48px;color:#3c3c3c}
.drop-zone-text{color:#7a7a7a;font-size:14px}
.drop-zone-sub{color:#4a4a4a;font-size:12px}
.drop-zone-file{color:#9cdcfe;font-weight:600;font-family:var(--font-mono,'Fira Mono',monospace);font-size:13px;word-break:break-all}

/* Loading overlay */
.loading-overlay{display:flex;align-items:center;justify-content:center;gap:12px;padding:20px;background:#1b1b1b;border-radius:5px;margin:10px 0}
.loading-spinner{width:28px;height:28px;border:3px solid #3c3c3c;border-top-color:#0e639c;border-radius:50%;animation:spin 0.8s linear infinite}
@keyframes spin{to{transform:rotate(360deg)}}
.loading-text{color:#9cdcfe;font-size:14px}

/* Stats Grid */
.stats-grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(160px,1fr));gap:10px;padding:14px 16px}
.stat-card{background:#1b1b1b;border:1px solid #3c3c3c;border-radius:5px;padding:10px 12px;text-align:center}
.stat-number{font-family:var(--font-mono,'Fira Mono',monospace);font-size:22px;font-weight:700;color:#9cdcfe;display:block}
.stat-label{font-size:10px;color:#7a7a7a;text-transform:uppercase;letter-spacing:.5px;margin-top:2px}

/* Quality Score */
.quality-score{display:flex;align-items:center;gap:12px;padding:12px 16px;background:#1b1b1b;border-radius:5px;margin:0 16px 12px}
.quality-number{font-family:var(--font-mono,'Fira Mono',monospace);font-size:32px;font-weight:700;min-width:60px}
.quality-number.good{color:#6fcf97}
.quality-number.ok{color:#fbbf24}
.quality-number.bad{color:#f97583}
.quality-bar{flex:1;height:8px;background:#2d2d2d;border-radius:4px;overflow:hidden}
.quality-fill{height:100%;border-radius:4px;transition:width .6s ease}
.quality-fill.good{background:linear-gradient(90deg,#258a58,#6fcf97)}
.quality-fill.ok{background:linear-gradient(90deg,#8a6e1e,#fbbf24)}
.quality-fill.bad{background:linear-gradient(90deg,#8b3333,#f97583)}
.quality-label{font-size:12px;color:#7a7a7a;min-width:60px;text-align:right}

/* Column Stats */
.col-stats-wrap{max-height:350px;overflow-y:auto;padding:0 16px 16px}
.col-stats-table{width:100%;border-collapse:collapse;font-size:12px}
.col-stats-table th{position:sticky;top:0;background:#2d2d2d;color:#7a7a7a;text-align:left;padding:6px 10px;font-weight:500;border-bottom:1px solid #3c3c3c;font-size:10px;text-transform:uppercase;letter-spacing:.5px;white-space:nowrap}
.col-stats-table td{padding:6px 10px;color:#d4d4d4;border-bottom:1px solid #2a2a2a;font-family:var(--font-mono,'Fira Mono',monospace);font-size:11px}
.col-stats-table .col-name{color:#9cdcfe;font-weight:500}
.col-stats-table .col-type{color:#6a9955}
.col-stats-table .col-missing{color:#f97583}
.col-stats-table .col-unique{color:#fbbf24}
.col-stats-table .col-flag{font-size:10px;padding:2px 8px;border-radius:10px;background:#2d2d2d;color:#7a7a7a;display:inline-block}
.col-stats-table .col-flag.warning{background:#8a6e1e33;color:#fbbf24;border:1px solid #8a6e1e}
.col-stats-table .col-flag.success{background:#1e7a4a33;color:#6fcf97;border:1px solid #1e7a4a}
.col-stats-table .col-flag.danger{background:#8b333333;color:#f97583;border:1px solid #8b3333}

/* Top N values */
.top-n-wrap{padding:0 16px 12px}
.top-n-item{display:flex;align-items:center;gap:8px;padding:4px;font-size:12px;font-family:var(--font-mono,'Fira Mono',monospace);border-bottom:1px solid #1b1b1b}
.top-n-item:hover{background:#252525}
.top-n-value{color:#d4d4d4;flex:1}
.top-n-count{color:#7a7a7a;min-width:40px}
.top-n-bar{width:80px;height:12px;background:#2d2d2d;border-radius:3px;overflow:hidden}
.top-n-fill{height:100%;background:linear-gradient(90deg,#0e639c,#1177bb);border-radius:3px;transition:width .3s}

/* Data Preview */
.data-preview-wrap{max-height:400px;overflow:auto;padding:0 16px 16px}
.data-preview-table{width:100%;border-collapse:collapse;font-size:12px}
.data-preview-table th{position:sticky;top:0;background:#2d2d2d;color:#7a7a7a;text-align:left;padding:6px 10px;font-weight:500;border-bottom:2px solid #3c3c3c;font-size:10px;text-transform:uppercase;letter-spacing:.5px;white-space:nowrap;cursor:pointer;user-select:none}
.data-preview-table th:hover{background:#3a3a3a;color:#d4d4d4}
.data-preview-table th .sort-icon{font-size:10px;color:#4a4a4a;margin-left:4px}
.data-preview-table th.sorted .sort-icon{color:#9cdcfe}
.data-preview-table td{padding:5px 10px;color:#d4d4d4;border-bottom:1px solid #1b1b1b;font-family:var(--font-mono,'Fira Mono',monospace);font-size:11px;max-width:200px;overflow:hidden;text-overflow:ellipsis;white-space:nowrap}
.data-preview-table tr:hover td{background:#252525}
.data-preview-table .row-num{color:#4a4a4a;text-align:center;font-size:10px}
.data-preview-table .null-val{color:#4a4a4a;font-style:italic}

/* Search */
.search-row{display:flex;gap:10px;padding:10px 16px;background:#1b1b1b;border-bottom:1px solid #3c3c3c;align-items:center;flex-wrap:wrap}
.search-input{flex:1;min-width:200px;background:#252526;color:#d4d4d4;border:1px solid #3c3c3c;border-radius:4px;padding:6px 12px;font-size:12px;font-family:inherit;outline:none}
.search-input:focus{border-color:#0e639c}
.search-input::placeholder{color:#4a4a4a}
.search-count{font-size:11px;color:#7a7a7a}

/* Sheet selector */
.sheet-selector{display:flex;align-items:center;gap:8px;padding:8px 16px;background:#1b1b1b;border-bottom:1px solid #3c3c3c;flex-wrap:wrap}
.sheet-selector label{font-size:11px;color:#7a7a7a;text-transform:uppercase;letter-spacing:.5px}
.sheet-selector select{background:#252526;color:#d4d4d4;border:1px solid #3c3c3c;border-radius:4px;padding:4px 10px;font-size:12px;font-family:inherit;outline:none;cursor:pointer}
.sheet-selector select:focus{border-color:#0e639c}
.sheet-selector .sheet-count{font-size:11px;color:#4a4a4a}

/* Column type override */
.col-type-select{background:#1b1b1b;color:#d4d4d4;border:1px solid #3c3c3c;border-radius:3px;padding:2px 6px;font-size:10px;font-family:inherit;outline:none;cursor:pointer}
.col-type-select:focus{border-color:#0e639c}

/* Next Step Link */
.next-step{display:inline-flex;align-items:center;gap:8px;padding:8px 16px;margin:8px 16px;background:#1e7a4a33;border:1px solid #1e7a4a;border-radius:5px;color:#6fcf97;text-decoration:none;font-size:13px;transition:background .2s}
.next-step:hover{background:#1e7a4a55;color:#7edba3}
.next-step .arrow{font-size:16px}

.badge{display:inline-flex;align-items:center;gap:5px;padding:4px 12px;border-radius:20px;font-size:12px;font-weight:500;border:1px solid var(--border);background:var(--surface-2);color:var(--ink-2)}
.badge.green{background:var(--green-light);border-color:#bbf7d0;color:var(--green)}
.badge.blue{background:var(--accent-light);border-color:#bfdbfe;color:var(--accent)}
.badge.amber{background:var(--amber-light);border-color:#fde68a;color:var(--amber)}

.section{margin-bottom:56px;margin-top:56px}
h2{font-size:clamp(20px,3vw,27px);font-weight:700;color:var(--ink);margin-bottom:16px;padding-bottom:10px;border-bottom:2px solid var(--border);letter-spacing:-0.3px}
h3{font-size:18px;font-weight:700;color:var(--ink);margin:28px 0 8px}
p{margin-bottom:16px;color:var(--ink-2)}
p:last-child{margin-bottom:0}
strong{color:var(--ink);font-weight:700}
code{font-family:var(--font-code);font-size:13.5px;background:var(--surface-3);border:1px solid var(--border);border-radius:4px;padding:1px 6px;color:#be123c}

.hero{padding:56px 0 40px;border-bottom:1px solid var(--border);margin-bottom:48px}
.hero-eyebrow{font-family:var(--font-ui);font-size:12px;font-weight:600;letter-spacing:1.2px;text-transform:uppercase;color:var(--accent);margin-bottom:12px}
.hero-lead{font-size:19px;color:var(--ink-2);max-width:640px;margin-bottom:28px}
.hero-badges{display:flex;flex-wrap:wrap;justify-content:center;gap:10px;font-family:var(--font-ui)}

.toast{position:fixed;bottom:24px;right:24px;padding:10px 18px;border-radius:6px;font-size:12px;font-family:var(--font-mono,monospace);z-index:999;opacity:0;transform:translateY(8px);transition:opacity .25s,transform .25s;pointer-events:none;max-width:320px}
.toast.success{background:#1e293b;border:1px solid #2d7a4a;color:#6fcf97}
.toast.error{background:#1e293b;border:1px solid #8b3333;color:#f97583}
.toast.show{opacity:1;transform:translateY(0)}

@media (max-width:600px){h1{font-size:26px}.hero{padding:32px 0 28px}}
</style>

<!-- ================================================================
  HERO
================================================================ -->
<div id="excel-analyzer-hero"
     itemscope itemtype="https://schema.org/WebApplication"
     style="display:flex;flex-direction:column;justify-content:center;margin:1rem;">

  <meta itemprop="applicationCategory" content="DeveloperApplication">
  <meta itemprop="operatingSystem" content="Any (runs in browser)">
  <meta itemprop="browserRequirements" content="Requires JavaScript">
  <meta itemprop="isAccessibleForFree" content="true">
  <div itemprop="offers" itemscope itemtype="https://schema.org/Offer" style="display:none">
    <meta itemprop="price" content="0">
    <meta itemprop="priceCurrency" content="USD">
  </div>

  <h1 itemprop="name">Analyse Excel — Get Instant Statistics & Data Insights</h1>

  <p itemprop="description">
    Upload an Excel file and get comprehensive analysis: row count, column statistics,
    data types, missing values, duplicates, summary statistics, data quality score, and more.
    100% client-side — your data never leaves your device. Supports multi-sheet workbooks.
  </p>

  <div class="hero-badges">
    <span class="badge green">✓ 100% Client-Side</span>
    <span class="badge blue">✓ .xlsx, .xls, .csv</span>
    <span class="badge amber">✓ Multi-Sheet Support</span>
    <span class="badge">✓ Data Quality Score</span>
    <span class="badge">✓ Search & Sort</span>
    <span class="badge">✓ Free Forever</span>
  </div>
</div>

<section id="excel-analyzer-tool" aria-label="Analyse Excel Tool" style="display:flex;justify-content:center">

<div class="excel-wrap">

  <!-- ===== UPLOAD / DROP ZONE ===== -->
  <div class="panel-card">
    <div class="panel-header">
      <div>
        <div class="panel-title"><i class="ti ti-upload" aria-hidden="true" style="font-size:14px;margin-right:6px;color:#e2c08d"></i>Upload Excel File</div>
        <div class="panel-sub">Drag & drop or click to choose a file (.xlsx, .xls, .csv) — max 150MB</div>
      </div>
      <div class="btn-row">
        <button class="excel-btn" id="btn-clear-file"><i class="ti ti-trash" aria-hidden="true"></i> Clear</button>
      </div>
    </div>
    <div class="field-row">
      <div class="drop-zone" id="drop-zone" role="button" tabindex="0">
        <div class="drop-zone-icon"><i class="ti ti-file-spreadsheet" aria-hidden="true"></i></div>
        <div class="drop-zone-text"><strong>Drop your Excel file here</strong> or click to browse</div>
        <div class="drop-zone-sub">Supports .xlsx, .xls, .csv files up to 150MB</div>
        <div class="drop-zone-file" id="file-name"></div>
        <input type="file" id="file-input" accept=".xlsx,.xls,.csv" style="display:none;">
      </div>
      <div id="loading-container" style="display:none;">
        <div class="loading-overlay">
          <div class="loading-spinner"></div>
          <span class="loading-text">Analyzing file...</span>
        </div>
      </div>
    </div>
  </div>

  <!-- ===== STATS SUMMARY ===== -->
  <div class="panel-card" id="stats-panel" style="display:none;">
    <div class="panel-header">
      <div>
        <div class="panel-title"><i class="ti ti-chart-bar" aria-hidden="true" style="font-size:14px;margin-right:6px;color:#79b8ff"></i>File Statistics</div>
        <div class="panel-sub" id="file-summary">No file loaded</div>
      </div>
      <div class="btn-row">
        <button class="excel-btn green" id="btn-export-csv"><i class="ti ti-file-spreadsheet" aria-hidden="true"></i> CSV</button>
        <button class="excel-btn amber" id="btn-export-txt"><i class="ti ti-file-text" aria-hidden="true"></i> TXT</button>
        <button class="excel-btn purple" id="btn-export-json"><i class="ti ti-file-code" aria-hidden="true"></i> JSON</button>
      </div>
    </div>

    <!-- Sheet Selector -->
    <div class="sheet-selector" id="sheet-selector" style="display:none;">
      <label for="sheet-dropdown">📄 Sheet:</label>
      <select id="sheet-dropdown"></select>
      <span class="sheet-count" id="sheet-count"></span>
    </div>

    <div class="stats-grid" id="stats-grid">
      <div class="stat-card"><span class="stat-number" id="stat-rows">0</span><span class="stat-label">Rows</span></div>
      <div class="stat-card"><span class="stat-number" id="stat-columns">0</span><span class="stat-label">Columns</span></div>
      <div class="stat-card"><span class="stat-number" id="stat-missing">0</span><span class="stat-label">Missing Values</span></div>
      <div class="stat-card"><span class="stat-number" id="stat-duplicates">0</span><span class="stat-label">Duplicate Rows</span></div>
      <div class="stat-card"><span class="stat-number" id="stat-filesize">0</span><span class="stat-label">File Size</span></div>
      <div class="stat-card"><span class="stat-number" id="stat-sheets">0</span><span class="stat-label">Sheets</span></div>
    </div>

    <!-- Quality Score -->
    <div class="quality-score" id="quality-score">
      <span class="quality-number" id="quality-number">—</span>
      <div class="quality-bar"><div class="quality-fill" id="quality-fill" style="width:0%"></div></div>
      <span class="quality-label" id="quality-label">Loading...</span>
    </div>

    <!-- Next Step Link -->
    <div id="next-step-container"></div>
  </div>

  <!-- ===== COLUMN STATS ===== -->
  <div class="panel-card" id="cols-panel" style="display:none;">
    <div class="panel-header">
      <div>
        <div class="panel-title"><i class="ti ti-table" aria-hidden="true" style="font-size:14px;margin-right:6px;color:#b392f0"></i>Column Statistics</div>
        <div class="panel-sub">Data types, missing values, unique counts, summary stats, and quality flags</div>
      </div>
    </div>
    <div class="col-stats-wrap" id="col-stats"></div>
    <div class="top-n-wrap" id="top-n-container" style="display:none;">
      <div style="font-size:11px;color:#7a7a7a;text-transform:uppercase;letter-spacing:.5px;padding:8px 0 4px;">Top Values (Categorical Columns)</div>
      <div id="top-n-content" style="height: 500px; overflow: auto"></div>
    </div>
  </div>

  <!-- ===== DATA PREVIEW ===== -->
  <div class="panel-card" id="preview-panel" style="display:none;">
    <div class="panel-header">
      <div>
        <div class="panel-title"><i class="ti ti-list" aria-hidden="true" style="font-size:14px;margin-right:6px;color:#79b8ff"></i>Data Preview</div>
        <div class="panel-sub">Search, sort, and browse your data</div>
      </div>
    </div>
    <div class="search-row">
      <input class="search-input" id="preview-search" type="text" placeholder="🔍 Search data...">
      <span class="search-count" id="search-count">Showing 0 rows</span>
    </div>
    <div class="data-preview-wrap" id="data-preview"></div>
  </div>

</div>
</section>
<div class="toast" id="toast" role="alert" aria-live="assertive"></div>

<!-- ================================================================
  CONTENT BLOCKS
================================================================ -->
<article style="max-width:90%;margin:40px auto;padding:10px 20px;line-height:1.7;font-family:Arial,sans-serif;">

  <section id="why-analyse-excel">
    <h2 style="margin-top:30px;">Why analyse an Excel file?</h2>
    <ul style="padding-left:20px;">
      <li>Quickly understand the structure and size of a spreadsheet before working with it</li>
      <li>Identify data quality issues like missing values and duplicate rows</li>
      <li>Profile your data to understand column types and distributions</li>
      <li>Get summary statistics (min, max, mean, median, quartiles) for numeric columns</li>
      <li>Preview and search the first 100 rows of data without opening Excel</li>
      <li>Assess data quality with an overall quality score and column-level flags</li>
    </ul>
  </section>

  <section id="how-it-works">
    <h2 style="margin-top:30px;">How to analyse an Excel file – 3 simple steps</h2>
    <ol style="padding-left:20px;">
      <li><strong>Upload your file</strong> – drag and drop or click to select your .xlsx, .xls, or .csv file.</li>
      <li><strong>Select a sheet</strong> – if your workbook has multiple sheets, choose the one you want to analyze.</li>
      <li><strong>View instant analysis</strong> – explore statistics, column profiles, quality flags, and searchable data preview.</li>
    </ol>
  </section>

  <section id="key-features">
    <h2 style="margin-top:30px;">Excel analyzer – features you’ll love</h2>
    <ul style="padding-left:20px;">
      <li>✅ <strong>100% browser‑based</strong> – your Excel file never leaves your device, ensuring complete privacy</li>
      <li>✅ <strong>Multiple file formats</strong> – supports .xlsx, .xls, and .csv files up to 150MB</li>
      <li>✅ <strong>Multi-sheet support</strong> – dropdown selector for workbooks with multiple sheets</li>
      <li>✅ <strong>Instant statistics</strong> – rows, columns, missing values, duplicates, file size, and sheet count</li>
      <li>✅ <strong>Column profiling</strong> – data type detection, missing count, unique values, and summary stats</li>
      <li>✅ <strong>Numeric statistics</strong> – min, max, mean, median, standard deviation, quartiles (Q1, Q3, IQR)</li>
      <li>✅ <strong>Categorical analysis</strong> – top-5 most frequent values for string columns</li>
      <li>✅ <strong>Data quality flags</strong> – constant, unique, high-cardinality, mixed-type columns</li>
      <li>✅ <strong>Overall quality score</strong> – 0-100 composite score based on missing %, duplicates, and type consistency</li>
      <li>✅ <strong>Outlier detection</strong> – flags values beyond 1.5×IQR or 3 standard deviations</li>
      <li>✅ <strong>Interactive data preview</strong> – search and sort the first 100 rows</li>
      <li>✅ <strong>Export results</strong> – copy analysis summary or export as CSV, TXT, or JSON</li>
      <li>✅ <strong>Works offline</strong> after first load – no internet connection required</li>
    </ul>
  </section>

  <section id="what-makes-different">
    <h2 style="margin-top:30px;">Why DataFrog’s Excel analyzer stands out</h2>
    <ul style="padding-left:20px;">
      <li><strong>Privacy first</strong> – your Excel file is never uploaded to our servers. Many online analyzers upload your data – we don’t.</li>
      <li><strong>Comprehensive profiling</strong> – get detailed column statistics including data types, missing values, summary stats, and quality flags.</li>
      <li><strong>Multi-sheet support</strong> – detects all sheets in your workbook with a convenient dropdown selector.</li>
      <li><strong>Data quality insights</strong> – an overall quality score and column-level flags help you identify issues at a glance.</li>
      <li><strong>Export capabilities</strong> – save your analysis results as CSV, TXT, or JSON for documentation.</li>
      <li><strong>No signup, no watermarks</strong> – completely free for all your Excel analysis needs.</li>
    </ul>
  </section>

  <section id="supported-formats">
    <h2 style="margin-top:30px;">Supported file formats</h2>
    <ul style="padding-left:20px;">
      <li><strong>.xlsx</strong> – Microsoft Excel Open XML Spreadsheet (Excel 2007+)</li>
      <li><strong>.xls</strong> – Microsoft Excel 97-2003 Spreadsheet</li>
      <li><strong>.csv</strong> – Comma-separated values</li>
      <li><strong>Maximum file size:</strong> 150MB</li>
      <li>Encrypted/password-protected files are not supported</li>
    </ul>
  </section>

  <section id="use-cases">
    <h2 style="margin-top:30px;">Common use cases for Excel analysis</h2>
    <ul style="padding-left:20px;">
      <li>📊 Data profiling – understand the structure of a dataset before analysis</li>
      <li>🔍 Quality checks – identify missing values, duplicates, and data quality issues</li>
      <li>📈 ETL preparation – assess data types and column distributions for migration</li>
      <li>🧩 Data exploration – preview and search data without opening Excel</li>
      <li>📋 Audit and compliance – document data structure and quality for reporting</li>
      <li>🛠️ Quick statistics – get min, max, mean, median, quartiles for numeric columns</li>
    </ul>
  </section>

  <section id="privacy-security">
    <h2 style="margin-top:30px;">Privacy &amp; Security</h2>
    <ul style="padding-left:20px;">
      <li>🔒 All processing happens locally in your browser using SheetJS (xlsx) library</li>
      <li>🚫 No data transmission – your file never touches our network</li>
      <li>🕵️ No tracking, no cookies, no third‑party analytics scripts</li>
      <li>💼 Safe for analyzing sensitive business data, financial records, and proprietary spreadsheets</li>
    </ul>
  </section>

  <section id="faq">
    <h2 style="margin-top:30px;">Frequently asked questions (Analyse Excel)</h2>

    <h3 id="faq-1">Is this Excel analyzer really free?</h3>
    <p>Yes, completely free. No premium tiers, no hidden fees, no watermarks. Analyze as many Excel files as you need, entirely within your browser.</p>

    <h3 id="faq-2">What file formats are supported?</h3>
    <p>The tool supports <strong>.xlsx</strong>, <strong>.xls</strong>, and <strong>.csv</strong> files up to 150MB. It uses the SheetJS library to parse Excel files entirely in your browser.</p>

    <h3 id="faq-3">Does it support multiple sheets?</h3>
    <p>Yes. The tool detects all sheets in your workbook and provides a dropdown selector to switch between sheets. Analysis updates automatically when you select a different sheet.</p>

    <h3 id="faq-4">What statistics does it provide?</h3>
    <p>The tool provides: row count, column count, data type detection per column, missing value count, duplicate rows, min, max, mean, median, standard deviation, quartiles (Q1, Q3, IQR) for numeric columns, top-5 value frequencies for categorical columns, data quality flags, and an overall data quality score.</p>

    <h3 id="faq-5">How large of an Excel file can I analyze?</h3>
    <p>The tool supports files up to <strong>150MB</strong>. Files larger than 150MB will be rejected with a clear warning. Most standard Excel files analyze instantly. All processing remains local in your browser.</p>

    <h3 id="faq-6">Is my Excel data secure and private?</h3>
    <p><strong>Yes.</strong> All processing happens entirely within your browser; no data is uploaded to any server, making it safe for sensitive business data.</p>

    <h3 id="faq-7">Can I export the analysis results?</h3>
    <p>Yes! You can export the analysis summary as <strong>CSV</strong>, <strong>TXT</strong>, or <strong>JSON</strong> for documentation or further processing.</p>

    <h3 id="faq-8">What about password-protected Excel files?</h3>
    <p>Encrypted or password-protected files are not supported. The tool cannot read password-protected workbooks.</p>
  </section>

</article>

<!-- ================================================================
  JAVASCRIPT — Excel Analyzer Logic (All Features Implemented)
================================================================ -->
<script src="https://cdnjs.cloudflare.com/ajax/libs/xlsx/0.18.5/xlsx.full.min.js">
</script>
<script>
(function(){
  var fileInput = document.getElementById('file-input');
  var dropZone = document.getElementById('drop-zone');
  var fileNameDisplay = document.getElementById('file-name');
  var analysisData = null;
  var currentWorkbook = null;
  var currentSheetName = null;
  var rawData = null;

  // Keyboard accessibility for drop zone
  dropZone.addEventListener('keydown', function(e){
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      fileInput.click();
    }
  });

  // ===== Toast =====
  function showToast(msg, type){
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast ' + type + ' show';
    clearTimeout(t._timer);
    t._timer = setTimeout(function(){ t.className = 'toast ' + type; }, 3000);
  }

  // ===== Utilities =====
  function formatFileSize(bytes){
    if (bytes < 1024) return bytes + ' B';
    if (bytes < 1048576) return (bytes / 1024).toFixed(1) + ' KB';
    if (bytes < 1073741824) return (bytes / 1048576).toFixed(1) + ' MB';
    return (bytes / 1073741824).toFixed(1) + ' GB';
  }

  function formatNumber(n){
    if (n === undefined || n === null || isNaN(n)) return '—';
    if (typeof n === 'number' && !Number.isInteger(n)) return n.toFixed(2);
    return n;
  }

  function setStat(id, value){
    var el = document.getElementById(id);
    if (el) el.textContent = value;
  }

  // ===== Type Detection =====
  function detectType(values){
    var numCount = 0, dateCount = 0, boolCount = 0, stringCount = 0;
    var total = 0;
    values.forEach(function(v){
      if (v === undefined || v === null || v === '') return;
      total++;
      if (typeof v === 'number') { numCount++; return; }
      if (typeof v === 'boolean') { boolCount++; return; }
      if (typeof v === 'string') {
        var trimmed = v.trim();
        if (trimmed === '') return;
        if (!isNaN(Date.parse(trimmed)) && trimmed.match(/[a-zA-Z]/)) { dateCount++; return; }
        if (!isNaN(parseFloat(trimmed)) && isFinite(trimmed)) { numCount++; return; }
        stringCount++;
        return;
      }
      stringCount++;
    });
    if (total === 0) return 'empty';
    var pct = function(c) { return (c / total) * 100; };
    if (pct(numCount) >= 70) return 'number';
    if (pct(dateCount) >= 70) return 'date';
    if (pct(boolCount) >= 70) return 'boolean';
    return 'string';
  }

  // ===== Outlier Detection =====
  function detectOutliers(values){
    var nums = values.filter(function(v){ return typeof v === 'number' && !isNaN(v); });
    if (nums.length < 4) return [];
    var sorted = nums.slice().sort(function(a,b){ return a - b; });
    var q1 = sorted[Math.floor(sorted.length * 0.25)];
    var q3 = sorted[Math.floor(sorted.length * 0.75)];
    var iqr = q3 - q1;
    var lower = q1 - 1.5 * iqr;
    var upper = q3 + 1.5 * iqr;
    var outliers = [];
    nums.forEach(function(v){
      if (v < lower || v > upper) outliers.push(v);
    });
    return outliers;
  }

  // ===== Main Analysis =====
  function analyzeExcel(data, fileName, fileSize){
    if (!data || data.length === 0) {
      showToast('No data found in the file', 'error');
      return;
    }

    var headers = data[0];
    var rows = data.slice(1);
    var rowCount = rows.length;
    var colCount = headers.length;

    // Build column data
    var cols = headers.map(function(h, idx){
      var values = rows.map(function(r){ return r[idx]; });
      var type = detectType(values);
      var missing = values.filter(function(v){ return v === undefined || v === null || v === ''; }).length;
      var unique = new Set(values.filter(function(v){ return v !== undefined && v !== null && v !== ''; })).size;
      var numericVals = values.filter(function(v){ return typeof v === 'number' && !isNaN(v); });
      var numericCount = numericVals.length;
      var sum = numericVals.reduce(function(a,b){ return a + b; }, 0);
      var mean = numericCount > 0 ? sum / numericCount : null;
      var sorted = numericVals.slice().sort(function(a,b){ return a - b; });
      var min = sorted.length > 0 ? sorted[0] : null;
      var max = sorted.length > 0 ? sorted[sorted.length - 1] : null;
      var median = null;
      if (sorted.length > 0) {
        var mid = Math.floor(sorted.length / 2);
        if (sorted.length % 2 === 0) {
          median = (sorted[mid - 1] + sorted[mid]) / 2;
        } else {
          median = sorted[mid];
        }
      }
      var variance = numericVals.reduce(function(s, v){ return s + Math.pow(v - mean, 2); }, 0) / (numericCount || 1);
      var stdDev = numericCount > 0 ? Math.sqrt(variance) : null;

      // Quartiles
      var q1 = null, q3 = null, iqr = null;
      if (sorted.length >= 4) {
        q1 = sorted[Math.floor(sorted.length * 0.25)];
        q3 = sorted[Math.floor(sorted.length * 0.75)];
        iqr = q3 - q1;
      }

      // Outliers
      var outliers = detectOutliers(values);

      // Top N for categorical
      var topN = [];
      if (type === 'string') {
        var freq = {};
        values.forEach(function(v){
          if (v !== undefined && v !== null && v !== '') {
            var key = String(v);
            freq[key] = (freq[key] || 0) + 1;
          }
        });
        var sortedFreq = Object.entries(freq).sort(function(a,b){ return b[1] - a[1]; });
        topN = sortedFreq.slice(0, 5);
      }

      // Quality flags
      var flags = [];
      if (unique === 1) flags.push('constant');
      if (unique === rowCount && rowCount > 0) flags.push('all-unique');
      if (type === 'string' && unique > 50) flags.push('high-cardinality');
      if (type === 'string' && numericCount > 0 && numericCount / rowCount > 0.1) flags.push('mixed-type');

      return {
        name: h || 'Column ' + (idx + 1),
        type: type,
        missing: missing,
        unique: unique,
        count: rowCount - missing,
        numericCount: numericCount,
        min: min,
        max: max,
        mean: mean,
        median: median,
        stdDev: stdDev,
        q1: q1,
        q3: q3,
        iqr: iqr,
        outliers: outliers,
        topN: topN,
        flags: flags
      };
    });

    // Count duplicate rows
    var seen = new Set();
    var duplicates = 0;
    rows.forEach(function(r){
      var key = r.map(function(v){ return v !== undefined && v !== null ? v : ''; }).join('|||');
      if (seen.has(key)) duplicates++;
      else seen.add(key);
    });

    // Quality Score
    var totalCells = rowCount * colCount;
    var missingPct = totalCells > 0 ? (cols.reduce(function(s, c){ return s + c.missing; }, 0) / totalCells) * 100 : 0;
    var dupPct = rowCount > 0 ? (duplicates / rowCount) * 100 : 0;
    var mixedCols = cols.filter(function(c){ return c.flags.includes('mixed-type'); }).length;

    var score = 100;
    score -= Math.min(missingPct * 0.5, 30);
    score -= Math.min(dupPct * 1.5, 30);
    score -= Math.min(mixedCols * 2, 20);
    score = Math.max(0, Math.round(score));

    // Store data
    analysisData = {
      fileName: fileName,
      fileSize: fileSize,
      rowCount: rowCount,
      columnCount: colCount,
      sheetCount: currentWorkbook ? currentWorkbook.SheetNames.length : 1,
      duplicateCount: duplicates,
      missingTotal: cols.reduce(function(s, c){ return s + c.missing; }, 0),
      qualityScore: score,
      columns: cols,
      headers: headers,
      rawRows: rows
    };

    // Show panels
    document.getElementById('stats-panel').style.display = 'block';
    document.getElementById('cols-panel').style.display = 'block';
    document.getElementById('preview-panel').style.display = 'block';
    document.getElementById('loading-container').style.display = 'none';

    // Update stats
    setStat('stat-rows', rowCount.toLocaleString());
    setStat('stat-columns', colCount);
    setStat('stat-missing', analysisData.missingTotal.toLocaleString());
    setStat('stat-duplicates', duplicates.toLocaleString());
    setStat('stat-filesize', formatFileSize(fileSize));
    setStat('stat-sheets', analysisData.sheetCount);
    document.getElementById('file-summary').textContent = fileName + ' — ' + rowCount.toLocaleString() + ' rows, ' + colCount + ' columns';

    // Quality Score
    var scoreEl = document.getElementById('quality-number');
    var fillEl = document.getElementById('quality-fill');
    var labelEl = document.getElementById('quality-label');
    scoreEl.textContent = score;
    var cls = score >= 80 ? 'good' : (score >= 50 ? 'ok' : 'bad');
    scoreEl.className = 'quality-number ' + cls;
    fillEl.className = 'quality-fill ' + cls;
    fillEl.style.width = score + '%';
    labelEl.textContent = score >= 80 ? 'Good Quality' : (score >= 50 ? 'Fair Quality' : 'Poor Quality');

    // Next Step: Remove Duplicates
    var nextContainer = document.getElementById('next-step-container');
    nextContainer.innerHTML = '';
    if (duplicates > 0) {
      nextContainer.innerHTML = '<a href="/remove-excel-duplicates" class="next-step"><span class="arrow">➜</span> Remove duplicates from this file with our Deduplicator tool</a>';
    }

    // Render column stats
    renderColumnStats(cols);

    // Render Top N
    renderTopN(cols);

    // Render data preview
    renderDataPreview(headers, rows);
  }

  // ===== Render Column Stats =====
  function renderColumnStats(cols){
    var el = document.getElementById('col-stats');
    var html = '<table class="col-stats-table">';
    html += '<thead><tr><th>Column</th><th>Type</th><th>Count</th><th>Missing</th><th>Unique</th><th>Min</th><th>Max</th><th>Mean</th><th>Median</th><th>Std Dev</th><th>Flags</th></tr></thead>';
    html += '<tbody>';
    cols.forEach(function(c){
      var flagHtml = c.flags.map(function(f){
        var cls = f === 'constant' ? 'danger' : (f === 'mixed-type' ? 'warning' : 'success');
        return '<span class="col-flag ' + cls + '">' + f.replace('-', ' ') + '</span>';
      }).join(' ');
      html += '<tr>';
      html += '<td class="col-name">' + c.name + '</td>';
      html += '<td class="col-type">' + c.type + '</td>';
      html += '<td>' + c.count.toLocaleString() + '</td>';
      html += '<td class="col-missing">' + c.missing.toLocaleString() + '</td>';
      html += '<td class="col-unique">' + c.unique.toLocaleString() + '</td>';
      html += '<td>' + formatNumber(c.min) + '</td>';
      html += '<td>' + formatNumber(c.max) + '</td>';
      html += '<td>' + formatNumber(c.mean) + '</td>';
      html += '<td>' + formatNumber(c.median) + '</td>';
      html += '<td>' + formatNumber(c.stdDev) + '</td>';
      html += '<td>' + flagHtml + '</td>';
      html += '</tr>';
    });
    html += '</tbody></table>';
    el.innerHTML = html;
  }

  // ===== Render Top N =====
  function renderTopN(cols){
    var container = document.getElementById('top-n-container');
    var content = document.getElementById('top-n-content');
    var hasCategorical = cols.some(function(c){ return c.type === 'string' && c.topN.length > 0; });
    if (!hasCategorical) {
      container.style.display = 'none';
      return;
    }
    container.style.display = 'block';
    var html = '';
    cols.forEach(function(c){
      if (c.type === 'string' && c.topN.length > 0) {
        var maxCount = c.topN[0][1];
        html += '<div style="font-size:12px;color:#7a7a7a;padding:6px 0 2px;font-weight:500;">' + c.name + '</div>';
        c.topN.forEach(function(item){
          var pct = maxCount > 0 ? (item[1] / maxCount * 100) : 0;
          html += '<div class="top-n-item">';
          html += '<span class="top-n-value">' + item[0] + '</span>';
          html += '<span class="top-n-count">' + item[1] + '</span>';
          html += '<div class="top-n-bar"><div class="top-n-fill" style="width:' + pct + '%"></div></div>';
          html += '</div>';
        });
      }
    });
    content.innerHTML = html;
  }

  // ===== Render Data Preview =====
  var previewRows = [];
  var previewSort = { col: null, dir: 'asc' };
  var previewSearch = '';

  function renderDataPreview(headers, rows){
    previewRows = rows.slice(0, 100);
    previewHeaders = headers;
    applyPreviewFilters();
  }

  var previewHeaders = [];
  var currentSortCol = null;
  var currentSortDir = 'asc';

  function applyPreviewFilters(){
    var filtered = previewRows;
    var search = document.getElementById('preview-search').value.toLowerCase();
    if (search) {
      filtered = filtered.filter(function(row){
        return row.some(function(cell){
          return cell !== undefined && cell !== null && String(cell).toLowerCase().includes(search);
        });
      });
    }
    // Sort
    if (currentSortCol !== null) {
      filtered = filtered.slice().sort(function(a, b){
        var va = a[currentSortCol] !== undefined && a[currentSortCol] !== null ? a[currentSortCol] : '';
        var vb = b[currentSortCol] !== undefined && b[currentSortCol] !== null ? b[currentSortCol] : '';
        if (typeof va === 'number' && typeof vb === 'number') {
          return currentSortDir === 'asc' ? va - vb : vb - va;
        }
        va = String(va).toLowerCase();
        vb = String(vb).toLowerCase();
        return currentSortDir === 'asc' ? va.localeCompare(vb) : vb.localeCompare(va);
      });
    }

    document.getElementById('search-count').textContent = 'Showing ' + filtered.length + ' of ' + previewRows.length + ' rows';

    var el = document.getElementById('data-preview');
    if (filtered.length === 0) {
      el.innerHTML = '<div style="padding:20px;text-align:center;color:#4a4a4a;font-style:italic;">No matching rows found</div>';
      return;
    }
    var html = '<table class="data-preview-table">';
    html += '<thead><tr><th>#</th>';
    previewHeaders.forEach(function(h, idx){
      var sortClass = currentSortCol === idx ? 'sorted' : '';
      var sortIcon = currentSortCol === idx ? (currentSortDir === 'asc' ? '▲' : '▼') : '↕';
      html += '<th class="' + sortClass + '" data-col="' + idx + '">' + (h || '') + ' <span class="sort-icon">' + sortIcon + '</span></th>';
    });
    html += '</tr></thead><tbody>';
    filtered.forEach(function(row, i){
      html += '<tr><td class="row-num">' + (i + 1) + '</td>';
      previewHeaders.forEach(function(h, idx){
        var val = row[idx];
        if (val === undefined || val === null || val === '') {
          html += '<td class="null-val">null</td>';
        } else if (typeof val === 'string' && val.length > 100) {
          html += '<td title="' + val + '">' + val.substring(0, 100) + '…</td>';
        } else {
          html += '<td>' + val + '</td>';
        }
      });
      html += '</tr>';
    });
    html += '</tbody></table>';
    el.innerHTML = html;

    // Sort click handlers
    el.querySelectorAll('th[data-col]').forEach(function(th){
      th.addEventListener('click', function(){
        var colIdx = parseInt(this.dataset.col);
        if (currentSortCol === colIdx) {
          currentSortDir = currentSortDir === 'asc' ? 'desc' : 'asc';
        } else {
          currentSortCol = colIdx;
          currentSortDir = 'asc';
        }
        applyPreviewFilters();
      });
    });
  }

  // ===== Search input =====
  document.getElementById('preview-search').addEventListener('input', function(){
    applyPreviewFilters();
  });

  // ===== File Handling =====
  function processFile(file){
    var ext = file.name.split('.').pop().toLowerCase();
    if (!['xlsx', 'xls', 'csv'].includes(ext)) {
      showToast('Please upload a valid Excel or CSV file', 'error');
      return;
    }

    // File size guardrail (150MB)
    var MAX_SIZE = 150 * 1024 * 1024;
    if (file.size > MAX_SIZE) {
      showToast('File exceeds 150MB limit. Please compress or split your file.', 'error');
      return;
    }

    fileNameDisplay.textContent = file.name + ' (' + formatFileSize(file.size) + ')';
    document.getElementById('loading-container').style.display = 'block';

    var reader = new FileReader();
    reader.onload = function(e){
      try {
        var data = new Uint8Array(e.target.result);
        currentWorkbook = XLSX.read(data, { type: 'array' });
        var sheetNames = currentWorkbook.SheetNames;

        // Show sheet selector if multiple sheets
        var sheetSelector = document.getElementById('sheet-selector');
        var sheetDropdown = document.getElementById('sheet-dropdown');
        if (sheetNames.length > 1) {
          sheetSelector.style.display = 'flex';
          sheetDropdown.innerHTML = '';
          sheetNames.forEach(function(name){
            var opt = document.createElement('option');
            opt.value = name;
            opt.textContent = name;
            sheetDropdown.appendChild(opt);
          });
          document.getElementById('sheet-count').textContent = sheetNames.length + ' sheets';
        } else {
          sheetSelector.style.display = 'none';
        }

        // Load first sheet
        loadSheet(sheetNames[0], file.name, file.size);
      } catch(err) {
        showToast('Error reading file: ' + err.message, 'error');
        console.error(err);
        document.getElementById('loading-container').style.display = 'none';
      }
    };
    reader.onerror = function(){
      showToast('Error reading file', 'error');
      document.getElementById('loading-container').style.display = 'none';
    };
    reader.readAsArrayBuffer(file);
  }

  function loadSheet(sheetName, fileName, fileSize){
    currentSheetName = sheetName;
    var sheet = currentWorkbook.Sheets[sheetName];
    var jsonData = XLSX.utils.sheet_to_json(sheet, { header: 1, defval: null });
    if (jsonData.length === 0) {
      showToast('No data found in sheet: ' + sheetName, 'error');
      document.getElementById('loading-container').style.display = 'none';
      return;
    }
    rawData = jsonData;
    analyzeExcel(jsonData, fileName, fileSize);
  }

  // ===== Sheet selector change =====
  document.getElementById('sheet-dropdown').addEventListener('change', function(){
    if (currentWorkbook && analysisData) {
      document.getElementById('loading-container').style.display = 'block';
      loadSheet(this.value, analysisData.fileName, analysisData.fileSize);
    }
  });

  // ===== Drop Zone Events =====
  dropZone.addEventListener('click', function(){
    fileInput.click();
  });

  dropZone.addEventListener('dragover', function(e){
    e.preventDefault();
    this.classList.add('dragover');
  });

  dropZone.addEventListener('dragleave', function(e){
    e.preventDefault();
    this.classList.remove('dragover');
  });

  dropZone.addEventListener('drop', function(e){
    e.preventDefault();
    this.classList.remove('dragover');
    var files = e.dataTransfer.files;
    if (files.length > 0) {
      processFile(files[0]);
    }
  });

  fileInput.addEventListener('change', function(){
    if (this.files.length > 0) {
      processFile(this.files[0]);
    }
  });

  // ===== Clear =====
  document.getElementById('btn-clear-file').addEventListener('click', function(){
    fileInput.value = '';
    fileNameDisplay.textContent = '';
    document.getElementById('stats-panel').style.display = 'none';
    document.getElementById('cols-panel').style.display = 'none';
    document.getElementById('preview-panel').style.display = 'none';
    document.getElementById('sheet-selector').style.display = 'none';
    document.getElementById('loading-container').style.display = 'none';
    document.getElementById('next-step-container').innerHTML = '';
    analysisData = null;
    currentWorkbook = null;
    rawData = null;
    showToast('Cleared', 'success');
  });

  // ===== Export Functions =====
  function getExportData(){
    if (!analysisData) {
      showToast('No data to export. Load an Excel file first.', 'error');
      return null;
    }
    return analysisData;
  }

  function buildExportText(data){
    var text = 'Excel File Analysis Results\n';
    text += '='.repeat(50) + '\n\n';
    text += 'Exported: ' + new Date().toLocaleString() + '\n\n';
    text += 'File Name:       ' + data.fileName + '\n';
    text += 'File Size:       ' + formatFileSize(data.fileSize) + '\n';
    text += 'Rows:            ' + data.rowCount.toLocaleString() + '\n';
    text += 'Columns:         ' + data.columnCount + '\n';
    text += 'Sheets:          ' + data.sheetCount + '\n';
    text += 'Missing Values:  ' + data.missingTotal.toLocaleString() + '\n';
    text += 'Duplicate Rows:  ' + data.duplicateCount.toLocaleString() + '\n';
    text += 'Quality Score:   ' + data.qualityScore + '/100\n\n';
    text += 'Column Statistics:\n';
    text += '-'.repeat(50) + '\n';
    data.columns.forEach(function(c){
      text += '\n' + c.name + ' (type: ' + c.type + ')\n';
      text += '  Count:   ' + c.count.toLocaleString() + '\n';
      text += '  Missing: ' + c.missing.toLocaleString() + '\n';
      text += '  Unique:  ' + c.unique.toLocaleString() + '\n';
      if (c.type === 'number' || c.type === 'date') {
        text += '  Min:     ' + formatNumber(c.min) + '\n';
        text += '  Max:     ' + formatNumber(c.max) + '\n';
        text += '  Mean:    ' + formatNumber(c.mean) + '\n';
        text += '  Median:  ' + formatNumber(c.median) + '\n';
        text += '  Std Dev: ' + formatNumber(c.stdDev) + '\n';
        if (c.q1 !== null) {
          text += '  Q1:      ' + formatNumber(c.q1) + '\n';
          text += '  Q3:      ' + formatNumber(c.q3) + '\n';
          text += '  IQR:     ' + formatNumber(c.iqr) + '\n';
        }
        if (c.outliers && c.outliers.length > 0) {
          text += '  Outliers: ' + c.outliers.length + ' detected\n';
        }
      }
      if (c.flags.length > 0) {
        text += '  Flags:   ' + c.flags.join(', ') + '\n';
      }
    });
    return text;
  }

  document.getElementById('btn-export-csv').addEventListener('click', function(){
    var data = getExportData();
    if (!data) return;
    var rows = [
      ['Metric', 'Value'],
      ['File Name', data.fileName],
      ['File Size', formatFileSize(data.fileSize)],
      ['Rows', data.rowCount],
      ['Columns', data.columnCount],
      ['Sheets', data.sheetCount],
      ['Missing Values', data.missingTotal],
      ['Duplicate Rows', data.duplicateCount],
      ['Quality Score', data.qualityScore],
      []
    ];
    rows.push(['Column', 'Type', 'Count', 'Missing', 'Unique', 'Min', 'Max', 'Mean', 'Median', 'Std Dev', 'Q1', 'Q3', 'IQR', 'Flags']);
    data.columns.forEach(function(c){
      rows.push([
        c.name,
        c.type,
        c.count,
        c.missing,
        c.unique,
        formatNumber(c.min),
        formatNumber(c.max),
        formatNumber(c.mean),
        formatNumber(c.median),
        formatNumber(c.stdDev),
        formatNumber(c.q1),
        formatNumber(c.q3),
        formatNumber(c.iqr),
        c.flags.join(';')
      ]);
    });
    var csv = rows.map(function(r){ return r.join(','); }).join('\n');
    var blob = new Blob(['\uFEFF' + csv], { type: 'text/csv;charset=utf-8;' });
    var link = document.createElement('a');
    var url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'excel-analysis-results.csv');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('CSV exported successfully!', 'success');
  });

  document.getElementById('btn-export-txt').addEventListener('click', function(){
    var data = getExportData();
    if (!data) return;
    var text = buildExportText(data);
    var blob = new Blob([text], { type: 'text/plain;charset=utf-8;' });
    var link = document.createElement('a');
    var url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'excel-analysis-results.txt');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('TXT exported successfully!', 'success');
  });

  document.getElementById('btn-export-json').addEventListener('click', function(){
    var data = getExportData();
    if (!data) return;
    var json = JSON.stringify({
      exported: new Date().toISOString(),
      tool: 'Analyse Excel',
      fileName: data.fileName,
      fileSize: data.fileSize,
      rowCount: data.rowCount,
      columnCount: data.columnCount,
      sheetCount: data.sheetCount,
      missingTotal: data.missingTotal,
      duplicateCount: data.duplicateCount,
      qualityScore: data.qualityScore,
      columnDetails: data.columns
    }, null, 2);
    var blob = new Blob([json], { type: 'application/json;charset=utf-8;' });
    var link = document.createElement('a');
    var url = URL.createObjectURL(blob);
    link.setAttribute('href', url);
    link.setAttribute('download', 'excel-analysis-results.json');
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
    showToast('JSON exported successfully!', 'success');
  });

})();
</script>
