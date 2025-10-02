import { type EnumeratorReturnResult } from './enumerator-return-result.js';
import { type EnumeratorYieldResult } from './enumerator-yield-result.js';

export type EnumeratorResult<GOut, GReturn> =
  | EnumeratorYieldResult<GOut>
  | EnumeratorReturnResult<GReturn>;
