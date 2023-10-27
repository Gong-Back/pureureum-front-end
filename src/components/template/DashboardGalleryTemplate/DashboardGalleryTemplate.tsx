import { useRouter } from 'next/router';

import AddGalleryModal from '@/components/domain/DashBoard/AddGalleryModal';
import GalleryItem from '@/components/domain/DashBoard/GalleryItem';
import Layout from '@/components/domain/DashBoard/Layout';
import { DashboardMenuType, GalleryItemType } from '@/constants/types';
import useModal from '@/hooks/useModal';

import * as styles from './DashboardGalleryTemplate.style';

interface DashboardGalleryTemplateProps {
  menu: DashboardMenuType;
  data?: GalleryItemType[];
}

/** 모임 갤러리 관련 Template */
const DashboardGalleryTemplate = ({
  menu,
  data,
}: DashboardGalleryTemplateProps) => {
  const router = useRouter();
  const { pid } = router.query;

  const { openModal } = useModal();

  const GallerysHeaderInfo = {
    title: '갤러리',
    description: '추억을 공유해보세요',
    buttonLabel: '추가',
    onButtonClick: () => {
      openModal(<AddGalleryModal />);
    },
  };

  const renderContent = () => {
    switch (menu) {
      case 'list':
        return (
          <styles.ListWrapper>
            {(data as GalleryItemType[]).map((b: any) => (
              <GalleryItem
                key={b.id}
                id={b.id}
                userId={b.userId}
                imageUrl={b.imageUrl}
                caption={b.caption}
                className="gallery-item"
              />
            ))}
          </styles.ListWrapper>
        );
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
