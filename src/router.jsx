import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { App } from './pages';

export const router = createBrowserRouter([{ path: '/', element: <App /> }]);
