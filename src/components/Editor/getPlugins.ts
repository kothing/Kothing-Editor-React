const flatten = (arr: any, result: any[] = []) => {
    if (!Array.isArray(arr)) {
      return [...result, arr];
    }

    for (let a = 0; a < arr.length; a++) {
      result = flatten(arr[a], result);
    }

    return result
}

const getPlugins = ({ toolBarItem }: any) => {

    if (!toolBarItem) return undefined;

    if (!Array.isArray(toolBarItem)) throw new Error('ToolBarItem must be of type array')
    else {
        const pluginList: any = {};
        toolBarItem = flatten(toolBarItem);

        if (toolBarItem.indexOf('align') >= 0) pluginList.align = require('kothing-editor/lib/plugins/submenu/align');
        if (toolBarItem.indexOf('font') >= 0) pluginList.font = require('kothing-editor/lib/plugins/submenu/font');
        if (toolBarItem.indexOf('fontColor') >= 0) pluginList.fontColor =  require('kothing-editor/lib/plugins/submenu/fontColor');
        if (toolBarItem.indexOf('fontSize') >= 0) pluginList.fontSize =  require('kothing-editor/lib/plugins/submenu/fontSize');
        if (toolBarItem.indexOf('formatBlock') >= 0) pluginList.formatBlock =  require('kothing-editor/lib/plugins/submenu/formatBlock');
        if (toolBarItem.indexOf('hiliteColor') >= 0) pluginList.hiliteColor =  require('kothing-editor/lib/plugins/submenu/hiliteColor');
        if (toolBarItem.indexOf('horizontalRule') >= 0) pluginList.horizontalRule =  require('kothing-editor/lib/plugins/submenu/horizontalRule');
        if (toolBarItem.indexOf('lineHeight') >= 0) pluginList.lineHeight =  require('kothing-editor/lib/plugins/submenu/lineHeight');
        if (toolBarItem.indexOf('list') >= 0) pluginList.list =  require('kothing-editor/lib/plugins/submenu/list');
        if (toolBarItem.indexOf('paragraphStyle') >= 0) pluginList.paragraphStyle =  require('kothing-editor/lib/plugins/submenu/paragraphStyle');
        if (toolBarItem.indexOf('table') >= 0) pluginList.table =  require('kothing-editor/lib/plugins/submenu/table');
        if (toolBarItem.indexOf('template') >= 0) pluginList.template =  require('kothing-editor/lib/plugins/submenu/template');
        if (toolBarItem.indexOf('textStyle') >= 0) pluginList.textStyle =  require('kothing-editor/lib/plugins/submenu/textStyle');
        if (toolBarItem.indexOf('image') >= 0) pluginList.image =  require('kothing-editor/lib/plugins/dialog/image');
        if (toolBarItem.indexOf('link') >= 0) pluginList.link =  require('kothing-editor/lib/plugins/dialog/link');
        if (toolBarItem.indexOf('video') >= 0) pluginList.video =  require('kothing-editor/lib/plugins/dialog/video');
        
        return pluginList;
    }

};



export default getPlugins;