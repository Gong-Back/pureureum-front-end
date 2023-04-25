/**
 * Media Query 관련 breakpoint 정리
 * mobile : 500px 미만
 * tablet : 500px 이상 1000px 미만
 * pc : 1000px 이상
 */
export const MEDIA_QUERIES = {
  mobile: 'screen and (max-width: 500px)',
  tablet: 'screen and (min-width: 500px) and (max-width: 1000x)',
  pc: 'screen and (min-width: 1000px )',
} as const;
