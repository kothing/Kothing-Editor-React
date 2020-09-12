import { CSSProperties, RefObject, MutableRefObject } from 'react';
import { KothingEditorOptions } from 'kothing-editor/lib/options';
import { Plugin } from 'kothing-editor/lib/plugins/Plugin';

export interface KothingEditorReactProps extends Partial<Omit<KothingEditorOptions, 'lang'>> {
  ref?: MutableRefObject<any> | RefObject<any>;
  lang: string;
  customPlugins?: Plugin[] | Record<string, Plugin>;
  onChange?: any;
  setContents?: any;
  textareaId?: string;
  className?: string;
  wrapStyle?: CSSProperties;
}
