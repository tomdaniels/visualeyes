type AnimationTracker = {
  pair?: number[];
  committed?: number[];
  overflow?: number[];
}

type AnimatedMergeSort = {
  arr: number[];
  animations: AnimationTracker[];
}

export default function mergeSort(arr: number[]): AnimatedMergeSort {
  const animations: AnimationTracker[] = [];

  /**
   * merge two sorted arrays
   */
  function merge(first: number[], second: number[]): number[] {
    const merged = [];
    let i = 0;
    let j = 0;

    const toAnimate: AnimationTracker = {
      pair: [],
      committed: [],
      overflow: [],
    }
  
    while (i < first.length && j < second.length) {
      toAnimate.pair?.push(first[i], second[j]);
      if (first[i] < second[j]) {
        toAnimate.committed?.push(i, first[i]);
        merged.push(first[i]);
        i++;
      } else {
        toAnimate.committed?.push(j, second[j]);
        merged.push(second[j]);
        j++;
      }
    }
  
    while (i < first.length) {
      toAnimate.overflow?.push(first[i]);
      merged.push(first[i]);
      i++;
    }
    while (j < second.length) {
      toAnimate.overflow?.push(second[j]);
      merged.push(second[j]);
      j++;
    }
    animations.push(toAnimate);
    return merged;
  }
  
  function sort(arr: number[]): number[] {
    if (arr.length <= 1) return arr;
    const mid = Math.floor(arr.length / 2);
    const group1 = sort(arr.slice(0, mid));
    const group2 = sort(arr.slice(mid));
    return merge(group1, group2);
  }

  const result = sort(arr);
  return {
    arr: result,
    animations,
  }
}

// console.log(merge([1,3,4,8], [2, 5, 6, 7, 9]));
// console.log(mergeSort([9,2,3,5,4,6]));
