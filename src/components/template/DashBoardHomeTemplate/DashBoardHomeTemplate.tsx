import { projectContentDummyData } from 'src/dummyData';

import HomeWidget from '@/components/domain/DashBoard/HomeWidget';
import Layout from '@/components/domain/DashBoard/Layout';

import * as styles from './DashBoardHomeTemplate.style';

const DashBoardHomeTemplate = () => {
  const {
    projectInformation: { title, introduction },
  } = projectContentDummyData;

  return (
    <Layout headerInfo={{ title, introduction }}>
      <styles.ContentWrapper>
        <styles.LeftContent>
          <HomeWidget title="프로젝트 일정" className="schedule-widget">
            프로젝트 일정 Content
          </HomeWidget>
          <HomeWidget title="공지사항" className="notice-widget">
            공지사항 Content
          </HomeWidget>
          <HomeWidget title="프로젝트 갤러리" className="gallery-widget">
            프로젝트 갤러리 Content
          </HomeWidget>
        </styles.LeftContent>

        <styles.RightContent>
          <HomeWidget title="프로젝트 멤버" className="members-widget">
            프로젝트 멤버 Content
          </HomeWidget>
          <HomeWidget
            title="자유 게시판 | 질문 게시판"
            className="board-widget"
          >
            자유 게시판 | 질문 게시판 Content
          </HomeWidget>
        </styles.RightContent>
      </styles.ContentWrapper>
    </Layout>
  );
};

export default DashBoardHomeTemplate;
