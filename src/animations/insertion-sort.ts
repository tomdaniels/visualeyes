import { ANIMATION_SPEED_MS, THEME } from 'src/constants';
import getInsertionSortAnimations from '../algo/insertion-sort';

export default function animateMergeSort(
  arr: number[],
  onCompletion: Function
): void {
  const animations = getInsertionSortAnimations(arr);

  const arrayBars = Array.from(
    document.getElementsByClassName(
      'array-bar'
    ) as HTMLCollectionOf<HTMLElement>
  );

  for (let i = 0; i < animations.length; i++) {
    if (i === animations.length - 1) {
      setTimeout(() => {
        arrayBars[arr.length - 1].style.backgroundColor = THEME.primary.hex;
        onCompletion();
      }, i * ANIMATION_SPEED_MS);
    }
    const isComparison = animations[i].length === 2;
    if (isComparison) {
      const [barOneIdx, barTwoIdx] = animations[i];
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const compareNode = arrayBars[barTwoIdx + 1];

      const colour =
        i !== 0 && i % 2 === 0 ? THEME.secondary.colour : THEME.primary.hex;
      setTimeout(() => {
        barOneStyle.backgroundColor = colour;
        barTwoStyle.backgroundColor = THEME.accent.hex;

        if (compareNode) {
          compareNode.style.backgroundColor = THEME.secondary.colour;
        }
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        console.log(animations[i]);
        const [barOneIdx, xNewHeight] = animations[i];
        const barOneStyle = arrayBars[barOneIdx].style;
        barOneStyle.height = `${xNewHeight}px`;
        barOneStyle.backgroundColor = THEME.primary.hex;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
