export default function getMergeSortAnimations(array: number[]): any {
  const animations: [number, number][] = [];
  if (array.length <= 1) return array;
  const auxiliaryArray = array.slice();
  mergeSort(array, 0, array.length - 1, auxiliaryArray, animations);
  return animations;
}

function mergeSort(
  arr: number[],
  startIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: [number, number][]
): void {
  if (startIdx === endIdx) return;
  const mid = Math.floor((startIdx + endIdx) / 2);
  mergeSort(auxiliaryArray, startIdx, mid, arr, animations);
  mergeSort(auxiliaryArray, mid + 1, endIdx, arr, animations);
  merge(arr, startIdx, mid, endIdx, auxiliaryArray, animations);
}

function merge(
  arr: number[],
  startIdx: number,
  midIdx: number,
  endIdx: number,
  auxiliaryArray: number[],
  animations: [number, number][]
): void {
  let k = startIdx;
  let i = startIdx;
  let j = midIdx + 1;

  while (i <= midIdx && j <= endIdx) {
    // push values twice to toggle colour
    animations.push([i, j]);
    animations.push([i, j]);
    if (auxiliaryArray[i] <= auxiliaryArray[j]) {
      // push the index number and new value at that index
      animations.push([k, auxiliaryArray[i]]);
      arr[k++] = auxiliaryArray[i++]; // inplace swap
    } else {
      animations.push([k, auxiliaryArray[j]]);
      arr[k++] = auxiliaryArray[j++];
    }
  }

  while (i <= midIdx) {
    // push twice to toggle colours
    animations.push([i, i]);
    animations.push([i, i]);
    animations.push([k, auxiliaryArray[i]]);
    arr[k++] = auxiliaryArray[i++];
  }
  while (j <= endIdx) {
    // push twice to toggle colours
    animations.push([j, j]);
    animations.push([j, j]);
    animations.push([k, auxiliaryArray[j]]);
    arr[k++] = auxiliaryArray[j++];
  }
}
