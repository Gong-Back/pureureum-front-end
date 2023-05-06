import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';
import ModalTemplate from '@/components/common/ModalTemplate';

import { COLORS } from '@/constants/styles';
import * as style from './UpdatePhoneModal.style';

const UpdatePhoneModal = () => (
  <ModalTemplate title="휴대폰 번호 변경하기">
    <style.Wrapper>
      <Text
        color={COLORS.grayscale.gray500}
        fontStyleName="body3"
        className="title"
      >
        변경할 번호를 입력해주시고 SMS 인증을 진행해주세요
      </Text>
      <TextInput
        placeholder="전화번호"
        value="test"
        isRound
        sizeType="medium"
        className="phone-input"
      />
      <Button isFilled sizeType="medium" className="verify-btn">
        인증번호 요청
      </Button>
      <TextInput
        placeholder="인증번호"
        value="test"
        isRound
        sizeType="medium"
        className="verify-input"
      />
      <Button
        isFilled
        themeColor={COLORS.grayscale.gray400}
        sizeType="small"
        className="confirm-btn"
      >
        변경 완료
      </Button>
    </style.Wrapper>
  </ModalTemplate>
);

export default UpdatePhoneModal;
