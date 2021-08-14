import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      blue: string;
      black: string;
      darkGrey: string;
      lightGrey: string;
      white: string;
    };
  }
}
