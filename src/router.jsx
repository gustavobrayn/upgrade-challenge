import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { SignUp } from './pages';

export const router = createBrowserRouter([{ path: '/', element: <SignUp /> }]);
