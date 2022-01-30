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
    if (i === animations.length - 1) {
      setTimeout(() => {
        // animate completion
        for (let i = 0; i < arr.length; i++) {
          arrayBars[i].style.backgroundColor = THEME.primary.hex;
        }
      }, i * ANIMATION_SPEED_MS);
    }
    const isColourChange = i % 3 !== 2;
    if (isColourChange) {
      const [startNodeIdx, endNodeIdx, pivotNodeIdx, compareNodeIdx] =
        animations[i];
      const startNodeStyle = arrayBars[startNodeIdx].style;
      const endNodeStyle = arrayBars[endNodeIdx].style;
      const pivotNodeStyle = arrayBars[pivotNodeIdx].style;
      const compareNodeStyle = arrayBars[compareNodeIdx].style;
      const colour = i % 3 === 0 ? THEME.secondary.colour : THEME.primary.hex;
      setTimeout(() => {
        startNodeStyle.backgroundColor = THEME.accent.hex;
        endNodeStyle.backgroundColor = THEME.accent.hex;
        pivotNodeStyle.backgroundColor = colour;
        compareNodeStyle.backgroundColor = colour;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [startIdx, endIdx, idx, xNewHeight, idj, jNewHeight] =
          animations[i];
        const barOneStyle = arrayBars[idx].style;
        const barTwoStyle = arrayBars[idj].style;

        barOneStyle.height = `${xNewHeight}px`;
        barTwoStyle.height = `${jNewHeight}px`;

        const previous = animations[i - 3];
        if (!!previous && startIdx !== previous[0]) {
          const oldStartIdx = previous[0];
          const oldStartNodeStyles = arrayBars[oldStartIdx].style;
          oldStartNodeStyles.backgroundColor = THEME.primary.hex;
        }

        if (!!previous && endIdx !== previous[1]) {
          const oldEndIdx = previous[1];
          const oldEndNodeStyles = arrayBars[oldEndIdx].style;
          oldEndNodeStyles.backgroundColor = THEME.primary.hex;
        }
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
