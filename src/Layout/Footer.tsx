import React from 'react';
import { WrapperClassName } from './index';

// 组件封装
const Footer = (props: { [x: string]: any; children?: any; className?: any; }) => {
  const { className, ...rest } = props;
  return (
    <div className={`${WrapperClassName}-footer ${className || ''}`} {...rest}>
      {props.children}
    </div>
  );
};

export default Footer;
