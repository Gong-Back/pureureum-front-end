import * as style from './AccountForm.style';

export interface AccountFormProps {
  email: string;
  password: string;
  isCheckUserId: boolean;
}

const AccountForm = ({ email, password, isCheckUserId }: AccountFormProps) => (
  <style.Wrapper>
    <style.Section>
      <style.Input
        name="email"
        placeholder="이메일"
        value={email}
        width={290}
      />
      <style.CheckButton>중복 확인</style.CheckButton>
      <style.Description>8 ~ 15자 영문, 한글, 숫자</style.Description>
    </style.Section>
    <style.Section>
      <style.Input name="password" placeholder="비밀번호" value={password} />
      <style.Description>
        영문, 숫자, 특수 문자 1개 이상 포함, 8자 이상
      </style.Description>
    </style.Section>
    <style.Input name="confirmPassword" placeholder="비밀번호 확인" />
  </style.Wrapper>
);

export default AccountForm;
