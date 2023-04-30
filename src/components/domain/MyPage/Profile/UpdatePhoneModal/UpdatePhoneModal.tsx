import { useState } from 'react';

import Button from '@/components/common/Button';
import Text from '@/components/common/Text';
import TextInput from '@/components/common/TextInput';

import { COLORS } from '@/constants/styles';
import * as style from './UpdatePhoneModal.style';

const UpdatePhoneModal = () => {
    const [changePhoneNumInfo, SetChangePhoneNumInfo] = useState<>({
        newPhoneNumber: '',
        certification: '',
    })

  <style.Wrapper>
    <Text color={COLORS.grayscale.gray500} fontStyleName="body3">
      변경할 번호를 입력해주시고 SMS 인증을 진행해주세요
    </Text>
    <TextInput placeholder="전화번호" isRound sizeType="medium" />
  </style.Wrapper>;
};

export default UpdatePhoneModal;
