/* eslint-disable react-hooks/rules-of-hooks */
import { useEffect, useRef, useState } from 'react';

type BreakpointType = 'mobile' | 'tablet' | 'pc';
const BREAKPOINT_LIST: BreakpointType[] = ['mobile', 'tablet', 'pc'];
const BREAKPOINT = new Map<BreakpointType, number>([
  ['mobile', 0],
  ['tablet', 500],
  ['pc', 1000],
]);

/**
 * 현재 Body Width를 측정하여 올바른 breakpoint를 반환하는 Hook useMeasureBreakpoint
 * @param customBreakpoints 관찰하고자 하는 breakpoint 배열  ('mobile', 'tablet', 'pc')
 * @param defaultBreakpoint 기본 값으로 설정하려는 breakpoint
 * @returns
 */
const useMeasureBreakpoint = (
  customBreakpoints: BreakpointType[] = BREAKPOINT_LIST,
  defaultBreakpoint: BreakpointType | null = null,
): BreakpointType | null => {
  // Server - Side Rendering 인 경우 측정이 불가능하므로 패스
  if (typeof window === 'undefined') {
    return null;
  }

  const [currentBreakpoint, setCurrentBreakpoint] = useState(defaultBreakpoint);

  const resizeObserverRef = useRef<ResizeObserver | null>(null);

  useEffect(() => {
    const getCurrentBreakpoint = (currentBodyWidth: number) => {
      const firstBreakpoint = customBreakpoints[0];
      const lastBreakpoint = customBreakpoints[customBreakpoints.length - 1];

      // 가장 첫번째 요소보다 더 width 가 작다면 그냥 첫번째 요소를 바라보게끔 한다.
      if (BREAKPOINT.get(firstBreakpoint)! > currentBodyWidth) {
        return firstBreakpoint;
      }
      // 마지막 요소보다 더 width 가 크다면 마지막 요소를 바라보게끔 설정한다.
      if (BREAKPOINT.get(lastBreakpoint)! <= currentBodyWidth) {
        return lastBreakpoint;
      }

      let measuredBreakpoint = firstBreakpoint;
      customBreakpoints.every((point) => {
        const isBiggerThanPoint = BREAKPOINT.get(point)! < currentBodyWidth;
        if (isBiggerThanPoint) measuredBreakpoint = point;
        return isBiggerThanPoint;
      });

      return measuredBreakpoint;
    };

    resizeObserverRef.current = new ResizeObserver(([resizeEntry]) => {
      const [{ inlineSize: currentBodyWidth }] = resizeEntry.contentBoxSize;
      const measuredBreakpoint = getCurrentBreakpoint(currentBodyWidth);
      setCurrentBreakpoint(measuredBreakpoint);
    });
    resizeObserverRef.current.observe(document.body);

    // eslint-disable-next-line consistent-return
    return () => resizeObserverRef.current?.disconnect();
  }, []);

  return currentBreakpoint;
};

export default useMeasureBreakpoint;
