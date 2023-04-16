import { withThemeFromJSXProvider } from '@storybook/addon-styling';
import type { Preview } from '@storybook/react';
import { ThemeProvider } from '@emotion/react';
import { theme } from '../src/constants/styles';

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
  },
  decorators: [
    withThemeFromJSXProvider({
      themes: {
        theme: theme,
      },
      Provider: ThemeProvider,
    }),
  ],
};

export default preview;
