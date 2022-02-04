import { THEME, ANIMATION_SPEED_MS } from 'src/constants';
import getMergeSortAnimations from '../algo/merge-sort';

export default function animateMergeSort(
  arr: number[],
  onCompletion: Function
): void {
  const animations = getMergeSortAnimations(arr);

  const arrayBars = Array.from(
    document.getElementsByClassName(
      'array-bar'
    ) as HTMLCollectionOf<HTMLElement>
  );
  for (let i = 0; i < animations.length; i++) {
    if (i === animations.length - 1) {
      setTimeout(() => {
        arrayBars[0].style.backgroundColor = THEME.primary.hex;
        onCompletion();
      }, i * ANIMATION_SPEED_MS);
    }
    const isColourChange = i % 3 !== 2;
    if (isColourChange) {
      const [startIdx, endIdx, barOneIdx, barTwoIdx] = animations[i];
      const startNodeStyle = arrayBars[startIdx].style;
      const endNodeStyle = arrayBars[endIdx].style;
      const barOneStyle = arrayBars[barOneIdx].style;
      const barTwoStyle = arrayBars[barTwoIdx].style;
      const colour = i % 3 === 0 ? THEME.secondary.colour : THEME.primary.hex;
      const previous = animations[i - 3];
      setTimeout(() => {
        startNodeStyle.backgroundColor = THEME.accent.hex;
        endNodeStyle.backgroundColor = THEME.accent.hex;
        barOneStyle.backgroundColor = colour;
        barTwoStyle.backgroundColor = colour;
        if (!!previous) {
          if (startIdx !== previous[0]) {
            const oldStartIdx = previous[0];
            const oldStartNodeStyles = arrayBars[oldStartIdx].style;
            oldStartNodeStyles.backgroundColor = THEME.primary.hex;
          }
          if (endIdx !== previous[1]) {
            const oldEndIdx = previous[1];
            const oldEndNodeStyles = arrayBars[oldEndIdx].style;
            oldEndNodeStyles.backgroundColor = THEME.primary.hex;
          }
        }
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
