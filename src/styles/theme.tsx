import * as React from 'react';
import { ThemeProvider } from 'styled-components';

export const theme = {
  colors: {
    blue: '#1DA1F2',
    black: '#14171A',
    darkGrey: '#657786',
    lightGrey: '#AAB8C2',
    white: '#FFFFFF'
  }
};

export const KwitterThemeProvider = ({
  children
}: {
  children: React.ReactNode;
}): JSX.Element => <ThemeProvider theme={theme}>{children}</ThemeProvider>;
