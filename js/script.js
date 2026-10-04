const $=s=>document.querySelector(s),nv=$('#nv');
const sc=()=>nv.classList.toggle('sc',scrollY>40);sc();addEventListener('scroll',sc,{passive:true});
$('#bg').onclick=()=>$('#ln').classList.toggle('on');document.querySelectorAll('#ln a').forEach(a=>a.onclick=()=>$('#ln').classList.remove('on'));
const io=new IntersectionObserver(es=>es.forEach(e=>{if(!e.isIntersecting)return;e.target.classList.add('in');io.unobserve(e.target);const b=e.target.querySelector('[data-n]');if(b){const n=+b.dataset.n,t0=performance.now();(function f(t){const p=Math.min((t-t0)/1500,1);b.textContent=Math.round(n*(1-Math.pow(1-p,3)));if(p<1)requestAnimationFrame(f)})(t0)}}),{threshold:.15});
document.querySelectorAll('.rv').forEach(e=>io.observe(e));
const W=["šišanje","kupanje","nega","stil"],el=$('#fx'),fx='wave';
if(fx=='type'){let i=0,j=0,d=0;(function t(){const w=W[i];j+=d?-1:1;el.textContent=w.slice(0,j);let s=d?45:95;if(!d&&j==w.length){d=1;s=1400}else if(d&&j==0){d=0;i=(i+1)%W.length;s=300}setTimeout(t,s)})()}
else if(fx=='swap'){let i=0;el.style.transition='opacity .4s,transform .4s';setInterval(()=>{el.style.opacity=0;el.style.transform='translateY(14px)';setTimeout(()=>{i=(i+1)%W.length;el.textContent=W[i];el.style.opacity=1;el.style.transform='none'},400)},2200)}
else if(fx=='none')el.style.display='none';
else{let ci=0;const X='!<>-_/[]{}=+*^?#',cyc=(f,ms)=>{f(W[0]);setInterval(()=>{ci=(ci+1)%W.length;f(W[ci])},ms)};
if(fx=='wave')cyc(w=>{el.innerHTML=[...w].map((c,i)=>'<i style="display:inline-block;font-style:normal;animation:ltr .6s '+i*45+'ms both">'+(c==' '?'&nbsp;':c)+'</i>').join('')},2600);
else if(fx=='scramble')cyc(w=>{let f=0;const t=setInterval(()=>{el.textContent=[...w].map((c,i)=>i<f/2?c:X[Math.random()*X.length|0]).join('');if(++f>w.length*2+2){el.textContent=w;clearInterval(t)}},40)},2800);
else if(fx=='blur'){el.style.transition='filter .5s,opacity .5s';cyc(w=>{el.style.filter='blur(14px)';el.style.opacity=0;setTimeout(()=>{el.textContent=w;el.style.filter='none';el.style.opacity=1},500)},2600)}
else if(fx=='flip'){el.style.transition='transform .45s';el.style.transformOrigin='50% 100%';cyc(w=>{el.style.transform='rotateX(90deg)';setTimeout(()=>{el.textContent=w;el.style.transform='none'},450)},2400)}}
const ha='none',h1=$('h1');
if(ha!='none'){const t=h1.firstChild;if(t&&t.nodeType==3){const f=document.createDocumentFragment();t.nodeValue.split(' ').forEach((w,k,a)=>{const s=document.createElement('span');s.style.whiteSpace='nowrap';[...w].forEach((c,i)=>{const q=document.createElement('span');q.textContent=c;q.style.cssText='display:inline-block;animation:'+ha+' .8s '+(k*200+i*50)+'ms both';s.appendChild(q)});f.appendChild(s);if(k<a.length-1)f.appendChild(document.createTextNode(' '))});h1.replaceChild(f,t)}}
document.querySelectorAll('.slw').forEach(w=>{const g=w.querySelector('.gl');w.querySelector('.pv').onclick=()=>g.scrollBy({left:-g.clientWidth*.8,behavior:'smooth'});w.querySelector('.nx').onclick=()=>g.scrollBy({left:g.clientWidth*.8,behavior:'smooth'})});
const gw=$('#gw'),pg=$('#pg');if(gw)addEventListener('pointermove',e=>gw.style.transform='translate('+e.clientX+'px,'+e.clientY+'px)');
if(pg)addEventListener('scroll',()=>pg.style.transform='scaleX('+scrollY/(document.documentElement.scrollHeight-innerHeight)+')',{passive:true});
document.querySelectorAll('.tb button').forEach(b=>b.onclick=()=>{document.querySelectorAll('.tb button').forEach(x=>x.classList.toggle('on',x==b));document.querySelectorAll('.cat').forEach(c=>c.style.display=!b.dataset.c||c.dataset.c==b.dataset.c?'':'none')});
document.addEventListener('click',e=>{const a=e.target.closest('a[href^="#"]');if(!a)return;const t=a.getAttribute('href')=='#top'?document.body:document.querySelector(a.getAttribute('href'));if(t){e.preventDefault();t.scrollIntoView({behavior:'smooth'})}});
const gm=$('#gm');if(gm)gm.onclick=()=>{document.querySelectorAll('.gl img.hid').forEach(i=>i.classList.remove('hid'));gm.remove()};
const lb=$('#lb'),li=lb.querySelector('img');let L=[],ix=0;const show=n=>{ix=(n+L.length)%L.length;li.src=L[ix].src};
document.querySelectorAll('.gl img').forEach(i=>i.onclick=()=>{L=[...document.querySelectorAll('.gl img:not(.hid)')];ix=L.indexOf(i);li.src=i.src;lb.classList.add('on')});
lb.querySelector('.lbp').onclick=e=>{e.stopPropagation();show(ix-1)};lb.querySelector('.lbn').onclick=e=>{e.stopPropagation();show(ix+1)};lb.onclick=()=>lb.classList.remove('on');
addEventListener('keydown',e=>{if(!lb.classList.contains('on'))return;if(e.key=='Escape')lb.classList.remove('on');if(e.key=='ArrowLeft')show(ix-1);if(e.key=='ArrowRight')show(ix+1)});
let tx=0;lb.addEventListener('touchstart',e=>tx=e.touches[0].clientX,{passive:true});lb.addEventListener('touchend',e=>{const d=e.changedTouches[0].clientX-tx;if(Math.abs(d)>50)show(ix+(d<0?1:-1))});
const mq=$('.mq div');if(mq)mq.textContent=mq.textContent.repeat(14);
const cv=$('#sp');if(cv){const h=cv.parentElement,c=cv.getContext('2d'),S=.5,P=[],K=['#ff2fa3','#8b3dff','#19d3ff','#d7ff3a','#ff8a1f'];let k=0,lx=0,ly=0,hy=0,run=0;
const rs=()=>{cv.width=h.clientWidth*S;cv.height=h.clientHeight*S;hy=h.getBoundingClientRect().top+scrollY};rs();addEventListener('resize',rs);
new IntersectionObserver(e=>h.classList.toggle('off',!e[0].isIntersecting)).observe(h);
const hint=$('#hint'),sp=(x,y,n,m)=>{hint&&hint.classList.add('x');for(let i=0;i<n&&P.length<600;i++){const a=Math.random()*6.28,r=Math.random()*Math.random()*m;P.push({x:(x+Math.cos(a)*r)*S,y:(y+Math.sin(a)*r)*S,s:(Math.random()*2.4+1)*S*1.6,l:1,c:K[k|0],v:Math.random()<.05?(Math.random()*1.4+.4)*S:0})}if(!run){run=1;requestAnimationFrame(f)}};
function f(){c.clearRect(0,0,cv.width,cv.height);for(let i=P.length-1;i>=0;i--){const p=P[i];p.l-=.012;p.y+=p.v;if(p.l<=0){P[i]=P[P.length-1];P.pop();continue}c.globalAlpha=p.l;c.fillStyle=p.c;c.fillRect(p.x,p.y,p.s,p.s)}if(P.length)requestAnimationFrame(f);else run=0}
h.addEventListener('pointermove',e=>{const x=e.pageX,y=e.pageY-hy;if(Math.hypot(x-lx,y-ly)>10){sp(x,y,9,24);lx=x;ly=y;k=(k+.06)%K.length}},{passive:true});
h.addEventListener('pointerdown',e=>{k=(k+1)%K.length;sp(e.pageX,e.pageY-hy,110,60)})}

(function(){const sw=document.querySelectorAll('#sw button'),sz=document.querySelectorAll('#sz button'),bs=document.querySelectorAll('.pkg .pr b'),ems=document.querySelectorAll('.pkg .pr em'),szw=$('#sz');
if(!sw.length)return;let mode='dog',si=0;const fmt=n=>String(n).replace(/\B(?=(\d{3})+(?!\d))/g,'.');
const cat=[['Kratkodlaka','bez podlake'],['Dugodlaka','ili gusta dlaka']];
const set=()=>bs.forEach((b,i)=>{const v=b.dataset[mode=='dog'?'d':'c'].split(',').map(Number),t=v[Math.min(si,v.length-1)],f=+b.dataset.cur||0,t0=performance.now();b.dataset.cur=t;
(function a(n){const p=Math.min((n-t0)/380,1);b.textContent=fmt(Math.round(f+(t-f)*(1-Math.pow(1-p,3))));if(p<1)requestAnimationFrame(a)})(t0);
ems[i].textContent=mode=='dog'&&si==3?'od':''});
sw.forEach(b=>b.onclick=()=>{mode=b.dataset.s;si=0;sw.forEach(x=>x.classList.toggle('on',x==b));
sz.forEach((z,i)=>{const d=[['Mali','do 7 kg'],['Srednji','7–20 kg'],['Veliki','20–35 kg'],['Džinovski','35+ kg']][i],c=cat[i];z.style.display=mode=='dog'||c?'':'none';const q=mode=='dog'?d:c;if(q)z.innerHTML=q[0]+'<small>'+q[1]+'</small>';z.classList.toggle('on',i==0)});set()});
sz.forEach((z,i)=>z.onclick=()=>{si=i;sz.forEach(x=>x.classList.toggle('on',x==z));set()});set()})();
