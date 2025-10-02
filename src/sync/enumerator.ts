import { type EnumeratorNextArguments } from '../shared/arguments/enumerator-next-arguments.js';
import { type EnumeratorReturnArguments } from '../shared/arguments/enumerator-return-arguments.js';
import { type EnumeratorResult } from '../shared/result/enumerator-result.js';

export interface Enumerator<GIn, GOut, GReturn> {
  next(...args: EnumeratorNextArguments<GIn>): EnumeratorResult<GOut, GReturn>;

  throw(error?: unknown): EnumeratorResult<GOut, GReturn>;

  return(...args: EnumeratorReturnArguments<GReturn>): EnumeratorResult<GOut, GReturn>;
}
