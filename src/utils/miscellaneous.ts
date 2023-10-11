class MiscellaneousUtil {
  static async copyToClipboard(text: string) {
    if (typeof window === 'undefined') {
      throw new Error('Server Side 환경에서 사용할 수 없는 함수입니다.');
    }
    try {
      await window.navigator.clipboard.writeText(text);
    } catch (error) {
      throw new Error('클립보드에 복사하는데 실패했습니다.');
    }
  }
}

export default MiscellaneousUtil;
