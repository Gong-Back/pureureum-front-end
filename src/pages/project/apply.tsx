import { NextPage } from 'next';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { UserRepository } from '@/apis/user';
import ProjectApplyTemplate from '@/components/template/ProjectApplyTemplate';
import { UserResponses } from '@/constants/types';

const ProjectApplyPage: NextPage = () => {
  const router = useRouter();
  const [userData, setUserData] = useState<UserResponses['info']>();

  useEffect(() => {
    const getUserData = async () => {
      try {
        const { data } = await UserRepository.getUserInfoAsync();
        setUserData(data);
      } catch (error) {
        alert('로그인 후 프로젝트 참여 신청이 가능합니다!');
        router.push('/auth/login');
      }
    };

    getUserData();
  }, []);

  if (!userData) return <>s</>;

  return <ProjectApplyTemplate userData={userData} />;
};

export default ProjectApplyPage;
