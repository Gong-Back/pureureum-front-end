import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { ProjectRepository } from '@/apis/project';
import ProjectDetailTemplate from '@/components/template/ProjectDetailTemplate';
import { ProjectResponses } from '@/constants/types';

const ProjectDetail = () => {
  const router = useRouter();
  const id = Number(router.query.pid);

  const [detailData, setDetailData] = useState<ProjectResponses['detail']>();

  useEffect(() => {
    const getDetailData = async () => {
      const { data } = await ProjectRepository.getProjectDetailDataAsync(id);
      setDetailData(data);
    };

    if (id) getDetailData();
  }, [id]);

  if (!detailData) return <>s</>;

  return <ProjectDetailTemplate data={detailData} />;
};

export default ProjectDetail;
