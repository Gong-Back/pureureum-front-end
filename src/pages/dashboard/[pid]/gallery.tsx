import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import DashboardGalleryTemplate from '@/components/template/DashboardGalleryTemplate';

const DashboardGalleryPage: NextPage = () => {
  const router = useRouter();
  const menu = (router.query.menu ?? 'list') as 'list' | 'item' | 'new';
  const galleryId = Number(router.query.gallery_id as string);

  console.log(menu, galleryId);

  useEffect(() => {
    const getData = async () => {
      // 메뉴가 list나 item 이라면 데이터 불러오기
      console.log('get data');
    };

    getData();
  }, []);

  return <DashboardGalleryTemplate menu={menu} data={[]} />;
};

export default DashboardGalleryPage;
