import React from 'react';
import ReactEditor from './ReactEditor';

const Editor = () => {

  const onChange = (d: any) => {
    console.log(d)
  }

  return (
    <ReactEditor
      options={{
        width: '100%',
        height: '300px',
        toolBarItem: [
          [
            'undo',
            'redo',
            'removeFormat'
          ],
          [
            'font',
            'fontSize',
            'formatBlock',
          ],
          [
            'bold',
            'underline',
            'italic',
            'strike',
            'subscript',
            'superscript',
            'fontColor',
            'hiliteColor',
          ],
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
            'save'
          ]
        ]
      }}
      lang='zh_cn'
      onChange={onChange} 
    />
  );
};

export default Editor;
