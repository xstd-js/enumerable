import { type AsyncEnumerator } from './async-enumerator.js';

export interface AsyncEnumeratorObject<GIn, GOut, GReturn>
  extends AsyncEnumerator<GIn, GOut, GReturn>,
    AsyncDisposable {
  [Symbol.asyncIterator](): AsyncEnumeratorObject<GIn, GOut, GReturn>;
}
