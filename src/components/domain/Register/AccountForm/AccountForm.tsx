import * as style from './AccountForm.style';

export interface AccountFormProps {
  id: string;
  password: string;
  isCheckUserId: boolean;
}

const AccountForm = ({ id, password, isCheckUserId }: AccountFormProps) => (
  <style.Wrapper>
    <style.Section>
      <style.Input name="id" placeholder="아이디" value={id} width={290} />
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
