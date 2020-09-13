import React from "react";
import ReactEditor from "../../components/Editor";

const Editor = () => {
  // setContent
  const handleSetContent = () => {
    // Return the content to be set
    return "demo";
  };

  // onChange
  const onChange = (d: any) => {
    console.log("change:", d);
  };

  return (
    <ReactEditor
      width="100%"
      height="300px"
      toolBarItem={[
        ["undo", "redo", "removeFormat"],
        ["font", "fontSize", "formatBlock"],
        [
          "bold",
          "underline",
          "italic",
          "strike",
          "subscript",
          "superscript",
          "fontColor",
          "hiliteColor",
        ],
        [
          "outdent",
          "indent",
          "align",
          "horizontalRule",
          "list",
          "table",
          "link",
          "image",
          "video",
          "fullScreen",
          "showBlocks",
          "codeView",
          "preview",
          "print",
          "save",
        ],
      ]}
      lang="en"
      onChange={onChange}
      setContents={handleSetContent()}
    />
  );
};

export default Editor;
