const REGISTER_FALLBACK = {
  ALREADY_VERIFY_EMAIL: '이미 이메일 인증을 마친 상태입니다.',
  ALREADY_VERIFY_SMS: '이미 SMS 인증 문자를 전송하였습니다.',
  INVALID_EMAIL: '올바른 이메일 양식이 아닙니다. 다시 입력해주세요.',
  INVALID_PHONE_NUMBER: '올바른 핸드폰 번호 양식이 아닙니다.',
  INVALID_PASSWORD:
    '비밀번호는 영문, 숫자, 특문을 1개 이상 포함해 8자 이상이어야 합니다.',
  INVALID_BIRTHDAY: '유효하지 않은 생년월일입니다. 정확하게 입력해주세요.',
  INVALID_NAME: '유효하지 않은 이름입니다. 한글 혹은 영문명을 작성해주세요.',
  NOT_MATCH_PASSWORDS:
    '입력하신 비밀번호와 확인용 비밀번호가 일치하지 않습니다.',
  NOT_MATCH_CERTIFICATE_NUMBER: '입력한 SMS 인증번호가 일치하지 않습니다.',
  NOT_CHECK_EMAIL: '아직 이메일 중복 검사를 진행하지 않았습니다.',
  NOT_CHECK_SMS_VERIFY: '아직 SMS 인증을 진행하지 않았습니다.',
} as const;

export default REGISTER_FALLBACK;
