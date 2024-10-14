import React from 'react';
import { render, screen } from '@testing-library/react';
import { ErrorBoundary } from './ErrorBoundary';

const ProblematicComponent = () => {
  throw new Error('Test error');
};

jest.mock('../../../pages', () => ({
  ErrorPage: () => <p>error</p>,
}));

describe('<ErrorBoundary />', () => {
  it('should render children when there is no error', () => {
    render(
      <ErrorBoundary>
        <div>Child Component</div>
      </ErrorBoundary>
    );

    expect(screen.getByText(/child component/i)).toBeInTheDocument();
  });

  it('should render ErrorPage when an error occurs', () => {
    const consoleSpy = jest
      .spyOn(console, 'error')
      .mockImplementation(() => {});

    render(
      <ErrorBoundary>
        <ProblematicComponent />
      </ErrorBoundary>
    );

    expect(screen.getByText(/error/i)).toBeInTheDocument();
    consoleSpy.mockRestore();
  });
});
