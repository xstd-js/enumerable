import { getEnumeratorResultValue } from '../../sync/helpers/get-enumerator-result-value/get-enumerator-result-value.js';
import { type AsyncEnumerator } from '../async-enumerator.js';

/**
 * Returns the **next** value of an enumerator.
 *
 * @throws {Error} If the enumerator is done.
 */
export async function getAsyncEnumeratorNextValue<GValue>(
  enumerator: AsyncEnumerator<void, GValue, any>,
): Promise<GValue> {
  return getEnumeratorResultValue(await enumerator.next());
}
