import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import DashboardGalleryTemplate from '@/components/template/DashboardGalleryTemplate';

import { DashboardMenuType } from './board';

const DashboardGalleryPage: NextPage = () => {
  const router = useRouter();
  const menu = (router.query.menu ?? 'list') as DashboardMenuType;
  const galleryId = Number(router.query.gallery_id as string);

  useEffect(() => {
    const getData = async () => {};
    getData();
  }, []);

  return <DashboardGalleryTemplate menu={menu} data={[]} />;
};

export default DashboardGalleryPage;
