import 'styled-components';
import { theme } from '../src/styles/theme';

type CustomThemeType = typeof theme;

declare module 'styled-components' {
  export interface DefaultTheme extends CustomThemeType {}
}
