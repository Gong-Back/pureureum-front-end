import EtcIcon from '@/assets/icons/category/etcIcon.svg';
import FarmingExperienceIcon from '@/assets/icons/category/farmingExperienceIcon.svg';
import FarmingHealingIcon from '@/assets/icons/category/farmingHealingIcon.svg';
import YouthFarmingIcon from '@/assets/icons/category/youthFarmingIcon.svg';
import { CategoryType } from './types';

export const CategoryInfo: Record<
  CategoryType,
  { emoji: any; title: string; description: string }
> = {
  FARMING_EXPERIENCE: {
    emoji: <FarmingExperienceIcon />,
    title: '농촌 체험',
    description: '사람들과 어울려 농촌 체험해보고 싶다면?',
  },
  YOUTH_FARMING: {
    emoji: <YouthFarmingIcon />,
    title: '청년 농활',
    description: '청년이라면 농활 한번쯤은 해봐야지!',
  },
  FARMING_HEALING: {
    emoji: <FarmingHealingIcon />,
    title: '농촌 힐링',
    description: '농촌에서 힐링하면서 지친 마음 달래보아요!',
  },
  ETC: {
    emoji: <EtcIcon />,
    title: '기타',
    description: '사람들과 함께 다양한 활동을 경험해보세요!',
  },
};
