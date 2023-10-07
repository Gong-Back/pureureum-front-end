import { PropsWithChildren } from 'react';

import Header from './Header';
import * as style from './Layout.style';
import SideNavigationBar from './SideNavigationBar';

interface LayoutProps {
  headerInfo?: { title: string; introduction: string };
}

const Layout = ({ children, headerInfo }: PropsWithChildren<LayoutProps>) => {
  const isMain = true;
  return (
    <style.Wrapper>
      <SideNavigationBar />
      <style.ContentWrapper>
        {headerInfo && <Header isMain={isMain} headerInfo={headerInfo} />}
        {children}
      </style.ContentWrapper>
    </style.Wrapper>
  );
};

export default Layout;
