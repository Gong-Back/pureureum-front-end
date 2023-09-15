import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Provider } from 'jotai';
import '@/assets/fonts/font.css';
import BottomNavigationBar from '@/components/common/BottomNavigationBar';
import ModalPortal from '@/components/common/ModalPortal';
import NavigationBar from '@/components/common/NavigationBar';
import { theme, GlobalStyle } from '@/constants/styles';
import useMeasureBreakpoint from '@/hooks/useMeasureBreakpoint';
import { ThemeProvider, Global } from '@emotion/react';
import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

interface ServiceAppProps {
  isNavigationVisible: boolean;
}

const MyApp = ({ Component, pageProps }: AppProps<ServiceAppProps>) => {
  const { isNavigationVisible = true } = pageProps;

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
          {isNavigationVisible && <NavigationBar />}
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Component {...pageProps} />
          {isMobile && isNavigationVisible && <BottomNavigationBar />}
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
