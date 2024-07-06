import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    background: string;
    highlight: string;
    highlightHover: string;
    boxShadow: { [key: string]: string };
    text: string;
    primary: string;
    secondary: string;
    mode: string;
    spacing: {
      none: string;
      xsmall: string;
      small: string;
      medium: string;
      large: string;
      xlarge: string;
      xxlarge: string;
    };
    borderRadius: {
      none: string;
      small: string;
      medium: string;
      large: string;
      xLarge: string;
      round: string;
    };
    headings: {
      h1: string;
      h2: string;
      h3: string;
      h4: string;
      h5: string;
      h6: string;
    };
    colors: {
      success: string;
      danger: string;
      warning: string;
      info: string;
      light: string;
      dark: string;
    };
    fontSize: {
      small: string;
      medium: string;
      large: string;
    };
  }
}
