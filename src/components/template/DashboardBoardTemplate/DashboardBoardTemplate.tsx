import { useRouter } from 'next/router';

import BoardDetail from '@/components/domain/DashBoard/BoardDetail';
import BoardItem from '@/components/domain/DashBoard/BoardItem/BoardItem';
import Layout from '@/components/domain/DashBoard/Layout';
import {
  BoardItemDetailType,
  BoardItemType,
  DashboardMenuType,
} from '@/constants/types';

import * as styles from './DashboardBoardTemplate.style';

interface DashboardBoardTemplateProps {
  menu: DashboardMenuType;
  data?: BoardItemType[] | BoardItemDetailType;
}

/** 모임 게시물 관련 Template */
const DashboardBoardTemplate = ({
  menu,
  data,
}: DashboardBoardTemplateProps) => {
  const router = useRouter();
  const { pid } = router.query;

  const BoardsHeaderInfo = {
    title: '게시판',
    description: '문화에 대한 이야기를 자유롭게 나누어보세요!',
    buttonLabel: '글쓰기',
    onButtonClick: () => {
      router.push({
        pathname: '/dashboard/[pid]/board',
        query: { pid, menu: 'new' },
      });
    },
  };

  const renderContent = () => {
    switch (menu) {
      case 'list':
        return (
          <styles.ListWrapper>
            {(data as BoardItemType[]).map((item: BoardItemType) => (
              <BoardItem
                key={item.id}
                id={item.id}
                title={item.title}
                content={item.content}
                time={item.time}
              />
            ))}
          </styles.ListWrapper>
        );
      case 'item':
        return (
          <styles.ItemWrapper>
            <BoardDetail data={data as BoardItemDetailType} />
          </styles.ItemWrapper>
        );
      case 'new':
        return <>new </>;
      default:
        return <>wrong path!</>;
    }
  };

  return (
    <Layout headerInfo={menu === 'list' ? BoardsHeaderInfo : undefined}>
      {renderContent()}
    </Layout>
  );
};

export default DashboardBoardTemplate;
