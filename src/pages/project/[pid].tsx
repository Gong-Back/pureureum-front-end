
import ProjectDetailTemplate from '@/components/template/ProjectDetailTemplate';

// import AsyncBoundary from '@/components/common/AsyncBoundary';

// const ProjectDetailTemplate = dynamic(
//  () => import('@/components/template/ProjectDetailTemplate'),
//  { suspense: true },
// );

const ProjectDetail = () => (
  // <AsyncBoundary>
  //  <ProjectDetailTemplate />
  // </AsyncBoundary>
  <ProjectDetailTemplate />
);

export default ProjectDetail;
