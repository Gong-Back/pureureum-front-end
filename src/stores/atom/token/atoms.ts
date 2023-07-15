import { atomWithStorage } from "jotai/utils";

export interface TokenType {
  accessToken: string | null;
  refreshToken: string | null;
}

export const authTokenAtom = atomWithStorage<TokenType>('token', {
  accessToken: null,
  refreshToken: null
});
