"use strict";

var _app = _interopRequireDefault(require("flarum/app"));

var _extend = require("flarum/extend");

var _HeaderPrimary = _interopRequireDefault(require("flarum/components/HeaderPrimary"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }

_app["default"].initializers.add("always-show-suggestion", function () {
  (0, _extend.extend)(_HeaderPrimary["default"].prototype, "config", function (isInitialized, context) {
    if (isInitialized) return;
    var contentContainer = document.getElementsByClassName("App-content")[0]; // NOTE: All path put in here must have both slash at the start and end.

    var possibleDevRoute = ["/", "/public/", "/flarum/public/"];
    var currentPath = window.location.pathname;

    if (possibleDevRoute.some(function (route) {
      return currentPath === route;
    })) {
      contentContainer.classList.add("mr-0");
    } else {
      contentContainer.classList.remove("mr-0");
    }

    if (!_app["default"].cache.discussionList) {
      contentContainer.classList.add("mr-0");
    }
  });
});