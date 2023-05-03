import Button from '@/components/common/Button';
import TextInput from '@/components/common/TextInput';
import ModalTemplate from '@/components/common/ModalTemplate';

import { COLORS } from '@/constants/styles';
import * as style from './UpdatePasswordModal.style';

const UpdatePasswordModal = () => (
  <ModalTemplate title="비밀번호 변경하기">
    <style.Wrapper>
      <TextInput
        placeholder="기존 비밀번호"
        value="test"
        isRound
        sizeType="medium"
      />
      <TextInput
        placeholder="변경할 비밀번호"
        value="test"
        isRound
        sizeType="medium"
      />
      <TextInput
        placeholder="변경할 비밀번호 확인"
        value="test"
        isRound
        sizeType="medium"
      />
      <Button
        isFilled
        themeColor={COLORS.grayscale.gray400}
        sizeType="small"
        className="confirm-btn"
      >
        인증번호 요청
      </Button>
    </style.Wrapper>
  </ModalTemplate>
);

export default UpdatePasswordModal;
