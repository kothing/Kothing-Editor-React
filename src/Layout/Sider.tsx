import React from 'react';
import { WrapperClassName } from './index';

// 组件封装
const Sider = (props: { [x: string]: any; children?: any; className?: any; }) => {
  const { className, ...rest } = props;
  return (
    <div className={`${WrapperClassName}-sider ${className || ''}`} {...rest}>
      {props.children}
    </div>
  );
};

export default Sider;
