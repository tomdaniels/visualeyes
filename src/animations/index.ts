import { ALGOS } from '../constants';
import mergeSort from './merge-sort';
import quickSort from './quick-sort';
import insertionSort from './insertion-sort';

const algorithmMap: Map<
  string,
  (arr: number[], onCompletion: Function) => void
> = new Map([
  [ALGOS.MERGE_SORT, mergeSort],
  [ALGOS.QUICK_SORT, quickSort],
  [ALGOS.INSERTION_SORT, insertionSort],
]);

const getAlgorithm = (type: string, array: number[], onCompletion: Function) =>
  algorithmMap.get(type)!(array.slice(), onCompletion);
export default getAlgorithm;
