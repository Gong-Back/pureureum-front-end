import LeftIconSvg from '@/assets/icons/leftIcon.svg';

import { COLORS } from '@/constants/styles';
import React, { useState } from 'react';
import * as style from './DropdownMenu.style';
import Text from '../Text';

interface DropdownMenuProps {
  menuList: readonly string[];
  selectedMenu: string;
  setSelectedMenu: React.Dispatch<React.SetStateAction<any>>;
  className?: string;
}

const DropdownMenu = ({
  menuList,
  selectedMenu,
  setSelectedMenu,
  className,
}: DropdownMenuProps) => {
  const [isOpened, setIsOpened] = useState<boolean>(false);

  return (
    <style.Wrapper
      onClick={() => setIsOpened((prev) => !prev)}
      className={className}
    >
      <style.MenuWrap>
        <Text fontStyleName="body2B" color={COLORS.primary.greenDefault}>
          {selectedMenu}
        </Text>
      </style.MenuWrap>
      {isOpened &&
        menuList
          .filter((menu) => menu !== selectedMenu)
          .map((menu) => (
            <style.MenuWrap
              key={menu}
              onClick={() => setSelectedMenu(menu)}
              className="non-selected-menu"
            >
              <Text fontStyleName="body2B" color={COLORS.primary.greenDefault}>
                {menu}
              </Text>
            </style.MenuWrap>
          ))}
      <LeftIconSvg color={COLORS.primary.greenDefault} />
    </style.Wrapper>
  );
};

export default DropdownMenu;
