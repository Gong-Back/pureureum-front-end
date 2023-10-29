import { useRouter } from 'next/router';

import { projectsDummydata } from 'src/dummyData';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import Layout from '@/components/domain/MyPage/Layout';
import ProjectOperationItem from '@/components/domain/Project/ProjectOperationItem';
import { COLORS } from '@/constants/styles';

import * as style from './ProjectOperationTemplate.style';

const ProjectOperationTemplate = () => {
  const router = useRouter();
  // FIXME : 추후 API 연동 시 isEmpty flag 제거 필요
  const isEmpty = false;

  const moveToProjectCreation = () => router.push('/project/new');

  return (
    <Layout title="운영 중인 컨텐츠 관리">
      {isEmpty ? (
        <style.EmptyNotice>
          <Text fontStyleName="subtitle2R" color={COLORS.grayscale.gray500}>
            아직 등록한 문화 컨텐츠가 없습니다!
          </Text>
          <Button
            isRound
            className="seek-button"
            onClick={moveToProjectCreation}
          >
            문화 컨텐츠 등록하기
          </Button>
        </style.EmptyNotice>
      ) : (
        <style.ProjectListSection>
          {projectsDummydata.map((project) => (
            <ProjectOperationItem
              projectInfo={project.projectPartInformation}
            />
          ))}
        </style.ProjectListSection>
      )}
    </Layout>
  );
};

export default ProjectOperationTemplate;
