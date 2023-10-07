import type { NextPage } from 'next';
import dynamic from 'next/dynamic';

import AsyncBoundary from '@/components/common/AsyncBoundary';

const ProjectApplyTemplate = dynamic(
  () => import('@/components/template/ProjectApplyTemplate'),
  { suspense: true },
);

const ProjectApplyPage: NextPage = () => (
  <AsyncBoundary>
    <ProjectApplyTemplate />
  </AsyncBoundary>
);

export default ProjectApplyPage;
