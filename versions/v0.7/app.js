const sections=[...document.querySelectorAll('main>section')];
function revealAnchor(){const target=document.getElementById(location.hash.slice(1));if(!target)return;let p=target.parentElement;while(p){if(p.tagName==='DETAILS')p.open=true;p=p.parentElement}requestAnimationFrame(()=>target.scrollIntoView({behavior:'auto'}))}
window.addEventListener('hashchange',revealAnchor);if(location.hash)revealAnchor();
let printDetails=[];window.addEventListener('beforeprint',()=>{printDetails=[...document.querySelectorAll('details')].map(d=>[d,d.open]);printDetails.forEach(([d])=>d.open=true)});window.addEventListener('afterprint',()=>printDetails.forEach(([d,open])=>d.open=open));
sections.forEach((section,i)=>{const label=section.querySelector('.eyebrow');if(label && i>0)label.textContent=String(i).padStart(2,'0')+' / '+label.textContent.replace(/^\d+\s*\/\s*/,'')});
const nav=document.querySelector('#nav');
nav.innerHTML=sections.map((s,i)=>`<a href="#${s.id}"><span>${String(i).padStart(2,'0')}</span>${s.dataset.title}</a>`).join('');
let active=0;
function update(){let index=0;sections.forEach((s,i)=>{if(s.getBoundingClientRect().top<180)index=i});active=index;[...nav.children].forEach((a,i)=>{a.classList.toggle('active',i===active);if(i===active)a.setAttribute('aria-current','location');else a.removeAttribute('aria-current')});document.querySelector('#chapter').textContent=sections[active].dataset.title;document.querySelector('#position').textContent=`${String(active+1).padStart(2,'0')} / ${sections.length} · ${sections[active].dataset.title}`;document.querySelector('#progress').style.width=`${(active+1)/sections.length*100}%`;document.querySelector('#prev').disabled=active===0;document.querySelector('#next').disabled=active===sections.length-1}
function move(d){const s=sections[Math.max(0,Math.min(sections.length-1,active+d))];s.scrollIntoView({behavior:'smooth'});history.replaceState(null,'','#'+s.id)}
document.querySelector('#prev').onclick=()=>move(-1);document.querySelector('#next').onclick=()=>move(1);window.addEventListener('scroll',update,{passive:true});update();
document.querySelectorAll('[role=tab]').forEach(button=>{button.addEventListener('click',()=>{document.querySelectorAll('[role=tab]').forEach(b=>b.setAttribute('aria-selected',String(b===button)));document.querySelectorAll('[role=tabpanel]').forEach(p=>p.hidden=p.id!==button.getAttribute('aria-controls'))});button.addEventListener('keydown',e=>{if(!['ArrowLeft','ArrowRight','Home','End'].includes(e.key))return;e.preventDefault();const tabs=[...document.querySelectorAll('[role=tab]')];let i=tabs.indexOf(button);i=e.key==='Home'?0:e.key==='End'?tabs.length-1:(i+(e.key==='ArrowRight'?1:-1)+tabs.length)%tabs.length;tabs[i].focus();tabs[i].click()})});
document.querySelectorAll('[data-course]').forEach(button=>button.addEventListener('click',()=>{
 const recovery=button.dataset.course==='recover';
 document.querySelector('.branch-figure').dataset.mode=button.dataset.course;
 document.querySelectorAll('[data-course]').forEach(b=>b.setAttribute('aria-pressed',String(b===button)));
 document.querySelectorAll('.recover-path,.recover-point').forEach(el=>{if(recovery)el.removeAttribute('hidden');else el.setAttribute('hidden','')});
 document.querySelector('#course-explanation').textContent=recovery?'从已丢失、但仍可恢复的状态生成重获与纠正示范。保留此前历史，训练如何观察、搜索并重新接续任务；单有错误前的正确路线不能替代这类监督。':'在偏离前恢复状态，保留遮挡因素，生成不同观察或绕行策略；学习如何继续推进并避免原错误。';
}));
