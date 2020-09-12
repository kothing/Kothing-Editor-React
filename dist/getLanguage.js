"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = void 0;

function _typeof(obj) { "@babel/helpers - typeof"; if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

var getLanguage = function getLanguage(lang) {
  switch (_typeof(lang)) {
    case 'object':
      return lang;

    case 'string':
      switch (lang) {
        case 'en':
          return require('kothing-editor/lib/lang/en');

        case 'da':
          return require('kothing-editor/lib/lang/da');

        case 'de':
          return require('kothing-editor/lib/lang/de');

        case 'es':
          return require('kothing-editor/lib/lang/es');

        case 'fr':
          return require('kothing-editor/lib/lang/fr');

        case 'ja':
          return require('kothing-editor/lib/lang/ja');

        case 'ko':
          return require('kothing-editor/lib/lang/ko');

        case 'pt_br':
          return require('kothing-editor/lib/lang/pt_br');

        case 'ru':
          return require('kothing-editor/lib/lang/ru');

        case 'zh_cn':
          return require('kothing-editor/lib/lang/zh_cn');

        default:
          return require('kothing-editor/lib/lang/en');
      }

    default:
  }

  return require('kothing-editor/lib/lang/en');
};

var _default = getLanguage;
exports.default = _default;