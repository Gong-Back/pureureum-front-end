class ValidationUtil {
  /**
   * 유효한 아이디인지를 검사하기 위한 함수 validateEmail
   * @param email 유효성 검사를 진행할 아이디 email
   * @returns 유효하다면 true, 그렇지 않다면 false
   */
  static validateEmail(email: string) {
    const regexp = /^(?=.*[a-zA-Z])(?=.*[0-9])[a-zA-Z0-9]{8,15}$/;
    console.log(regexp.test(email));
    return regexp.test(email);
  }

  /**
   * 유효한 비밀번호인지를 검사하기 위한 함수 validatePassword
   * @param password 유효성 검사를 진행할 비밀번호 password
   * @returns 유효하다면 true, 그렇지 않다면 false
   */
  static validatePassword(password: string) {
    const regexp =
      /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{8,}$/;
    return regexp.test(password);
  }

  /**
   * 유효한 생년월일인지를 검사하기 위한 함수 validateBirthDay
   * @param value 유효성 검사를 진행할 생년월일 문자열 birthday
   * @returns 유효하다면 true, 그렇지 않다면 false
   */
  static validateBirthDay(birthday: string) {
    const regexp =
      /^(19[0-9][0-9]|20\d{2})(0[0-9]|1[0-2])(0[1-9]|[1-2][0-9]|3[0-1])$/;
    return regexp.test(birthday);
  }

  /**
   * 유효한 이름인지를 검사하기 위한 함수 validateName
   * @param name 유효성 검사를 진행할 이름 name
   * @returns 유효하다면 true, 그렇지 않다면 false
   */
  static validateName(name: string) {
    const regexp = /^[가-힣]{2,}|[a-zA-Z]{2,}\s[a-zA-Z]{2,}$/;
    return regexp.test(name);
  }
}

export default ValidationUtil;
