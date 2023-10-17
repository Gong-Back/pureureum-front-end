import { useRouter } from 'next/router';

import { projectContentDummyData } from 'src/dummyData';

import HomeWidget from '@/components/domain/DashBoard/HomeWidget';
import Layout from '@/components/domain/DashBoard/Layout';

import * as styles from './DashboardHomeTemplate.style';

// dummydata
const {
  projectInformation: { title, introduction },
} = projectContentDummyData;

interface DashboardHomeTemplateProps {
  data?: any;
}

const DashboardHomeTemplate = ({ data }: DashboardHomeTemplateProps) => {
  const router = useRouter();
  const pid = router.query.pid as string;

  const HomeHeaderInfo = {
    title,
    description: introduction,
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
            {/* 게시판 Content */}
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
