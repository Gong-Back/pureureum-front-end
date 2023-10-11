import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as styles from './Loader.style';

interface LoaderProps {
  /** 로딩 중일 때 하단에 보여줄 텍스트 */
  infoText?: string;
}

/**
 * Data Fetching 과정에서 Suspense Fallback 으로 보여줄 Loader 컴포넌트
 */
const Loader = ({ infoText }: LoaderProps) => (
  <styles.Wrapper>
    <styles.Loader />
    <Text fontStyleName="body1B" color={COLORS.primary.dark}>
      {infoText || '데이터를 불러오는 중입니다...'}
    </Text>
  </styles.Wrapper>
);

export default Loader;
