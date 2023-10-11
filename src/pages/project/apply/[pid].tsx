import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import AsyncBoundary from '@/components/common/AsyncBoundary';

// FIXME : Server Side 에서 token 이 불러와지지 않아 생기는 문제 해결 필요
const ProjectApplyTemplate = dynamic(
  () => import('@/components/template/ProjectApplyTemplate'),
  { ssr: false },
);

const ProjectApplyPage: NextPage = () => (
  <AsyncBoundary>
    <ProjectApplyTemplate />
  </AsyncBoundary>
);

export default ProjectApplyPage;
