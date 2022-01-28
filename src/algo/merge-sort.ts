type AnimationTracker = {
  pair: number[];
  committed: number[];
  overflow: number[];
};

type AnimatedMergeSort = {
  animations: AnimationTracker[];
  arr: number[];
};

export default function mergeSort(arr: number[]): AnimatedMergeSort {
  const animations: AnimationTracker[] = [];

  /**
   * merge two sorted arrays
   */
  function merge(first: number[], second: number[]): number[] {
    const merged = [];
    let i = 0;
    let j = 0;

    const toAnimate: Omit<AnimationTracker, 'build'> = {
      pair: [],
      committed: [],
      overflow: [],
    };

    while (i < first.length && j < second.length) {
      toAnimate.pair?.push(first[i], second[j]);
      if (first[i] < second[j]) {
        toAnimate.committed?.push(first[i], second[j]);
        merged.push(first[i]);
        i++;
      } else {
        toAnimate.committed?.push(second[j], first[i]);
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
  };
}

// console.log(merge([1,3,4,8], [2, 5, 6, 7, 9]));
// console.log(mergeSort([9,2,3,5,4,6]));
