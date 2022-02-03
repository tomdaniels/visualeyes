type AnimationsArray = [number, number, number?][];

function insertionSort(x: number[]): AnimationsArray {
  const animations: AnimationsArray = [];
  for (let i = 1; i < x.length; i++) {
    const currentVal = x[i];
    for (var j = i - 1; j >= 0 && x[j] > currentVal; j--) {
      animations.push([i, j, currentVal]);
      animations.push([i, j, currentVal]);
      x[j + 1] = x[j];
      animations.push([j + 1, x[j]]);
    }
    x[j + 1] = currentVal;
    animations.push([j + 1, currentVal]);
  }
  return animations;
}

export default insertionSort;
