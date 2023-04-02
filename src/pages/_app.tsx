import type { AppProps } from 'next/app';
import { useState } from 'react';
import { Provider } from 'jotai';

import { QueryClientProvider, QueryClient } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';

import { ThemeProvider, Global } from '@emotion/react';
import { theme, GlobalStyle } from '@/constants/styles';

import '@/assets/fonts/font.css';

const MyApp = ({ Component, pageProps }: AppProps) => {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            refetchOnReconnect: false,
            refetchOnWindowFocus: false,
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
          {/* eslint-disable react/jsx-props-no-spreading */}
          <Component {...pageProps} />
        </ThemeProvider>
      </Provider>
    </QueryClientProvider>
  );
};

export default MyApp;
