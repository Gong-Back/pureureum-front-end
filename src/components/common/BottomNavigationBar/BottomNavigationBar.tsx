import Link from 'next/link';
import { useRouter } from 'next/router';

import { MobileNavList, NavInfo } from '@/constants/navigation';
import { COLORS } from '@/constants/styles';

import Text from '../Text';
import * as style from './BottomNavigationBar.style';

const BottomNavigationBar = () => {
  const { pathname } = useRouter();

  return (
    <style.Wrapper>
      {MobileNavList.map((item) => {
        const { path, text, icon } = NavInfo[item];
        const itemColor =
          path === pathname ? COLORS.primary.default : COLORS.grayscale.gray600;
        return (
          <Link passHref href={path} key={text}>
            <style.NavItem color={itemColor}>
              {icon}
              <Text fontStyleName="body3" color={itemColor}>
                {text}
              </Text>
            </style.NavItem>
          </Link>
        );
      })}
    </style.Wrapper>
  );
};

export default BottomNavigationBar;
