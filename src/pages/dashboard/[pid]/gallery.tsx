import { GetServerSideProps } from 'next';

import DashboardGalleryTemplate from '@/components/template/DashboardGalleryTemplate';
import { DashboardMenuType } from '@/constants/types';

export const getServerSideProps: GetServerSideProps<
  DashboardGalleryPageProps
> = async (ctx) => {
  const menu = (ctx.query.menu ?? 'list') as DashboardMenuType;
  const { id: galleryId } = ctx.query;

  return {
    props: { menu, data: [] },
  };
};

interface DashboardGalleryPageProps {
  menu: DashboardMenuType;
  data?: any; // TODO add gallery type
}

const DashboardGalleryPage = ({ menu, data }: DashboardGalleryPageProps) => (
  <DashboardGalleryTemplate menu={menu} data={data} />
);

export default DashboardGalleryPage;
