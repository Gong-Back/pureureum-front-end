import ProjectItem from '@/components/domain/Project/ProjecItem';
import { ProjectResponses } from '@/constants/types';

import * as style from './ProjectList.style';

interface ProjectListProps {
  data: Array<ProjectResponses['main']>;
}

const ProjectList = ({ data }: ProjectListProps) => (
  <style.ProjectListWrap>
    {data.map((project) => (
      <ProjectItem
        key={project.projectPartInformation.id}
        category={project.projectCategory}
        thumbnail={project.thumbnailFileRes?.projectFileUrl ?? ''}
        info={project.projectPartInformation}
      />
    ))}
  </style.ProjectListWrap>
);

export default ProjectList;
