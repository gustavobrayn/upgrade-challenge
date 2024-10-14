import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { SignUp, MoreInfo } from './pages';

export const router = createBrowserRouter([
  { path: '/', element: <SignUp /> },
  { path: '/more-info', element: <MoreInfo /> },
]);
