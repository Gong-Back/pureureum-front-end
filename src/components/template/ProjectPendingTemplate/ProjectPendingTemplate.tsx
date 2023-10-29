import { useRouter } from 'next/router';

import { projectsDummydata } from 'src/dummyData';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import Layout from '@/components/domain/MyPage/Layout';
import ProjectOperationItem from '@/components/domain/Project/ProjectOperationItem';
import { COLORS } from '@/constants/styles';

import * as style from './ProjectPendingTemplate.style';

const ProjectPendingTemplate = () => {
  const router = useRouter();
  // FIXME : 추후 API 연동 시 isEmpty flag 제거 필요
  const isEmpty = false;

  const moveToProjectCreation = () => router.push('/project/new');

  return (
    <Layout title="승인 대기 중인 컨텐츠 목록">
      {isEmpty ? (
        <style.EmptyNotice>
          <Text fontStyleName="subtitle2R" color={COLORS.grayscale.gray500}>
            아직 대기 중인 문화 컨텐츠가 없습니다!
          </Text>
          <Button isRound className="seek-button">
            문화 컨텐츠 둘러보기
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

export default ProjectPendingTemplate;
