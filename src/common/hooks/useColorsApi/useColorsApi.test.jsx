import { renderHook, waitFor } from '@testing-library/react';
import nock from 'nock';
import { useColorsApi } from './useColorsApi';

describe('useColorsApi', () => {
  it('should fetch colors successfully', async () => {
    const mockColors = ['red', 'blue', 'green'];

    nock('http://localhost:3001/api')
      .get('/colors')
      .reply(200, { data: mockColors }, { 'Access-Control-Allow-Origin': '*' });

    const { result } = renderHook(() => useColorsApi());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.data.data).toEqual(mockColors);
      expect(result.current.loading).toBe(false);
    });
  });

  it('should handle errors gracefully', async () => {
    const consoleSpy = jest.spyOn(console, 'log').mockImplementation(() => {});

    nock('http://localhost:3001/api')
      .get('/colors')
      .reply(500, null, { 'Access-Control-Allow-Origin': '*' });

    const { result } = renderHook(() => useColorsApi());

    expect(result.current.data).toBeNull();
    expect(result.current.loading).toBe(true);

    await waitFor(() => {
      expect(result.current.data).toBeNull();
      expect(result.current.loading).toBe(false);
    });

    consoleSpy.mockRestore();
  });
});
