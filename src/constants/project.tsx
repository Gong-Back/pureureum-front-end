import { ProjectStatusType } from './types';

export const ProjectStatusInfo: Record<
ProjectStatusType,
  { title: string; description: string }
> = {
  ADMIN_REQUIRED: {
    title: '승인 대기',
    description: '등록한 컨텐츠를 관리자가 확인 중입니다.',
  },
  REJECTED: {
    title: '등록 거절',
    description: '관리자가 컨텐츠 등록을 거절한 상태입니다.',
  },
  PREPARING: {
    title: '의견 수렴',
    description: '컨텐츠와 관련된 의견을 모으는 중입니다',
  },
  RECRUITING: {
    title: '모집 중',
    description: '컨텐츠에 참여할 인원을 모으는 중입니다.',
  },
  COMPLETED: {
    title: '진행 완료',
    description: '컨텐츠가 성공적으로 마무리 된 상태입니다.',
  },
};
