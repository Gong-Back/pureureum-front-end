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
  >): ProjectStatusType {
    const current = dayjs();
    switch (true) {
      case current.isSameOrBefore(discussionEndDate):
        return 'NEED_DISCUSSION';
      case current.isSameOrBefore(projectStartDate):
        return 'NOT_STARTED';
      default:
        return 'PROGRESSED';
    }
  }
}

export default ProjectUtil;