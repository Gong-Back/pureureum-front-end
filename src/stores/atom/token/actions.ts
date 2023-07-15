import { atom } from 'jotai';
import { authTokenAtom, type TokenType } from './atoms';

type TokenActionType =
  | { action: 'LOGIN'; value: { accessToken: string; refreshToken: string } }
  | { action: 'LOGOUT'; value: { accessToken: null; refreshToken: null } }
  | { action: 'REFRESH'; value: Partial<TokenType> }

export const handleTokenAtom = atom(null, (get, set, {action, value}: TokenActionType) => {
  switch (action) {
    case "LOGIN": {
      set(authTokenAtom, value);
      break;
    }
    case "LOGOUT": {
      set(authTokenAtom, { accessToken: null, refreshToken: null } )
      break;
    }
    case "REFRESH": {
      const prevAtom = get(authTokenAtom); 
      set(authTokenAtom, {...prevAtom, ...value} )
      break;
    }
    default:
      break;
  }
});