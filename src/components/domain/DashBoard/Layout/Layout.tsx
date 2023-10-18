import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as style from './Layout.style';
import SideNavigationBar from './SideNavigationBar';

interface LayoutProps {
  headerInfo?: {
    title: string;
    description: string;
    buttonLabel: string;
    onButtonClick: () => void;
  };
}

const Layout = ({ children, headerInfo }: PropsWithChildren<LayoutProps>) => {
  const router = useRouter();

  return (
    <style.Wrapper>
      <SideNavigationBar />
      <style.ContentWrapper>
        {headerInfo && (
          <style.HeaderWrapper isMain={router.pathname === '/dashboard/[pid]'}>
            <Text fontStyleName="title" color={COLORS.grayscale.white}>
              {headerInfo.title}
            </Text>
            <Text fontStyleName="body1R" color={COLORS.grayscale.white}>
              {headerInfo.description}
            </Text>
            {headerInfo.buttonLabel && (
              <Button
                sizeType="small"
                themeColor={COLORS.grayscale.white}
                isRound
                onClick={headerInfo.onButtonClick}
                className="create-post-btn"
              >
                {headerInfo.buttonLabel}
              </Button>
            )}
          </style.HeaderWrapper>
        )}
        {children}
      </style.ContentWrapper>
    </style.Wrapper>
  );
};

export default Layout;
