import AsyncBoundary from '@/components/common/AsyncBoundary';
import MyProfileTemplate from '@/components/template/MyProfileTemplate';

const Profile = () => (
  <AsyncBoundary>
    <MyProfileTemplate />
  </AsyncBoundary>
);
export default Profile;
