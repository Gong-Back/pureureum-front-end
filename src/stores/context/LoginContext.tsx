import { createContext, useMemo, useState, type PropsWithChildren, useContext } from 'react';

import { AuthRepository } from '@/apis/auth';
import { AuthResponses } from '@/constants/types';

type LoginContextValueType = {
  email: string;
  password: string;
};

type LoginContextActionType = {
  // eslint-disable-next-line no-unused-vars
  change: (type: string, value: string) => void;
  submit: () => Promise<AuthResponses['login']>;
};

// NOTE : Context DefaultValue 추가를 위해 임시 type assertion 사용
const LoginValueContext = createContext<LoginContextValueType>(
  {} as LoginContextValueType,
);
const LoginActionContext = createContext<LoginContextActionType>(
  {} as LoginContextActionType,
);

export const LoginContextProvider = ({ children }: PropsWithChildren) => {
  const [loginInput, setLoginInput] = useState<LoginContextValueType>({
    email: '',
    password: '',
  });

  const action: LoginContextActionType = useMemo(() => ({
    change(type: string, value: string) {
        setLoginInput((prev) => ({...prev, [type]: value}));
    },
    async submit() {
        const { data } = await AuthRepository.loginAsync(loginInput);
        return data;
    }
  }), [loginInput])

  return (
    <LoginValueContext.Provider value={loginInput}>
        <LoginActionContext.Provider value={action}>
            {children}
        </LoginActionContext.Provider>
    </LoginValueContext.Provider>
  );
};

export const useLoginContextValue = () => {
    const value = useContext(LoginValueContext);
    if (value === undefined)
        throw new Error('useLoginContextValue는 LoginContextProvider와 함께 사용해야 합니다.')
    return value;
}

export const useLoginContextAction = () => {
    const actions = useContext(LoginActionContext);
    if (actions === undefined)
        throw new Error('useLoginContextAction은 LoginContextProvider와 함께 사용해야 합니다.')
    return actions;
}