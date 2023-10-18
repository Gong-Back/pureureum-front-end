import { useRouter } from 'next/router';

import Layout from '@/components/domain/DashBoard/Layout';
import { getBoardPath, getGalleryPath } from '@/constants/navigation';
import { DashboardMenuType } from '@/pages/dashboard/[pid]/board';

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
      const [url, as] = getGalleryPath(pid, 'new');
      router.push(url, as);
    },
  };

  return (
    <Layout headerInfo={menu === 'list' ? GallerysHeaderInfo : undefined}>
      <div>{menu}</div>
    </Layout>
  );
};

export default DashboardGalleryTemplate;
