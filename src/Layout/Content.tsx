import React from 'react';
import { WrapperClassName } from './index';

// 组件封装
const Content = (props: { [x: string]: any; children?: any; className?: any; }) => {
  const { className, ...rest } = props;
  return (
    <div className={`${WrapperClassName}-content ${className || ''}`} {...rest}>
      {props.children}
    </div>
  );
};

export default Content;
