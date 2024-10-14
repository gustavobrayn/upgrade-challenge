import React from 'react';
import ReactDOM from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import { router } from './router';
import { SignUpProvider } from './common/contexts';
import { ThemeProvider } from './common/providers';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <SignUpProvider>
        <RouterProvider router={router} />
      </SignUpProvider>
    </ThemeProvider>
  </React.StrictMode>
);
