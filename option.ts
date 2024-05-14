import { pipe, flow } from "fp-ts/function";
import * as O from "fp-ts/Option";

const isNil = <A>(value: A | null | undefined): boolean =>
  value === null || value === undefined;

const getIndexO = (array: Array<number>, index: number): O.Option<number> => {
  const item: number | undefined = array[index];

  return pipe(item, isNil<number>, (x) => (x ? O.none : O.some(item)));
};

const getIndexTextNone: string = pipe(
  getIndexO([14, 32, 64, 34, 76, 45], 20),
  O.match(
    () => "Not found",
    (item) => `${item} found`
  )
);

const getIndexTextSome: string = pipe(
  getIndexO([14, 32, 64, 34, 76, 45], 2),
  O.match(
    () => "Not found",
    (item) => `${item} found`
  )
);

console.log(`getIndexTextNone: ${getIndexTextNone}`);
console.log(`getIndexTextSome: ${getIndexTextSome}`);
