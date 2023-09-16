import { useRouter } from 'next/router';

import { projectsDummydata } from 'src/dummyData';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import Layout from '@/components/domain/MyPage/Layout';
import ProjectList from '@/components/domain/Project/ProjectList';
import { COLORS } from '@/constants/styles';

import * as style from './ProjectPendingTemplate.style';

const ProjectPendingTemplate = () => {
  const router = useRouter();
  // FIXME : 추후 API 연동 시 isEmpty flag 제거 필요
  const isEmpty = true;

  const moveToProjectCreation = () => router.push('/project/new');

  return (
    <Layout title="승인 대기 중인 프로젝트">
      {isEmpty ? (
        <style.EmptyNotice>
          <Text fontStyleName="subtitle2R" color={COLORS.grayscale.gray500}>
            아직 대기 중인 프로젝트가 없습니다!
          </Text>
          <Button isRound className="seek-button">
            프로젝트 둘러보기
          </Button>
        </style.EmptyNotice>
      ) : (
        <ProjectList data={projectsDummydata} />
      )}
    </Layout>
  );
};

export default ProjectPendingTemplate;
