import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import {
  SignUp,
  MoreInfo,
  Confirmation,
  Success,
  ErrorPage,
import { SignUp, MoreInfo } from './pages';
} from './pages';
import { ErrorBoundary } from './common/components';

export const router = createBrowserRouter([
  { path: '/', element: <SignUp /> },
  {
    path: '/more-info',
    element: (
      <ErrorBoundary>
        <MoreInfo />
      </ErrorBoundary>
    ),
  },
  {
    path: '/confirmation',
    element: (
      <ErrorBoundary>
        <Confirmation />
      </ErrorBoundary>
    ),
  },
  { path: '/success', element: <Success /> },
  { path: '/error', element: <ErrorPage /> },
  { path: '/more-info', element: <MoreInfo /> },
]);
