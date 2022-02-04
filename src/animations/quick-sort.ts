import { THEME, ANIMATION_SPEED_MS } from 'src/constants';
import getQuickSortAnimations from '../algo/quick-sort';

export default function animateQuickSort(
  arr: number[],
  onCompletion: Function
): void {
  const animations = getQuickSortAnimations(arr);

  const arrayBars = Array.from(
    document.getElementsByClassName(
      'array-bar'
    ) as HTMLCollectionOf<HTMLElement>
  );
  for (let i = 0; i < animations.length; i++) {
    if (i === animations.length - 1) {
      setTimeout(() => {
        // animate completion
        for (let i = 0; i < arr.length; i++) {
          arrayBars[i].style.backgroundColor = THEME.primary.hex;
        }
        onCompletion();
      }, i * ANIMATION_SPEED_MS);
    }
    const isColourChange = i % 3 !== 2;
    if (isColourChange) {
      const [startNodeIdx, pivotNodeIdx, swapNodeIdx, compareNodeIdx] =
        animations[i];
      const startNodeStyle = arrayBars[startNodeIdx].style;
      const pivotNodeStyle = arrayBars[pivotNodeIdx].style;
      const swapNodeStyle = arrayBars[swapNodeIdx].style;
      const compareNodeStyle = arrayBars[compareNodeIdx].style;
      const colour = i % 3 === 0 ? THEME.secondary.colour : THEME.primary.hex;
      const previous = animations[i - 3];
      setTimeout(() => {
        startNodeStyle.backgroundColor = THEME.accent.hex;
        pivotNodeStyle.backgroundColor = THEME.accent.hex;
        swapNodeStyle.backgroundColor = colour;
        compareNodeStyle.backgroundColor = colour;
        if (!!previous) {
          if (startNodeIdx !== previous[0]) {
            const oldStartIdx = previous[0];
            const oldStartNodeStyles = arrayBars[oldStartIdx].style;
            oldStartNodeStyles.backgroundColor = THEME.primary.hex;
          }
          if (pivotNodeIdx !== previous[1]) {
            const oldPivotIdx = previous[1];
            const oldPivotNodeStyles = arrayBars[oldPivotIdx].style;
            oldPivotNodeStyles.backgroundColor = THEME.primary.hex;
          }
        }
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [idx, xNewHeight, idj, jNewHeight] = animations[i];
        const barOneStyle = arrayBars[idx].style;
        const barTwoStyle = arrayBars[idj].style;

        barOneStyle.height = `${xNewHeight}px`;
        barTwoStyle.height = `${jNewHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
