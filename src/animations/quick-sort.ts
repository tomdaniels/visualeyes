import { THEME, ANIMATION_SPEED_MS } from 'src/constants';
import getQuickSortAnimations from '../algo/quick-sort';

export default function animateQuickSort(arr: number[]): void {
  const animations = getQuickSortAnimations(arr);

  for (let i = 0; i < animations.length; i++) {
    const arrayBars = Array.from(
      document.getElementsByClassName(
        'array-bar'
      ) as HTMLCollectionOf<HTMLElement>
    );
    const isColourChange = i % 3 !== 2;
    if (isColourChange) {
      const [pivotNodeIdx, swapNodeIdx, compareNodeIdx] =
        animations[i];
      const pivotNodeStyle = arrayBars[pivotNodeIdx].style;
      const swapNodeStyle = arrayBars[swapNodeIdx].style;
      const compareNodeStyle = arrayBars[compareNodeIdx].style;
      const colour = i % 3 === 0 ? THEME.secondary.colour : THEME.primary.hex;
      setTimeout(() => {
        pivotNodeStyle.backgroundColor = THEME.accent.hex;
        swapNodeStyle.backgroundColor = colour;
        compareNodeStyle.backgroundColor = colour;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [idx, xNewHeight, idj, jNewHeight] =
          animations[i];
        const barOneStyle = arrayBars[idx].style;
        const barTwoStyle = arrayBars[idj].style;

        barOneStyle.height = `${xNewHeight}px`;
        barTwoStyle.height = `${jNewHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
