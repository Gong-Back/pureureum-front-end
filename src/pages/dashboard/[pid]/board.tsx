import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect } from 'react';

import DashboardBoardTemplate from '@/components/template/DashboardBoardTemplate';

export type DashboardMenuType = 'list' | 'item' | 'new';

const DashboardPage: NextPage = () => {
  const router = useRouter();
  const menu = (router.query.menu ?? 'list') as DashboardMenuType;
  const boardId = Number(router.query.board_id as string);

  useEffect(() => {
    const getData = async () => {};
    getData();
  }, []);

  return <DashboardBoardTemplate menu={menu} data={[]} />;
};

export default DashboardPage;
