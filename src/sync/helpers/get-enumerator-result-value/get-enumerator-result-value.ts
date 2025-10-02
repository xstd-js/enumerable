import { type EnumeratorResult } from '../../../shared/result/enumerator-result.js';

/**
 * Returns the value of an enumerator result, or _throws_ if the result is done.
 *
 * @throws {Error} If the enumerator is done.
 */
export function getEnumeratorResultValue<GOut>(result: EnumeratorResult<GOut, any>): GOut {
  if (result.done) {
    throw new Error('No value');
  } else {
    return result.value;
  }
}
