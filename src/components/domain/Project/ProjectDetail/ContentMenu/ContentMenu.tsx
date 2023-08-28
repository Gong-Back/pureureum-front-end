import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import { ProjectContentType } from '@/constants/types';
import * as style from './ContentMenu.style';

const MENU_LABEL = {
  intro: '프로젝트 소개',
  cost: '유의사항 및 금액',
  location: '찾아오시는 길',
  qna: '문의하기',
};

const MENUS = Object.keys(MENU_LABEL) as ProjectContentType[];

export interface ContentMenuProps {
  activeMenu: ProjectContentType;
  onClickMenu: (menu: ProjectContentType) => void;
}

const ContentMenu = ({ activeMenu, onClickMenu }: ContentMenuProps) => (
  <style.Wrapper>
    {MENUS.map((menu) => (
      <style.Menu key={menu} onClick={() => onClickMenu(menu)}>
        <Text
          fontStyleName={activeMenu === menu ? 'subtitle2B' : 'subtitle2R'}
          color={COLORS.grayscale[activeMenu === menu ? 'gray700' : 'gray500']}
        >
          {MENU_LABEL[menu]}
        </Text>
      </style.Menu>
    ))}
  </style.Wrapper>
);

export default ContentMenu;
