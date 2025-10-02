import { describe, expect, it } from 'vitest';
import { getEnumeratorResultValue } from './get-enumerator-result-value.js';

describe('getEnumeratorResultValue', () => {
  it('should return value', () => {
    expect(
      getEnumeratorResultValue({
        value: 1,
        done: false,
      }),
    ).toBe(1);
  });

  it('should throw if done', () => {
    expect(() =>
      getEnumeratorResultValue({
        value: undefined,
        done: true,
      }),
    ).toThrow();
  });
});
