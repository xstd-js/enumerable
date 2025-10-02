import { type Enumerator } from './enumerator.js';

export interface EnumeratorObject<GIn, GOut, GReturn>
  extends Enumerator<GIn, GOut, GReturn>,
    Disposable {
  [Symbol.asyncIterator](): EnumeratorObject<GIn, GOut, GReturn>;
}
