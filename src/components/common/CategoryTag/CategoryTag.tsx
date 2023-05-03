import { CategoryType } from '@/constants/types';
import Text from '../Text';
import * as style from './CategoryTag.style';

const TagInfo: Record<CategoryType, { emoji: string; text: string }> = {
  YOUTH_FARMING: {
    emoji: '👨‍🌾',
    text: '청년 농활',
  },
  FARMING_HEALING: {
    emoji: '🧘‍♀️',
    text: '농촌 힐링',
  },
  FARMING_EXPERIENCE: {
    emoji: '🌾',
    text: '농촌 체험',
  },
  ETC: {
    emoji: '🌿',
    text: '기타',
  },
};

export interface CategoryTagProps {
  sizeType: 'small' | 'big';
  type: CategoryType;
  className: string;
}

const CategoryTag = ({ sizeType, type, className }: CategoryTagProps) => {
  const isBigSize = sizeType === 'big';
  const content = `${TagInfo[type].text}  ${
    isBigSize ? TagInfo[type].emoji : ''
  }`;
  return (
    <style.Wrapper type={type} isBigSize={isBigSize} className={className}>
      <Text
        fontStyleName={isBigSize ? 'body1B' : 'body3'}
        className={`text ${className}`}
      >
        {content}
      </Text>
    </style.Wrapper>
  );
};

export default CategoryTag;
