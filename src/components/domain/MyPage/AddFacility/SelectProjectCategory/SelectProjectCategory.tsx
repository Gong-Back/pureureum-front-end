import ProjectTypeIcon from '@/components/common/ProjectTypeIcon';
import Text from '@/components/common/Text';

import { COLORS } from '@/constants/styles';
import * as style from './SelectProjectCategory.style';

const SelectProjectCategory = () => (
  <style.Wrapper>
    <style.Section>
      <style.Title className="title">
        <Text fontStyleName="subtitle2B" color={COLORS.grayscale.gray600}>
          카테고리
        </Text>
        <Text
          fontStyleName="body1B"
          color={COLORS.caption}
          className="asterisk"
        >
          *
        </Text>
      </style.Title>
      <ProjectTypeIcon
        projectType="volunteer"
        sizeType="big"
        className="volunteer-button"
      />
      <ProjectTypeIcon
        projectType="experiment"
        sizeType="big"
        className="experiment-button"
      />
      <ProjectTypeIcon
        projectType="healing"
        sizeType="big"
        className="healing-button"
      />
      <ProjectTypeIcon
        projectType="others"
        sizeType="big"
        className="others-button"
      />
    </style.Section>
  </style.Wrapper>
);

export default SelectProjectCategory;
