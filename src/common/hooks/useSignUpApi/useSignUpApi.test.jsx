import { renderHook, act } from '@testing-library/react';
import nock from 'nock';
import { useSignUpApi } from './useSignUpApi';

describe('useSignUpApi', () => {
  it('should submit data successfully', async () => {
    const mockData = { username: 'testUser', password: 'testPass' };

    nock('http://localhost:3001/api')
      .post('/submit', mockData)
      .reply(200, null, { 'Access-Control-Allow-Origin': '*' });

    const { result } = renderHook(() => useSignUpApi());

    expect(result.current.success).toBe(false);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);

    await act(async () => {
      await result.current.submit(mockData);
    });

    expect(result.current.success).toBe(true);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);
  });

  it('should handle errors during submission', async () => {
    const mockData = { username: 'testUser', password: 'testPass' };

    nock('http://localhost:3001/api')
      .post('/submit', mockData)
      .reply(500, null, { 'Access-Control-Allow-Origin': '*' });

    const { result } = renderHook(() => useSignUpApi());

    expect(result.current.success).toBe(false);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(false);

    await act(async () => {
      await result.current.submit(mockData);
    });

    expect(result.current.success).toBe(false);
    expect(result.current.loading).toBe(false);
    expect(result.current.error).toBe(true);
  });
});
