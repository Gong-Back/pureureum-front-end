import BoardItem from '@/components/domain/DashBoard/BoardItem';
import HomeWidget from '@/components/domain/DashBoard/HomeWidget';
import Layout from '@/components/domain/DashBoard/Layout';
import { DashboardHomeInfo } from '@/constants/types';

import * as styles from './DashboardHomeTemplate.style';

interface DashboardHomeTemplateProps {
  data: DashboardHomeInfo;
}

const DashboardHomeTemplate = ({ data }: DashboardHomeTemplateProps) => {
  const { title, description, boardData } = data;

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
            {boardData.map((b: any) => (
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
            갤러리 content
          </HomeWidget>
        </styles.BottomContent>
      </styles.ContentWrapper>
    </Layout>
  );
};

export default DashboardHomeTemplate;
