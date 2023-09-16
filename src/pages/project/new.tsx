import { NextPage } from 'next';

import ProjectRegisterTemplate from '@/components/template/ProjectRegisterTemplate';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false,
    },
  };
}

const ProjectRegisterPage: NextPage = () => <ProjectRegisterTemplate />;

export default ProjectRegisterPage;
