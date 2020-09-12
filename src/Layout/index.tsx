import React from 'react';
import Header from './Header';
import Sider from './Sider';
import Content from './Content';
import Footer from './Footer';
import './style.css';

export const WrapperClassName = 'app-layout';

// 组件封装
const Layout = (props: { [x: string]: any; children?: any; className?: any; }) => {
  const { className, ...rest } = props;
  return (
    <div className={`${WrapperClassName} ${className || ''}`} {...rest}>
      {props.children}
    </div>
  );
};

// 作为父组件的属性
Layout.Header = Header;
Layout.Sider = Sider;
Layout.Content = Content;
Layout.Footer = Footer;

export default Layout;
