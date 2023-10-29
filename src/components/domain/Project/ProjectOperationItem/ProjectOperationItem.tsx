import Text from '@/components/common/Text';
import ProjectStatusTag from '@/components/domain/Project/ProjectStatusTag';
import { COLORS } from '@/constants/styles';
import type { ProjectPartInfoType } from '@/constants/types';
import ProjectUtil from '@/utils/content';
import FormatUtil from '@/utils/format';

import * as style from './ProjectOperationItem.style';

export interface ProjectOperationItemProps {
  projectInfo: ProjectPartInfoType;
}

const ProjectOperationItem = ({ projectInfo }: ProjectOperationItemProps) => {
  const { title, discussionEndDate, projectStartDate } = projectInfo;

  const currentProjectStatus = ProjectUtil.getContentStatus({
    discussionEndDate,
    projectStartDate,
  });

  return (
    <style.Wrapper>
      <ProjectStatusTag sizeType="big" status={currentProjectStatus} />
      <Text fontStyleName="subtitle1" color={COLORS.grayscale.gray700}>
        {title}
      </Text>
      <Text fontStyleName="body2R" color={COLORS.primary.default}>
        {FormatUtil.formatLocation(projectInfo.facilityAddress)}
      </Text>
    </style.Wrapper>
  );
};

export default ProjectOperationItem;
