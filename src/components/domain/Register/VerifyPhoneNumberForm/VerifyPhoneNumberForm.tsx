import * as style from './VerifyPhoneNumberForm.style';

const VerifyPhoneNumberForm = () => (
  <style.Wrapper>
    <style.Section>
      <style.Input name="phoneNumber" placeholder="핸드폰 번호" width={269} />
      <style.CheckButton>인증번호 요청</style.CheckButton>
    </style.Section>
    <style.Input name="certificationNumber" placeholder="인증번호" />
  </style.Wrapper>
);

export default VerifyPhoneNumberForm;
