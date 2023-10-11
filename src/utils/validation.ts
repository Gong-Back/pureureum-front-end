class ValidationUtil {
  /**
   * 유효한 아이디인지를 검사하기 위한 함수 validateEmail
   * @param email 유효성 검사를 진행할 아이디 email
   * @returns 유효하다면 true, 그렇지 않다면 false
   */
  static validateEmail(email: string) {
    const regexp = /^(?=.*[a-zA-Z])[a-zA-Z0-9]{8,15}$/;
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
   * @param birthday 유효성 검사를 진행할 생년월일  birthday
   * @returns 유효하다면 true, 그렇지 않다면 false
   */
  static validateBirthDay(birthday: [number, number, number]) {
    const [year, month, day] = birthday;
    const currentYear = new Date().getFullYear();

    if (year > currentYear) return false;
    if (month < 1 || month > 12) return false;
    if (day < 1 || day > 31) return false;
    return true;
  }

  /**
   * 유효한 이름인지를 검사하기 위한 함수 validateName
   * @param name 유효성 검사를 진행할 이름 name
   * @returns 유효하다면 true, 그렇지 않다면 false
   */
  static validateName(name: string) {
    const regexp = /^(?:[가-힣]{2,})|(?:[a-zA-Z]{2,}\s[a-zA-Z]{2,})$/;
    return regexp.test(name);
  }

  /**
   * 유효한 전화번호 인지를 검사하기 위한 함수 validatePhoneNumber
   * @param phoneNumber 유효성 검사를 진행할 전화번호 phoneNumber
   * @returns 유효하다면 true, 그렇지 않다면 false
   */
  static validatePhoneNumber(phoneNumber: string) {
    const regexp = /^01([0|1|6|7|8|9])-?([0-9]{3,4})-?([0-9]{4})$/;
    return regexp.test(phoneNumber);
  }

  /**
   * 유효한 일자인지 검사하기 위한 함수 validateDate
   * @param year 유효성 검사를 진행할 년도 year
   * @param month 유효성 검사를 진행할 월 month
   * @param day 유효성 검사를 진행할 일 day
   * @returns 유효하다면 true, 그렇지 않다면 false
   */
  static validateDate(year: string, month: string, day: string) {
    const yearRegexp = /^(19[0-9]{2}|20[0-2][0-9])$/;
    const monthRegexp = /^(0[1-9]|1[0-2])$/;
    const dayRegexp = /^((0[1-9]|[12][0-9])|3[01])$/;
    return (
      yearRegexp.test(year) && monthRegexp.test(month) && dayRegexp.test(day)
    );
  }
}

export default ValidationUtil;
