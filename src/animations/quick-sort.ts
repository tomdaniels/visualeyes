import setPreviousStyles from './helpers/setPreviousStyles';
import { THEME, ANIMATION_SPEED_MS } from '../constants';
import getQuickSortAnimations from '../algo/quick-sort';
import animateCompletion from './helpers/animate-completion';

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
        animateCompletion(arr, arrayBars);
        onCompletion();
      }, i * ANIMATION_SPEED_MS);
    }
    const isColourChange = i % 3 !== 2;
    if (isColourChange) {
      const [startIdx, pivotNodeIdx, swapNodeIdx, compareNodeIdx] =
        animations[i];
      const startNodeStyle = arrayBars[startIdx].style;
      const pivotNodeStyle = arrayBars[pivotNodeIdx].style;
      const swapNodeStyle = arrayBars[swapNodeIdx].style;
      const compareNodeStyle = arrayBars[compareNodeIdx].style;
      const colour = i % 3 === 0 ? THEME.secondary.colour : THEME.primary.light;
      const previous = animations[i - 3];
      setTimeout(() => {
        startNodeStyle.backgroundColor = THEME.accent.hex;
        pivotNodeStyle.backgroundColor = THEME.accent.hex;
        swapNodeStyle.backgroundColor = colour;
        compareNodeStyle.backgroundColor = colour;
        if (!!previous) {
          setPreviousStyles({
            previous,
            startIdx,
            endIdx: pivotNodeIdx,
            arrayBars,
            colour: THEME.primary.light,
          });
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
