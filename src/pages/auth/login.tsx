import LoginTemplate from '@/components/template/LoginTemplate';

export async function getStaticProps() {
  return {
    props: {
      isNavigationVisible: false, // NOTICE: 빌드 과정에서 네비게이션 바를 보이지 않게 설정.
    },
  };
}

const Login = () => <LoginTemplate />;
export default Login;
