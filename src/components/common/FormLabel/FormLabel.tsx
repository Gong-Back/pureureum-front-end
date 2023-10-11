import Text from '@/components/common/Text';
import { COLORS } from '@/constants/styles';

import * as style from './FormLabel.style';

interface FormLabelProps {
  text: string;
  isEssential?: boolean;
  className?: string;
}

const FormLabel = ({ text, isEssential, className }: FormLabelProps) => (
  <style.Wrapper className={className}>
    <Text color={COLORS.grayscale.gray600} fontStyleName="subtitle2B">
      {text}
    </Text>
    {isEssential && (
      <Text fontStyleName="body1B" color={COLORS.caption} className="asterisk">
        *
      </Text>
    )}
  </style.Wrapper>
);

export default FormLabel;
