(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{18:function(e,t,a){e.exports=a(45)},23:function(e,t,a){},24:function(e,t,a){},25:function(e,t,a){},26:function(e,t,a){},45:function(e,t,a){"use strict";a.r(t);var l,o,n,u=a(0),i=a.n(u),s=a(16),r=a.n(s),v=(a(23),a(2)),b=a(3);!function(e){e[e.none=0]="none",e[e.one=1]="one",e[e.two=2]="two",e[e.three=3]="three",e[e.four=4]="four",e[e.five=5]="five",e[e.six=6]="six",e[e.seven=7]="seven",e[e.eight=8]="eight",e[e.bomb=9]="bomb"}(l||(l={})),function(e){e[e.open=0]="open",e[e.visible=1]="visible",e[e.flagged=2]="flagged"}(o||(o={})),function(e){e.smile="\ud83d\ude01",e.oh="\ud83d\ude2e",e.lost="\ud83d\ude35",e.won="\ud83d\ude0e"}(n||(n={}));var c=a(17),f=function(e,t,a){return{topLeftCell:t>0&&a>0?e[t-1][a-1]:null,topCell:t>0?e[t-1][a]:null,topRightCell:t>0&&a<8?e[t-1][a+1]:null,leftCell:a>0?e[t][a-1]:null,rightCell:a<8?e[t][a+1]:null,bottomLeftCell:t<8&&a>0?e[t+1][a-1]:null,bottomCell:t<8&&t<8?e[t+1][a]:null,bottomRightCell:t<8&&a<8?e[t+1][a+1]:null}},m=function(){for(var e=[],t=0;t<9;t++){e.push([]);for(var a=0;a<9;a++)e[t].push({value:l.none,state:o.open})}e=function(e){for(var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10,a=Object(c.a)(e),o=0,n=function(){var e=Math.floor(9*Math.random()),t=Math.floor(9*Math.random());a[e][t].value!==l.bomb&&(a=a.map((function(a,o){return a.map((function(a,n){return e===o&&t===n?Object(v.a)(Object(v.a)({},a),{},{value:l.bomb}):a}))})),o++)};o<t;)n();return a}(e,10);for(var n=0;n<9;n++)for(var u=0;u<9;u++){var i=e[n][u];if(i.value!==l.bomb){var s=0,r=f(e,n,u),b=r.topLeftCell,m=r.topCell,d=r.topRightCell,g=r.leftCell,p=r.rightCell,h=r.bottomLeftCell,w=r.bottomCell,O=r.bottomRightCell;(null===b||void 0===b?void 0:b.value)===l.bomb&&s++,(null===m||void 0===m?void 0:m.value)===l.bomb&&s++,(null===d||void 0===d?void 0:d.value)===l.bomb&&s++,(null===g||void 0===g?void 0:g.value)===l.bomb&&s++,(null===p||void 0===p?void 0:p.value)===l.bomb&&s++,(null===h||void 0===h?void 0:h.value)===l.bomb&&s++,(null===w||void 0===w?void 0:w.value)===l.bomb&&s++,(null===O||void 0===O?void 0:O.value)===l.bomb&&s++,s>0&&(e[n][u]=Object(v.a)(Object(v.a)({},i),{},{value:s}))}}return e},d=(a(24),function(e){var t=e.value;return i.a.createElement("div",{className:"NumberDisplay"},i.a.createElement("span",null,t<0?"-".concat(Math.abs(t).toString().padStart(2,"0")):t.toString().padStart(3,"0")))}),g=(a(25),function(e){var t=e.state,a=e.value,n=e.row,u=e.col,s=e.onClick,r=e.onContext,v=e.red,b=e.live,c=e.hesDie;return i.a.createElement("button",{className:"Button ".concat(t===o.visible?"visible":""," value-").concat(a," ").concat(v?"red":""," ").concat(b?"live":""),onContextMenu:r(n,u),onClick:c?function(){}:s(n,u)},function(){if(t===o.visible){if(a===l.bomb)return i.a.createElement("span",{role:"img","aria-label":"bomb"},"\ud83d\udca3");if(a!==l.none)return i.a.createElement("span",null,a);if(a===l.none)return null}else if(t===o.flagged)return i.a.createElement("span",{role:"img","aria-label":"flag"},"\ud83d\udea9");return null}())}),p=(a(26),a(6),function(){var e={str:"".concat(JSON.stringify(m())),bombs:0};return{cells:JSON.parse(e.str),bombs:(null===e||void 0===e?void 0:e.bombs)||0}}),h=function(){var e=Object(u.useState)(p().cells),t=Object(b.a)(e,2),a=t[0],s=t[1],r=Object(u.useState)(n.smile),c=Object(b.a)(r,2),h=c[0],w=c[1],O=Object(u.useState)(0),C=Object(b.a)(O,2),j=C[0],E=C[1],S=Object(u.useState)(!1),N=Object(b.a)(S,2),k=N[0],L=N[1],x=Object(u.useState)(10-p().bombs),y=Object(b.a)(x,2),B=y[0],M=y[1],R=Object(u.useState)(!1),D=Object(b.a)(R,2),J=D[0],I=D[1],W=Object(u.useState)(!1),A=Object(b.a)(W,2),F=A[0],H=A[1];Object(u.useEffect)((function(){var e=function(e){k&&(e.target.className.toString().startsWith("Button")&&("mouseup"===e.type?w(n.smile):"mousedown"===e.type&&w(n.oh)))};return window.addEventListener("mouseup",e),window.addEventListener("mousedown",e),function(){window.removeEventListener("mouseup",e),window.removeEventListener("mousedown",e)}}),[k]),Object(u.useEffect)((function(){if(k&&j<999){var e=setInterval((function(){E(j+1)}),1e3);return function(){clearInterval(e)}}}),[k,j]);var $=Object(u.useCallback)((function(){return a.slice().map((function(e){return e.map((function(e){return e.value===l.bomb?Object(v.a)(Object(v.a)({},e),{},{state:o.visible}):e}))}))}),[a]);Object(u.useEffect)((function(){if(J){var e=$();s(e),w(n.lost),L(!1)}if(F){var t=a.slice().map((function(e){return e.map((function(e){return e.state!==o.visible&&e.state!==o.flagged?Object(v.a)(Object(v.a)({},e),{},{state:o.visible}):e}))}));s(t),w(n.won),L(!1)}}),[J,F]);var q=function(e,t){var n=a.slice();return function(e,t){for(var n=0,u=0,i=[],s=0;s<9;s++)for(var r=0;r<9;r++)s===e-1&&r===t-1&&(a[s][r].state===o.flagged&&n++,a[s][r].value===l.bomb&&0,a[s][r].value===l.bomb&&a[s][r].state===o.flagged&&(i.push({row:s,col:r}),u++)),s===e-1&&r===t&&(a[s][r].state===o.flagged&&n++,a[s][r].value===l.bomb&&0,a[s][r].value===l.bomb&&a[s][r].state===o.flagged&&(i.push({row:s,col:r}),u++)),s===e-1&&r===t+1&&(a[s][r].state===o.flagged&&n++,a[s][r].value===l.bomb&&0,a[s][r].value===l.bomb&&a[s][r].state===o.flagged&&(i.push({row:s,col:r}),u++)),s===e&&r===t-1&&(a[s][r].state===o.flagged&&n++,a[s][r].value===l.bomb&&0,a[s][r].value===l.bomb&&a[s][r].state===o.flagged&&(i.push({row:s,col:r}),u++)),s===e&&r===t+1&&(a[s][r].state===o.flagged&&n++,a[s][r].value===l.bomb&&(i.push({row:s,col:r})),a[s][r].value===l.bomb&&a[s][r].state===o.flagged&&(i.push({row:s,col:r}),u++)),s===e+1&&r===t-1&&(a[s][r].state===o.flagged&&n++,a[s][r].value===l.bomb&&0,a[s][r].value===l.bomb&&a[s][r].state===o.flagged&&(i.push({row:s,col:r}),u++)),s===e+1&&r===t&&(a[s][r].state===o.flagged&&n++,a[s][r].value===l.bomb&&0,a[s][r].value===l.bomb&&a[s][r].state===o.flagged&&(i.push({row:s,col:r}),u++)),s===e+1&&r===t+1&&(a[s][r].state===o.flagged&&n++,a[s][r].value===l.bomb&&0,a[s][r].value===l.bomb&&a[s][r].state===o.flagged&&(i.push({row:s,col:r}),u++));for(var v=[],b=0;b<i.length;b++)-1===v.indexOf(i[b])&&v.push(i[b]);return(i=v).forEach((function(n){n.row===e-1&&n.col===t-1&&a[e-1][t-1].state===o.flagged&&a[e][t].value!==l.bomb&&a[e][t].value!==l.none&&a[e][t].value===u&&0,n.row===e-1&&n.col===t&&a[e-1][t].state===o.flagged&&a[e][t].value!==l.bomb&&a[e][t].value!==l.none&&a[e][t].value===u&&0,n.row===e-1&&n.col===t+1&&a[e-1][t+1].state===o.flagged&&a[e][t].value!==l.bomb&&a[e][t].value!==l.none&&a[e][t].value===u&&0,n.row===e&&n.col===t+1&&a[e][t+1].state===o.flagged&&a[e][t].value!==l.bomb&&a[e][t].value!==l.none&&a[e][t].value===u&&0,n.row===e&&n.col===t-1&&a[e][t-1].state===o.flagged&&a[e][t].value!==l.bomb&&a[e][t].value!==l.none&&a[e][t].value===u&&0,n.row===e+1&&n.col===t-1&&a[e+1][t-1].state===o.flagged&&a[e][t].value!==l.bomb&&a[e][t].value!==l.none&&a[e][t].value===u&&0,n.row===e+1&&n.col===t&&a[e+1][t].state===o.flagged&&a[e][t].value!==l.bomb&&a[e][t].value!==l.none&&a[e][t].value===u&&0,n.row===e+1&&n.col===t+1&&a[e+1][t+1].state===o.flagged&&a[e][t].value!==l.bomb&&a[e][t].value!==l.none&&a[e][t].value===u&&0})),n===a[e][t].value}(e,t)&&(e-1>=0&&t-1>=0&&n[e-1][t-1].state!==o.visible&&n[e-1][t-1].state!==o.flagged&&z(e-1,t-1,!0)(),e-1>=0&&n[e-1][t].state!==o.visible&&n[e-1][t].state!==o.flagged&&z(e-1,t,!0)(),e-1>=0&&t+1<9&&n[e-1][t+1].state!==o.visible&&n[e-1][t+1].state!==o.flagged&&z(e-1,t+1,!0)(),t-1>=0&&n[e][t-1].state!==o.visible&&n[e][t-1].state!==o.flagged&&z(e,t-1,!0)(),t+1<9&&n[e][t+1].state!==o.visible&&n[e][t+1].state!==o.flagged&&z(e,t+1,!0)(),e+1<9&&t-1>=0&&n[e+1][t-1].state!==o.visible&&n[e+1][t-1].state!==o.flagged&&z(e+1,t-1,!0)(),e+1<9&&n[e+1][t].state!==o.visible&&n[e+1][t].state!==o.flagged&&z(e+1,t,!0)(),e+1<9&&t+1<9&&n[e+1][t+1].state!==o.visible&&n[e+1][t+1].state!==o.flagged&&z(e+1,t+1,!0)()),n},z=function(e,t,n){return function(){if(!(e<0||t>=9||t<0||e>=9)){var u=a.slice();k||L(!0),!0!==n&&(u=q(e,t));var i=u[e][t];if(i.value===l.bomb)return I(!0),u[e][t].red=!0,u[e][t].state=o.visible,u=$(),void s(u);i.value===l.none?u=function e(t,a,n){var u=t[a][n];if(u.state===o.visible||u.state===o.flagged)return t;var i=t.slice();i[a][n].state=o.visible;var s=f(t,a,n),r=s.topLeftCell,v=s.topCell,b=s.topRightCell,c=s.leftCell,m=s.rightCell,d=s.bottomLeftCell,g=s.bottomCell,p=s.bottomRightCell;return(null===r||void 0===r?void 0:r.state)===o.open&&r.value!==l.bomb&&(r.value===l.none?i=e(i,a-1,n-1):i[a-1][n-1].state=o.visible),(null===v||void 0===v?void 0:v.state)===o.open&&v.value!==l.bomb&&(v.value===l.none?i=e(i,a-1,n):i[a-1][n].state=o.visible),(null===b||void 0===b?void 0:b.state)===o.open&&b.value!==l.bomb&&(b.value===l.none?i=e(i,a-1,n+1):i[a-1][n+1].state=o.visible),(null===c||void 0===c?void 0:c.state)===o.open&&c.value!==l.bomb&&(c.value===l.none?i=e(i,a,n-1):i[a][n-1].state=o.visible),(null===m||void 0===m?void 0:m.state)===o.open&&m.value!==l.bomb&&(m.value===l.none?i=e(i,a,n+1):i[a][n+1].state=o.visible),(null===d||void 0===d?void 0:d.state)===o.open&&d.value!==l.bomb&&(d.value===l.none?i=e(i,a+1,n-1):i[a+1][n-1].state=o.visible),(null===g||void 0===g?void 0:g.state)===o.open&&g.value!==l.bomb&&(g.value===l.none?i=e(i,a+1,n):i[a+1][n].state=o.visible),(null===p||void 0===p?void 0:p.state)===o.open&&p.value!==l.bomb&&(p.value===l.none?i=e(i,a+1,n+1):i[a+1][n+1].state=o.visible),i}(a,e,t):u[e][t].state=o.visible,K()&&H(!0),s(u)}}},G=function(){var e=0,t=0;return a.forEach((function(a){return a.forEach((function(a){a.value!==l.bomb&&a.state===o.open&&e++,a.value===l.bomb&&a.state!==o.open&&a.state!==o.flagged&&t++}))})),{numberOfOpenCells:e,existNotOpenBombs:t}},K=function(){var e=!1;return 0===G().numberOfOpenCells&&(e=!0),G().existNotOpenBombs===B&&(e=!0),e},P=function(e,t){return function(l){if(l.preventDefault(),k){var n=a.slice(),u=a[e][t];u.state!==o.visible&&(u.state===o.open&&B>-99?(n[e][t].state=o.flagged,s(n),M(B-1)):u.state===o.flagged&&(n[e][t].state=o.open,s(n),M(B+1)),K()&&H(!0))}}};Object(u.useEffect)((function(){G().numberOfOpenCells>0&&0===B&&H(!0)}),[B,a]);return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"Header"},i.a.createElement(d,{value:B}),i.a.createElement("div",{className:"Face"},i.a.createElement("span",{role:"img","aria-label":"face",onClick:function(){L(!1),E(0),M(10),s(m()),I(!1),H(!1),w(n.smile)}},h)),i.a.createElement(d,{value:j})),i.a.createElement("div",{className:"Body"},a.map((function(e,t){return e.map((function(e,a){return i.a.createElement(g,{live:k,hesDie:J||F,key:"".concat(t-a),state:e.state,value:e.value,red:e.red,onClick:z,onContext:P,row:t,col:a})}))}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));r.a.render(i.a.createElement(h,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.f1067386.chunk.js.map