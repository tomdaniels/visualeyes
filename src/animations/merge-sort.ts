import { THEME, ANIMATION_SPEED_MS } from 'src/constants';
import getMergeSortAnimations from '../algo/merge-sort';

export default function animateMergeSort(arr: number[]): void {
  const animations = getMergeSortAnimations(arr);

  for (let i = 0; i < animations.length; i++) {
    const arrayBars = Array.from(
      document.getElementsByClassName(
        'array-bar'
      ) as HTMLCollectionOf<HTMLElement>
    );
    const isColourChange = i % 3 !== 2;
    if (isColourChange) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const colour = i % 3 === 0 ? THEME.secondary.colour : THEME.primary.hex;
      setTimeout(() => {
        barOneStyle.backgroundColor = colour;
        barTwoStyle.backgroundColor = colour;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [barOneIdx, newHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${newHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}