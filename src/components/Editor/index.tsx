import React, { useEffect, useCallback, useRef, CSSProperties, RefObject, MutableRefObject } from 'react';
import KothingEditor from 'kothing-editor';
import plugins from 'kothing-editor/lib/plugins';
import { KothingEditorOptions } from 'kothing-editor/lib/options';
import { Plugin } from 'kothing-editor/lib/plugins/Plugin';
import 'kothing-editor/lib/assets/css/editor.css';
import 'kothing-editor/lib/assets/css/editor-contents.css';
import getLanguage from './getLanguage';

interface ReactEditorProps extends Partial<Omit<KothingEditorOptions, 'lang'>> {
  ref?: MutableRefObject<any> | RefObject<any>;
  lang: string;
  customPlugins?: Plugin[] | Record<string, Plugin>;
  onChange?: any;
  setContents?: any;
  textareaId?: string;
  className?: string;
  wrapStyle?: CSSProperties;
}

const ReactEditor: React.FC<ReactEditorProps> = (props: ReactEditorProps) => {
  const editor: any = useRef(null);
  const kothingEditorTextareaId = props.textareaId || 'textarea-' + Math.floor(Math.random() * 999);

  const { customPlugins, lang, onChange, setContents } = props;

  const appendCustomPlugins = useCallback(() => {
    if (customPlugins && Array.isArray(customPlugins) && customPlugins.length) {
      customPlugins.forEach((customPlugin: any) => {
        plugins[customPlugin.name] = customPlugin;
      });
    }
    return plugins;
  }, [customPlugins]);

  useEffect(() => {
    appendCustomPlugins();

    editor.current = KothingEditor.create(editor.current, {
      ...props,
      lang: getLanguage(lang),
      plugins: plugins,
    });

    if (onChange) {
      editor.current.onChange = onChange;
    }

    if (setContents) {
      editor.current.setContents(setContents);
    }

    return () => {
      if (editor.current) editor.current.destroy();
    };
  }, [appendCustomPlugins, props, onChange, setContents, lang]);

  return <textarea ref={editor} id={kothingEditorTextareaId} />;
};

export default ReactEditor;
