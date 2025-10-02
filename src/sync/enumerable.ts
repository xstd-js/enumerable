import { type Enumerator } from './enumerator.js';

export interface Enumerable<GIn, GOut, GReturn> {
  [Symbol.asyncIterator](): Enumerator<GIn, GOut, GReturn>;
}
