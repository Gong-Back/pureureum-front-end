import {
  boardListData,
  galleryListData,
  projectContentDummyData,
} from 'src/dummyData';

import DashboardHomeTemplate from '@/components/template/DashboardHomeTemplate';

// dummydata
const {
  projectInformation: { title, introduction },
} = projectContentDummyData;

const HomeData = {
  pid: 10,
  title,
  description: introduction,
  boards: boardListData.slice(0, 3),
  gallerys: galleryListData,
  members: [],
};

const DashboardHomePage = () => <DashboardHomeTemplate data={HomeData} />;

export default DashboardHomePage;
