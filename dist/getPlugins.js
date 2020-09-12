"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _unsupportedIterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _iterableToArray(iter) { if (typeof Symbol !== "undefined" && Symbol.iterator in Object(iter)) return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) return _arrayLikeToArray(arr); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

var flatten = function flatten(arr) {
  var result = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : [];

  if (!Array.isArray(arr)) {
    return [].concat(_toConsumableArray(result), [arr]);
  }

  for (var a = 0; a < arr.length; a++) {
    result = flatten(arr[a], result);
  }

  return result;
};

var getPlugins = function getPlugins(_ref) {
  var toolBarItem = _ref.toolBarItem;
  if (!toolBarItem) return undefined;
  if (!Array.isArray(toolBarItem)) throw new Error('ToolBarItem must be of type array');else {
    var pluginList = {};
    toolBarItem = flatten(toolBarItem);
    if (toolBarItem.indexOf('align') >= 0) pluginList.align = require('kothing-editor/lib/plugins/submenu/align');
    if (toolBarItem.indexOf('font') >= 0) pluginList.font = require('kothing-editor/lib/plugins/submenu/font');
    if (toolBarItem.indexOf('fontColor') >= 0) pluginList.fontColor = require('kothing-editor/lib/plugins/submenu/fontColor');
    if (toolBarItem.indexOf('fontSize') >= 0) pluginList.fontSize = require('kothing-editor/lib/plugins/submenu/fontSize');
    if (toolBarItem.indexOf('formatBlock') >= 0) pluginList.formatBlock = require('kothing-editor/lib/plugins/submenu/formatBlock');
    if (toolBarItem.indexOf('hiliteColor') >= 0) pluginList.hiliteColor = require('kothing-editor/lib/plugins/submenu/hiliteColor');
    if (toolBarItem.indexOf('horizontalRule') >= 0) pluginList.horizontalRule = require('kothing-editor/lib/plugins/submenu/horizontalRule');
    if (toolBarItem.indexOf('lineHeight') >= 0) pluginList.lineHeight = require('kothing-editor/lib/plugins/submenu/lineHeight');
    if (toolBarItem.indexOf('list') >= 0) pluginList.list = require('kothing-editor/lib/plugins/submenu/list');
    if (toolBarItem.indexOf('paragraphStyle') >= 0) pluginList.paragraphStyle = require('kothing-editor/lib/plugins/submenu/paragraphStyle');
    if (toolBarItem.indexOf('table') >= 0) pluginList.table = require('kothing-editor/lib/plugins/submenu/table');
    if (toolBarItem.indexOf('template') >= 0) pluginList.template = require('kothing-editor/lib/plugins/submenu/template');
    if (toolBarItem.indexOf('textStyle') >= 0) pluginList.textStyle = require('kothing-editor/lib/plugins/submenu/textStyle');
    if (toolBarItem.indexOf('image') >= 0) pluginList.image = require('kothing-editor/lib/plugins/dialog/image');
    if (toolBarItem.indexOf('link') >= 0) pluginList.link = require('kothing-editor/lib/plugins/dialog/link');
    if (toolBarItem.indexOf('video') >= 0) pluginList.video = require('kothing-editor/lib/plugins/dialog/video');
    return pluginList;
  }
};

var _default = getPlugins;
exports.default = _default;