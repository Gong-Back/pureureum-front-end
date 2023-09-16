import { CategoryInfo } from '@/constants/project';
import { CategoryType } from '@/constants/types';

import Text from '../Text';
import * as style from './CategoryTag.style';

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
        {CategoryInfo[type].title}
      </Text>
      {isBigSize && CategoryInfo[type].emoji}
    </style.Wrapper>
  );
};

export default CategoryTag;
