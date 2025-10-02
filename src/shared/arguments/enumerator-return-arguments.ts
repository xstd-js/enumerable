export type EnumeratorReturnArguments<GReturn> =
  | (GReturn extends void | undefined ? [] : never)
  | [GReturn];
