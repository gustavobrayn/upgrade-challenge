import { hidePassword } from './hidePassword';

describe('hidePassword', () => {
  it('should capitalize string', () => {
    const text = hidePassword('test');

    expect(text).toBe('****');
  });
});
