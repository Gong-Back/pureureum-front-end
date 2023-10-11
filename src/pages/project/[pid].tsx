import dynamic from 'next/dynamic';

import AsyncBoundary from '@/components/common/AsyncBoundary';

const ProjectDetailTemplate = dynamic(
  () => import('@/components/template/ProjectDetailTemplate'),
  { suspense: true },
);

const ProjectDetail = () => (
  <AsyncBoundary>
    <ProjectDetailTemplate />
  </AsyncBoundary>
);

export default ProjectDetail;
