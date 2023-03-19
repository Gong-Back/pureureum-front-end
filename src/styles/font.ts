/**
 * PC, Moblie을 기준으로 두 폰트 스타일을 구분지어야 한다.
 * fontSize, fontWeight 이 달라지며, lineHeight의 경우 fontSize * 1.6 배로 비례한다.
 */
export const FONT_STYLE_NAME = {
  title: 'title',
  subtitle1: 'subtitle1',
  subtitle2B: 'subtitle2B',
  subtitle2R: 'subtitle2R',
  subtitle3: 'subtitle3',
  body1B: 'body1B',
  body1R: 'body1R',
  body2B: 'body2B',
  body2R: 'body2R',
  body3: 'body3',
  caption: 'caption',
} as const;

type FontStyleName = typeof FONT_STYLE_NAME[keyof typeof FONT_STYLE_NAME];

interface FontStyle {
  fontSize: number;
  fontWeight: number;
  lineHeight: number;
}

const LINE_HEIGHT_RATIO = 1.6;

/**
 * PC 버전에 쓰일 font style 상수 모음 (figma 참조)
 *  * FIXME: 추후 디자인 시스템이 안정화된다면 추가적인 수정 필요
 */
export const FONT_STYLE_PC: Record<FontStyleName, FontStyle> = {
  [FONT_STYLE_NAME.title]: {
    fontSize: 36,
    fontWeight: 800,
    lineHeight: LINE_HEIGHT_RATIO * 36,
  },
  [FONT_STYLE_NAME.subtitle1]: {
    fontSize: 30,
    fontWeight: 700,
    lineHeight: LINE_HEIGHT_RATIO * 30,
  },
  [FONT_STYLE_NAME.subtitle2B]: {
    fontSize: 25,
    fontWeight: 700,
    lineHeight: LINE_HEIGHT_RATIO * 25,
  },
  [FONT_STYLE_NAME.subtitle2R]: {
    fontSize: 25,
    fontWeight: 400,
    lineHeight: LINE_HEIGHT_RATIO * 25,
  },
  [FONT_STYLE_NAME.subtitle3]: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: LINE_HEIGHT_RATIO * 22,
  },
  [FONT_STYLE_NAME.body1B]: {
    fontSize: 22,
    fontWeight: 600,
    lineHeight: LINE_HEIGHT_RATIO * 22,
  },
  [FONT_STYLE_NAME.body1R]: {
    fontSize: 22,
    fontWeight: 400,
    lineHeight: LINE_HEIGHT_RATIO * 22,
  },
  [FONT_STYLE_NAME.body2B]: {
    fontSize: 19,
    fontWeight: 600,
    lineHeight: LINE_HEIGHT_RATIO * 19,
  },
  [FONT_STYLE_NAME.body2R]: {
    fontSize: 19,
    fontWeight: 400,
    lineHeight: LINE_HEIGHT_RATIO * 19,
  },
  [FONT_STYLE_NAME.body3]: {
    fontSize: 17,
    fontWeight: 400,
    lineHeight: LINE_HEIGHT_RATIO * 17,
  },
  [FONT_STYLE_NAME.caption]: {
    fontSize: 16,
    fontWeight: 300,
    lineHeight: LINE_HEIGHT_RATIO * 16,
  },
};

/**
 * Mobile 버전에 쓰일 font style 상수 모음 (figma 참조)
 * FIXME: 추후 디자인 시스템이 안정화된다면 추가적인 수정 필요
 */
export const FONT_STYLE_MOBILE: Record<FontStyleName, FontStyle> = {
  [FONT_STYLE_NAME.title]: {
    fontSize: 30,
    fontWeight: 800,
    lineHeight: LINE_HEIGHT_RATIO * 30,
  },
  [FONT_STYLE_NAME.subtitle1]: {
    fontSize: 22,
    fontWeight: 700,
    lineHeight: LINE_HEIGHT_RATIO * 22,
  },
  [FONT_STYLE_NAME.subtitle2B]: {
    fontSize: 20,
    fontWeight: 600,
    lineHeight: LINE_HEIGHT_RATIO * 20,
  },
  [FONT_STYLE_NAME.subtitle2R]: {
    fontSize: 20,
    fontWeight: 400,
    lineHeight: LINE_HEIGHT_RATIO * 20,
  },
  [FONT_STYLE_NAME.subtitle3]: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: LINE_HEIGHT_RATIO * 18,
  },
  [FONT_STYLE_NAME.body1B]: {
    fontSize: 18,
    fontWeight: 700,
    lineHeight: LINE_HEIGHT_RATIO * 18,
  },
  [FONT_STYLE_NAME.body1R]: {
    fontSize: 18,
    fontWeight: 400,
    lineHeight: LINE_HEIGHT_RATIO * 18,
  },
  [FONT_STYLE_NAME.body2B]: {
    fontSize: 16,
    fontWeight: 600,
    lineHeight: LINE_HEIGHT_RATIO * 16,
  },
  [FONT_STYLE_NAME.body2R]: {
    fontSize: 16,
    fontWeight: 400,
    lineHeight: LINE_HEIGHT_RATIO * 16,
  },
  [FONT_STYLE_NAME.body3]: {
    fontSize: 14,
    fontWeight: 400,
    lineHeight: LINE_HEIGHT_RATIO * 14,
  },
  [FONT_STYLE_NAME.caption]: {
    fontSize: 12,
    fontWeight: 300,
    lineHeight: LINE_HEIGHT_RATIO * 12,
  },
};
