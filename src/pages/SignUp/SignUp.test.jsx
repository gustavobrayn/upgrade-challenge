import React from 'react';
import ReactDOM from 'react-dom';
import { createRoot } from 'react-dom/client';
import SignUp from './SignUp';

it('renders without crashing', () => {
  const div = document.createElement('div');
  const root = createRoot(div);

  root.render(<SignUp />);
  root.unmount(div);
});
