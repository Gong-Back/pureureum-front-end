import {
  BoardItemDetailType,
  BoardItemType,
  CommentType,
  GalleryItemType,
  ProjectResponses,
  ReplyCommentType,
  UserResponses,
} from '@/constants/types';

// 마이페이지 접속 시
export const profileDummyData: UserResponses['info'] = {
  email: 'gwangin1999@naver.com',
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
    title: '성동구 시민과 함께하는 추억의 애니메이션 모음전',
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
    introduction:
      '10대부터 20대, 30대까지 다양한 연령대의 사람들이 모두 즐길 수 있도록, 추억의 애니메이션에 함께 빠져보실 분 있나요?',
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

export const boardItem = {
  title: '전시회 첫 참여 이벤트',
  content:
    '전시회 관람 후 갤러리에 참여 인증 사진을 올리면  추첨을 통해 총 10분에게 ‘스타벅스 아메리카노 교환권(T)’을 증정해 드립니다.전시회 관람 후 갤러리에 참여 인증 사진을 올리면  추첨을 통해 총 10분에게 ‘스타벅스 아메리카노 교환권(T)’을 증정해 드립니다.전시회 관람 후 갤러리에 참여 인증 사진을 올리면  추첨을 통해 총 10분에게 ‘스타벅스 아메리카노 교환권(T)’을 증정해 드립니다.전시회 관람 후 갤러리에 참여 인증 사진을 올리면  추첨을 통해 총 10분에게 ‘스타벅스 아메리카노 교환권(T)’을 증정해 드립니다.',
  time: '2분전',
};

export const boardListData: BoardItemType[] = Array(10)
  .fill(0)
  .map((v, i) => ({
    id: i,
    ...boardItem,
  }));

export const boardDetailData: BoardItemDetailType = {
  ...boardItem,
  id: 10,
  writerInfo: { profileUrl: '/projectThumbnail.jpg', name: 'user' },
  comments: [],
};

export const galleryItem: Omit<GalleryItemType, 'id'> = {
  userId: 10,
  imageUrl: '/projectThumbnail.jpg',
  caption: 'image caption',
};

export const galleryListData: GalleryItemType[] = Array(12)
  .fill(0)
  .map((v, i) => ({
    id: i,
    ...galleryItem,
  }));
