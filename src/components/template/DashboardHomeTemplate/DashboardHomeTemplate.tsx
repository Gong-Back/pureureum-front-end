import BoardItem from '@/components/domain/DashBoard/BoardItem';
import GalleryItem from '@/components/domain/DashBoard/GalleryItem';
import HomeWidget from '@/components/domain/DashBoard/HomeWidget';
import Layout from '@/components/domain/DashBoard/Layout';
import { DashboardHomeInfo } from '@/constants/types';

import * as styles from './DashboardHomeTemplate.style';

interface DashboardHomeTemplateProps {
  data: DashboardHomeInfo;
}

const DashboardHomeTemplate = ({ data }: DashboardHomeTemplateProps) => {
  const { title, description, boards, gallerys } = data;

  const HomeHeaderInfo = {
    title,
    description,
    buttonLabel: '나가기',
    onButtonClick: () => {},
  };

  return (
    <Layout headerInfo={HomeHeaderInfo}>
      <styles.ContentWrapper>
        <styles.TopContent>
          <HomeWidget title="일정" className="schedule-widget">
            일정 Content
          </HomeWidget>
          <HomeWidget title="게시판" className="board-widget">
            {boards.map((b: any) => (
              <BoardItem
                key={b.id}
                id={b.id}
                title={b.title}
                content={b.content}
                time={b.time}
              />
            ))}
          </HomeWidget>
          <HomeWidget title="참여자 목록" className="members-widget">
            프로젝트 갤러리 Content
          </HomeWidget>
        </styles.TopContent>

        <styles.BottomContent>
          <HomeWidget title="문화 콘텐츠 갤러리" className="gallery-widget">
            <styles.GalleryContent>
              <styles.GalleryList>
                {gallerys.map((b: any) => (
                  <GalleryItem
                    key={b.id}
                    id={b.id}
                    userId={b.userId}
                    imageUrl={b.imageUrl}
                    caption={b.caption}
                    className="gallery-item"
                  />
                ))}
              </styles.GalleryList>
            </styles.GalleryContent>
          </HomeWidget>
        </styles.BottomContent>
      </styles.ContentWrapper>
    </Layout>
  );
};

export default DashboardHomeTemplate;
