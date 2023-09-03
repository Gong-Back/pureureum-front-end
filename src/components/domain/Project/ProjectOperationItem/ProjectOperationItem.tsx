import { ProjectPartInfoType, ProjectStatusType } from '@/constants/types';

import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';
import FormatUtil from '@/utils/format';

import * as style from './ProjectOperationItem.style';

export interface ProjectOperationItemProps {
  projectInfo: ProjectPartInfoType;
}

const PROJECT_STATUS: Record<ProjectStatusType, string> = {
  NOT_STARTED: '모집 중',
  PROGRESSED: '진행 중',
  FINISHED: '진행 완료',
};

const ProjectOperationItem = ({ projectInfo }: ProjectOperationItemProps) => {
  const getProjectStatus = (): ProjectStatusType => {
    const todayMillis = new Date().getMilliseconds();
    const startDateMillis = Date.parse(projectInfo.projectStartDate);
    const endDateMillis = Date.parse(projectInfo.projectEndDate);

    if (todayMillis < startDateMillis) return 'NOT_STARTED';
    if (todayMillis <= endDateMillis) return 'PROGRESSED';
    return 'FINISHED';
  };

  return (
    <style.Wrapper>
      <style.StatusBadge>
        <Text fontStyleName="body1B" color={COLORS.grayscale.gray600}>
          {PROJECT_STATUS[getProjectStatus()]}
        </Text>
      </style.StatusBadge>
      <Text fontStyleName="subtitle1" color={COLORS.grayscale.gray700}>
        {projectInfo.title}
      </Text>
      <Text fontStyleName="body2R" color={COLORS.green.default}>
        {FormatUtil.formatLocation(projectInfo.facilityAddress)}
      </Text>
    </style.Wrapper>
  );
};

export default ProjectOperationItem;
