import * as style from './VerifyPhoneNumberForm.style';

export interface VerifyPhoneNumberFormProps {
  phoneNumber: string;
  certificationNumber: number | undefined;
  isCheckPhoneNumber: boolean;
}

const VerifyPhoneNumberForm = ({
  phoneNumber,
  certificationNumber,
  isCheckPhoneNumber,
}: VerifyPhoneNumberFormProps) => (
  <style.Wrapper>
    <style.Section>
      <style.Input
        name="phoneNumber"
        placeholder="핸드폰 번호"
        value={phoneNumber}
        width={269}
      />
      <style.CheckButton>인증번호 요청</style.CheckButton>
    </style.Section>
    {certificationNumber && (
      <style.Input
        name="certificationNumber"
        placeholder="인증번호"
        value={cer}
      />
    )}
  </style.Wrapper>
);

export default VerifyPhoneNumberForm;
