class FormatUtil {
  /**
   * 파일 용량을 KB, MB, GB 단위로 변환해주는 함수 formatfileSize
   * @param fileSize 파일 용량
   * @returns KB, MB, GB 등과 같은 단위로 변환된 파일 용량
   */
  static formatfileSize(fileSize: number) {
    const unit = Math.floor(Math.log2(fileSize) / 10);
    console.log(unit);

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
}

export default FormatUtil;