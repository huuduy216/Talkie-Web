"use strict";

var _app = _interopRequireDefault(require("flarum/app"));

var _extend = require("flarum/extend");

var _HeaderPrimary = _interopRequireDefault(require("flarum/components/HeaderPrimary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].initializers.add("always-show-suggestion", function () {
  (0, _extend.extend)(_HeaderPrimary["default"].prototype, "config", function (isInitialized, context) {
    if (isInitialized) return;
    var contentContainer = document.getElementsByClassName("App-content")[0];

    if (window.location.pathname === "/" || window.location.pathname.includes("public/")) {
      contentContainer.classList.add("mr-0");
    } else {
      contentContainer.classList.remove("mr-0");
    }
  });
});