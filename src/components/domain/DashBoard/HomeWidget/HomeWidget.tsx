import { ReactNode } from 'react';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as styles from './HomeWidget.style';

interface HomeWidgetProps {
  title: string;
  children: ReactNode;
  headerContent?: ReactNode;
  footerContent?: ReactNode;
  className?: string;
}

const HomeWidget = ({
  title,
  children,
  headerContent,
  footerContent,
  className,
}: HomeWidgetProps) => (
  <styles.Wrapper className={className}>
    <styles.HeaderWrap>
      <Text fontStyleName="body1B" color={COLORS.grayscale.gray600}>
        {title}
      </Text>
      {headerContent}
    </styles.HeaderWrap>
    {children}
    {footerContent}
  </styles.Wrapper>
);

export default HomeWidget;
