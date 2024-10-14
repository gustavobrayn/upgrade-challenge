import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { ThemeProvider } from 'styled-components';
import { theme } from './theme';
import { SignUpProvider } from './common/contexts/signUp';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <SignUpProvider>
        <RouterProvider router={router} />
      </SignUpProvider>
    </ThemeProvider>
  </React.StrictMode>
);
