import { pipe, flow } from "fp-ts/function";

const split = (string: string): Array<string> => string.split(" ");
const length = (array: Array<string>): number => array.length;
const isGreaterThan3 = (number: number): boolean => number > 3;

const usePipe = (string: string): boolean =>
  pipe(string, split, length, isGreaterThan3);
const useFlow = flow(split, length, isGreaterThan3);

const usePipeResult: boolean = usePipe("ab cd ef gh");
const useFlowResult: boolean = useFlow("ab cd ef gh");

console.log(`usePipeResult: ${usePipeResult}`);
console.log(`useFlowResult: ${useFlowResult}`);
