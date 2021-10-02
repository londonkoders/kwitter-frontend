import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    blue: '#1DA1F2',
    black: '#14171A',
    grey: {
      '400': '#657786',
      '300': '#AAB8C2',
      '200': '#E1E8ED',
      '100': '#F5F8FA'
    },
    white: '#FFFFFF'
  }
};

export const KwitterThemeProvider = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
