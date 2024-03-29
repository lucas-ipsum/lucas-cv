import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
// MUI 
import { createTheme, responsiveFontSizes } from '@mui/material/styles';
import { ThemeProvider } from '@mui/material'

const root = ReactDOM.createRoot(document.getElementById('root'));

// Theme Color
let theme = createTheme({
  palette: {
    primary: {
      main: '#FD955D'
    }, 
    secondary: {
      main: '#4DA1C2'
    },
    custom: {
      main: '#fff',
      contrastText: '#fff',
    }
  }
})
theme = responsiveFontSizes(theme)
root.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <App />
    </ThemeProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
