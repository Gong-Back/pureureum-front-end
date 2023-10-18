import { useRouter } from 'next/router';

import Layout from '@/components/domain/DashBoard/Layout';
import { getBoardPath } from '@/constants/navigation';
import { DashboardMenuType } from '@/pages/dashboard/[pid]/board';

import * as styles from './DashboardBoardTemplate.style';

interface DashboardBoardTemplateProps {
  menu: DashboardMenuType;
  data?: any;
}

/** 모임 게시물 관련 Template */
const DashboardBoardTemplate = ({
  menu,
  data,
}: DashboardBoardTemplateProps) => {
  const router = useRouter();
  const pid = router.query.pid as string;

  const BoardsHeaderInfo = {
    title: '게시판',
    description: '문화에 대한 이야기를 자유롭게 나누어보세요!',
    buttonLabel: '글쓰기',
    onButtonClick: () => {
      const [url, as] = getBoardPath(pid, 'new');
      router.push(url, as);
    },
  };

  return (
    <Layout headerInfo={menu === 'list' ? BoardsHeaderInfo : undefined}>
      <div>{menu}</div>
    </Layout>
  );
};

export default DashboardBoardTemplate;
