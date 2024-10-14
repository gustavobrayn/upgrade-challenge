import React from 'react';
import { render, screen, renderHook, waitFor } from '@testing-library/react';
import { SignUpProvider, useSignUp } from './signUp';

const TestComponent = () => {
  const { info, setInfo } = useSignUp();

  const updateName = () => {
    setInfo((prev) => ({ ...prev, name: 'John Doe' }));
  };

  return (
    <div>
      <p>Name: {info.name}</p>
      <button onClick={updateName}>Update Name</button>
    </div>
  );
};

describe('SignUpProvider', () => {
  it('provides default state', () => {
    render(
      <SignUpProvider>
        <TestComponent />
      </SignUpProvider>
    );

    expect(screen.getByText(/Name:/)).toHaveTextContent('Name: ');
  });

  it('updates state using context', async () => {
    render(
      <SignUpProvider>
        <TestComponent />
      </SignUpProvider>
    );

    screen.getByText('Update Name').click();

    await waitFor(() => {
      expect(screen.getByText(/Name:/)).toHaveTextContent('Name: John Doe');
    });
  });

  it('throws error when useSignUp is called outside of provider', () => {
    expect(renderHook(() => useSignUp())).toThrow();
  });
});
