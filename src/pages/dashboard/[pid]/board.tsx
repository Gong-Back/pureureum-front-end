import { GetServerSideProps } from 'next';

import { boardDetailData, boardListData } from 'src/dummyData';

import DashboardBoardTemplate from '@/components/template/DashboardBoardTemplate';
import {
  BoardItemDetailType,
  BoardItemType,
  DashboardMenuType,
} from '@/constants/types';

export const getServerSideProps: GetServerSideProps<
  DashboardBoardPageProps
> = async (ctx) => {
  const menu = (ctx.query.menu ?? 'list') as DashboardMenuType;
  const { id: boardId } = ctx.query;

  if (menu === 'list') {
    // TODO get board list data from server
    return {
      props: {
        menu: 'list',
        data: boardListData,
      },
    };
  }

  if (menu === 'item') {
    // TODO get board detail and comments data from server
    return {
      props: { menu: 'item', data: boardDetailData },
    };
  }

  return {
    props: { menu: 'new' },
  };
};

interface DashboardBoardPageProps {
  menu: DashboardMenuType;
  data?: BoardItemType[] | BoardItemDetailType;
}

const DashboardBoardPage = ({ menu, data }: DashboardBoardPageProps) => (
  <DashboardBoardTemplate menu={menu} data={data} />
);

export default DashboardBoardPage;
