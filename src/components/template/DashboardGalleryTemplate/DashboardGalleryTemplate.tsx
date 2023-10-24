import { useRouter } from 'next/router';

import Layout from '@/components/domain/DashBoard/Layout';
import { DashboardMenuType } from '@/constants/types';

import * as styles from './DashboardGalleryTemplate.style';

interface DashboardGalleryTemplateProps {
  menu: DashboardMenuType;
  data?: any;
}

/** 모임 갤러리 관련 Template */
const DashboardGalleryTemplate = ({
  menu,
  data,
}: DashboardGalleryTemplateProps) => {
  const router = useRouter();
  const pid = router.query.pid as string;

  const GallerysHeaderInfo = {
    title: '갤러리',
    description: '추억을 공유해보세요',
    buttonLabel: '추가',
    onButtonClick: () => {
      router.push({
        pathname: '/dashboard/[pid]/gallery',
        query: { pid, menu: 'new' },
      });
    },
  };

  const renderContent = () => {
    switch (menu) {
      case 'list':
        return <styles.ListWrapper>gallery list</styles.ListWrapper>;
      case 'item':
        return <>item</>;
      case 'new':
        return <>new </>;
      default:
        return <>wrong path!</>;
    }
  };

  return (
    <Layout headerInfo={menu === 'list' ? GallerysHeaderInfo : undefined}>
      {renderContent()}
    </Layout>
  );
};

export default DashboardGalleryTemplate;
