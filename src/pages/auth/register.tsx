import { GetServerSideProps } from 'next';

import RegisterTemplate from '@/components/template/RegisterTemplate';
import { SocialPlatformType } from '@/constants/types';

// NOTICE: Server - Side 에서 사전에 OAuth2 로 가입되었는지를 체크하고, 관련 정보를 주입한다.
export const getServerSideProps: GetServerSideProps = async (ctx) => {
  const { socialType = null, email: socialEmail = null } = ctx.query;

  if (!socialType || !socialEmail) {
    return {
      redirect: {
        destination: '/auth/login',
        permanent: true,
      }
    }
  }

  return {
    props: { socialType, socialEmail },
  };
};

export interface RegisterProps {
  /** OAuth2 로 회원가입 진행 시, 가입을 진행한 플랫폼 정보 */
  socialType: SocialPlatformType;
  /** OAuth2 로 회원가입 진행 시, 서버에서 임시 가공된 유저 Email 값 */
  socialEmail: string;
}

const Register = ({ socialType, socialEmail }: RegisterProps) => (
  <RegisterTemplate socialEmail={socialEmail} socialType={socialType} />
);

export default Register;
