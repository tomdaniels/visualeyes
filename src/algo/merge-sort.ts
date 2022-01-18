/**
 * merge two sorted arrays
 */
function merge(first: any[], second: any[]): any[] {
  const merged = [];
  let i = 0;
  let j = 0;

  while (i < first.length && j < second.length) {
    if (first[i] < second[j]) {
      merged.push(first[i]);
      i++;
    } else {
      merged.push(second[j]);
      j++;
    }
  }

  while (i < first.length) {
    merged.push(first[i]);
    i++;
  }
  while (j < second.length) {
    merged.push(second[j]);
    j++;
  }
  return merged;
}

export default function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) return arr;
  const mid = Math.floor(arr.length / 2);
  const group1 = mergeSort(arr.slice(0, mid));
  const group2 = mergeSort(arr.slice(mid));
  return merge(group1, group2);
}

// console.log(merge([1,3,4,8], [2, 5, 6, 7, 9]));
// console.log(mergeSort([9,2,3,5,4,6]));
