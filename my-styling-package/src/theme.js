// src/theme.js
import { createTheme } from '@mui/material/styles';

// 🌞 Light Theme
const lightTheme = createTheme({
  palette: {
    mode: 'light',
    primary: {
      main: '#1E40AF',
    },
    secondary: {
      main: '#9333EA',
    },
    background: {
      default: '#ffffff',
      paper: '#f9f9f9',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

// 🌙 Dark Theme
const darkTheme = createTheme({
  palette: {
    mode: 'dark',
    primary: {
      main: '#1E40AF',
    },
    secondary: {
      main: '#9333EA',
    },
    background: {
      default: '#121212',
      paper: '#1E1E1E',
    },
  },
  typography: {
    fontFamily: 'Inter, sans-serif',
  },
});

export { lightTheme, darkTheme };
