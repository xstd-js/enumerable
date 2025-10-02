import { describe, expect, it } from 'vitest';
import { getAsyncEnumeratorNextValue } from './get-async-enumerator-next-value.js';

describe('getAsyncEnumeratorNextValue', () => {
  it('should return value', async () => {
    await expect(
      getAsyncEnumeratorNextValue(
        (async function* () {
          yield 1;
        })(),
      ),
    ).resolves.toBe(1);
  });

  it('should throw if done', async () => {
    await expect(getAsyncEnumeratorNextValue((async function* () {})())).rejects.toThrow();
  });
});
