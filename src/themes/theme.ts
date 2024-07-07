import { DefaultTheme } from 'styled-components';

export const commonTheme = {
  colors: {
    success: '#28a745',
    danger: '#dc3545',
    warning: '#ffc107',
    info: '#17a2b8',
    light: '#f8f9fa',
    dark: '#343a40',
  },
  fontSize: {
    XSmall: '11px',
    small: '13px',
    medium: '15px',
    large: '17px',
    xLarge: '19px',
  },
  headings: {
    h1: '34px',
    h2: '32px',
    h3: '26px',
    h4: '22px',
    h5: '20px',
    h6: '18px',
  },
  spacing: {
    none: '0',
    xsmall: '4px',
    small: '8px',
    medium: '16px',
    large: '24px',
    xlarge: '32px',
    xxlarge: '64px',
  },
  borderRadius: {
    none: '0',
    small: '4px',
    medium: '8px',
    large: '16px',
    xLarge: '36px',
    round: '50%',
  },
};

export const lightTheme: DefaultTheme = {
  ...commonTheme,
  background: '#fff',
  highlight: '#f16b36',
  highlightHover: '#da4f18',
  boxShadow: {
    small: '0 0px 2px #ababab',
    medium: '0 0px 5px #ababab',
    large: '0 0px 10px #ababab',
  },
  text: '#333',
  primary: '#eee',
  secondary: '#efefef',
  mode: 'light',
};

export const darkTheme: DefaultTheme = {
  ...commonTheme,
  background: '#333',
  highlight: '#26bad4',
  highlightHover: '#228ea1',
  boxShadow: {
    small: '0 0px 2px #000',
    medium: '0 0px 5px #000',
    large: '0 0px 10px #000',
  },
  text: '#fff',
  primary: '#333',
  secondary: '#222',
  mode: 'dark',
};
