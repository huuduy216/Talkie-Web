module.exports=function(e){var t={};function n(r){if(t[r])return t[r].exports;var a=t[r]={i:r,l:!1,exports:{}};return e[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(r,a,function(t){return e[t]}.bind(null,a));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=5)}([function(e,t){e.exports=flarum.core.compat.app},function(e,t){e.exports=flarum.core.compat.extend},function(e,t){e.exports=flarum.core.compat["components/LogInModal"]},function(e,t){e.exports=flarum.core.compat["components/SignUpModal"]},,function(e,t,n){"use strict";n.r(t);var r=n(1),a=n(0),o=n.n(a),s=n(2),i=n.n(s),l=n(3),c=n.n(l);function d(){var e=document.getElementsByName("password")[0],t=document.getElementById("therealsujitk-show-password");if(void 0!==e&&void 0!==t)1==t.checked?e.type="text":e.type="password";else if(void 0!==t){var n=t.parentElement;"label"==n.tagName.toLowerCase()&&(n.style.display="none")}}o.a.initializers.add("therealsujitk/flarum-ext-show-password",(function(){Object(r.extend)(i.a.prototype,"fields",(function(e){e.add("therealsujitk-show-password",m("label.checkbox",[m("input",{type:"checkbox",id:"therealsujitk-show-password",config:function(e,t){if(!t){var n=document.getElementById("therealsujitk-show-password");if(void 0===n)return void(s.style.display="none");var r=o.a.forum.attribute("therealsujitk-show-password.toggle_method");if(null===r||""===r||"checkbox"===r)return;var a=n.parentElement;"label"==a.tagName.toLowerCase()&&(a.style.display="none");var s=document.createElement("div");s.innerHTML='<i class="fas fa-eye-slash" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>',s.style="width: 50px; height: inherit; margin-left: -50px; padding: 0px; border: none; background: none; cursor: pointer;",s.addEventListener("click",(function(e){e.preventDefault(),1==n.checked?(s.innerHTML='<i class="fas fa-eye-slash" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>',n.checked=!1):(s.innerHTML='<i class="fas fa-eye" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>',n.checked=!0),d()})),document.getElementsByName("password")[0].parentNode.style.display="-webkit-box",document.getElementsByName("password")[0].parentNode.append(s)}d()},onclick:function(){d()}}),o.a.translator.trans("therealsujitk.forum.show_password_label")]),20)})),Object(r.extend)(c.a.prototype,"fields",(function(e){e.add("therealsujitk-show-password",m("label.checkbox[style = padding-bottom: 7px]",[m("input",{type:"checkbox",id:"therealsujitk-show-password",config:function(e,t){if(!t){var n=document.getElementById("therealsujitk-show-password");if(void 0===n)return void(s.style.display="none");var r=o.a.forum.attribute("therealsujitk-show-password.toggle_method");if(null===r||""===r||"checkbox"===r)return;var a=n.parentElement;"label"==a.tagName.toLowerCase()&&(a.style.display="none");var s=document.createElement("div");s.innerHTML='<i class="fas fa-eye-slash" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>',s.style="width: 50px; height: inherit; margin-left: -50px; padding: 0px; border: none; background: none; cursor: pointer;",s.addEventListener("click",(function(e){e.preventDefault(),1==n.checked?(s.innerHTML='<i class="fas fa-eye-slash" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>',n.checked=!1):(s.innerHTML='<i class="fas fa-eye" style="transform: scale(1.5) translate(0%, -50%); margin-top: 54%;"></i>',n.checked=!0),d()})),document.getElementsByName("password")[0].parentNode.style.display="-webkit-box",document.getElementsByName("password")[0].parentNode.append(s)}d()},onclick:function(){d()}}),o.a.translator.trans("therealsujitk.forum.show_password_label")]),10)}))}))}]);
//# sourceMappingURL=forum.js.map