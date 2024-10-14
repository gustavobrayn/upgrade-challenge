import { capitalize } from './capitalize';

describe('capitalize', () => {
  it('should capitalize string', () => {
    const text = capitalize('test');

    expect(text).toBe('Test');
  });
});
