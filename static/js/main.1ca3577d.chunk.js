(this.webpackJsonpminesweeper=this.webpackJsonpminesweeper||[]).push([[0],[,,,,,,,,,,,,,function(e,t,l){},,function(e,t,l){},function(e,t,l){},function(e,t,l){},function(e,t,l){"use strict";l.r(t);var n,o,i,a=l(8),u=l.n(a),s=l(3),v=l(1);!function(e){e[e.none=0]="none",e[e.one=1]="one",e[e.two=2]="two",e[e.three=3]="three",e[e.four=4]="four",e[e.five=5]="five",e[e.six=6]="six",e[e.seven=7]="seven",e[e.eight=8]="eight",e[e.bomb=9]="bomb"}(n||(n={})),function(e){e[e.open=0]="open",e[e.visible=1]="visible",e[e.flagged=2]="flagged"}(o||(o={})),function(e){e.smile="\ud83d\ude01",e.oh="\ud83d\ude2e",e.lost="\ud83d\ude35",e.won="\ud83d\ude0e"}(i||(i={}));var r=l(2),b=l(7),c=function(e,t,l){return{topLeftCell:t>0&&l>0?e[t-1][l-1]:null,topCell:t>0?e[t-1][l]:null,topRightCell:t>0&&l<8?e[t-1][l+1]:null,leftCell:l>0?e[t][l-1]:null,rightCell:l<8?e[t][l+1]:null,bottomLeftCell:t<8&&l>0?e[t+1][l-1]:null,bottomCell:t<8&&t<8?e[t+1][l]:null,bottomRightCell:t<8&&l<8?e[t+1][l+1]:null}},f=function(){for(var e=[],t=0;t<9;t++){e.push([]);for(var l=0;l<9;l++)e[t].push({value:n.none,state:o.open})}e=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,l=Object(b.a)(e),o=0,i=function(){var e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());l[e][t].value!==n.bomb&&(l=l.map((function(l,o){return l.map((function(l,i){return e===o&&t===i?Object(r.a)(Object(r.a)({},l),{},{value:n.bomb}):l}))})),o++)};o<t;)i();return l}(e,10);for(var i=0;i<9;i++)for(var a=0;a<9;a++){var u=e[i][a];if(u.value!==n.bomb){var s=0,v=c(e,i,a),f=v.topLeftCell,d=v.topCell,m=v.topRightCell,p=v.leftCell,j=v.rightCell,g=v.bottomLeftCell,h=v.bottomCell,C=v.bottomRightCell;(null===f||void 0===f?void 0:f.value)===n.bomb&&s++,(null===d||void 0===d?void 0:d.value)===n.bomb&&s++,(null===m||void 0===m?void 0:m.value)===n.bomb&&s++,(null===p||void 0===p?void 0:p.value)===n.bomb&&s++,(null===j||void 0===j?void 0:j.value)===n.bomb&&s++,(null===g||void 0===g?void 0:g.value)===n.bomb&&s++,(null===h||void 0===h?void 0:h.value)===n.bomb&&s++,(null===C||void 0===C?void 0:C.value)===n.bomb&&s++,s>0&&(e[i][a]=Object(r.a)(Object(r.a)({},u),{},{value:s}))}}return e},d=function e(t,l,i){var a=t[l][i];if(a.state===o.visible||a.state===o.flagged)return t;var u=t.slice();u[l][i].state=o.visible;var s=c(t,l,i),v=s.topLeftCell,r=s.topCell,b=s.topRightCell,f=s.leftCell,d=s.rightCell,m=s.bottomLeftCell,p=s.bottomCell,j=s.bottomRightCell;return(null===v||void 0===v?void 0:v.state)===o.open&&v.value!==n.bomb&&(v.value===n.none?u=e(u,l-1,i-1):u[l-1][i-1].state=o.visible),(null===r||void 0===r?void 0:r.state)===o.open&&r.value!==n.bomb&&(r.value===n.none?u=e(u,l-1,i):u[l-1][i].state=o.visible),(null===b||void 0===b?void 0:b.state)===o.open&&b.value!==n.bomb&&(b.value===n.none?u=e(u,l-1,i+1):u[l-1][i+1].state=o.visible),(null===f||void 0===f?void 0:f.state)===o.open&&f.value!==n.bomb&&(f.value===n.none?u=e(u,l,i-1):u[l][i-1].state=o.visible),(null===d||void 0===d?void 0:d.state)===o.open&&d.value!==n.bomb&&(d.value===n.none?u=e(u,l,i+1):u[l][i+1].state=o.visible),(null===m||void 0===m?void 0:m.state)===o.open&&m.value!==n.bomb&&(m.value===n.none?u=e(u,l+1,i-1):u[l+1][i-1].state=o.visible),(null===p||void 0===p?void 0:p.state)===o.open&&p.value!==n.bomb&&(p.value===n.none?u=e(u,l+1,i):u[l+1][i].state=o.visible),(null===j||void 0===j?void 0:j.state)===o.open&&j.value!==n.bomb&&(j.value===n.none?u=e(u,l+1,i+1):u[l+1][i+1].state=o.visible),u},m=(l(13),l(0)),p=function(e){var t=e.value;return Object(m.jsx)("div",{className:"NumberDisplay",children:Object(m.jsx)("span",{children:t<0?"-".concat(Math.abs(t).toString().padStart(2,"0")):t.toString().padStart(3,"0")})})},j=(l(15),function(e){var t=e.state,l=e.value,i=e.row,a=e.col,u=e.onClick,s=e.onContext;return Object(m.jsx)("div",{className:"Button ".concat(t===o.visible?"visible":""," value-").concat(l),onClick:u(i,a),onContextMenu:s(i,a),children:function(){if(t===o.visible){if(l===n.bomb)return Object(m.jsx)("span",{role:"img","aria-label":"bomb",children:"\ud83d\udca3"});if(l!==n.none)return Object(m.jsx)("span",{children:l});if(l===n.none)return null}else if(t===o.flagged)return Object(m.jsx)("span",{role:"img","aria-label":"flag",children:"\ud83d\udea9"});return null}()})}),g=(l(16),function(){var e=Object(v.useState)(f()),t=Object(s.a)(e,2),l=t[0],a=t[1],u=Object(v.useState)(i.smile),r=Object(s.a)(u,2),b=r[0],c=r[1],g=Object(v.useState)(0),h=Object(s.a)(g,2),C=h[0],O=h[1],x=Object(v.useState)(!1),w=Object(s.a)(x,2),L=w[0],S=w[1],k=Object(v.useState)(10),N=Object(s.a)(k,2),E=N[0],R=N[1];Object(v.useEffect)((function(){var e=function(e){e.target.className.toString().startsWith("Button")&&("mouseup"===e.type?c(i.smile):"mousedown"===e.type&&c(i.oh))};return window.addEventListener("mouseup",e),window.addEventListener("mousedown",e),function(){window.removeEventListener("mouseup",e),window.removeEventListener("mousedown",e)}}),[]),Object(v.useEffect)((function(){if(L&&C<999){var e=setInterval((function(){O(C+1)}),1e3);return function(){clearInterval(e)}}}),[L,C]);var M=function(e,t){return function(){L||S(!0);var i=l.slice(),u=l[e][t];[o.flagged,o.visible].includes(u.state)?console.log("Click on flag or visible"):(u.value===n.bomb||(u.value===n.none?i=d(l,e,t):i[e][t].state=o.visible),a(i))}},y=function(e,t){return function(n){if(n.preventDefault(),L){var i=l.slice(),u=l[e][t];u.state!==o.visible&&(u.state===o.open&&E>-99?(i[e][t].state=o.flagged,a(i),R(E-1)):u.state===o.flagged&&(i[e][t].state=o.open,a(i),R(E+1)))}}};return Object(m.jsxs)("div",{className:"App",children:[Object(m.jsxs)("div",{className:"Header",children:[Object(m.jsx)(p,{value:E}),Object(m.jsx)("div",{className:"Face",children:Object(m.jsx)("span",{role:"img","aria-label":"face",onClick:function(){console.log("Click face"),L&&(S(!1),O(0),a(f()))},children:b})}),Object(m.jsx)(p,{value:C})]}),Object(m.jsx)("div",{className:"Body",children:l.map((function(e,t){return e.map((function(e,l){return Object(m.jsx)(j,{state:e.state,value:e.value,onClick:M,onContext:y,row:t,col:l},"".concat(t-l))}))}))}),Object(m.jsx)("button",{onClick:function(){for(var e=l.slice(),t=0;t<e.length;t++)for(var i=0;i<e.length;i++){var u=l[t][i];console.log(u),u.state!==o.visible&&u.state!==o.flagged&&u.value!==n.bomb&&(u.state=o.visible)}a(e)},children:"Reval"})]})});l(17);u.a.render(Object(m.jsx)(g,{}),document.getElementById("root"))}],[[18,1,2]]]);
//# sourceMappingURL=main.1ca3577d.chunk.js.map