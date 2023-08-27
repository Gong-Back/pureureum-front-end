import { ProjectResponses } from './constants/types';

export const projectItemDummyData: ProjectResponses['main'] = {
  projectPartInformation: {
    id: 1,
    title: '우리 봄에 감자 농장 체험해요!',
    likeCount: 10,
    projectStartDate: '2023-03-10',
    projectEndDate: '2023-03-15',
    recruits: 10,
    totalRecruits: 100,
    facilityAddress: {
      city: '',
      county: '',
      district: '',
      jibun: '',
      detail: '',
      longitude: '',
      latitude: '',
    },
  },
  projectCategory: 'FARMING_HEALING',
  thumbnailFileRes: {
    projectFileUrl: '',
    projectFileType: 'THUMBNAIL',
  },
};

export const projectsDummydata = Array(10)
  .fill(0)
  .map((v, i) => ({ ...projectItemDummyData, id: i }));
