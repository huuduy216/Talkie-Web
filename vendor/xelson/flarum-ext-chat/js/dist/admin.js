module.exports=function(t){var e={};function n(r){if(e[r])return e[r].exports;var a=e[r]={i:r,l:!1,exports:{}};return t[r].call(a.exports,a,a.exports,n),a.l=!0,a.exports}return n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)n.d(r,a,function(e){return t[e]}.bind(null,a));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=17)}([,function(t,e,n){"use strict";function r(t,e){t.prototype=Object.create(e.prototype),t.prototype.constructor=t,t.__proto__=e}n.d(e,"a",(function(){return r}))},function(t,e){t.exports=flarum.core.compat.extend},,,,,,function(t,e){t.exports=flarum.core.compat["components/PermissionGrid"]},,,,,,function(t,e){t.exports=flarum.core.compat.app},function(t,e){t.exports=flarum.core.compat["components/SettingsModal"]},,function(t,e,n){"use strict";n.r(e);var r=n(2),a=n(14),s=n.n(a),o=n(8),i=n.n(o),l=n(1),u=n(15),p=function(t){function e(){return t.apply(this,arguments)||this}Object(l.a)(e,t);var n=e.prototype;return n.className=function(){return"Modal--small"},n.title=function(){return app.translator.trans("pushedx-chat.admin.settings.title")},n.form=function(){return[m("div",{className:"Form-group ChatSettings-Modal"},m("label",null,app.translator.trans("pushedx-chat.admin.settings.charlimit")),m("input",{className:"FormControl",type:"number",max:"1024",bidi:this.setting("pushedx-chat.settings.charlimit",512)}),m("label",null,app.translator.trans("pushedx-chat.admin.settings.floodgate.title")),m("div",null,m("label",null,app.translator.trans("pushedx-chat.admin.settings.floodgate.number")),m("input",{className:"FormControl",type:"number",bidi:this.setting("pushedx-chat.settings.floodgate.number",3)}),m("label",null,app.translator.trans("pushedx-chat.admin.settings.floodgate.time")),m("input",{className:"FormControl",type:"text",bidi:this.setting("pushedx-chat.settings.floodgate.time","1 hour")})))]},e}(n.n(u).a);s.a.initializers.add("pushedx-chat",(function(t){t.extensionSettings["xelson-chat"]=function(){return t.modal.show(new p)},Object(r.extend)(i.a.prototype,"replyItems",(function(e){e.add("pushedx-chat.permissions.chat",{icon:"fas fa-comments",label:t.translator.trans("pushedx-chat.admin.permissions.post"),permission:"pushedx-chat.permissions.chat"}),e.add("pushedx-chat.permissions.edit",{icon:"fas fa-pencil-alt",label:t.translator.trans("pushedx-chat.admin.permissions.edit"),permission:"pushedx-chat.permissions.edit"}),e.add("pushedx-chat.permissions.delete",{icon:"far fa-trash-alt",label:t.translator.trans("pushedx-chat.admin.permissions.delete"),permission:"pushedx-chat.permissions.delete"})})),Object(r.extend)(i.a.prototype,"moderateItems",(function(e){e.add("pushedx-chat.permissions.moderate.delete",{icon:"far fa-trash-alt",label:t.translator.trans("pushedx-chat.admin.permissions.moderate.delete"),permission:"pushedx-chat.permissions.moderate.delete"})}))}))}]);
//# sourceMappingURL=admin.js.map