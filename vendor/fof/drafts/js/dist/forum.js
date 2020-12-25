module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./forum.js");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./forum.js":
/*!******************!*\
  !*** ./forum.js ***!
  \******************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _src_forum__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./src/forum */ "./src/forum/index.js");
/* empty/unused harmony star reexport *//*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */


/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/extends.js":
/*!************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/extends.js ***!
  \************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _extends; });
function _extends() {
  _extends = Object.assign || function (target) {
    for (var i = 1; i < arguments.length; i++) {
      var source = arguments[i];

      for (var key in source) {
        if (Object.prototype.hasOwnProperty.call(source, key)) {
          target[key] = source[key];
        }
      }
    }

    return target;
  };

  return _extends.apply(this, arguments);
}

/***/ }),

/***/ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js":
/*!******************************************************************!*\
  !*** ./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js ***!
  \******************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _inheritsLoose; });
function _inheritsLoose(subClass, superClass) {
  subClass.prototype = Object.create(superClass.prototype);
  subClass.prototype.constructor = subClass;
  subClass.__proto__ = superClass;
}

/***/ }),

/***/ "./node_modules/external-load/index.js":
/*!*********************************************!*\
  !*** ./node_modules/external-load/index.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/**
 * Simple resource loader based on David Walsh's tutorial
 * https://davidwalsh.name/javascript-loader
 * https://davidwalsh.name/javascript-functions
 */
/* harmony default export */ __webpack_exports__["default"] = ((function() {
    // Function which returns a function
    function _load(tag) {
        return function(url) {
            // This promise will be used by Promise.all to determine success or failure
            return new Promise(function(resolve, reject) {
                var element = document.createElement(tag);
                var parent = "body";
                var attr = "src";

                // Important success and error for the promise
                element.onload = function() {
                    resolve(url);
                };
                element.onerror = function() {
                    reject(url);
                };

                // Need to set different attributes depending on tag type
                switch (tag) {
                    case "script":
                        element.async = true;
                        break;
                    case "link":
                        element.type = "text/css";
                        element.rel = "stylesheet";
                        attr = "href";
                        parent = "head";
                }

                // Inject into document to kick off loading
                element[attr] = url;
                document[parent].appendChild(element);
            });
        };
    }

    return {
        css: _load("link"),
        js: _load("script"),
        img: _load("img")
    };
})());


/***/ }),

/***/ "./src/forum/addDraftsDropdown.js":
/*!****************************************!*\
  !*** ./src/forum/addDraftsDropdown.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/app */ "flarum/app");
/* harmony import */ var flarum_app__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_app__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/HeaderSecondary */ "flarum/components/HeaderSecondary");
/* harmony import */ var flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_DraftsDropdown__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/DraftsDropdown */ "./src/forum/components/DraftsDropdown.js");
/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */




/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_HeaderSecondary__WEBPACK_IMPORTED_MODULE_2___default.a.prototype, 'items', function (items) {
    if (!flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.session.user || !flarum_app__WEBPACK_IMPORTED_MODULE_1___default.a.forum.attribute('canSaveDrafts')) return;
    items.add('Drafts', m(_components_DraftsDropdown__WEBPACK_IMPORTED_MODULE_3__["default"], null), 20);
  });
});

/***/ }),

/***/ "./src/forum/addPreferences.js":
/*!*************************************!*\
  !*** ./src/forum/addPreferences.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/FieldSet */ "flarum/components/FieldSet");
/* harmony import */ var flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/SettingsPage */ "flarum/components/SettingsPage");
/* harmony import */ var flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/Switch */ "flarum/components/Switch");
/* harmony import */ var flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5__);






/* harmony default export */ __webpack_exports__["default"] = (function () {
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'init', function () {
    this.draftAutosaveInterval = m.prop(this.user.preferences().draftAutosaveInterval);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_0__["extend"])(flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype, 'settingsItems', function (items) {
    items.add('drafts', flarum_components_FieldSet__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      label: app.translator.trans('fof-drafts.forum.user.settings.drafts_heading'),
      className: 'Settings-drafts',
      children: this.draftsItems().toArray()
    }));
  });

  flarum_components_SettingsPage__WEBPACK_IMPORTED_MODULE_3___default.a.prototype['draftsItems'] = function () {
    var _this = this;

    var items = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_5___default.a();
    items.add('draft-autosave-enable', flarum_components_Switch__WEBPACK_IMPORTED_MODULE_4___default.a.component({
      children: app.translator.trans('fof-drafts.forum.user.settings.draft_autosave_enable'),
      state: this.user.preferences().draftAutosaveEnable,
      onchange: function onchange(value, component) {
        return _this.preferenceSaver('draftAutosaveEnable')(value, component);
      }
    }));
    items.add('draft-autosave-interval', this.user.preferences().draftAutosaveEnable ? m("label", null, m("p", null, app.translator.trans('fof-drafts.forum.user.settings.draft_autosave_interval_label')), m("input", {
      className: "FormControl",
      type: "number",
      min: "0",
      value: this.draftAutosaveInterval(),
      onchange: m.withAttr('value', this.draftAutosaveInterval)
    }), flarum_components_Button__WEBPACK_IMPORTED_MODULE_1___default.a.component({
      className: 'Button Button--primary',
      children: app.translator.trans('fof-drafts.forum.user.settings.draft_autosave_interval_button'),
      onclick: function onclick() {
        var isInt = function isInt(str) {
          return str == Math.round(str);
        };

        if (_this.draftAutosaveInterval() < 0 || !isInt(_this.draftAutosaveInterval())) {
          _this.draftAutosaveIntervalInvalid = true;

          _this.draftAutosaveInterval(_this.user.preferences().draftAutosaveInterval);

          m.redraw();
        } else {
          _this.draftAutosaveIntervalInvalid = false;

          _this.preferenceSaver('draftAutosaveInterval')(_this.draftAutosaveInterval());
        }
      }
    }), this.draftAutosaveIntervalInvalid ? m("p", {
      "class": "invalidInterval"
    }, m("small", null, app.translator.trans('fof-drafts.forum.user.settings.draft_autosave_interval_invalid'))) : '') : '');
    return items;
  };
});

/***/ }),

/***/ "./src/forum/components/DraftsDropdown.js":
/*!************************************************!*\
  !*** ./src/forum/components/DraftsDropdown.js ***!
  \************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DraftsDropdown; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/NotificationsDropdown */ "flarum/components/NotificationsDropdown");
/* harmony import */ var flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DraftsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraftsList */ "./src/forum/components/DraftsList.js");


/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */



var DraftsDropdown =
/*#__PURE__*/
function (_NotificationsDropdow) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DraftsDropdown, _NotificationsDropdow);

  function DraftsDropdown() {
    return _NotificationsDropdow.apply(this, arguments) || this;
  }

  DraftsDropdown.initProps = function initProps(props) {
    props.label = props.label || app.translator.trans('fof-drafts.forum.dropdown.tooltip');
    props.icon = props.icon || 'fas fa-edit';

    _NotificationsDropdow.initProps.call(this, props);
  };

  var _proto = DraftsDropdown.prototype;

  _proto.init = function init() {
    _NotificationsDropdow.prototype.init.call(this);

    this.list = new _DraftsList__WEBPACK_IMPORTED_MODULE_2__["default"]();
  };

  _proto.goToRoute = function goToRoute() {
    m.route(app.route('drafts'));
  };

  _proto.getUnreadCount = function getUnreadCount() {
    if (app.cache.draftsLoaded) {
      return app.store.all('drafts').length;
    }

    return app.store.all('drafts').length + app.session.user.draftCount();
  };

  _proto.getNewCount = function getNewCount() {
    return this.getUnreadCount();
  };

  return DraftsDropdown;
}(flarum_components_NotificationsDropdown__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/DraftsList.js":
/*!********************************************!*\
  !*** ./src/forum/components/DraftsList.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DraftsList; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/Component */ "flarum/Component");
/* harmony import */ var flarum_Component__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_Component__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/ReplyComposer */ "flarum/components/ReplyComposer");
/* harmony import */ var flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! flarum/helpers/avatar */ "flarum/helpers/avatar");
/* harmony import */ var flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! flarum/helpers/icon */ "flarum/helpers/icon");
/* harmony import */ var flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! flarum/helpers/humanTime */ "flarum/helpers/humanTime");
/* harmony import */ var flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/utils/string */ "flarum/utils/string");
/* harmony import */ var flarum_utils_string__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_string__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var _ScheduleDraftModal__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ScheduleDraftModal */ "./src/forum/components/ScheduleDraftModal.js");
/* harmony import */ var _utils_fillRelationship__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../utils/fillRelationship */ "./src/forum/utils/fillRelationship.js");


/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */












var DraftsList =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DraftsList, _Component);

  function DraftsList() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DraftsList.prototype;

  _proto.config = function config(isInitialized) {
    if (!isInitialized) return;
    $('.draft--delete').on('click tap', function (event) {
      event.stopPropagation();
    });
  };

  _proto.view = function view() {
    var _this = this;

    var drafts = app.store.all('drafts');
    return m("div", {
      className: "NotificationList DraftsList"
    }, m("div", {
      className: "NotificationList-header"
    }, m("h4", {
      className: "App-titleControl App-titleControl--text"
    }, app.translator.trans('fof-drafts.forum.dropdown.title')), flarum_components_Button__WEBPACK_IMPORTED_MODULE_9___default.a.component({
      icon: 'fas fa-trash-alt',
      style: 'float: right; z-index: 20; margin-top: -25px',
      className: 'Button Button--icon Button--link draft--delete draft--delete',
      title: app.translator.trans('fof-drafts.forum.dropdown.delete_button1'),
      onclick: function onclick(e) {
        _this.loading = true;
        if (!window.confirm(app.translator.trans('fof-drafts.forum.dropdown.alert_vi'))) return;
        var promise = [];
        drafts.forEach(function (draft) {
          return promise.push(draft["delete"]().then(function () {
            if (app.composer.component && app.composer.component.draft.id() === draft.id() && !app.composer.changed()) {
              app.composer.hide();
            }
          }));
        });
        Promise.all(promise).then(function () {
          _this.loading = false;
          m.redraw();
        });
        e.stopPropagation();
      }
    })), m("div", {
      className: "NotificationList-content"
    }, m("ul", {
      className: "NotificationGroup-content"
    }, drafts.length ? drafts.sort(function (a, b) {
      return b.updatedAt() - a.updatedAt();
    }).map(function (draft) {
      return m("li", null, m("a", {
        onclick: _this.showComposer.bind(_this, draft),
        className: "Notification draft--item"
      }, flarum_helpers_avatar__WEBPACK_IMPORTED_MODULE_5___default()(draft.user()), flarum_helpers_icon__WEBPACK_IMPORTED_MODULE_6___default()(draft.icon(), {
        className: 'Notification-icon'
      }), m("span", {
        className: "Notification-content"
      }, draft.type() === 'reply' ? draft.loadRelationships().discussion.title() : draft.title()), flarum_helpers_humanTime__WEBPACK_IMPORTED_MODULE_7___default()(draft.updatedAt()), flarum_components_Button__WEBPACK_IMPORTED_MODULE_9___default.a.component({
        icon: 'fas fa-times',
        style: 'float: right; z-index: 20;',
        className: 'Button Button--icon Button--link draft--delete draft--delete',
        title: app.translator.trans('fof-drafts.forum.dropdown.delete_button'),
        onclick: function onclick(e) {
          _this.deleteDraft(draft);

          e.stopPropagation();
        }
      }), app.forum.attribute('canScheduleDrafts') && app.forum.attribute('drafts.enableScheduledDrafts') ? flarum_components_Button__WEBPACK_IMPORTED_MODULE_9___default.a.component({
        icon: draft.scheduledValidationError() ? 'fas fa-calendar-times' : draft.scheduledFor() ? 'fas fa-calendar-check' : 'fas fa-calendar-plus',
        style: 'float: right; z-index: 20;',
        className: 'Button Button--icon Button--link draft--schedule',
        title: app.translator.trans('fof-drafts.forum.dropdown.schedule_button'),
        onclick: function onclick(e) {
          _this.scheduleDraft(draft);

          e.stopPropagation();
        }
      }) : '', m("div", {
        className: "Notification-excerpt"
      }, Object(flarum_utils_string__WEBPACK_IMPORTED_MODULE_8__["truncate"])(draft.content(), 200)), draft.scheduledValidationError() ? m("p", {
        className: "scheduledValidationError"
      }, draft.scheduledValidationError()) : ''));
    }) : '', this.loading ? flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'LoadingIndicator--block'
    }) : !drafts.length && m("div", {
      className: "NotificationList-empty"
    }, app.translator.trans('fof-drafts.forum.dropdown.empty_text')))));
  };

  _proto.deleteDraft = function deleteDraft(draft) {
    var _this2 = this;

    this.loading = true;
    if (!window.confirm(app.translator.trans('fof-drafts.forum.dropdown.alert'))) return;
    draft["delete"]().then(function () {
      if (app.composer.component && app.composer.component.draft.id() === draft.id() && !app.composer.changed()) {
        app.composer.hide();
      }

      _this2.loading = false;
      m.redraw();
    });
  };

  _proto.scheduleDraft = function scheduleDraft(draft) {
    if (!app.forum.attribute('canScheduleDrafts') || !app.forum.attribute('drafts.enableScheduledDrafts')) return;
    app.modal.show(new _ScheduleDraftModal__WEBPACK_IMPORTED_MODULE_10__["default"]({
      draft: draft
    }));
  };

  _proto.showComposer = function showComposer(draft) {
    if (this.loading) return;
    var deferred = m.deferred();
    var componentClass;

    switch (draft.type()) {
      case 'privateDiscussion':
        componentClass = __webpack_require__(/*! @fof-byobu */ "@fof-byobu").components['PrivateDiscussionComposer'];
        break;

      case 'reply':
        componentClass = flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_4___default.a;
        break;

      default:
        componentClass = flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_3___default.a;
    }

    var component = new componentClass(draft.compileData());
    app.composer.load(component);
    app.composer.show();
    deferred.resolve(component);
    return deferred.promise;
  };

  _proto.load = function load() {
    var _this3 = this;

    if (app.cache.draftsLoaded) {
      return;
    }

    this.loading = true;
    m.redraw();
    app.store.find('drafts').then(function () {
      return app.cache.draftsLoaded = true;
    }, function () {}).then(function () {
      _this3.loading = false;
      m.redraw();
    });
  };

  return DraftsList;
}(flarum_Component__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/DraftsPage.js":
/*!********************************************!*\
  !*** ./src/forum/components/DraftsPage.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return DraftsPage; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Page */ "flarum/components/Page");
/* harmony import */ var flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _DraftsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./DraftsList */ "./src/forum/components/DraftsList.js");


/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */



var DraftsPage =
/*#__PURE__*/
function (_Page) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(DraftsPage, _Page);

  function DraftsPage() {
    return _Page.apply(this, arguments) || this;
  }

  var _proto = DraftsPage.prototype;

  _proto.init = function init() {
    _Page.prototype.init.call(this);

    app.history.push('drafts');
    this.list = new _DraftsList__WEBPACK_IMPORTED_MODULE_2__["default"]();
    this.list.load();
    this.bodyClass = 'App--drafts';
  };

  _proto.view = function view() {
    return m("div", {
      className: "DraftsPage"
    }, this.list.render());
  };

  return DraftsPage;
}(flarum_components_Page__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ "./src/forum/components/ScheduleDraftModal.js":
/*!****************************************************!*\
  !*** ./src/forum/components/ScheduleDraftModal.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return ScheduleDraftModal; });
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/components/Alert */ "flarum/components/Alert");
/* harmony import */ var flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/components/Modal */ "flarum/components/Modal");
/* harmony import */ var flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/components/LoadingIndicator */ "flarum/components/LoadingIndicator");
/* harmony import */ var flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var external_load__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! external-load */ "./node_modules/external-load/index.js");







var ScheduleDraftModal =
/*#__PURE__*/
function (_Modal) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_0__["default"])(ScheduleDraftModal, _Modal);

  function ScheduleDraftModal() {
    return _Modal.apply(this, arguments) || this;
  }

  var _proto = ScheduleDraftModal.prototype;

  _proto.init = function init() {
    _Modal.prototype.init.call(this);

    this.loading = false;
  };

  _proto.className = function className() {
    return 'ScheduleDraftModal';
  };

  _proto.title = function title() {
    return app.translator.trans('fof-drafts.forum.schedule_draft_modal.title');
  };

  _proto.content = function content() {
    if (this.loading) {
      return m(flarum_components_LoadingIndicator__WEBPACK_IMPORTED_MODULE_4___default.a, null);
    }

    return [this.props.draft.scheduledFor() ? m("div", {
      className: "Modal-alert"
    }, m(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "success",
      dismissible: false
    }, app.translator.trans('fof-drafts.forum.schedule_draft_modal.scheduled_text', {
      datetime: moment(this.props.draft.scheduledFor()).format('LLLL')
    }))) : '', this.props.draft.scheduledValidationError() ? m("div", {
      className: "Modal-alert"
    }, m(flarum_components_Alert__WEBPACK_IMPORTED_MODULE_1___default.a, {
      type: "error",
      dismissible: false
    }, app.translator.trans('fof-drafts.forum.schedule_draft_modal.scheduled_error', {
      error: this.props.draft.scheduledValidationError()
    }))) : '', m("input", {
      style: "display: none"
    }), m("div", {
      className: "Modal-body"
    }, m("div", {
      className: "Form Form--centered"
    }, m("p", {
      className: "helpText"
    }, app.translator.trans('fof-drafts.forum.schedule_draft_modal.text')), m("div", {
      className: "Form-group flatpickr"
    }, m("input", {
      name: "scheduledFor",
      className: "FormControl flatpickr-input",
      "data-input": true,
      onchange: m.redraw
    })), m("div", {
      className: "Form-group"
    }, flarum_components_Button__WEBPACK_IMPORTED_MODULE_2___default.a.component({
      className: 'Button Button--block' + (this.unscheduleMode() ? ' Button--danger' : ' Button--primary'),
      type: 'submit',
      loading: this.loading,
      children: this.unscheduleMode() ? app.translator.trans('fof-drafts.forum.schedule_draft_modal.unschedule_button') : this.rescheduleMode() ? app.translator.trans('fof-drafts.forum.schedule_draft_modal.reschedule_button') : app.translator.trans('fof-drafts.forum.schedule_draft_modal.schedule_button')
    }))))];
  };

  _proto.config = function config(isInitialized) {
    var _this = this;

    if (isInitialized) return;
    var url = app.forum.attribute('baseUrl') + '/assets/extensions/fof-drafts/flatpickr';
    this.loading = true;
    Promise.all(typeof flatpickr === 'undefined' ? [external_load__WEBPACK_IMPORTED_MODULE_5__["default"].js(url + ".js"), external_load__WEBPACK_IMPORTED_MODULE_5__["default"].css(url + ".css")] : []).then(function () {
      _this.loading = false;
      m.redraw();
      _this.flatpickr = flatpickr('.flatpickr-input', {
        enableTime: true,
        enableSeconds: false,
        minDate: Date.now(),
        maxDate: new Date(9999, 12, 31),
        defaultDate: _this.props.draft.scheduledFor()
      });
    });
  };

  _proto.scheduledFor = function scheduledFor() {
    return new Date($('input[name=scheduledFor]').val());
  };

  _proto.changed = function changed() {
    var getTimeOrNull = function getTimeOrNull(date) {
      return date ? date.getTime() : null;
    };

    return getTimeOrNull(this.scheduledFor()) !== getTimeOrNull(this.props.draft.scheduledFor());
  };

  _proto.unscheduleMode = function unscheduleMode() {
    return !this.changed() && this.props.draft.scheduledFor();
  };

  _proto.rescheduleMode = function rescheduleMode() {
    return this.changed() && this.props.draft.scheduledFor();
  };

  _proto.onsubmit = function onsubmit(e) {
    var _this2 = this;

    e.preventDefault();
    this.loading = true;
    this.props.draft.save({
      scheduledFor: this.unscheduleMode() ? null : this.scheduledFor(),
      clearValidationError: true,
      scheduledValidationError: ''
    }).then(function () {
      return _this2.success = true;
    })["catch"](function () {}).then(this.loaded.bind(this));
  };

  return ScheduleDraftModal;
}(flarum_components_Modal__WEBPACK_IMPORTED_MODULE_3___default.a);



/***/ }),

/***/ "./src/forum/index.js":
/*!****************************!*\
  !*** ./src/forum/index.js ***!
  \****************************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! flarum/extend */ "flarum/extend");
/* harmony import */ var flarum_extend__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(flarum_extend__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/models/User */ "flarum/models/User");
/* harmony import */ var flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_models_User__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _models_Draft__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./models/Draft */ "./src/forum/models/Draft.js");
/* harmony import */ var _components_DraftsPage__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/DraftsPage */ "./src/forum/components/DraftsPage.js");
/* harmony import */ var _addDraftsDropdown__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./addDraftsDropdown */ "./src/forum/addDraftsDropdown.js");
/* harmony import */ var _addPreferences__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./addPreferences */ "./src/forum/addPreferences.js");
/* harmony import */ var flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! flarum/components/Composer */ "flarum/components/Composer");
/* harmony import */ var flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! flarum/components/DiscussionComposer */ "flarum/components/DiscussionComposer");
/* harmony import */ var flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default = /*#__PURE__*/__webpack_require__.n(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9__);
/* harmony import */ var flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! flarum/components/ReplyComposer */ "flarum/components/ReplyComposer");
/* harmony import */ var flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default = /*#__PURE__*/__webpack_require__.n(flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10__);
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! flarum/components/Button */ "flarum/components/Button");
/* harmony import */ var flarum_components_Button__WEBPACK_IMPORTED_MODULE_11___default = /*#__PURE__*/__webpack_require__.n(flarum_components_Button__WEBPACK_IMPORTED_MODULE_11__);
/* harmony import */ var _components_DraftsList__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./components/DraftsList */ "./src/forum/components/DraftsList.js");
/* harmony import */ var _utils_fillRelationship__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./utils/fillRelationship */ "./src/forum/utils/fillRelationship.js");


/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */













app.initializers.add('fof-drafts', function () {
  app.store.models.drafts = _models_Draft__WEBPACK_IMPORTED_MODULE_4__["default"];
  flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.drafts = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.hasMany('drafts');
  flarum_models_User__WEBPACK_IMPORTED_MODULE_2___default.a.prototype.draftCount = flarum_Model__WEBPACK_IMPORTED_MODULE_3___default.a.attribute('draftCount');
  app.routes.drafts = {
    path: '/drafts',
    component: m(_components_DraftsPage__WEBPACK_IMPORTED_MODULE_5__["default"], null)
  };

  flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default.a.prototype['changed'] = function () {
    var _this = this;

    if (!this.component) return false;
    var data = this.component.data();
    var draft = this.component.draft;
    var fields = Object.keys(data).filter(function (element) {
      return element !== 'relationships';
    });

    if (!fields) {
      return false;
    }

    var getData = function getData(field) {
      return (field === 'content' ? _this.component.editor.value() : data[field]) || '';
    };

    for (var _iterator = fields, _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
      var _ref;

      if (_isArray) {
        if (_i >= _iterator.length) break;
        _ref = _iterator[_i++];
      } else {
        _i = _iterator.next();
        if (_i.done) break;
        _ref = _i.value;
      }

      var field = _ref;

      if (!draft && getData(field) || draft && getData(field) != draft.data.attributes[field]) {
        return true;
      }
    }

    if (!data.relationships && !draft.relationships()) {
      return false;
    }

    var relationships = Object.keys(data.relationships);

    var equalRelationships = function equalRelationships(data, draft, relationship) {
      if (!data.relationships[relationship].length && (!(relationship in draft.relationships()) || !draft.relationships()[relationship].data.length)) {
        return true;
      } else if (!(relationship in draft.relationships()) || data.relationships[relationship].length !== draft.relationships()[relationship].data.length) {
        return false;
      }

      var getId = function getId(element) {
        return typeof element.id == 'function' ? element.id() : element.id;
      };

      var dataIds = Object(_utils_fillRelationship__WEBPACK_IMPORTED_MODULE_13__["default"])(data.relationships[relationship], getId);
      var draftIds = Object(_utils_fillRelationship__WEBPACK_IMPORTED_MODULE_13__["default"])(draft.relationships()[relationship].data, getId);
      return !dataIds.some(function (id, i) {
        return id !== draftIds[i];
      });
    };

    for (var _i2 = 0, _relationships = relationships; _i2 < _relationships.length; _i2++) {
      var relationship = _relationships[_i2];

      if (!draft) {
        if (data.relationships[relationship]) {
          return true;
        }
      } else {
        if (!equalRelationships(data, draft, relationship)) {
          return true;
        }
      }
    }

    return false;
  };

  flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default.a.prototype['saveDraft'] = function () {
    var _this2 = this;

    this.saving = true;
    m.redraw();

    var afterSave = function afterSave() {
      _this2.saving = false;
      _this2.justSaved = true;
      setTimeout(function () {
        _this2.justSaved = false;
        m.redraw();
      }, 300);
      m.redraw();
    };

    if (this.component.draft) {
      delete this.component.draft.data.attributes.relationships;
      this.component.draft.save(Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(this.component.draft.data.attributes, this.component.data())).then(function () {
        return afterSave();
      });
    } else {
      app.store.createRecord('drafts').save(this.component.data()).then(function (draft) {
        draft.loadRelationships(true);
        _this2.component.draft = draft;
        afterSave();
      });
    }
  };

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'controlItems', function (items) {
    if (!(this.component instanceof flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default.a || this.component instanceof flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default.a) || !app.forum.attribute('canSaveDrafts') || this.position === flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default.a.PositionEnum.MINIMIZED) return;
    var classNames = ['Button', 'Button--icon', 'Button--link'];

    if (this.saving) {
      classNames.push('saving');
    }

    if (this.justSaved) {
      classNames.push('justSaved');
    }

    items.add('save-draft', flarum_components_Button__WEBPACK_IMPORTED_MODULE_11___default.a.component({
      icon: this.justSaved ? 'fas fa-check' : this.saving ? 'fas fa-spinner fa-spin' : 'fas fa-save',
      className: classNames.join(' '),
      itemClassName: 'App-backControl',
      title: app.translator.trans('fof-drafts.forum.composer.title'),
      disabled: this.saving || this.justSaved || this.loading,
      onclick: this.saveDraft.bind(this)
    }), 20);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'load', function () {
    var _this3 = this;

    if (!app.forum.attribute('canSaveDrafts')) return;

    if (app.session.user.preferences().draftAutosaveEnable && (this.component instanceof flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default.a || this.component instanceof flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default.a)) {
      this.autosaveInterval = setInterval(function () {
        if (_this3.changed() && !_this3.saving && !_this3.loading) {
          _this3.saveDraft();
        }
      }, 1000 * app.session.user.preferences().draftAutosaveInterval);
    }
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'hide', function () {
    if (this.autosaveInterval) clearInterval(this.autosaveInterval);
  });
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["override"])(flarum_components_Composer__WEBPACK_IMPORTED_MODULE_8___default.a.prototype, 'preventExit', function (original) {
    if (this.component && this.component.draft) {
      this.component.props.confirmExit = app.translator.trans('fof-drafts.forum.composer.exit_alert');
    }

    var prevented = false;

    if (this.changed()) {
      prevented = original();
    }

    if (prevented) return prevented;
    if (!this.component) return;
    var draft = this.component.draft;

    if (draft && !draft.title() && !draft.content() && confirm(app.translator.trans('fof-drafts.forum.composer.discard_empty_draft_alert'))) {
      draft["delete"]();
    }

    return prevented;
  });

  function initComposerBody() {
    var _this4 = this;

    Object.keys(this.props).forEach(function (key) {
      if (!['originalContent', 'title', 'user'].includes(key)) {
        _this4[key] = _this4.props[key];
      } else if (key === 'title') {
        _this4.title = m.prop(_this4.props.title);
      }
    });
  }

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'init', initComposerBody);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default.a.prototype, 'init', initComposerBody);

  function deleteDraftsOnSubmit() {
    if (this.draft) {
      this.draft["delete"]();
    }
  }

  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_DiscussionComposer__WEBPACK_IMPORTED_MODULE_9___default.a.prototype, 'onsubmit', deleteDraftsOnSubmit);
  Object(flarum_extend__WEBPACK_IMPORTED_MODULE_1__["extend"])(flarum_components_ReplyComposer__WEBPACK_IMPORTED_MODULE_10___default.a.prototype, 'onsubmit', deleteDraftsOnSubmit);
  Object(_addDraftsDropdown__WEBPACK_IMPORTED_MODULE_6__["default"])();
  Object(_addPreferences__WEBPACK_IMPORTED_MODULE_7__["default"])();
});

/***/ }),

/***/ "./src/forum/models/Draft.js":
/*!***********************************!*\
  !*** ./src/forum/models/Draft.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Draft; });
/* harmony import */ var _babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/helpers/esm/extends */ "./node_modules/@babel/runtime/helpers/esm/extends.js");
/* harmony import */ var _babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime/helpers/esm/inheritsLoose */ "./node_modules/@babel/runtime/helpers/esm/inheritsLoose.js");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! flarum/Model */ "flarum/Model");
/* harmony import */ var flarum_Model__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(flarum_Model__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! flarum/utils/ItemList */ "flarum/utils/ItemList");
/* harmony import */ var flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! flarum/utils/mixin */ "flarum/utils/mixin");
/* harmony import */ var flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _utils_fillRelationship__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/fillRelationship */ "./src/forum/utils/fillRelationship.js");



/*
 *
 *  This file is part of fof/drafts.
 *
 *  Copyright (c) 2019 FriendsOfFlarum.
 *
 *  For the full copyright and license information, please view the LICENSE.md
 *  file that was distributed with this source code.
 *
 */





var Draft =
/*#__PURE__*/
function (_mixin) {
  Object(_babel_runtime_helpers_esm_inheritsLoose__WEBPACK_IMPORTED_MODULE_1__["default"])(Draft, _mixin);

  function Draft() {
    return _mixin.apply(this, arguments) || this;
  }

  return Draft;
}(flarum_utils_mixin__WEBPACK_IMPORTED_MODULE_4___default()(flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a, {
  user: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.hasOne('user'),
  content: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('content'),
  title: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('title'),
  scheduledValidationError: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('scheduledValidationError'),
  relationships: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('relationships'),
  scheduledFor: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('scheduledFor', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  updatedAt: flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.attribute('updatedAt', flarum_Model__WEBPACK_IMPORTED_MODULE_2___default.a.transformDate),
  loadedRelationships: null,
  type: function type() {
    var relationships = this.loadRelationships();

    if (relationships.discussion) {
      return 'reply';
    } else if (flarum.extensions['fof-byobu'] && flarum.extensions['fof-byobu'].components && ( // If private discussion composer is not exported, we can't support PM drafts.
    'recipientGroups' in relationships || 'recipientUsers' in relationships)) {
      return 'privateDiscussion';
    } else {
      return 'discussion';
    }
  },
  icon: function icon() {
    switch (this.type()) {
      case 'discussion':
        return 'fas fa-edit';

      case 'reply':
        return 'fas fa-reply';

      case 'privateDiscussion':
        return 'fas fa-eye-slash';
    }
  },
  loadRelationships: function loadRelationships(force) {
    var _this = this;

    if (!force && this.loadedRelationships && (Object.keys(this.loadedRelationships).length > 0 || Object.keys(this.loadedRelationships).length === 0 && Object.keys(this.relationships).length === 0)) {
      return this.loadedRelationships;
    }

    this.loadedRelationships = {};
    var relationships = this.relationships();

    if (relationships) {
      Object.keys(relationships).forEach(function (relationshipName) {
        var relationship = relationships[relationshipName];
        if (!relationship || !relationship.data) return;
        _this.loadedRelationships[relationshipName] = Object(_utils_fillRelationship__WEBPACK_IMPORTED_MODULE_5__["default"])(relationship.data, function (model) {
          return app.store.getById(model.type, model.id);
        });
      });
    }

    if ('recipientUsers' in this.loadedRelationships || 'recipientGroups' in this.loadedRelationships) {
      var recipients = new flarum_utils_ItemList__WEBPACK_IMPORTED_MODULE_3___default.a();
      (this.loadedRelationships['recipientUsers'] || []).forEach(function (user) {
        if (user) recipients.add('users:' + user.id(), user);
      });
      (this.loadedRelationships['recipientGroups'] || []).forEach(function (group) {
        if (group) recipients.add('groups:' + group.id(), group);
      });
      this.loadedRelationships['recipients'] = recipients;
    }

    return this.loadedRelationships;
  },
  compileData: function compileData() {
    var data = {
      originalContent: this.content(),
      title: this.title(),
      user: app.session.user,
      confirmExit: app.translator.trans('fof-drafts.forum.composer.exit_alert'),
      draft: this
    };

    Object(_babel_runtime_helpers_esm_extends__WEBPACK_IMPORTED_MODULE_0__["default"])(data, this.loadRelationships());

    return data;
  }
}));



/***/ }),

/***/ "./src/forum/utils/fillRelationship.js":
/*!*********************************************!*\
  !*** ./src/forum/utils/fillRelationship.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = (function (data, map) {
  return Array.isArray(data) ? data.map(map).sort() : map(data);
});

/***/ }),

/***/ "@fof-byobu":
/*!*************************************************!*\
  !*** external "flarum.extensions['fof-byobu']" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.extensions['fof-byobu'];

/***/ }),

/***/ "flarum/Component":
/*!**************************************************!*\
  !*** external "flarum.core.compat['Component']" ***!
  \**************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Component'];

/***/ }),

/***/ "flarum/Model":
/*!**********************************************!*\
  !*** external "flarum.core.compat['Model']" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['Model'];

/***/ }),

/***/ "flarum/app":
/*!********************************************!*\
  !*** external "flarum.core.compat['app']" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['app'];

/***/ }),

/***/ "flarum/components/Alert":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Alert']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Alert'];

/***/ }),

/***/ "flarum/components/Button":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Button']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Button'];

/***/ }),

/***/ "flarum/components/Composer":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/Composer']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Composer'];

/***/ }),

/***/ "flarum/components/DiscussionComposer":
/*!**********************************************************************!*\
  !*** external "flarum.core.compat['components/DiscussionComposer']" ***!
  \**********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/DiscussionComposer'];

/***/ }),

/***/ "flarum/components/FieldSet":
/*!************************************************************!*\
  !*** external "flarum.core.compat['components/FieldSet']" ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/FieldSet'];

/***/ }),

/***/ "flarum/components/HeaderSecondary":
/*!*******************************************************************!*\
  !*** external "flarum.core.compat['components/HeaderSecondary']" ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/HeaderSecondary'];

/***/ }),

/***/ "flarum/components/LoadingIndicator":
/*!********************************************************************!*\
  !*** external "flarum.core.compat['components/LoadingIndicator']" ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/LoadingIndicator'];

/***/ }),

/***/ "flarum/components/Modal":
/*!*********************************************************!*\
  !*** external "flarum.core.compat['components/Modal']" ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Modal'];

/***/ }),

/***/ "flarum/components/NotificationsDropdown":
/*!*************************************************************************!*\
  !*** external "flarum.core.compat['components/NotificationsDropdown']" ***!
  \*************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/NotificationsDropdown'];

/***/ }),

/***/ "flarum/components/Page":
/*!********************************************************!*\
  !*** external "flarum.core.compat['components/Page']" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Page'];

/***/ }),

/***/ "flarum/components/ReplyComposer":
/*!*****************************************************************!*\
  !*** external "flarum.core.compat['components/ReplyComposer']" ***!
  \*****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/ReplyComposer'];

/***/ }),

/***/ "flarum/components/SettingsPage":
/*!****************************************************************!*\
  !*** external "flarum.core.compat['components/SettingsPage']" ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/SettingsPage'];

/***/ }),

/***/ "flarum/components/Switch":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['components/Switch']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['components/Switch'];

/***/ }),

/***/ "flarum/extend":
/*!***********************************************!*\
  !*** external "flarum.core.compat['extend']" ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['extend'];

/***/ }),

/***/ "flarum/helpers/avatar":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['helpers/avatar']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/avatar'];

/***/ }),

/***/ "flarum/helpers/humanTime":
/*!**********************************************************!*\
  !*** external "flarum.core.compat['helpers/humanTime']" ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/humanTime'];

/***/ }),

/***/ "flarum/helpers/icon":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['helpers/icon']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['helpers/icon'];

/***/ }),

/***/ "flarum/models/User":
/*!****************************************************!*\
  !*** external "flarum.core.compat['models/User']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['models/User'];

/***/ }),

/***/ "flarum/utils/ItemList":
/*!*******************************************************!*\
  !*** external "flarum.core.compat['utils/ItemList']" ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/ItemList'];

/***/ }),

/***/ "flarum/utils/mixin":
/*!****************************************************!*\
  !*** external "flarum.core.compat['utils/mixin']" ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/mixin'];

/***/ }),

/***/ "flarum/utils/string":
/*!*****************************************************!*\
  !*** external "flarum.core.compat['utils/string']" ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = flarum.core.compat['utils/string'];

/***/ })

/******/ });
//# sourceMappingURL=forum.js.map