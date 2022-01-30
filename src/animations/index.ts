import { ALGOS } from '../constants';
import mergeSort from './merge-sort';
import quickSort from './quick-sort';

const algorithmMap: Map<string, (arr: number[]) => void> = new Map([
  [ALGOS.MERGE_SORT, mergeSort],
  [ALGOS.QUICK_SORT, quickSort],
  // [ALGOS.INSERTION_SORT, insertionSort],
]);

const getAlgorithm = (type: string, array: number[]) =>
  algorithmMap.get(type)!(array.slice());
export default getAlgorithm;
