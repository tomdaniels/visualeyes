import { THEME, ANIMATION_SPEED_MS } from 'src/constants';
import getQuickSortAnimations from '../algo/quick-sort';

export default function animateQuickSort(arr: number[]): void {
  const animations = getQuickSortAnimations(arr);

  // console.log(animations);

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
        const [idx, xNewHeight, idj, jNewHeight] = animations[i];
        const barOneStyle = arrayBars[idx].style;
        const barTwoStyle = arrayBars[idj].style;
        barOneStyle.height = `${xNewHeight}px`;
        barTwoStyle.height = `${jNewHeight}px`;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
