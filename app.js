const $=(s,r=document)=>r.querySelector(s),el=h=>{const t=document.createElement("template");t.innerHTML=h.trim();return t.content.firstChild};
const esc=s=>String(s).replace(/[&<>"]/g,c=>({"&":"&amp;","<":"&lt;",">":"&gt;",'"':"&quot;"}[c]));
const root=document.documentElement;
const get=(k,d)=>{try{return localStorage.getItem(k)??d}catch(e){return d}},set=(k,v)=>{try{localStorage.setItem(k,v)}catch(e){}};
root.dataset.theme=get("apm-theme",matchMedia("(prefers-color-scheme:dark)").matches?"dark":"light");
const app=$("#app");
const ext=(l,u)=>`<a class="btn" href="${esc(u)}" target="_blank" rel="noopener">${esc(l)}</a>`;
const TABS=[["n1","Note 1"],["n2","Note 2"],["bk","Books"],["pt","PYQs (typed)"],["ph","PYQs (handwritten)"]];
function tabs(o){
  const w=el(`<div><div class="tabs" role="tablist">${TABS.map(([k,l],i)=>`<button role="tab" aria-selected="${i===0}" data-k="${k}">${l}</button>`).join("")}</div><div class="panel"></div></div>`);
  const show=k=>{[...w.querySelectorAll("button")].forEach(b=>b.setAttribute("aria-selected",b.dataset.k===k));const l=TABS.find(t=>t[0]===k)[1];
    $(".panel",w).innerHTML=o[k]?`<p>${l} for this course.</p>${ext("Open "+l,o[k])}`:`<p>${l} for this course.</p><span class="btn off">Not added yet</span>`};
  w.onclick=e=>{const b=e.target.closest("button");if(b)show(b.dataset.k)};show("n1");return w}
const HOME=`<section class="hero"><h1>Applied Mathematics Resources</h1><p>Notes, books and past year questions for every semester of Applied Mathematics.</p><svg class="curve" viewBox="0 0 520 140" aria-hidden="true"><line class="ax" x1="0" y1="70" x2="520" y2="70"/><path d="M0 70 C 43 -10, 87 -10, 130 70 S 217 150, 260 70 S 347 -10, 390 70 S 477 150, 520 70"/></svg></section>
<div class="quick row" id="quick" style="margin:8px 0 40px"></div>
<section class="sec"><h2>Social handles you must follow</h2><p>Stay updated with the department community.</p><div class="row" id="social"></div></section>
<section class="sec"><h2>Let's connect with family</h2><p>Meet the teachers and your fellow seniors &amp; juniors.</p><div class="row" id="family"></div></section>
<section class="sec" style="margin-bottom:60px"><h2>Choose your semester</h2><div class="sems" id="sems" style="margin-top:14px"></div></section>
`;
function render(){
  const page=document.body.dataset.page||"",S=SEMS.find(s=>s.id===page);
  window.scrollTo(0,0);
  $("#nav").innerHTML=`<a href="index.html" ${!page?'aria-current="page"':''}>Home</a>`+SEMS.map(s=>`<a href="apm-${s.id}.html" ${s.id===page?'aria-current="page"':''}>${s.label.replace("APM ","")}</a>`).join("")+`<a href="about.html" ${page==="about"?'aria-current="page"':''}>About me</a>`;
  if(S){
    document.title=S.label+" | Applied Mathematics Resources";
    app.innerHTML=`<section class="hero" style="padding-bottom:20px"><h1>${S.label}</h1><p>${S.year}</p></section><div id="list"></div>`;
    if(!S.courses.length)$("#list").innerHTML=`<div class="empty"><h2>Courses for ${S.label} are on the way</h2><p>They will appear here once they are added.</p></div>`;
    else S.courses.forEach(c=>{const d=el(`<article class="course"><h2>${esc(c.name)}</h2>${c.code||c.tag?`<div class="meta">${c.code?`<span class="tag">${esc(c.code)}</span>`:""}${c.tag?`<span class="tag">${esc(c.tag)}</span>`:""}</div>`:""}</article>`);d.append(tabs(c));$("#list").append(d)});
  }else if(page==="students"){
    document.title="Know students | Applied Mathematics Resources";
    app.innerHTML=`<a class="back" href="index.html">← Home</a><section class="hero" style="padding:20px 0 12px"><h1>Know students</h1><p>Pick a batch to see its students and their social handles.</p></section>
    <label for="batch" class="stat" style="display:block;margin-bottom:6px">Batch</label><select id="batch"><option value="">Select a batch</option>${Array.from({length:24},(_,i)=>24-i).map(n=>`<option value="${n}">APM ${n}</option>`).join("")}</select><div id="people"></div>`;
    $("#batch").onchange=e=>{const n=e.target.value,L=BATCHES[n]||[];
      $("#people").innerHTML=!n?"":L.length?`<ul class="people">${L.map(p=>`<li><b>${esc(p.name)}</b>${/^https?:/.test(p.handle||"")?`<a href="${esc(p.handle)}" target="_blank" rel="noopener">Social profile</a>`:`<span>${esc(p.handle||"")}</span>`}</li>`).join("")}</ul>`:`<div class="empty" style="margin-top:18px">No students added yet for APM ${n}.</div>`}
  }else if(page==="about"){
    document.title="About me | RU-APM";
    app.innerHTML=`<a class="back" href="index.html">← Home</a><section class="me"><img src="assets/me.jpg" alt="Bidhan Kumar Paul"><div class="me-t"><h1>Hi, I'm <span class="grad">Bidhan Kumar Paul</span></h1><p class="role">I'm an <b id="typed"></b><span class="cur" aria-hidden="true"></span></p><p class="bio">Applied Mathematics student at the University of Rajshahi and founder of BKP IT, turning ideas into useful digital products.</p></div></section><h2 style="margin-bottom:14px">Find me online</h2><div class="about" id="ab"></div>`;
    {const full="Applied Mathematics Student",t=$("#typed");if(matchMedia("(prefers-reduced-motion:reduce)").matches)t.textContent=full;else{let i=0;const iv=setInterval(()=>{if(!t.isConnected||i>=full.length)return clearInterval(iv);t.textContent=full.slice(0,++i)},70)}}
    ABOUT.forEach(([t,u,live])=>{$("#ab").append(el(`<article class="course"><h2>${esc(t)}</h2><div class="row" style="margin-top:6px">${ext("Open "+t.replace("My ",""),u)}</div></article>`))});
  }else{
    document.title="Applied Mathematics Resources";
    app.innerHTML=HOME;
    $("#quick").innerHTML='<a class="btn" href="about.html">About me</a>'+HOME_LINKS.map(([l,u])=>ext(l,u)).join("");
    $("#sems").innerHTML=SEMS.map(s=>`<a class="sem" href="apm-${s.id}.html"><b>${s.label}</b><span>${s.year}</span><br><span class="tag">${s.courses.length?s.courses.length+" courses":"Coming soon"}</span></a>`).join("");
    $("#social").innerHTML=SOCIAL.map(([l,u])=>ext(l,u)).join("");
    $("#family").innerHTML=ext("Know teachers",TEACHERS_URL)+'<a class="btn" href="students.html">Know students</a>';
  }
}
$("#theme").onclick=()=>{const n=root.dataset.theme==="dark"?"light":"dark";root.dataset.theme=n;set("apm-theme",n)};
render();
