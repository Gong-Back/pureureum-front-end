import type { AppProps, AppContext } from 'next/app';
import { useState } from 'react';
import { Provider } from 'jotai';
import { Global, ThemeProvider } from '@emotion/react';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import '@/assets/fonts/font.css';

import BottomNavigationBar from '@/components/common/BottomNavigationBar';
import ModalPortal from '@/components/common/ModalPortal';
import NavigationBar from '@/components/common/NavigationBar';

import { GlobalStyle, theme } from '@/constants/styles';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';

interface ServiceAppProps {
  isNavigationVisible: boolean;
  isLogin: boolean;
}

const MyApp = ({ Component, pageProps }: AppProps<ServiceAppProps>) => {
  const { isNavigationVisible = true, isLogin = false } = pageProps;
  const currentBreakpoint = useMeasureBreakpoint(['mobile', 'pc']);
  const isMobile = currentBreakpoint === 'mobile';

  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
            useErrorBoundary: true,
          },
        },
      }),
  );
  return (
    <QueryClientProvider client={queryClient}>
      <ReactQueryDevtools initialIsOpen={false} />
      <Provider>
        <ThemeProvider theme={theme}>
          <Global styles={GlobalStyle} />
          <ModalPortal />
          {isNavigationVisible && <NavigationBar isLogin={isLogin} />}
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Component {...pageProps} />
          {isMobile && isNavigationVisible && <BottomNavigationBar />}
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

// NOTE : 전역으로 로그인 여부를 판별하기 위해 getInitialProps 사용
MyApp.getInitialProps = async ({Component, ctx}: AppContext) => {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  const isLogin = ctx.req?.headers.cookie?.includes('accessToken');
  pageProps = { ... pageProps, isLogin }
  
  return { pageProps };
}

export default MyApp;
