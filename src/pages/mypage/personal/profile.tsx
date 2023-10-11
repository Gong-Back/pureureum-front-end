import AsyncBoundary from '@/components/common/AsyncBoundary';
import Layout from '@/components/domain/MyPage/Layout';
import MyProfileTemplate from '@/components/template/MyProfileTemplate';

const Profile = () => (
  <Layout>
    <AsyncBoundary>
      <MyProfileTemplate />
    </AsyncBoundary>
  </Layout>
);
export default Profile;
