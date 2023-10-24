import { useRouter } from 'next/router';
import { PropsWithChildren } from 'react';

import { useAtomValue } from 'jotai';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import { dashboardNavbarVisibleAtom } from '@/stores/atom/navigation';

import * as style from './Layout.style';
import SideNavigationBar from './SideNavigationBar';

interface LayoutProps {
  headerInfo?: {
    title: string;
    description: string;
    buttonLabel?: string;
    onButtonClick?: () => void;
  };
}

const Layout = ({ children, headerInfo }: PropsWithChildren<LayoutProps>) => {
  const router = useRouter();
  const isBarVisible = useAtomValue(dashboardNavbarVisibleAtom);

  return (
    <style.Wrapper>
      {isBarVisible && <SideNavigationBar />}
      <style.ContentWrapper>
        {headerInfo && (
          <style.HeaderWrapper isHome={router.pathname === '/dashboard/[pid]'}>
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
