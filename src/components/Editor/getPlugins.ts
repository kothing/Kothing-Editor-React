const flatten = (arr: any, result: any[] = []) => {
  if (!Array.isArray(arr)) {
    return [...result, arr];
  }

  for (let a = 0; a < arr.length; a++) {
    result = flatten(arr[a], result);
  }

  return result;
};

const getPlugins = ({ toolbarItem }: any) => {
  if (!toolbarItem) return undefined;

  if (!Array.isArray(toolbarItem))
    throw new Error("ToolBarItem must be of type array");
  else {
    const pluginList: any = {};
    toolbarItem = flatten(toolbarItem);

    if (toolbarItem.indexOf("align") >= 0)
      pluginList.align = require("kothing-editor/lib/plugins/submenu/align");
    if (toolbarItem.indexOf("font") >= 0)
      pluginList.font = require("kothing-editor/lib/plugins/submenu/font");
    if (toolbarItem.indexOf("fontColor") >= 0)
      pluginList.fontColor = require("kothing-editor/lib/plugins/submenu/fontColor");
    if (toolbarItem.indexOf("fontSize") >= 0)
      pluginList.fontSize = require("kothing-editor/lib/plugins/submenu/fontSize");
    if (toolbarItem.indexOf("formatBlock") >= 0)
      pluginList.formatBlock = require("kothing-editor/lib/plugins/submenu/formatBlock");
    if (toolbarItem.indexOf("hiliteColor") >= 0)
      pluginList.hiliteColor = require("kothing-editor/lib/plugins/submenu/hiliteColor");
    if (toolbarItem.indexOf("horizontalRule") >= 0)
      pluginList.horizontalRule = require("kothing-editor/lib/plugins/submenu/horizontalRule");
    if (toolbarItem.indexOf("lineHeight") >= 0)
      pluginList.lineHeight = require("kothing-editor/lib/plugins/submenu/lineHeight");
    if (toolbarItem.indexOf("list") >= 0)
      pluginList.list = require("kothing-editor/lib/plugins/submenu/list");
    if (toolbarItem.indexOf("paragraphStyle") >= 0)
      pluginList.paragraphStyle = require("kothing-editor/lib/plugins/submenu/paragraphStyle");
    if (toolbarItem.indexOf("table") >= 0)
      pluginList.table = require("kothing-editor/lib/plugins/submenu/table");
    if (toolbarItem.indexOf("template") >= 0)
      pluginList.template = require("kothing-editor/lib/plugins/submenu/template");
    if (toolbarItem.indexOf("textStyle") >= 0)
      pluginList.textStyle = require("kothing-editor/lib/plugins/submenu/textStyle");
    if (toolbarItem.indexOf("image") >= 0)
      pluginList.image = require("kothing-editor/lib/plugins/dialog/image");
    if (toolbarItem.indexOf("link") >= 0)
      pluginList.link = require("kothing-editor/lib/plugins/dialog/link");
    if (toolbarItem.indexOf("video") >= 0)
      pluginList.video = require("kothing-editor/lib/plugins/dialog/video");

    return pluginList;
  }
};

export default getPlugins;
