import { NextPage } from 'next';

import AsyncBoundary from '@/components/common/AsyncBoundary';
import ProjectListTemlate from '@/components/template/ProjectListTemplate';

const ProjectsPage: NextPage = () => (
  <AsyncBoundary>
    <ProjectListTemlate />;
  </AsyncBoundary>
);

export default ProjectsPage;
