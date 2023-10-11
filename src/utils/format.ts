import { AddressType, FacilityAddressType } from '@/constants/types';

class FormatUtil {
  /**
   * 파일 용량을 KB, MB, GB 단위로 변환해주는 함수 formatfileSize
   * @param fileSize 파일 용량
   * @returns KB, MB, GB 등과 같은 단위로 변환된 파일 용량
   */
  static formatfileSize(fileSize: number) {
    const unit = Math.floor(Math.log2(fileSize) / 10);

    switch (unit) {
      case 1:
        return `${(fileSize / 2 ** 10).toFixed(1).toLocaleString()} KB`;
      case 2:
        return `${(fileSize / 2 ** 20).toFixed(1).toLocaleString()} MB`;
      case 3:
        return `${(fileSize / 2 ** 30).toFixed(1).toLocaleString()} GB`;
      default:
        return `${fileSize.toFixed(1).toLocaleString()} Byte`;
    }
  }

  /**
   * 주소 정보를 `시 군 구` 형식으로 변환해주는 함수 formatLocation
   * @param address 주소 데이터 객체
   * @returns `시 군 구`
   */
  static formatLocation(address: AddressType | FacilityAddressType) {
    const { city, county, district } = address;
    return `${city} ${county} ${district}`;
  }

  /**
   * 시작 날짜, 종료 날짜를 기간 형식으로 변환해주는 함수 formatDuration
   * @param startDate 시작 날짜
   * @param endDate 종료 날짜
   * @returns `시작 날짜 ~ 종료 날짜`
   */
  static formatDuration(startDate: string, endDate: string) {
    const [sDate, eDate] = [
      startDate.replaceAll('-', '.'),
      endDate.replaceAll('-', '.'),
    ];
    return `${sDate} ~ ${eDate}`;
  }

  /**
   * 년,월,일 정보를 담은 객체를 문자열로 변환하는 함수 formatDateFromObj
   * @param date {year, month, day}
   * @returns `year-month-day`
   */
  static formatDateFromObj(date: { year: string; month: string; day: string }) {
    return `${date.year}-${date.month}-${date.day}`;
  }

  /**
   * 핸드폰 번호 가운데 번호를 마스킹 처리하는 함수 formatMaskPhoneNum
   * @param phoneNumber
   * @returns `010-****-NNNN`
   */
  static formatMaskPhoneNum(phoneNumber: string) {
    return phoneNumber.replace(/-[0-9]{4}-/g, '-****-');
  }
}

export default FormatUtil;
