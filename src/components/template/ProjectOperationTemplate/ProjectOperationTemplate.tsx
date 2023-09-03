import { useRouter } from 'next/router';

import Text from '@/components/common/Text';
import Button from '@/components/common/Button';
import ProjectOperationItem from '@/components/domain/Project/ProjectOperationItem';
import SideNavigationBar from '@/components/domain/MyPage/SideNavigationBar';

import { COLORS } from '@/constants/styles';

import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

import { projectsDummydata } from 'src/dummyData';
import * as style from './ProjectOperationTemplate.style';

const ProjectOperationTemplate = () => {
  const router = useRouter();
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'pc']);
  // FIXME : 추후 API 연동 시 isEmpty flag 제거 필요
  const isEmpty = false;

  const moveToProjectCreation = () => router.push('/project/new');

  return (
    <style.Wrapper>
      {currentBreakpoint === 'pc' && <SideNavigationBar />}
      <style.Aside>
        <Text fontStyleName="title" color={COLORS.grayscale.gray600}>
          프로젝트 관리
        </Text>
        {isEmpty ? (
          <style.EmptyNotice>
            <Text fontStyleName="subtitle2R" color={COLORS.grayscale.gray500}>
              아직 생성하신 프로젝트가 없습니다!
            </Text>
            <Button
              isRound
              className="seek-button"
              onClick={moveToProjectCreation}
            >
              프로젝트 생생하기
            </Button>
          </style.EmptyNotice>
        ) : (
          <style.ProjectListSection>
            {projectsDummydata.map((project) => (
              <ProjectOperationItem projectInfo={project.projectPartInformation} />
            ))}
          </style.ProjectListSection>
        )}
      </style.Aside>
    </style.Wrapper>
  );
};

export default ProjectOperationTemplate;
