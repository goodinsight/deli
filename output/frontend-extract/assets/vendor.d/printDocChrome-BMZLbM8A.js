import"../js.d/main-Cm9wS5wt.js";const N="Pretendard Doc",t={font:`'${N}',sans-serif`,ink:"#0f172a",text:"#1e293b",sub:"#475569",muted:"#64748b",line:"#bfbfba",lineStrong:"#a8a8a2",headFill:"#ffffff",headText:"#787774",totalFill:"#f8f8f7",accent:"#2563eb",headInk:"#334155",danger:"#dc2626"},U=`
        .doc-frame { stroke: none; }
        .meta, .v-meta { font-family: ${t.font}; font-size: 10.5px; font-weight: 400; fill: ${t.muted}; }
        .doc-type { font-family: ${t.font}; font-size: 24px; font-weight: 700; fill: ${t.ink}; letter-spacing: 0; }
        .doc-title, .v-subtitle { font-family: ${t.font}; font-size: 13px; font-weight: 400; fill: ${t.sub}; }
        .doc-accent { fill: ${t.accent}; }
        .thead-bg { fill: ${t.headFill}; }
        .thead { font-family: ${t.font}; font-size: 10.5px; font-weight: 500; fill: ${t.headText}; }
        .cell, .v-value, .tbl-text { font-family: ${t.font}; fill: ${t.text}; }
        .tbl-text-head { font-weight: 500; fill: ${t.headText}; }
        .tbl-box { stroke: ${t.line}; }
        .total-bg, .section-bg { fill: ${t.totalFill}; }
        .total-label, .total-amount, .summary-label, .section-label, .remark-label { font-family: ${t.font}; fill: ${t.ink}; }
        .remark-text { font-family: ${t.font}; fill: ${t.sub}; }
        .grid-line { stroke: ${t.line}; stroke-width: 0.6; vector-effect: non-scaling-stroke; shape-rendering: crispEdges; }
        .row-line { stroke: ${t.line}; stroke-width: 0.6; vector-effect: non-scaling-stroke; shape-rendering: crispEdges; }
        .meta-line { stroke: ${t.line}; }
        .meta-label { font-family: ${t.font}; font-size: 11px; font-weight: 400; fill: ${t.muted}; dominant-baseline: middle; }
        .meta-value { font-family: ${t.font}; font-size: 11.5px; font-weight: 400; fill: ${t.ink}; dominant-baseline: middle; }
        .meta-cell-bg { fill: ${t.totalFill}; }
        .stamp-frame { stroke: ${t.lineStrong}; }
        .stamp-line { stroke: ${t.line}; }
        .stamp-pos { font-family: ${t.font}; fill: ${t.muted}; }
        .stamp-name, .stamp-date { font-family: ${t.font}; fill: ${t.text}; }
        .doc-guide { font-family: ${t.font}; font-size: 13px; font-weight: 400; fill: ${t.sub}; }
        .doc-date, .v-date { font-family: ${t.font}; font-size: 13px; font-weight: 400; fill: ${t.ink}; letter-spacing: 0; }
        .doc-author { font-family: ${t.font}; font-size: 12px; font-weight: 400; fill: ${t.sub}; }
        .page-count { font-family: ${t.font}; fill: ${t.muted}; }
        /* 글자 크기 — 문서는 화면에서 약 1.3배로 그려진다(A4 595pt → 문서 칸 약 780px). 10pt 가 화면 13px 쯤이라 그 아래로 내리지 않는다(2026-10-06 "폰트가 너무 작다"). */
        .dh-kind { font-family: ${t.font}; font-size: 11.5px; font-weight: 600; fill: ${t.accent}; }
        .dh-title { font-family: ${t.font}; font-size: 22px; font-weight: 700; fill: ${t.ink}; }
        .dh-meta { font-family: ${t.font}; font-size: 11px; font-weight: 400; fill: ${t.muted}; }
        .dh-meta-value { font-weight: 500; fill: ${t.headInk}; }
        .al-track { stroke: ${t.line}; stroke-width: 1.5; }
        .al-seg { stroke-width: 1.5; }
        .al-seg.al-done { stroke: ${t.accent}; }
        .al-seg.al-rejected { stroke: ${t.danger}; }
        .al-dot { fill: #ffffff; stroke: ${t.lineStrong}; stroke-width: 1.5; }
        .al-dot.al-done { fill: ${t.accent}; stroke: ${t.accent}; }
        .al-dot.al-rejected { fill: ${t.danger}; stroke: ${t.danger}; }
        .al-role { font-family: ${t.font}; font-size: 10px; font-weight: 400; fill: ${t.headText}; }
        .al-name { font-family: ${t.font}; font-size: 12.5px; font-weight: 600; fill: ${t.ink}; }
        .al-when { font-family: ${t.font}; font-size: 10px; font-weight: 400; fill: ${t.muted}; }
        .al-when-wait { fill: #b0b0ac; }
        .al-when-rejected { fill: ${t.danger}; font-weight: 600; }
        .doc-sec { font-family: ${t.font}; font-size: 10.5px; font-weight: 600; fill: ${t.headText}; letter-spacing: 0.3px; }
        /* 표·줄 목록의 선은 색·굵기를 하나로 맞춘다(2026-10-06). 머리줄만 진하게 두면 한 표 안에서 선이 제각각으로 보였고,
           문서가 화면에서 1.3배쯤 확대돼 1pt 선이 줄마다 1px·2px 로 다르게 찍혔다 — non-scaling-stroke 로 화면 픽셀 기준 굵기를 쓴다.
           굵기를 1 이 아니라 0.6 으로 두는 이유: 결재 창의 글자 확대(CSS zoom)는 이 굵기에도 곱해져, 1 이면 1.2px 가 되어
           다시 줄마다 1px·2px 로 갈린다. 0.6 이면 확대 1.6배까지 1px 아래라 crispEdges 가 모두 1px 로 맞춘다. */
        .ft-line-strong { stroke: ${t.line}; stroke-width: 0.6; vector-effect: non-scaling-stroke; shape-rendering: crispEdges; }
        .ft-line { stroke: ${t.line}; stroke-width: 0.6; vector-effect: non-scaling-stroke; shape-rendering: crispEdges; }
        .ft-label-bg { fill: ${t.totalFill}; }
        .ft-label { font-family: ${t.font}; font-size: 10.5px; font-weight: 500; fill: ${t.headText}; dominant-baseline: central; }
        .ft-value { font-family: ${t.font}; font-size: 12px; font-weight: 400; fill: ${t.ink}; dominant-baseline: central; }
        .lt-head { font-family: ${t.font}; font-size: 10px; font-weight: 500; fill: ${t.headText}; }
        .lt-head-line { stroke: ${t.line}; stroke-width: 0.6; vector-effect: non-scaling-stroke; shape-rendering: crispEdges; }
        .lt-row-line { stroke: ${t.line}; stroke-width: 0.6; vector-effect: non-scaling-stroke; shape-rendering: crispEdges; }
        .lt-main { font-family: ${t.font}; font-size: 12px; font-weight: 400; fill: ${t.text}; dominant-baseline: middle; }
        .lt-strong { font-weight: 600; fill: ${t.ink}; }
        .lt-sub { font-family: ${t.font}; font-size: 10.5px; font-weight: 400; fill: ${t.muted}; dominant-baseline: middle; }
        .lt-total-label { font-family: ${t.font}; font-size: 11px; font-weight: 400; fill: ${t.headText}; }
        .lt-total { font-family: ${t.font}; font-size: 17px; font-weight: 700; fill: ${t.ink}; }
        .dfoot-guide { font-family: ${t.font}; font-size: 12.5px; font-weight: 500; fill: ${t.ink}; }
        .dfoot-date { font-family: ${t.font}; font-size: 11px; font-weight: 400; fill: ${t.muted}; }
        .attach-line { stroke: none; }
        .attach-head { font-family: ${t.font}; font-size: 10.5px; font-weight: 600; fill: ${t.headText}; letter-spacing: 0.3px; }
        .attach-item { font-family: ${t.font}; font-size: 11.5px; font-weight: 400; fill: ${t.text}; }
        .start { text-anchor: start; }
        .end { text-anchor: end; }`;function q(e,n){return`<rect x="${(e-14).toFixed(2)}" y="${n}" width="28" height="2.5" rx="1.25" class="doc-accent"/>`}function c(e){return String(e??"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/\"/g,"&quot;").replace(/'/g,"&#39;")}function O(e){if(e===" ")return .3;const n=e.codePointAt(0)??0;return n>=4352&&n<=4607||n>=12288&&n<=40959||n>=44032&&n<=55203||n>=63744&&n<=64255||n>=65280&&n<=65519?1:.55}let y;const v=new Map;function j(e,n){let l=v.get(e);return l==null&&(y===void 0&&(y=typeof document>"u"?null:document.createElement("canvas").getContext("2d")),y&&(y.font=`400 100px ${t.font}`,l=y.measureText(e).width/100*1.02),l||(l=O(e)),v.set(e,l)),n*l}async function V(e){v.clear(),!(typeof document>"u"||!document.fonts)&&await Promise.all([400,700].map(n=>document.fonts.load(`${n} 12px ${t.font}`,e).catch(()=>{})))}function m(e,n){let l=0;for(const o of e)l+=j(o,n);return l}function z(e,n,l){const o=[];for(const a of String(e??"").split(/\r?\n/)){let i="";for(const f of a.trim().split(/\s+/).filter(Boolean)){const r=i?`${i} ${f}`:f;if(m(r,l)<=n){i=r;continue}i&&o.push(i),i="";for(const s of f)i&&m(i+s,l)>n?(o.push(i),i=s):i+=s}i&&o.push(i)}return o}function k(e,n,l){if(m(e,l)<=n)return e;let o=e;for(;o&&m(`${o}…`,l)>n;)o=o.slice(0,-1);return`${o}…`}const Z=174,W=24,A=22,C=86,R=118;function M(e,n,l,o){if(e.length===0)return"";const a=e.some(s=>s.approved&&s.signatureImage),i=Math.min((l-n)/e.length,a?R:C),f=s=>n+i*s+4,r=[];return e.forEach((s,d)=>{d!==e.length-1&&r.push(`<line x1="${f(d)}" y1="${o}" x2="${f(d+1)}" y2="${o}" class="${s.approved?"al-seg al-done":"al-track"}"/>`)}),e.forEach((s,d)=>{const x=n+i*d,u=s.rejected?"al-rejected":s.approved?"al-done":"";r.push(`<circle cx="${f(d)}" cy="${o}" r="4" class="al-dot ${u}"/>`);const $=i-10,h=String(s.role_name??"").trim(),g=o+(h?32:19);h&&r.push(`<text x="${x}" y="${o+17}" class="al-role">${c(k(h,$,10))}</text>`),r.push(`<text x="${x}" y="${g}" class="al-name">${c(k(s.name||"-",$,12.5))}</text>`);const E=s.rejected?`${s.dateText} 반려`.trim():s.approved?s.dateText:"대기",_=s.rejected?"al-when al-when-rejected":s.approved?"al-when":"al-when al-when-wait";if(r.push(`<text x="${x}" y="${g+14}" class="${_}">${c(E)}</text>`),s.approved&&s.signatureImage&&i>=90){const p=s.signatureImage;r.push(`<image href="${p}" xlink:href="${p}" x="${x+i-46}" y="${o+10}" width="36" height="36" preserveAspectRatio="xMidYMid meet"/>`)}}),r.join("")}function J(e){const{left:n,right:l}=e,o=[],a=String(e.docNo??"").trim();a&&o.push(`<text x="${n}" y="${e.top}" class="dh-meta"><tspan>문서번호 </tspan><tspan class="dh-meta-value">${c(a)}</tspan></text>`);const i=e.top+W,f=String(e.kind??"").trim(),r=String(e.title??"").trim();r&&o.push(`<text x="${n}" y="${i+8}" class="dh-kind">${c(f)}</text>`),o.push(`<text x="${n}" y="${i+34}" class="dh-title">${c(k(r||f,l-n,A))}</text>`);const s=[];s.push(["중요도",e.importance||"-"],["보존",e.retentionPeriod||"-"]),s.push(...e.extraMeta??[]);const d=s.map(([u,$],h)=>`<tspan${h>0?' dx="10"':""}>${c(u)} </tspan><tspan class="dh-meta-value">${c($)}</tspan>`).join("");o.push(`<text x="${n}" y="${i+58}" class="dh-meta">${d}</text>`);const x=e.stampers.some(u=>String(u.role_name??"").trim());return o.push(M(e.stampers,n,l,i+(x?89:95.5))),o.join("")}function K(e,n,l){return`<text x="${e}" y="${n}" class="doc-sec">${c(l)}</text>`}const w=28,T=78,L=12;function S(e,n){const l=n/2-T-20,o=[];let a=null;for(const i of e)i.wide===!0||m(i.value||"-",L)>l?(o.push([i]),a=null):a?(a.push(i),a=null):(a=[i],o.push(a));return o}function Q(e,n,l){return S(e,l-n).length}function Y(e,n,l,o){const a=S(e,l-n),i=[],f=[`<line x1="${n}" y1="${o}" x2="${l}" y2="${o}" class="ft-line"/>`],r=[];return a.forEach((d,x)=>{const u=o+w*x,$=u+w/2,h=(l-n)/(d.length===1?1:2);d.forEach((E,_)=>{const p=n+h*_;i.push(`<rect x="${p}" y="${u}" width="${T}" height="${w}" class="ft-label-bg"/>`),r.push(`<text x="${p+10}" y="${$}" class="ft-label">${c(E.label)}</text>`),r.push(`<text x="${p+T+10}" y="${$}" class="ft-value">${c(k(E.value||"-",h-T-20,L))}</text>`)});const g=u+w;f.push(`<line x1="${n}" y1="${g}" x2="${l}" y2="${g}" class="ft-line"/>`)}),{svg:[...i,...f,...r].join(""),bottom:o+w*a.length}}const P=22,F=10,b=16,I=14,H=12,G=10.5;function tt(e,n,l,o){const a=o+P,i=e.map(f=>`<text x="${f.x}" y="${o+11}" class="lt-head ${f.anchor}">${c(f.label)}</text>`);return i.push(`<line x1="${n}" y1="${a}" x2="${l}" y2="${a}" class="lt-head-line"/>`),{svg:i.join(""),bottom:a}}function D(e,n){const l=String(n.text??"").trim()||"-",o=String(n.sub??"").trim();if(!e.width||e.anchor==="end")return{main:[l],sub:o?[o]:[]};const a=z(l,e.width,H);return a.length>2&&(a.length=2,a[1]=k(`${a[1]}…`,e.width,H)),{main:a,sub:o?z(o,e.width,G):[]}}function B(e,n){let l=b;return e.forEach((o,a)=>{const{main:i,sub:f}=D(o,n[a]??{text:""});l=Math.max(l,i.length*b+f.length*I)}),F*2+l}function et(e,n,l,o,a){const i=B(e,n),f=[];return e.forEach((r,s)=>{const d=n[s]??{text:""},{main:x,sub:u}=D(r,d);let $=a+F+b/2;for(const h of x)f.push(`<text x="${r.x}" y="${$}" class="${d.strong?"lt-main lt-strong":"lt-main"} ${r.anchor}">${c(h)}</text>`),$+=b;$+=(I-b)/2;for(const h of u)f.push(`<text x="${r.x}" y="${$}" class="lt-sub ${r.anchor}">${c(h)}</text>`),$+=I}),f.push(`<line x1="${l}" y1="${a+i}" x2="${o}" y2="${a+i}" class="lt-row-line"/>`),f.join("")}const nt=44;function ot(e,n,l){const o=l+29;return`<text x="${n-m(e,17)-12}" y="${o}" class="lt-total-label end">합계</text><text x="${n}" y="${o}" class="lt-total end">${c(e)}</text>`}const lt=60;function it(e){const{left:n,right:l,top:o}=e,a=e.dateParts.map(f=>f.replace(/\s+/g,"")).join(" "),i=[`<text x="${n}" y="${o+28}" class="dfoot-guide">${c(e.guide)}</text>`,`<text x="${n}" y="${o+46}" class="dfoot-date">${c(a)}</text>`];return String(e.authorName??"").trim()&&i.push(`<text x="${l}" y="${o+46}" class="dfoot-date end">${c(`${e.authorLabel??"작성자"} ${e.authorName}`)}</text>`),i.join("")}export{N as D,nt as L,t as T,Y as a,K as b,tt as c,q as d,c as e,et as f,U as g,J as h,Q as i,lt as j,it as k,Z as l,B as m,w as n,ot as o,V as p,m as q,z as w};
