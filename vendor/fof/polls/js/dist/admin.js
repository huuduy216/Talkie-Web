module.exports=function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}return o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=19)}({1:function(e,t){e.exports=flarum.core.compat.extend},19:function(e,t,o){"use strict";o.r(t);var n=o(1),r=o(7),a=o.n(r);app.initializers.add("fof/polls",function(){Object(n.extend)(a.a.prototype,"moderateItems",function(e){e.add("fof-polls",{icon:"fa fa-pencil-alt",label:app.translator.trans("fof-polls.admin.permissions.moderate"),permission:"discussion.polls"},95)}),Object(n.extend)(a.a.prototype,"startItems",function(e){e.add("fof-polls-start",{icon:"fa fa-signal",label:app.translator.trans("fof-polls.admin.permissions.start"),permission:"startPolls"},95)}),Object(n.extend)(a.a.prototype,"replyItems",function(e){e.add("fof-polls-edit",{icon:"fa fa-pencil-alt",label:app.translator.trans("fof-polls.admin.permissions.self_edit"),permission:"selfEditPolls"},70),e.add("fof-polls-vote",{icon:"fa fa-signal",label:app.translator.trans("fof-polls.admin.permissions.vote"),permission:"votePolls"},80)})})},7:function(e,t){e.exports=flarum.core.compat["components/PermissionGrid"]}});
//# sourceMappingURL=admin.js.map