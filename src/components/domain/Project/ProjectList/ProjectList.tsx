import ProjectItem from '@/components/domain/Project/ProjecItem';
import { ProjectItemType } from '@/constants/types';

import * as style from './ProjectList.style';

interface ProjectListProps {
  data: ProjectItemType[];
}

const ProjectList = ({ data }: ProjectListProps) => (
  <style.ProjectListWrap>
    {data.map((project) => (
      <ProjectItem
        key={project.projectId}
        type={project.type}
        thumbnail={project.thumbnail}
        title={project.title}
        introduction={project.introduction}
        onwerName={project.onwerName}
        currentRecruit={project.currentRecruit}
        totalRecruit={project.totalRecruit}
        location={project.location}
        startDate={project.startDate}
        endDate={project.endDate}
      />
    ))}
  </style.ProjectListWrap>
);

export default ProjectList;
