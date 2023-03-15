import { DefaultTheme } from 'styled-components';

export const Theme: DefaultTheme = {
  primary: {
    color: 'var(--primary-600)',
    text: 'white',
    hover: 'var(--primary-700)',
    active: 'var(--primary-900)'
  },
  secondary: {
    color: 'var(--bluegray-600)',
    text: 'white',
    hover: 'var(--bluegray-700)',
    active: 'var(--bluegray-900)'
  },
  success: {
    color: 'var(--green-600)',
    text: 'white',
    hover: 'var(--green-700)',
    active: 'var(--green-900)'
  },
  danger: {
    color: 'var(--red-600)',
    text: 'white',
    hover: 'var(--red-700)',
    active: 'var(--red-900)'
  },
  alert: {
    color: 'var(--yellow-600)',
    text: 'white',
    hover: 'var(--yellow-700)',
    active: 'var(--yellow-900)'
  },
  surface: {
    text: 'var(--text-color)',
    content: 'var(--surface-a)',
    container: 'var(--surface-c)'
  },

  required: 'var(--surface-100)',

  borderRadii: {
    sm: '2px',
    normal: '4px',
    lg: '8px'
  },

  boxShadows: {
    sm: '',
    normal: `hsl(206 22% 7% / 35%) 0px 10px 38px -10px,
    hsl(206 22% 7% / 20%) 0px 10px 20px -15px;`,
    lg: ''
  },

  fontSizes: {
    sm: '0.825rem',
    normal: '0.950rem',
    lg: '1.125rem'
  },

  breakPoints: {
    xs: '0px',
    sm: '600px',
    md: '960px',
    lg: '1280px',
    xl: '1920px'
  }
};
