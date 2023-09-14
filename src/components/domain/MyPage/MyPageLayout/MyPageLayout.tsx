import { PropsWithChildren } from 'react';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import * as style from './MyPageLayout.style';
import SideNavigationBar from './SideNavigationBar';

interface MyPageLayoutProps {
  title?: string;
}

const MyPageLayout = ({
  children,
  title,
}: PropsWithChildren<MyPageLayoutProps>) => (
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

export default MyPageLayout;
