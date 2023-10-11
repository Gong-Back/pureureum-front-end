import { PropsWithChildren } from 'react';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as style from './Layout.style';
import SideNavigationBar from './SideNavigationBar';

interface LayoutProps {
  title?: string;
}

const Layout = ({ children, title }: PropsWithChildren<LayoutProps>) => (
  <style.Wrapper>
    <SideNavigationBar />
    <style.ContentWrapper>
      {title && (
        <Text
          fontStyleName="title"
          color={COLORS.grayscale.dark}
          className="title"
        >
          {title}
        </Text>
      )}
      {children}
    </style.ContentWrapper>
  </style.Wrapper>
);

export default Layout;
