!function(e){var t={};function n(o){if(t[o])return t[o].exports;var r=t[o]={i:o,l:!1,exports:{}};return e[o].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,o){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:o})},n.r=function(e){Object.defineProperty(e,"__esModule",{value:!0})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}({0:function(e,t,n){"use strict";n.r(t);n(5);let o=null;document.querySelector("#vsToastContainer")?o=document.querySelector("#vsToastContainer"):(o=document.createElement("div")).id="vsToastContainer",document.body.appendChild(o),window.$vsToast=(e=>{let t=document.createElement("div");t.classList.add("vsToast");let n=document.createElement("span");n.innerHTML=e,t.appendChild(n),o.childNodes[0]&&o.removeChild(o.childNodes[0]),o.appendChild(t)})},5:function(e,t){}});