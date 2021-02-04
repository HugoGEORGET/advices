var app=function(){"use strict";function t(){}const n=t=>t;function e(t){return t()}function o(){return Object.create(null)}function r(t){t.forEach(e)}function i(t){return"function"==typeof t}function s(t,n){return t!=t?n==n:t!==n||t&&"object"==typeof t||"function"==typeof t}const c="undefined"!=typeof window;let u=c?()=>window.performance.now():()=>Date.now(),l=c?t=>requestAnimationFrame(t):t;const a=new Set;function d(t){a.forEach((n=>{n.c(t)||(a.delete(n),n.f())})),0!==a.size&&l(d)}function f(t){let n;return 0===a.size&&l(d),{promise:new Promise((e=>{a.add(n={c:t,f:e})})),abort(){a.delete(n)}}}function p(t,n){t.appendChild(n)}function h(t,n,e){t.insertBefore(n,e||null)}function m(t){t.parentNode.removeChild(t)}function $(t){return document.createElement(t)}function g(t){return document.createTextNode(t)}function _(){return g(" ")}function y(t,n,e,o){return t.addEventListener(n,e,o),()=>t.removeEventListener(n,e,o)}function b(t,n,e){null==e?t.removeAttribute(n):t.getAttribute(n)!==e&&t.setAttribute(n,e)}function v(t,n){n=""+n,t.wholeText!==n&&(t.data=n)}function w(t,n){t.value=null==n?"":n}const x=new Set;let E,k=0;function C(t,n,e,o,r,i,s,c=0){const u=16.666/o;let l="{\n";for(let t=0;t<=1;t+=u){const o=n+(e-n)*i(t);l+=100*t+`%{${s(o,1-o)}}\n`}const a=l+`100% {${s(e,1-e)}}\n}`,d=`__svelte_${function(t){let n=5381,e=t.length;for(;e--;)n=(n<<5)-n^t.charCodeAt(e);return n>>>0}(a)}_${c}`,f=t.ownerDocument;x.add(f);const p=f.__svelte_stylesheet||(f.__svelte_stylesheet=f.head.appendChild($("style")).sheet),h=f.__svelte_rules||(f.__svelte_rules={});h[d]||(h[d]=!0,p.insertRule(`@keyframes ${d} ${a}`,p.cssRules.length));const m=t.style.animation||"";return t.style.animation=`${m?`${m}, `:""}${d} ${o}ms linear ${r}ms 1 both`,k+=1,d}function N(t,n){const e=(t.style.animation||"").split(", "),o=e.filter(n?t=>t.indexOf(n)<0:t=>-1===t.indexOf("__svelte")),r=e.length-o.length;r&&(t.style.animation=o.join(", "),k-=r,k||l((()=>{k||(x.forEach((t=>{const n=t.__svelte_stylesheet;let e=n.cssRules.length;for(;e--;)n.deleteRule(e);t.__svelte_rules={}})),x.clear())})))}function A(t){E=t}function S(t){(function(){if(!E)throw new Error("Function called outside component initialization");return E})().$$.on_mount.push(t)}const j=[],O=[],T=[],R=[],z=Promise.resolve();let D=!1;function L(t){T.push(t)}let P=!1;const q=new Set;function F(){if(!P){P=!0;do{for(let t=0;t<j.length;t+=1){const n=j[t];A(n),M(n.$$)}for(A(null),j.length=0;O.length;)O.pop()();for(let t=0;t<T.length;t+=1){const n=T[t];q.has(n)||(q.add(n),n())}T.length=0}while(j.length);for(;R.length;)R.pop()();D=!1,P=!1,q.clear()}}function M(t){if(null!==t.fragment){t.update(),r(t.before_update);const n=t.dirty;t.dirty=[-1],t.fragment&&t.fragment.p(t.ctx,n),t.after_update.forEach(L)}}let B;function X(){return B||(B=Promise.resolve(),B.then((()=>{B=null}))),B}function G(t,n,e){t.dispatchEvent(function(t,n){const e=document.createEvent("CustomEvent");return e.initCustomEvent(t,!1,!1,n),e}(`${n?"intro":"outro"}${e}`))}const H=new Set;let I;function J(t,n){t&&t.i&&(H.delete(t),t.i(n))}function K(t,n,e,o){if(t&&t.o){if(H.has(t))return;H.add(t),I.c.push((()=>{H.delete(t),o&&(e&&t.d(1),o())})),t.o(n)}}const Q={duration:0};function U(e,o,s,c){let l=o(e,s),a=c?0:1,d=null,p=null,h=null;function m(){h&&N(e,h)}function $(t,n){const e=t.b-a;return n*=Math.abs(e),{a:a,b:t.b,d:e,duration:n,start:t.start,end:t.start+n,group:t.group}}function g(o){const{delay:i=0,duration:s=300,easing:c=n,tick:g=t,css:_}=l||Q,y={start:u()+i,b:o};o||(y.group=I,I.r+=1),d||p?p=y:(_&&(m(),h=C(e,a,o,s,i,c,_)),o&&g(0,1),d=$(y,s),L((()=>G(e,o,"start"))),f((t=>{if(p&&t>p.start&&(d=$(p,s),p=null,G(e,d.b,"start"),_&&(m(),h=C(e,a,d.b,d.duration,0,c,l.css))),d)if(t>=d.end)g(a=d.b,1-a),G(e,d.b,"end"),p||(d.b?m():--d.group.r||r(d.group.c)),d=null;else if(t>=d.start){const n=t-d.start;a=d.a+d.d*c(n/d.duration),g(a,1-a)}return!(!d&&!p)})))}return{run(t){i(l)?X().then((()=>{l=l(),g(t)})):g(t)},end(){m(),d=p=null}}}function V(t,n,o){const{fragment:s,on_mount:c,on_destroy:u,after_update:l}=t.$$;s&&s.m(n,o),L((()=>{const n=c.map(e).filter(i);u?u.push(...n):r(n),t.$$.on_mount=[]})),l.forEach(L)}function W(t,n){const e=t.$$;null!==e.fragment&&(r(e.on_destroy),e.fragment&&e.fragment.d(n),e.on_destroy=e.fragment=null,e.ctx=[])}function Y(t,n){-1===t.$$.dirty[0]&&(j.push(t),D||(D=!0,z.then(F)),t.$$.dirty.fill(0)),t.$$.dirty[n/31|0]|=1<<n%31}function Z(n,e,i,s,c,u,l=[-1]){const a=E;A(n);const d=n.$$={fragment:null,ctx:null,props:u,update:t,not_equal:c,bound:o(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(a?a.$$.context:[]),callbacks:o(),dirty:l,skip_bound:!1};let f=!1;if(d.ctx=i?i(n,e.props||{},((t,e,...o)=>{const r=o.length?o[0]:e;return d.ctx&&c(d.ctx[t],d.ctx[t]=r)&&(!d.skip_bound&&d.bound[t]&&d.bound[t](r),f&&Y(n,t)),e})):[],d.update(),f=!0,r(d.before_update),d.fragment=!!s&&s(d.ctx),e.target){if(e.hydrate){const t=function(t){return Array.from(t.childNodes)}(e.target);d.fragment&&d.fragment.l(t),t.forEach(m)}else d.fragment&&d.fragment.c();e.intro&&J(n.$$.fragment),V(n,e.target,e.anchor),F()}A(a)}class tt{$destroy(){W(this,1),this.$destroy=t}$on(t,n){const e=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return e.push(n),()=>{const t=e.indexOf(n);-1!==t&&e.splice(t,1)}}$set(t){var n;this.$$set&&(n=t,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function nt(t,{delay:e=0,duration:o=400,easing:r=n}={}){const i=+getComputedStyle(t).opacity;return{delay:e,duration:o,easing:r,css:t=>"opacity: "+t*i}}function et(t){let n,e,o,r,i,s,c,u,l,a,d=t[0].advice+"",f=t[0].id+"";return{c(){n=$("h1"),e=$("span"),o=g(d),i=_(),s=$("p"),c=g("Advice #"),u=g(f),b(n,"class","svelte-1cxhk4e")},m(t,r){h(t,n,r),p(n,e),p(e,o),h(t,i,r),h(t,s,r),p(s,c),p(s,u),a=!0},p(t,[n]){(!a||1&n)&&d!==(d=t[0].advice+"")&&v(o,d),(!a||1&n)&&f!==(f=t[0].id+"")&&v(u,f)},i(t){a||(L((()=>{r||(r=U(e,nt,{},!0)),r.run(1)})),L((()=>{l||(l=U(s,nt,{},!0)),l.run(1)})),a=!0)},o(t){r||(r=U(e,nt,{},!1)),r.run(0),l||(l=U(s,nt,{},!1)),l.run(0),a=!1},d(t){t&&m(n),t&&r&&r.end(),t&&m(i),t&&m(s),t&&l&&l.end()}}}function ot(t,n,e){let{slip:o={}}=n;return t.$$set=t=>{"slip"in t&&e(0,o=t.slip)},[o]}class rt extends tt{constructor(t){super(),Z(this,t,ot,et,s,{slip:0})}}function it(e){let o,r;return{c(){o=$("p"),o.textContent="Loading advice..."},m(t,n){h(t,o,n)},p:t,i(s){r||L((()=>{r=function(e,o,r){let s,c,l=o(e,r),a=!1,d=0;function p(){s&&N(e,s)}function h(){const{delay:o=0,duration:r=300,easing:i=n,tick:h=t,css:m}=l||Q;m&&(s=C(e,0,1,r,o,i,m,d++)),h(0,1);const $=u()+o,g=$+r;c&&c.abort(),a=!0,L((()=>G(e,!0,"start"))),c=f((t=>{if(a){if(t>=g)return h(1,0),G(e,!0,"end"),p(),a=!1;if(t>=$){const n=i((t-$)/r);h(n,1-n)}}return a}))}let m=!1;return{start(){m||(N(e),i(l)?(l=l(),X().then(h)):h())},invalidate(){m=!1},end(){a&&(p(),a=!1)}}}(o,e[2],{}),r.start()}))},o:t,d(t){t&&m(o)}}}function st(t){let n,e;return n=new rt({props:{slip:t[0]}}),{c(){var t;(t=n.$$.fragment)&&t.c()},m(t,o){V(n,t,o),e=!0},p(t,e){const o={};1&e&&(o.slip=t[0]),n.$set(o)},i(t){e||(J(n.$$.fragment,t),e=!0)},o(t){K(n.$$.fragment,t),e=!1},d(t){W(n,t)}}}function ct(t){let n,e,o,i,s,c,u,l,a,d,f,g,v,x,E,k,C,N;const A=[st,it],S=[];function j(t,n){return t[0]?0:1}return e=j(t),o=S[e]=A[e](t),{c(){n=$("main"),o.c(),i=_(),s=$("br"),c=_(),u=$("button"),u.textContent="New advice ?",a=_(),d=$("br"),f=_(),g=$("input"),x=_(),E=$("button"),E.textContent="Search",b(g,"placeholder","Search a piece of advice..."),b(n,"class","svelte-177t831")},m(o,r){h(o,n,r),S[e].m(n,null),p(n,i),p(n,s),p(n,c),p(n,u),p(n,a),p(n,d),p(n,f),p(n,g),w(g,t[1]),p(n,x),p(n,E),k=!0,C||(N=[y(u,"click",t[4]),y(g,"input",t[5]),y(E,"click",t[6])],C=!0)},p(t,[s]){let c=e;e=j(t),e===c?S[e].p(t,s):(I={r:0,c:[],p:I},K(S[c],1,1,(()=>{S[c]=null})),I.r||r(I.c),I=I.p,o=S[e],o?o.p(t,s):(o=S[e]=A[e](t),o.c()),J(o,1),o.m(n,i)),2&s&&g.value!==t[1]&&w(g,t[1])},i(t){k||(J(o),L((()=>{l||(l=U(u,nt,{},!0)),l.run(1)})),L((()=>{v||(v=U(g,nt,{},!0)),v.run(1)})),k=!0)},o(t){K(o),l||(l=U(u,nt,{},!1)),l.run(0),v||(v=U(g,nt,{},!1)),v.run(0),k=!1},d(t){t&&m(n),S[e].d(),t&&l&&l.end(),t&&v&&v.end(),C=!1,r(N)}}}const ut="https://api.adviceslip.com/advice";function lt(t,n,e){let o={},r="";const i=async()=>{const t=await fetch(ut+"/search/"+r),n=await t.json();e(0,o=n.slips[0]),console.log(o)};S((async()=>{const t=await fetch(ut),n=await t.json();e(0,o=n.slip)}));return[o,r,(t,{speed:n=50})=>{if(!(1===t.childNodes.length&&t.childNodes[0].nodeType===Node.TEXT_NODE))throw new Error("This transition only works on elements with a single text node child");const e=t.textContent;return{duration:e.length*n,tick:n=>{const o=~~(e.length*n);t.textContent=e.slice(0,o)}}},i,()=>window.location.reload(),function(){r=this.value,e(1,r)},()=>i()]}return new class extends tt{constructor(t){super(),Z(this,t,lt,ct,s,{})}}({target:document.body})}();
//# sourceMappingURL=bundle.js.map
