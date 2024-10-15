import React from 'react';
import {
  render,
  screen,
  renderHook,
  waitFor,
  fireEvent,
  act,
} from '@testing-library/react';
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
  it('should provide default state', () => {
    render(
      <SignUpProvider>
        <TestComponent />
      </SignUpProvider>
    );

    expect(screen.getByText(/Name:/i)).toBeInTheDocument();
  });

  it('should update state using context', async () => {
    render(
      <SignUpProvider>
        <TestComponent />
      </SignUpProvider>
    );

    const button = screen.getByRole('button', { name: /update name/i });

    act(() => {
      fireEvent.click(button);
    });

    expect(screen.getByText(/Name: john doe/i)).toBeInTheDocument();
  });

  it('throws error when useSignUp is called outside of provider', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    expect(() => {
      renderHook(() => useSignUp());
    }).toThrow();

    consoleSpy.mockRestore();
  });
});
