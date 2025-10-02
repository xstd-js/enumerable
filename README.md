[![npm (scoped)](https://img.shields.io/npm/v/@xstd/enumerable.svg)](https://www.npmjs.com/package/@xstd/enumerable)
![npm](https://img.shields.io/npm/dm/@xstd/enumerable.svg)
![NPM](https://img.shields.io/npm/l/@xstd/enumerable.svg)
![npm type definitions](https://img.shields.io/npm/types/@xstd/enumerable.svg)
![coverage](https://img.shields.io/badge/coverage-100%25-green)

<picture>
  <source height="64" media="(prefers-color-scheme: dark)" srcset="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-dark.png?raw=true">
  <source height="64" media="(prefers-color-scheme: light)" srcset="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
  <img height="64" alt="Shows a black logo in light color mode and a white one in dark color mode." src="https://github.com/xstd-js/website/blob/main/assets/logo/png/logo-large-light.png?raw=true">
</picture>

## @xstd/enumerable

Provides `Enumerable`, `Enumerator`, `EnumeratorObject` and their _async_ counterparts, as better alternatives to `Iterable` and `Iterator`.

Indeed, `Iterable` and `Iterator` are not very well typed, especially the _next_ and _return_ methods.

Using `Enumerable` and `Enumerator` gives you better type safety.


> **NOTE**: currently IteratorObject methods are not typed.

### Example

Issue:

```ts
const iterator = (function *(): Generator<void, void, number> {
  console.log(yield);
})();

iterator.next(1); // valid
iterator.next(); // invalid, but no typing error
```

Solution:

```ts
const enumerator: Enumerator<number, void, void> = (function *(): Generator<void, void, number> {
  console.log(yield);
})();

enumerator.next(1); // valid
enumerator.next(); // invalid, WITH typing error
```

## 📦 Installation

```shell
yarn add @xstd/enumerable
# or
npm install @xstd/enumerable --save
```

## 📜 Documentation

```ts
interface Enumerator<GIn, GOut, GReturn> {
  next(...args: EnumeratorNextArguments<GIn>): EnumeratorResult<GOut, GReturn>;

  throw(error?: unknown): EnumeratorResult<GOut, GReturn>;

  return(...args: EnumeratorReturnArguments<GReturn>): EnumeratorResult<GOut, GReturn>;
}

interface Enumerable<GIn, GOut, GReturn> {
  [Symbol.asyncIterator](): Enumerator<GIn, GOut, GReturn>;
}

interface EnumeratorObject<GIn, GOut, GReturn>
  extends Enumerator<GIn, GOut, GReturn>,
    Disposable {
  [Symbol.asyncIterator](): EnumeratorObject<GIn, GOut, GReturn>;
}
```

The lib also provides the `Async` counterparts.
