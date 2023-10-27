import { GetServerSideProps } from 'next';

import { galleryListData } from 'src/dummyData';

import DashboardGalleryTemplate from '@/components/template/DashboardGalleryTemplate';
import { DashboardMenuType, GalleryItemType } from '@/constants/types';

export const getServerSideProps: GetServerSideProps<
  DashboardGalleryPageProps
> = async (ctx) => {
  const menu = (ctx.query.menu ?? 'list') as DashboardMenuType;
  const { id: galleryId } = ctx.query;

  if (menu === 'list') {
    // TODO get gallery list data from server
    return {
      props: {
        menu: 'list',
        data: galleryListData,
      },
    };
  }

  return {
    props: { menu, data: [] },
  };
};

interface DashboardGalleryPageProps {
  menu: DashboardMenuType;
  data?: GalleryItemType[]; // TODO add gallery type
}

const DashboardGalleryPage = ({ menu, data }: DashboardGalleryPageProps) => (
  <DashboardGalleryTemplate menu={menu} data={data} />
);

export default DashboardGalleryPage;
