import React, { useEffect, useCallback, useRef } from 'react'

import KothingEditor from 'kothing-editor';
import plugins from 'kothing-editor/plugins';
import 'kothing-editor/assets/css/editor.css';
import 'kothing-editor/assets/css/editor-contents.css';

import getLanguage from './getLanguage';

import { KothingEditorOptions } from 'kothing-editor/options'

interface ReProps {
  options: Partial<KothingEditorOptions>;
  [key: string]: any;
};

const ReactEditor: React.FC<ReProps> = (props:ReProps) => {

  const editor: any = useRef(null);
  const kothingEditorTextareaId = props.textareaId || 'textarea-' + Math.floor(Math.random() * 999);

  const { options, customPlugins, lang, onChange, setContents } = props;
  
  const appendCustomPlugins = useCallback(() => {
    if (customPlugins && customPlugins.length) {
      customPlugins.forEach((customPlugin: any) => {
        plugins[customPlugin.name] = customPlugin;
      });
    }
    return plugins;
  }, [customPlugins]);

  useEffect(() => {
    appendCustomPlugins();
    options.lang = getLanguage(lang);

    editor.current = KothingEditor.create(editor.current, { ...options, plugins: plugins });

    if (onChange) {
      editor.current.onChange = onChange;
    }
    
    if (setContents) {
      editor.current.setContents(setContents);
    }

    return () => {
      if (editor.current) editor.current.destroy();
    }
  }, [appendCustomPlugins, options, onChange, setContents, lang]);
  
  return (
    <textarea ref={editor} id={kothingEditorTextareaId}/>
  )
}

export default ReactEditor;
