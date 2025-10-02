import { type AsyncEnumerator } from './async-enumerator.js';

export interface AsyncEnumerable<GIn, GOut, GReturn> {
  [Symbol.asyncIterator](): AsyncEnumerator<GIn, GOut, GReturn>;
}
