import { NextPage } from 'next';
import { useRouter } from 'next/router';

import DashboardHomeTemplate from '@/components/template/DashboardHomeTemplate';

const DashboardHomePage: NextPage = () => {
  const router = useRouter();

  return <DashboardHomeTemplate data={[]} />;
};

export default DashboardHomePage;
