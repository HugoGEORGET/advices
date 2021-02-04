var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function c(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const i="undefined"!=typeof window;let l=i?()=>window.performance.now():()=>Date.now(),u=i?t=>requestAnimationFrame(t):t;const a=new Set;function f(t){a.forEach((n=>{n.c(t)||(a.delete(n),n.f())})),0!==a.size&&u(f)}function d(t){let n;return 0===a.size&&u(f),{promise:new Promise((e=>{a.add(n={c:t,f:e})})),abort(){a.delete(n)}}}function h(t,n){t.appendChild(n)}function p(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function b(){return g(" ")}function v(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function _(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function y(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function k(t,n){t.value=null==n?"":n}const w=new Set;let x,E=0;function C(t,n,e,o,r,c,s,i=0){const l=16.666/o;let u="{\n";for(let t=0;t<=1;t+=l){const o=n+(e-n)*c(t);u+=100*t+`%{${s(o,1-o)}}\n`}const a=u+`100% {${s(e,1-e)}}\n}`,f=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${i}`,d=t.ownerDocument;w.add(d);const h=d.__svelte_stylesheet||(d.__svelte_stylesheet=d.head.appendChild($("style")).sheet),p=d.__svelte_rules||(d.__svelte_rules={});p[f]||(p[f]=!0,h.insertRule(`@keyframes ${f} ${a}`,h.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${f} ${o}ms linear ${r}ms 1 both`,E+=1,f}function N(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),E-=r,E||u((()=>{E||(w.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),w.clear())})))}function j(t){x=t}function A(){if(!x)throw new Error("Function called outside component initialization");return x}const S=[],O=[],T=[],R=[],z=Promise.resolve();let D=!1;function L(t){T.push(t)}let P=!1;const q=new Set;function F(){if(!P){P=!0;do{for(let t=0;t<S.length;t+=1){const n=S[t];j(n),M(n.$$)}for(j(null),S.length=0;O.length;)O.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];q.has(n)||(q.add(n),n())}T.length=0}while(S.length);for(;R.length;)R.pop()();D=!1,P=!1,q.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}let B;function X(){return B||(B=Promise.resolve(),B.then((()=>{B=null}))),B}function G(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const H=new Set;let I;function J(t,n){t&&t.i&&(H.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),I.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const Q={duration:0};function U(e,o,s,i){let u=o(e,s),a=i?0:1,f=null,h=null,p=null;function m(){p&&N(e,p)}function $(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function g(o){const{delay:c=0,duration:s=300,easing:i=n,tick:g=t,css:b}=u||Q,v={start:l()+c,b:o};o||(v.group=I,I.r+=1),f||h?h=v:(b&&(m(),p=C(e,a,o,s,c,i,b)),o&&g(0,1),f=$(v,s),L((()=>G(e,o,"start"))),d((t=>{if(h&&t>h.start&&(f=$(h,s),h=null,G(e,f.b,"start"),b&&(m(),p=C(e,a,f.b,f.duration,0,i,u.css))),f)if(t>=f.end)g(a=f.b,1-a),G(e,f.b,"end"),h||(f.b?m():--f.group.r||r(f.group.c)),f=null;else if(t>=f.start){const n=t-f.start;a=f.a+f.d*i(n/f.duration),g(a,1-a)}return!(!f&&!h)})))}return{run(t){c(u)?X().then((()=>{u=u(),g(t)})):g(t)},end(){m(),f=h=null}}}function V(t,n){const e=n.token={};function o(t,o,c,s){if(n.token!==e)return;n.resolved=s;let i=n.ctx;void 0!==c&&(i=i.slice(),i[c]=s);const l=t&&(n.current=t)(i);let u=!1;n.block&&(n.blocks?n.blocks.forEach(((t,e)=>{e!==o&&t&&(I={r:0,c:[],p:I},K(t,1,1,(()=>{n.blocks[e]===t&&(n.blocks[e]=null)})),I.r||r(I.c),I=I.p)})):n.block.d(1),l.c(),J(l,1),l.m(n.mount(),n.anchor),u=!0),n.block=l,n.blocks&&(n.blocks[o]=l),u&&F()}if((c=t)&&"object"==typeof c&&"function"==typeof c.then){const e=A();if(t.then((t=>{j(e),o(n.then,1,n.value,t),j(null)}),(t=>{if(j(e),o(n.catch,2,n.error,t),j(null),!n.hasCatch)throw t})),n.current!==n.pending)return o(n.pending,0),!0}else{if(n.current!==n.then)return o(n.then,1,n.value,t),!0;n.resolved=t}var c}function W(t,n,o){const{fragment:s,on_mount:i,on_destroy:l,after_update:u}=t.$$;s&&s.m(n,o),L((()=>{const n=i.map(e).filter(c);l?l.push(...n):r(n),t.$$.on_mount=[]})),u.forEach(L)}function Y(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Z(t,n){-1===t.$$.dirty[0]&&(S.push(t),D||(D=!0,z.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function tt(n,e,c,s,i,l,u=[-1]){const a=x;j(n);const f=n.$$={fragment:null,ctx:null,props:l,update:t,not_equal:i,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:u,skip_bound:!1};let d=!1;if(f.ctx=c?c(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return f.ctx&&i(f.ctx[t],f.ctx[t]=r)&&(!f.skip_bound&&f.bound[t]&&f.bound[t](r),d&&Z(n,t)),e})):[],f.update(),d=!0,r(f.before_update),f.fragment=!!s&&s(f.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);f.fragment&&f.fragment.l(t),t.forEach(m)}else f.fragment&&f.fragment.c();e.intro&&J(n.$$.fragment),W(n,e.target,e.anchor),F()}j(a)}class nt{$destroy(){Y(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function et(t,{delay:e=0,duration:o=400,easing:r=n}={}){const c=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*c}}function ot(n){let e,o,r,c,s,i,l,u=n[0].advice+"",a=n[0].id+"";return{c(){e=$("h1"),o=$("span"),r=g(u),c=b(),s=$("p"),i=g("Advice #"),l=g(a),_(e,"class","svelte-1cxhk4e")},m(t,n){p(t,e,n),h(e,o),h(o,r),p(t,c,n),p(t,s,n),h(s,i),h(s,l)},p(t,[n]){1&n&&u!==(u=t[0].advice+"")&&y(r,u),1&n&&a!==(a=t[0].id+"")&&y(l,a)},i:t,o:t,d(t){t&&m(e),t&&m(c),t&&m(s)}}}function rt(t,n,e){let{slip:o={}}=n;return t.$$set=t=>{"slip"in t&&e(0,o=t.slip)},[o]}class ct extends nt{constructor(t){super(),tt(this,t,rt,ot,s,{slip:0})}}function st(n){return{c:t,m:t,p:t,i:t,o:t,d:t}}function it(t){let n,e;return n=new ct({props:{slip:t[8]}}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,o){W(n,t,o),e=!0},p(t,e){const o={};2&e&&(o.slip=t[8]),n.$set(o)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){Y(n,t)}}}function lt(e){let o,r;return{c(){o=$("div"),o.textContent="Loading advice...",_(o,"id","loading-indicator"),_(o,"class","svelte-1xx4klr")},m(t,n){p(t,o,n)},p:t,i(s){r||L((()=>{r=function(e,o,r){let s,i,u=o(e,r),a=!1,f=0;function h(){s&&N(e,s)}function p(){const{delay:o=0,duration:r=300,easing:c=n,tick:p=t,css:m}=u||Q;m&&(s=C(e,0,1,r,o,c,m,f++)),p(0,1);const $=l()+o,g=$+r;i&&i.abort(),a=!0,L((()=>G(e,!0,"start"))),i=d((t=>{if(a){if(t>=g)return p(1,0),G(e,!0,"end"),h(),a=!1;if(t>=$){const n=c((t-$)/r);p(n,1-n)}}return a}))}let m=!1;return{start(){m||(N(e),c(u)?(u=u(),X().then(p)):p())},invalidate(){m=!1},end(){a&&(h(),a=!1)}}}(o,e[2],{}),r.start()}))},o:t,d(t){t&&m(o)}}}function ut(t){let n,e,o,c,s,i,l,u,a,f,d,g,y,w,x,E,C,N,j,A={ctx:t,current:null,token:null,hasCatch:!1,pending:lt,then:it,catch:st,value:8,blocks:[,,,]};return V(o=t[1],A),{c(){n=$("main"),e=$("section"),A.block.c(),s=b(),i=$("br"),l=b(),u=$("button"),u.textContent="New advice ?",f=b(),d=$("br"),g=b(),y=$("input"),x=b(),E=$("button"),E.textContent="Search",_(e,"class","svelte-1xx4klr"),_(y,"placeholder","Search a piece of advice..."),_(n,"class","svelte-1xx4klr")},m(o,r){p(o,n,r),h(n,e),A.block.m(e,A.anchor=null),A.mount=()=>e,A.anchor=null,h(n,s),h(n,i),h(n,l),h(n,u),h(n,f),h(n,d),h(n,g),h(n,y),k(y,t[0]),h(n,x),h(n,E),C=!0,N||(j=[v(u,"click",t[3]),v(y,"input",t[5]),v(E,"click",t[4])],N=!0)},p(n,[e]){if(t=n,A.ctx=t,2&e&&o!==(o=t[1])&&V(o,A));else{const n=t.slice();n[8]=A.resolved,A.block.p(n,e)}1&e&&y.value!==t[0]&&k(y,t[0])},i(t){C||(J(A.block),L((()=>{c||(c=U(e,et,{},!0)),c.run(1)})),L((()=>{a||(a=U(u,et,{},!0)),a.run(1)})),L((()=>{w||(w=U(y,et,{},!0)),w.run(1)})),C=!0)},o(t){for(let t=0;t<3;t+=1){K(A.blocks[t])}c||(c=U(e,et,{},!1)),c.run(0),a||(a=U(u,et,{},!1)),a.run(0),w||(w=U(y,et,{},!1)),w.run(0),C=!1},d(t){t&&m(n),A.block.d(),A.token=null,A=null,t&&c&&c.end(),t&&a&&a.end(),t&&w&&w.end(),N=!1,r(j)}}}const at="https://api.adviceslip.com/advice";function ft(t,n,e){let o="";const r=async()=>{const t=await fetch(at),n=await t.json();if(t.ok)return n.slip;throw new Error(n)};let c=r();var s;return s=r,A().$$.on_mount.push(s),[o,c,(t,{speed:n=50})=>{if(!(1===t.childNodes.length&&t.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const e=t.textContent;return{duration:e.length*n,tick:n=>{const o=~~(e.length*n);t.textContent=e.slice(0,o)}}},()=>{e(1,c=r())},()=>{e(1,c=(async()=>{if(o.length){const t=await fetch(at+"/search/"+o),n=await t.json();if(t.ok)return n.slips[0];throw new Error(n)}})())},function(){o=this.value,e(0,o)}]}return new class extends nt{constructor(t){super(),tt(this,t,ft,ut,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
