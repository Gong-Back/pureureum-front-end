import { ProjectResponses, UserResponses } from '@/constants/types';

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
  paymentType: 'ENTRY_FEE',
  projectPayment: '10000원',
  projectFiles: [
    { projectFileType: 'THUMBNAIL', projectFileUrl: '' },
    {
      projectFileType: 'COMMON',
      projectFileUrl: '',
    },
  ],
};
