(() => {
  const plan=window.AIRSPARK_STUDY_PLAN, key='airspark-protocol-v033';
  let saved={}; const status=document.querySelector('#save-status');
  try {saved=JSON.parse(localStorage.getItem(key)||'{}');}catch(_){status.textContent='无法读取旧本机记录；请检查浏览器存储。';}
  const selected=new Set([1]);
  const el=(tag,text)=>{const n=document.createElement(tag);if(text!==undefined)n.textContent=text;return n;};
  const tiers=document.querySelector('#tiers');
  for(const t of plan.tiers){
    const row=el('p');
    if(t.settings===null){row.textContent=`层 ${t.tier} · ${t.name}（单列）`;}
    else {const label=el('label'),check=el('input');check.type='checkbox';check.checked=selected.has(t.tier);check.addEventListener('change',()=>{check.checked?selected.add(t.tier):selected.delete(t.tier);tally();});label.append(check,document.createTextNode(` 层 ${t.tier} · ${t.name}：${t.settings} 设置／${t.chains} 链／最多 ${t.max_candidate_trainings} 候选训练`));row.append(label);}
    tiers.append(row);
  }
  function tally(){
    const ss=plan.settings.filter(s=>selected.has(s.tier));const count=ss.length,chains=ss.reduce((n,s)=>n+s.chains,0),max=ss.reduce((n,s)=>n+s.chains*s.max_interventions,0);
    document.querySelector('#totals').textContent=`所选范围：${count} 个设置／${chains} 条链／最多 ${max} 次候选训练（未含初始化及先导）。`;
    const raw=document.querySelector('#gpu-hours').value,h=Number(raw);
    document.querySelector('#compute').textContent=raw!==''&&Number.isFinite(h)&&h>0?`训练时长上限估计：${(max*h).toFixed(1)} GPU 小时；不含其他阶段，实际可能提前终止。`:'训练时长：待先导实测。';
  }
  document.querySelector('#gpu-hours').addEventListener('input',tally);tally();
  const ledger=document.querySelector('#ledger');
  function persist(){try{localStorage.setItem(key,JSON.stringify(saved));status.textContent='已保存到本机；未回写论文。';}catch(_){status.textContent='本机存储不可用，请导出保留记录。';}}
  const fields=['status','artifact_parent','candidate_trainings','gpu_hours','sealed_SR_notes'];
  for(const s of plan.settings){for(let i=1;i<=s.chains;i++){
    const id=`${s.id}/chain-${i}`,record=saved[id]||(saved[id]={status:'未开始'});const row=el('tr');row.append(el('td',`${s.student} · ${s.task} · ${s.name} / ${i}`));
    for(const f of fields){const td=el('td');let input;
      if(f==='status'){input=el('select');for(const v of ['未开始','先导待登记','执行中','完成','中断','暂缓']){const o=el('option',v);o.value=v;input.append(o);}input.value=record[f]||'未开始';}
      else {input=el('input');input.value=record[f]??'';input.placeholder='—';if(['candidate_trainings','gpu_hours'].includes(f)){input.type='number';input.min='0';input.step=f==='candidate_trainings'?'1':'0.1';if(f==='candidate_trainings')input.max='4';}}
      input.setAttribute('aria-label',`${id} ${f}`);input.addEventListener('change',()=>{record[f]=input.value;persist();});td.append(input);row.append(td);
    }ledger.append(row);
  }}
  function download(name,body,type){const url=URL.createObjectURL(new Blob([body],{type}));const a=el('a');a.href=url;a.download=name;document.body.append(a);a.click();a.remove();setTimeout(()=>URL.revokeObjectURL(url),1000);}
  function cell(v){return '"'+String(v??'').replaceAll('"','""')+'"';}
  document.querySelector('#export-ledger').addEventListener('click',()=>{const lines=[['chain_id',...fields].map(cell).join(',')];for(const [id,r]of Object.entries(saved))lines.push([id,...fields.map(f=>r[f])].map(cell).join(','));download('AirSpark-learning-chains-v0.33.1.csv','\ufeff'+lines.join('\r\n'),'text/csv;charset=utf-8');});
  document.querySelector('#export-records').addEventListener('click',()=>download('AirSpark-local-records-v0.33.1.json',JSON.stringify({version:'v0.33.1',status:'local_unreviewed',records:saved},null,2),'application/json'));
})();
