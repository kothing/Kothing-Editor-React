# Kothing-Editor-React

This package is a thin wrapper around <a href='github.com/kothing-editor' target='_blank'>Kothing-Editor</a> to make it easier to use in a React application.

## Usage

```
import React from 'react';
import ReactEditor from 'kothing-editor-react';

const Editor = () => {
  // setContent
  const handleSetContent = () => {
    // Return the content to be set
    return 'demo';
  };

  // onChange
  const onChange = (d: any) => {
    console.log('change:', d);
  };

  return (
    <ReactEditor
      width="100%"
      height="300px"
      toolbarItem={[
        ['undo', 'redo', 'removeFormat'],
        ['font', 'fontSize', 'formatBlock'],
        ['bold', 'underline', 'italic', 'strike', 'subscript', 'superscript', 'fontColor', 'hiliteColor'],
        [
          'outdent',
          'indent',
          'align',
          'horizontalRule',
          'list',
          'table',
          'link',
          'image',
          'video',
          'fullScreen',
          'showBlocks',
          'codeView',
          'preview',
          'print',
          'save',
        ],
      ]}
      lang="en"
      onChange={onChange}
      setContents={handleSetContent()}
    />
  );
};

export default Editor;

```
