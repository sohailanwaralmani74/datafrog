(() => {
'use strict';
const $=id=>document.getElementById(id);let output='';
const sample='name: Amina\nactive: true\nscore: 9.5\nskills:\n  - research\n  - writing\nprofile:\n  city: Lahore\n  country: Pakistan';
$('input').value=sample;
function convert(){try{if(!window.jsyaml)throw Error('The YAML reader did not load. Check your connection and try again.');const source=$('input').value;if(!source.trim())throw Error('Paste YAML or choose a YAML file first.');const value=jsyaml.load(source,{schema:jsyaml.DEFAULT_SCHEMA,json:false});output=JSON.stringify(value,null,Number($('indent').value));$('output').value=output;$('status').textContent='YAML parsed successfully. Review the JSON before copying or downloading it.';}catch(e){output='';$('output').value='';$('status').textContent=e.message||'Could not parse this YAML. Check its indentation and syntax.';}}
$('convertBtn').addEventListener('click',convert);
$('sampleBtn').addEventListener('click',()=>{$('input').value=sample;$('status').textContent='Sample YAML loaded.';});
$('clearBtn').addEventListener('click',()=>{$('input').value='';$('output').value='';output='';$('status').textContent='Input and output cleared.';});
$('fileInput').addEventListener('change',async e=>{const f=e.target.files&&e.target.files[0];if(!f)return;try{$('input').value=await f.text();$('status').textContent='Loaded '+f.name+'. Select Convert to JSON to continue.';}catch(_){$('status').textContent='Could not read this file.';}});
$('copyBtn').addEventListener('click',async()=>{if(!output){$('status').textContent='Convert YAML first.';return;}try{await navigator.clipboard.writeText(output);$('status').textContent='JSON copied.';}catch(_){$('output').focus();$('output').select();$('status').textContent='JSON selected. Press Ctrl+C to copy.';}});
$('downloadBtn').addEventListener('click',()=>{if(!output){$('status').textContent='Convert YAML first.';return;}const b=new Blob([output],{type:'application/json;charset=utf-8'}),u=URL.createObjectURL(b),a=document.createElement('a');a.href=u;a.download='converted.json';document.body.appendChild(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(u),1000);});
$('convertBtn').addEventListener('click',()=>{});
})();