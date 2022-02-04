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
      animations.push([start, end, swapIdx, i]);
      animations.push([start, end, swapIdx, i]);
      swap(arr, swapIdx, i, animations);
    }
  }
  animations.push([start, end, start, swapIdx]);
  animations.push([start, end, start, swapIdx]);
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
  animations.push([idx, x[idj], idj, x[idx]]);

  // actually swap
  x[idx] = x[idj];
  x[idj] = temp;
  return x;
}
