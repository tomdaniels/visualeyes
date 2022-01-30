export default function quickSort(
  arr: number[],
  left: number = 0,
  right = arr.length - 1,
  animations: any[] = []
): any[] {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right, animations);
    quickSort(arr, left, pivotIndex - 1, animations);
    quickSort(arr, pivotIndex + 1, right, animations);
  }
  return animations;
}

function pivot(
  arr: any[],
  start: number = 0,
  end: number = arr.length + 1,
  animations: any[]
): number {
  let pivot = arr[start];
  let swapIdx = start;

  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIdx++;
      swap(arr, swapIdx, i, animations);
    }
  }
  // animations.push([start, swapIdx]);
  swap(arr, start, swapIdx, animations);
  return swapIdx;
}

function swap(
  x: number[],
  idx: number,
  idj: number,
  animations: any[]
): number[] {
  const temp = x[idx];
  // push twice to toggle colours
  animations.push([idx, idj]);
  animations.push([idx, idj]);
  // push to commit the new values at each position
  animations.push([idx, x[idj], idj, x[idx]]);

  // actually swap
  x[idx] = x[idj];
  x[idj] = temp;
  return x;
}
