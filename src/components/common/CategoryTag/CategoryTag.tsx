import { CategoryType } from '@/constants/types';
import YouthFarmingIcon from '@/assets/icons/category/youthFarmingIcon.svg';
import FarmingHealingIcon from '@/assets/icons/category/farmingHealingIcon.svg';
import FarmingExperienceIcon from '@/assets/icons/category/farmingExperienceIcon.svg';
import EtcIcon from '@/assets/icons/category/etcIcon.svg';

import Text from '../Text';

import * as style from './CategoryTag.style';

const TAG_INFO: Record<CategoryType, { emoji: any; text: string }> = {
  YOUTH_FARMING: {
    emoji: <YouthFarmingIcon />,
    text: '청년 농활',
  },
  FARMING_HEALING: {
    emoji: <FarmingHealingIcon />,
    text: '농촌 힐링',
  },
  FARMING_EXPERIENCE: {
    emoji: <FarmingExperienceIcon />,
    text: '농촌 체험',
  },
  ETC: {
    emoji: <EtcIcon />,
    text: '기타',
  },
};

export interface CategoryTagProps {
  sizeType: 'small' | 'big';
  type: CategoryType;
  className?: string;
  onClick?: () => void;
}

const CategoryTag = ({
  sizeType,
  type,
  className,
  onClick,
}: CategoryTagProps) => {
  const isBigSize = sizeType === 'big';
  return (
    <style.Wrapper
      type={type}
      isBigSize={isBigSize}
      className={className}
      onClick={onClick}
    >
      <Text fontStyleName={isBigSize ? 'body1B' : 'body3'} className="text">
        {TAG_INFO[type].text}
      </Text>
      {isBigSize && TAG_INFO[type].emoji}
    </style.Wrapper>
  );
};

export default CategoryTag;
