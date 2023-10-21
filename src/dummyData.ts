import {
  CommentType,
  ProjectResponses,
  ReplyCommentType,
  UserResponses,
} from '@/constants/types';

// 마이페이지 접속 시
export const profileDummyData: UserResponses['info'] = {
  email: 'gwangin1999@naver.com',
  phoneNumber: '010-7167-0851',
  name: '백광인',
  nickname: 'RookieAND',
  gender: 'MALE',
  birthday: '1999-01-26',
  profileUrl: '',
};

// 프로젝트 리스트 조회 시
export const projectItemDummyData: ProjectResponses['main'] = {
  projectPartInformation: {
    id: 1,
    title: '우리 봄에 감자 농장 체험해요!',
    likeCount: 10,
    discussionStartDate: '2023-03-03',
    discussionEndDate: '2023-03-09',
    projectStartDate: '2023-03-10',
    projectEndDate: '2023-03-15',
    recruits: 0,
    totalRecruits: 10,
    facilityAddress: {
      city: '고양시',
      county: '대화역',
      district: '어딘가',
      jibun: '',
      detail: '',
      longitude: '',
      latitude: '',
    },
    ownerName: 'owner',
  },
  projectCategory: 'FARMING_HEALING',
  thumbnailFileRes: {
    projectFileUrl: '',
    projectFileType: 'THUMBNAIL',
  },
};

export const projectsDummydata = Array(6)
  .fill(0)
  .map((v, i) => ({ ...projectItemDummyData, id: i }));

// 프로젝트 상세 데이터 조회 시
export const projectContentDummyData: ProjectResponses['detail'] = {
  projectInformation: {
    title: '우리 봄에 감자 농장 체험해요!',
    likeCount: 10,
    discussionStartDate: '2023-03-03',
    discussionEndDate: '2023-03-09',
    projectStartDate: '2023-03-10',
    projectEndDate: '2023-03-15',
    recruits: 10,
    totalRecruits: 100,
    facilityAddress: {
      city: '고양시',
      county: '대화역',
      district: '어딘가',
      jibun: '',
      detail: '',
      longitude: '126.570667',
      latitude: '33.450701',
    },
    introduction: 'introduction',
    content: 'content',
    minAge: -1,
    maxAge: -1,
    guide: '',
    notice: '',
    ownerName: 'owner',
  },
  projectCategory: 'FARMING_HEALING',
  projectStatus: 'string',
  projectPayment: '10000원',
  projectFiles: [
    { projectFileType: 'THUMBNAIL', projectFileUrl: '' },
    {
      projectFileType: 'COMMON',
      projectFileUrl: '',
    },
  ],
};

// 프로젝트 의견 나누기 관련 댓글 더미 데이터
export const commentDummyData: CommentType[] = new Array(10)
  .fill({})
  .map((_, index) => ({
    commentId: index + 1,
    nickname: '관리자',
    content: `관리자 테스트 코멘트입니다. (${index + 1} 번째)`,
    writtenDate: '2021-03-03',
    approved: 10,
    denied: 10,
    replyAmount: 15,
  }));

export const commentReplyDummyData: ReplyCommentType[][] = Array(10)
  .fill({})
  .map(() =>
    Array(15)
      .fill({})
      .map(() => ({
        nickname: '관리자',
        content: '관리자 테스트 코멘트입니다.',
        writtenDate: '2021-03-03',
      })),
  );
