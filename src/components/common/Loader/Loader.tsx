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
const Loader = ({ infoText }: LoaderProps) => {
  console.log('loader is loaded...')
  return (
    <styles.Wrapper>
      <styles.Loader />
      <Text fontStyleName="body1B" color={COLORS.primary.default}>
        {infoText || '잠시만 기다려주세요...'}
      </Text>
    </styles.Wrapper>
  );
};

export default Loader;
