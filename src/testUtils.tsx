import { render, RenderOptions } from '@testing-library/react';
import React, { ReactElement, ReactNode } from 'react';

import { KwitterThemeProvider } from './styles/theme';

const Providers = ({ children }: { children?: ReactNode }) => (
  <KwitterThemeProvider>{children}</KwitterThemeProvider>
);

const customRender = (
  element: ReactElement,
  options?: Omit<RenderOptions, 'wrapper'>
) => render(element, { wrapper: Providers, ...options });

export * from '@testing-library/react';
export { customRender as render };
