import { ProjectStatusType, ProjectSortType } from './types';

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

export const ProjectFilterInfo: Record<ProjectSortType, {title: string; description: string}> = {
  POPULAR: {
    title: '관심 순',
    description: '사람들이 많이 관심을 가진 컨텐츠들을 보여줍니다.'
  },
  LATEST: {
    title: '최신 순',
    description: '이제 막 따끈따끈하게 올라온 컨텐츠들을 보여줍니다.'
  },
  PARTICIPANT: {
    title: '참여 순',
    description: '많은 시민 분들이 참여를 희망한 컨텐츠들을 보여줍니다.'
  },
}