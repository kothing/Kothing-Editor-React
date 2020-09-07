const getLanguage = (lang: any) => {
  switch (typeof lang) {
    case 'object':
      return lang;
    case 'string':
      switch (lang) {
        case 'en':
          return require('kothing-editor/lang/en');
        case 'da':
          return require('kothing-editor/lang/da');
        case 'de':
          return require('kothing-editor/lang/de');
        case 'es':
          return require('kothing-editor/lang/es');
        case 'fr':
          return require('kothing-editor/lang/fr');
        case 'ja':
          return require('kothing-editor/lang/ja');
        case 'ko':
          return require('kothing-editor/lang/ko');
        case 'pt_br':
          return require('kothing-editor/lang/pt_br');
        case 'ru':
          return require('kothing-editor/lang/ru');
        case 'zh_cn':
          return require('kothing-editor/lang/zh_cn');
        default:
          return require('kothing-editor/lang/en');
      }
  }
  return require('kothing-editor/lang/en');
};

export default getLanguage;
