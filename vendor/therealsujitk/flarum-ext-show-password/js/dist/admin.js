module.exports=function(t){var e={};function r(n){if(e[n])return e[n].exports;var o=e[n]={i:n,l:!1,exports:{}};return t[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=t,r.c=e,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(n,o,function(e){return t[e]}.bind(null,o));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r(r.s=6)}([function(t,e){t.exports=flarum.core.compat.app},,,,function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},,function(t,e,r){"use strict";r.r(e);var n=r(0),o=r.n(n);var a=r(4),s=function(t){var e,r;function n(){return t.apply(this,arguments)||this}r=t,(e=n).prototype=Object.create(r.prototype),e.prototype.constructor=e,e.__proto__=r;var o=n.prototype;return o.className=function(){return"Modal--small"},o.title=function(){return app.translator.trans("therealsujitk.admin.show_password_title")},o.form=function(){return[m("div[class = Form-group]",[m("label",app.translator.trans("therealsujitk.admin.show_password_type")),m("select[style = width: 100%; margin-bottom: 5px;]",{bidi:this.setting("therealsujitk-show-password.toggle_method")},[m("option",{value:"checkbox",selected:!0},app.translator.trans("therealsujitk.admin.show_password_checkbox")),m("option",{value:"icon"},app.translator.trans("therealsujitk.admin.show_password_icon"))]),m("hr"),m("div",[m("p[style = display: inline;]",app.translator.trans("therealsujitk.admin.about.stringA")),m("a",{href:"https://therealsuji.tk",target:"_blank"},"@therealsujitk"),m("br"),m("p[style = display: inline;]",app.translator.trans("therealsujitk.admin.about.stringB")),m("a",{href:"https://therealsuji.tk/donate",target:"_blank"},"PayPal")])])]},n}(r.n(a).a);o.a.initializers.add("therealsujitk/flarum-ext-show-password",(function(){o.a.extensionSettings["therealsujitk-show-password"]=function(){return o.a.modal.show(new s)}}))}]);
//# sourceMappingURL=admin.js.map