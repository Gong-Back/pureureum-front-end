import Text from '@/components/common/Text';
import { CategoryInfo } from '@/constants/project';
import { COLORS } from '@/constants/styles';
import { CategoryType } from '@/constants/types';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import * as style from './CategoryFilter.style';

const CATEGORIES = Object.keys(CategoryInfo) as CategoryType[];

interface CategoryFilterProps {
  activeCategory?: CategoryType;
  onClickCategory: (c: CategoryType) => void;
}

// TODO 대표 이미지 추가...
const CategoryFilter = ({
  activeCategory,
  onClickCategory,
}: CategoryFilterProps) => {
  const currentBreakpoint = useMeasureBreakpoint();
  const isPc = currentBreakpoint === 'pc';

  return (
    <style.Wrapper isPc={isPc}>
      {CATEGORIES.map((c) => (
        <style.FilterItem key={c} onClick={() => onClickCategory(c)}>
          <style.Image isActive={c === activeCategory} />
          <Text
            fontStyleName="subtitle2B"
            color={COLORS.grayscale.gray700}
            className="title"
          >
            {CategoryInfo[c].title}
          </Text>
          <Text fontStyleName="body1R" color={COLORS.grayscale.gray700}>
            {CategoryInfo[c].description}
          </Text>
        </style.FilterItem>
      ))}
    </style.Wrapper>
  );
};

export default CategoryFilter;
