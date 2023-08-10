import { ProjectItemType } from './constants/types';

export const projectItemDummyData: ProjectItemType = {
  projectPartInformation: {
    id: 0,
    title: '',
    likeCount: 0,
    projectStartDate: '2023-03-10',
    projectEndDate: '2023-03-15',
    recruits: 0,
    totalRecruits: 10,
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

export const projectsDummydata: ProjectItemType[] = Array(10)
  .fill(0)
  .map((v, i) => ({ ...projectItemDummyData, id: i }));
