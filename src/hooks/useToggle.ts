/**
 *  특정 state 값을 toggle 시키기 위해 사용되는 hook useToggle
 *  @param {boolean} initialValue - 초기값
 *  @author RookieAND
 */
import { useMemo, useState } from 'react';

export const useToggle = (initialValue: boolean) => {
  const [value, setValue] = useState(initialValue);

  return useMemo(
    () => ({
      value,
      onTrue: () => setValue(true),
      onFalse: () => setValue(false),
      onToggle: () => setValue(!value),
    }),
    [value],
  );
};