import dayjs from 'dayjs';
import isSameOrBefore from 'dayjs/plugin/isSameOrBefore';

import type { ProjectInfoType, ProjectStatusType } from '@/constants/types';

dayjs.extend(isSameOrBefore);

class ProjectUtil {
  static getContentStatus({
    discussionEndDate,
    projectStartDate,
  }: Pick<
    ProjectInfoType,
    'discussionEndDate' | 'projectStartDate'
  >): Exclude<ProjectStatusType, 'ADMIN_REQUIRED' | 'REJECTED'> {
    const current = dayjs();
    switch (true) {
      case current.isSameOrBefore(discussionEndDate):
        return 'PREPARING';
      case current.isSameOrBefore(projectStartDate):
        return 'RECRUITING';
      default:
        return 'COMPLETED';
    }
  }
}

export default ProjectUtil;