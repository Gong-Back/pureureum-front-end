import Text from '@/components/common/Text';
import ProjectList from '@/components/domain/Project/ProjectList';
import SideNavigationBar from '@/components/domain/MyPage/SideNavigationBar';

import { COLORS } from '@/constants/styles';

import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

import { projectsDummydata } from 'src/dummyData';
import * as style from './ProjectPendingTemplate.style';

const ProjectPendingTemplate = () => {
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'pc']);

  return (
    <style.Wrapper>
      {currentBreakpoint === 'pc' && <SideNavigationBar />}
      <style.Aside>
        <Text fontStyleName="title" color={COLORS.grayscale.gray600}>
          승인 대기 중인 프로젝트
        </Text>
        <ProjectList data={projectsDummydata} />
      </style.Aside>
    </style.Wrapper>
  );
};

export default ProjectPendingTemplate;
