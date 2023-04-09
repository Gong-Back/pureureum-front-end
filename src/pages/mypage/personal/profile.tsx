import { useRouter } from 'next/router';

import MyProfileTemplate from '@/components/template/MyProfileTemplate';

const Profile = () => {
  const router = useRouter();

  return <MyProfileTemplate />;
};
export default Profile;
