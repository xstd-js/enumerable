import { type EnumeratorNextArguments } from '../shared/arguments/enumerator-next-arguments.js';
import { type EnumeratorReturnArguments } from '../shared/arguments/enumerator-return-arguments.js';
import { type EnumeratorResult } from '../shared/result/enumerator-result.js';

export interface AsyncEnumerator<GIn, GOut, GReturn> {
  next(...args: EnumeratorNextArguments<GIn>): Promise<EnumeratorResult<GOut, GReturn>>;

  throw(error?: unknown): Promise<EnumeratorResult<GOut, GReturn>>;

  return(...args: EnumeratorReturnArguments<GReturn>): Promise<EnumeratorResult<GOut, GReturn>>;
}
