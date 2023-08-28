import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import HeartIconSvg from '@/assets/icons/heartIcon.svg';
import BookmarkIconSvg from '@/assets/icons/bookmarkIcon.svg';
import ShareURLIconSvg from '@/assets/icons/shareURLIcon.svg';

import { ProjectInfoType } from '@/constants/types';
import FormatUtil from '@/utils/format';
import * as style from './FloatingMenu.style';

export interface FloatingMenuProps {
  /** 프로젝트 관련 상세 정보 */
  info: ProjectInfoType;
}

const FloatingMenu = ({ info }: FloatingMenuProps) => {
  const {
    title,
    introduction,
    ownerName,
    facilityAddress,
    projectStartDate,
    projectEndDate,
  } = info;

  const infoList = [
    { label: '주관', content: ownerName },
    { label: '위치', content: FormatUtil.formatLocation(facilityAddress) },
    {
      label: '기간',
      content: FormatUtil.formatDuration(projectStartDate, projectEndDate),
    },
  ];

  const menuList = [
    { label: '좋아요', icon: HeartIconSvg, onClick: () => {} },
    { label: '관심 등록', icon: BookmarkIconSvg, onClick: () => {} },
    { label: 'URL 공유', icon: ShareURLIconSvg, onClick: () => {} },
  ];

  return (
    <style.Wrapper>
      <Text fontStyleName="subtitle2B" color={COLORS.primary.greenDefault}>
        {title}
      </Text>
      <Text
        fontStyleName="body2R"
        color={COLORS.grayscale.gray600}
        className="intro"
      >
        {introduction}
      </Text>
      <style.InfoWrapper>
        {infoList.map(({ label, content }) => (
          <style.InfoField key={label}>
            <Text fontStyleName="body2B" color={COLORS.primary.greenDefault}>
              {label}
            </Text>
            <Text fontStyleName="body2R" color={COLORS.grayscale.gray600}>
              {content}
            </Text>
          </style.InfoField>
        ))}
      </style.InfoWrapper>
      <style.MenuWrapper>
        {menuList.map(({ icon: Icon, label, onClick }) => (
          <style.MenuField key={label} onClick={onClick}>
            <Icon />
            <Text fontStyleName="body2B" color={COLORS.grayscale.gray600}>
              {label}
            </Text>
          </style.MenuField>
        ))}
      </style.MenuWrapper>
    </style.Wrapper>
  );
};

export default FloatingMenu;
