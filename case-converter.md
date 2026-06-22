---
layout: main
title: "Case Converter Online - Convert To 10+ Cases | DataFrog"
description: "Convert text between camelCase, PascalCase, snake_case, kebab-case, UPPERCASE, Title Case and more — instantly, in your browser."
keywords: "case converter, camelcase converter, snake case converter, kebab case converter, pascalcase converter, title case converter, text case converter, string case converter, convert camelcase to snake_case, convert snake_case to camelcase, constant case converter, screaming snake case, sentence case converter, online case converter, free case converter, uppercase to lowercase converter, paragraph case converter"
category: utilities
---

<style>
.case-wrap{background:#1e1e1e;border-radius:10px;padding:20px;display:flex;flex-direction:column;gap:16px;min-height:100px; min-width: 98%;}
.panel-card{background:#252526;border-radius:8px;border:1px solid #3c3c3c;overflow:hidden}
.panel-header{display:flex;align-items:center;justify-content:space-between;padding:10px 14px;background:#2d2d2d;border-bottom:1px solid #3c3c3c;flex-wrap:wrap;gap:8px}
.panel-title{font-size:13px;font-weight:500;color:#cccccc;letter-spacing:.3px}
.panel-sub{font-size:11px;color:#6a9955;margin-top:2px}
.btn-row{display:flex;gap:8px;align-items:center;flex-wrap:wrap}
.case-btn{display:inline-flex;align-items:center;justify-content:center;gap:6px;padding:10px 16px;border-radius:5px;font-size:13px;font-family:inherit;cursor:pointer;border:1px solid #555;background:#3a3a3a;color:#cccccc;transition:background .15s}
.case-btn:hover{background:#4a4a4a}
.case-btn.primary{background:#0e639c;border-color:#0e639c;color:#fff;font-weight:600}
.case-btn.primary:hover{background:#1177bb}
.case-btn.full{width:100%}

.case-select{width:100%;background:#1b1b1b;color:#cccccc;font-family:inherit;font-size:14px;padding:11px 12px;border:1px solid #3c3c3c;border-radius:6px;outline:none;-webkit-appearance:none;appearance:none}
.case-select:focus{border-color:#0e639c}

.case-ta{width:100%;min-height:190px;background:#1b1b1b;color:#9cdcfe;font-family:georgia, sans-serif; font-size:14px;padding:14px;border:none;outline:none;line-height:1.6;resize:none}
.case-ta::placeholder{color:#4a4a4a}
.case-ta[readonly]{color:#d4d4d4}

.field-stack{display:flex;flex-direction:row;gap:1rem;padding:14px 16px}
.field-label{font-size:11px;color:#7a7a7a; text-transform:uppercase;}
.char-count{font-size:11px;color:#5a5a5a;text-align:right}

.toast{position:fixed;bottom:24px;right:24px;left:24px;margin:0 auto;max-width:320px;padding:10px 18px;border-radius:6px;font-size:12px;font-family:var(--font-mono,monospace);z-index:999;opacity:0;transform:translateY(8px);transition:opacity .25s,transform .25s;pointer-events:none}
.toast.success{background:#1e293b;border:1px solid #2d7a4a;color:#6fcf97}
.toast.error{background:#1e293b;border:1px solid #8b3333;color:#f97583}
.toast.show{opacity:1;transform:translateY(0)}

.batch-ta{width:100%;min-height:120px;max-height:220px;background:#1b1b1b;color:#9cdcfe;font-family:var(--font-mono,'Fira Mono',monospace);font-size:12px;padding:12px;border:none;resize:vertical;outline:none;line-height:1.6}
.batch-output{max-height:240px;overflow-y:auto}
.batch-table{width:100%;border-collapse:collapse;font-family:var(--font-mono,'Fira Mono',monospace);font-size:12px}
.batch-table th{position:sticky;top:0;background:#2d2d2d;color:#7a7a7a;text-align:left;padding:8px 12px;font-weight:500;border-bottom:1px solid #3c3c3c}
.batch-table td{padding:7px 12px;color:#d4d4d4;border-bottom:1px solid #2a2a2a;word-break:break-all}
.batch-empty{padding:24px;text-align:center;color:#4a4a4a;font-size:12px}
details.advanced summary{cursor:pointer;padding:14px 16px;color:#9cdcfe;font-size:13px;list-style:none}
details.advanced summary::-webkit-details-marker{display:none}

.badge { display: inline-flex; align-items: center; gap: 5px; padding: 4px 12px; border-radius: 20px; font-size: 12px; font-weight: 500; border: 1px solid var(--border); background: var(--surface-2); color: var(--ink-2); }
.badge.green { background: var(--green-light); border-color: #bbf7d0; color: var(--green); }
.badge.blue  { background: var(--accent-light); border-color: #bfdbfe; color: var(--accent); }
.badge.amber { background: var(--amber-light); border-color: #fde68a; color: var(--amber); }
.section { margin-bottom: 56px; }
h2 { font-size: clamp(20px, 3vw, 27px); font-weight: 700; color: var(--ink); margin-bottom: 16px; padding-bottom: 10px; border-bottom: 2px solid var(--border); letter-spacing: -0.3px; }
h3 { font-size: 18px; font-weight: 700; color: var(--ink); margin: 28px 0 8px; }
p { margin-bottom: 16px; color: var(--ink-2); }
ul.feature-list { padding-left: 0; list-style: none; }
ul.feature-list li { margin-bottom: 10px; color: var(--ink-2); }
.faq-item { border: 1px solid var(--border); border-radius: var(--radius); margin-bottom: 12px; overflow: hidden; }
.faq-q { padding: 16px 20px; font-family: var(--font-ui); font-weight: 600; font-size: 15px; color: var(--ink); background: var(--surface-2); cursor: pointer; display: flex; justify-content: space-between; align-items: center; user-select: none; list-style: none; }
.faq-q::-webkit-details-marker { display: none; }
details[open] .faq-q { border-bottom: 1px solid var(--border); background: var(--surface); }
.faq-a { padding: 16px 20px; font-size: 15px; color: var(--ink-2); line-height: 1.7; }
.faq-chevron { font-size: 18px; color: var(--ink-3); transition: transform .2s; }
details[open] .faq-chevron { transform: rotate(90deg); }
.hero-badges { display: flex; flex-wrap: wrap; justify-content: center; gap: 10px; font-family: var(--font-ui); }
@media (max-width:600px){
  .case-btn{padding:12px 16px;font-size:14px}
  .case-ta{font-size:15px}
}
</style>

<!-- ================================================================
  BLOCK 1 — HERO (place ABOVE the tool)
================================================================ -->
<div id="case-converter-hero"
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

  <h1 itemprop="name">Case Converter — Text, Sentences &amp; Variable Names</h1>
  <p itemprop="description">
    Paste any text — a single word, a sentence, or a full paragraph — pick a case style, and convert
    instantly. Supports UPPERCASE, lowercase, Title Case, and Sentence case for prose, plus camelCase,
    snake_case, kebab-case, PascalCase and more for variable names and identifiers.
  </p>

  <div class="hero-badges">
    <span class="badge green">✓ 100% Client-Side</span>
    <span class="badge blue">✓ Works on Paragraphs &amp; Essays</span>
    <span class="badge amber">✓ Preserves Punctuation</span>
    <span class="badge">✓ 12 Case Styles</span>
    <span class="badge">✓ Free Forever</span>
  </div>
</div>

<!-- ================================================================
  TOOL BODY
================================================================ -->
<section id="case-converter-tool" aria-label="Case Converter Tool" style="display:flex;justify-content:center">


<div class="case-wrap">

  <div class="panel-card">
    <div class="panel-header">
    <div>
     <div class="panel-title"><i class="ti ti-letter-case" aria-hidden="true" style="font-size:14px;margin-right:6px;color:#e2c08d"></i>Case Converter</div>
        <div class="panel-sub">Paste text, choose a case, click Convert</div>
      </div>
     <div class="field-stack" style="padding-top:0">
       <select id="case-select" class="case-select">
        <optgroup label="Sentences &amp; Paragraphs">
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
          <option value="title">Title Case</option>
          <option value="sentence">Sentence case</option>
        </optgroup>
        <optgroup label="Variables &amp; Identifiers">
          <option value="camel">camelCase</option>
          <option value="pascal">PascalCase</option>
          <option value="snake">snake_case</option>
          <option value="kebab">kebab-case</option>
          <option value="constant">CONSTANT_CASE</option>
          <option value="dot">dot.case</option>
          <option value="train">Train-Case</option>
          <option value="path">path/case</option>
        </optgroup>
      </select>
      <button class="case-btn primary full" id="btn-convert"><i class="ti ti-bolt" aria-hidden="true"></i> Convert</button>
     </div> 
    </div>
    <div class="field-stack">
      <textarea id="case-input" class="case-ta" placeholder="Paste a word, a sentence, or a whole paragraph here..." spellcheck="false"></textarea>
      <div class="char-count" id="char-count">0 characters</div>
    </div>

  </div>

  <div class="panel-card">
    <div class="panel-header">
      <div>
        <div class="panel-title">Result</div>
        <div class="panel-sub">Tap copy when it's ready</div>
      </div>
      <div class="btn-row">
        <button class="case-btn" id="btn-copy"><i class="ti ti-copy" aria-hidden="true"></i> Copy</button>
      </div>
    </div>
    <div class="field-stack">
      <textarea id="case-output" class="case-ta" readonly placeholder="Your converted text will appear here"></textarea>
    </div>
  </div>

  <details class="panel-card advanced">
    <summary>＋ Batch mode — convert a list of identifiers at once</summary>
    <div class="panel-header">
      <div>
        <div class="panel-title"><i class="ti ti-list" aria-hidden="true" style="font-size:14px;margin-right:6px;color:#b392f0"></i>Batch Convert</div>
        <div class="panel-sub">One identifier per line — best for short names, not paragraphs</div>
      </div>
      <div class="btn-row">
        <select id="batch-target" class="case-select" style="width:auto">
          <option value="camel">camelCase</option>
          <option value="pascal">PascalCase</option>
          <option value="snake">snake_case</option>
          <option value="kebab">kebab-case</option>
          <option value="constant">CONSTANT_CASE</option>
          <option value="title">Title Case</option>
          <option value="upper">UPPERCASE</option>
          <option value="lower">lowercase</option>
        </select>
        <button class="case-btn" id="btn-batch-run">Convert All</button>
      </div>
    </div>
    <div class="field-stack" style="padding-top:0">
      <textarea id="batch-in" class="batch-ta" placeholder="user_profile_settings&#10;OrderLineItem&#10;total-price-usd" spellcheck="false"></textarea>
    </div>
    <div class="batch-output" id="batch-output">
      <div class="batch-empty">Results will appear here as a table</div>
    </div>
  </details>

</div>
</section>
<div class="toast" id="toast" role="alert" aria-live="assertive"></div>

<script>
(function(){
  function cap(w){ return w.charAt(0).toUpperCase() + w.slice(1); }

  // ---- identifier mode: strips punctuation/separators, fine for short names ----
  function splitWords(str){
    return String(str)
      .replace(/([a-z0-9])([A-Z])/g, '$1 $2')
      .replace(/([A-Z]+)([A-Z][a-z])/g, '$1 $2')
      .replace(/[_\-\.\/]+/g, ' ')
      .replace(/\s+/g, ' ')
      .trim()
      .split(' ')
      .filter(Boolean)
      .map(function(w){ return w.toLowerCase(); });
  }
  var identifierConverters = {
    camel:    function(w){ return w.map(function(x,i){ return i===0 ? x : cap(x); }).join(''); },
    pascal:   function(w){ return w.map(cap).join(''); },
    snake:    function(w){ return w.join('_'); },
    kebab:    function(w){ return w.join('-'); },
    constant: function(w){ return w.join('_').toUpperCase(); },
    dot:      function(w){ return w.join('.'); },
    train:    function(w){ return w.map(cap).join('-'); },
    path:     function(w){ return w.join('/'); }
  };

  // ---- prose mode: preserves punctuation/spacing, safe for sentences & paragraphs ----
  function toUpper(text){ return text.toUpperCase(); }
  function toLower(text){ return text.toLowerCase(); }
  function toTitle(text){
    return text.replace(/\w\S*/g, function(word){
      return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
    });
  }
  function toSentence(text){
    var lower = text.toLowerCase();
    return lower.replace(/(^\s*[a-z])|([.!?]\s+[a-z])/g, function(m){
      return m.toUpperCase();
    });
  }
  var proseConverters = { upper: toUpper, lower: toLower, title: toTitle, sentence: toSentence };
  var identifierKeys = ['camel','pascal','snake','kebab','constant','dot','train','path'];

  function convertText(text, key){
    if (!text) return '';
    if (identifierKeys.indexOf(key) !== -1){
      return identifierConverters[key](splitWords(text));
    }
    return proseConverters[key](text);
  }

  function showToast(msg, type){
    var t = document.getElementById('toast');
    t.textContent = msg;
    t.className = 'toast ' + type + ' show';
    setTimeout(function(){ t.className = 'toast ' + type; }, 1500);
  }

  var input = document.getElementById('case-input');
  var output = document.getElementById('case-output');
  var select = document.getElementById('case-select');
  var charCount = document.getElementById('char-count');

  input.addEventListener('input', function(){
    charCount.textContent = input.value.length + ' characters';
  });

  document.getElementById('btn-convert').addEventListener('click', function(){
    var text = input.value;
    if (!text.trim()){ showToast('Paste some text first', 'error'); return; }
    output.value = convertText(text, select.value);
  });

  document.getElementById('btn-copy').addEventListener('click', function(){
    if (!output.value){ showToast('Nothing to copy yet', 'error'); return; }
    navigator.clipboard.writeText(output.value).then(function(){
      showToast('Copied to clipboard', 'success');
    }).catch(function(){ showToast('Copy failed', 'error'); });
  });

  // ---- batch mode (identifier-focused, unchanged logic) ----
  var batchLabels = { camel:'camelCase', pascal:'PascalCase', snake:'snake_case', kebab:'kebab-case',
    constant:'CONSTANT_CASE', title:'Title Case', upper:'UPPERCASE', lower:'lowercase' };

  document.getElementById('btn-batch-run').addEventListener('click', function(){
    var lines = document.getElementById('batch-in').value.split('\n').map(function(l){ return l.trim(); }).filter(Boolean);
    var target = document.getElementById('batch-target').value;
    var out = document.getElementById('batch-output');
    if (!lines.length){ out.innerHTML = '<div class="batch-empty">Results will appear here as a table</div>'; return; }
    var html = '<table class="batch-table"><thead><tr><th>Input</th><th>'+batchLabels[target]+'</th></tr></thead><tbody>';
    lines.forEach(function(line){
      var result = convertText(line, target);
      html += '<tr><td>'+line+'</td><td>'+(result||'—')+'</td></tr>';
    });
    html += '</tbody></table>';
    out.innerHTML = html;
  });
})();
</script>


<!-- ================================================================
  BLOCK 2 — CONTENT (place BELOW the tool body)
================================================================ -->
<section style="max-width:98%;margin:3rem;">

<h2>Why convert text or variable case?</h2>
<ul class="feature-list">
<li>Fix a paragraph or title that was typed in all caps, or normalize inconsistent capitalization in pasted text</li>
<li>Convert an essay or article title to proper Title Case for publishing</li>
<li>Rename database columns or API fields between snake_case and camelCase</li>
<li>Generate a URL slug or CSS class name in kebab-case</li>
<li>Convert SCREAMING_SNAKE_CASE constants to readable text for documentation</li>
</ul>

<h3>How to convert text case — 3 simple steps</h3>
<ol class="feature-list" style="list-style:decimal;padding-left:20px">
<li>Paste your text into the box — a single word, a sentence, or a full paragraph all work.</li>
<li>Choose the case style you need from the dropdown — sentence-friendly styles like Title Case and Sentence case keep your punctuation and spacing intact; identifier styles like camelCase and snake_case are for variable names.</li>
<li>Click Convert, then tap Copy to grab the result.</li>
</ol>

<h3>Features</h3>
<ul class="feature-list">
<li>✅ Works correctly on single words, full sentences, and multi-paragraph text</li>
<li>✅ Preserves punctuation and spacing for UPPERCASE, lowercase, Title Case, and Sentence case</li>
<li>✅ Smart word-boundary detection for camelCase, snake_case, kebab-case, PascalCase, and more</li>
<li>✅ Batch mode for converting a list of short identifiers at once</li>
<li>✅ One-tap copy, built for mobile as much as desktop</li>
<li>✅ 100% browser-based — nothing is uploaded</li>
</ul>

<h3>Why this case converter stands out</h3>
<p>
Many case converters apply the same logic regardless of input, which means pasting a paragraph into a
tool built for variable names can quietly strip your punctuation. This one separates the two: prose
styles (UPPERCASE, lowercase, Title Case, Sentence case) preserve your original punctuation and spacing
exactly, while identifier styles (camelCase, snake_case, kebab-case, and friends) use word-boundary
detection so converting <em>from</em> an existing camelCase or PascalCase name works correctly too.
</p>

<h3>Privacy &amp; Security</h3>
<ul class="feature-list">
<li>🔒 All conversion happens locally in your browser</li>
<li>🚫 Nothing you type or paste is uploaded to a server</li>
<li>🕵️ No tracking, no logs, no third-party scripts</li>
<li>💼 Safe for internal documents, field names, or proprietary text</li>
</ul>

</section>

<section itemscope itemtype="https://schema.org/FAQPage">

<h2>Case Converter — Frequently Asked Questions</h2>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Can I convert a full paragraph or essay, not just a single word?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">Yes. UPPERCASE, lowercase, Title Case, and Sentence case all work on full paragraphs and preserve your original punctuation and line spacing. The identifier styles like camelCase and snake_case are intended for short names, not long passages.</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Will converting to Sentence case or Title Case remove my punctuation?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">No, punctuation and spacing are preserved exactly. Only the letter casing changes — periods, commas, and question marks stay where they were.</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">What's the difference between camelCase and PascalCase?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">Both join words with no separator and capitalize each word boundary. camelCase starts lowercase (userProfile), while PascalCase starts uppercase (UserProfile). camelCase is typically used for variables, PascalCase for class or type names.</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">How do I convert camelCase to snake_case?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">Paste the camelCase text, select snake_case from the dropdown, and click Convert. The tool detects the word boundaries inside camelCase input automatically.</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">What is kebab-case used for?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">Kebab-case (words separated by hyphens, e.g. user-profile-settings) is commonly used for URL slugs, CSS class names, and command-line flags.</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">What is CONSTANT_CASE or SCREAMING_SNAKE_CASE?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">CONSTANT_CASE, also called SCREAMING_SNAKE_CASE, is uppercase text with words separated by underscores (e.g. MAX_RETRY_COUNT), the standard convention for naming constants in most programming languages.</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Can I convert a whole list of identifiers at once?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">Yes — open Batch mode below the main converter, paste one identifier per line, choose a target case, and click Convert All to get every line converted in a results table.</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Does this work well on mobile?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">Yes. The layout is a single stacked column with large tap targets, designed to work the same way on a phone as on desktop, including pasting and converting long text.</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Is this case converter free to use online?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">Yes, completely free, with no signup, no limits, and no watermarks on the output.</span>
</div>
</details>

<details class="faq-item" itemscope itemprop="mainEntity" itemtype="https://schema.org/Question">
<summary class="faq-q"><span itemprop="name">Is my data uploaded anywhere when I use this tool?</span><span class="faq-chevron">›</span></summary>
<div class="faq-a" itemscope itemprop="acceptedAnswer" itemtype="https://schema.org/Answer">
<span itemprop="text">No. All conversion runs locally in your browser using JavaScript — nothing you type or paste is sent to a server.</span>
</div>
</details>

</section>