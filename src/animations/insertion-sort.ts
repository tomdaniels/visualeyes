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
        for (let i = 0; i < arr.length; i++) {
          arrayBars[i].style.backgroundColor = THEME.primary.hex;
        }
        onCompletion();
      }, i * ANIMATION_SPEED_MS);
    }
    console.log(animations[i]);
    const isComparison = animations[i].length === 2;
    if (isComparison) {
      const [sortedNodeIdx, compareNode] = animations[i];
      const sortedBarStyle = arrayBars[sortedNodeIdx].style;
      const compareNodeStyle =
        arrayBars[(compareNode as [number, number])[0]].style;

      const colour =
        i !== 0 && i % 2 === 0 ? THEME.secondary.colour : THEME.primary.hex;
      setTimeout(() => {
        compareNodeStyle.backgroundColor = colour;
        compareNodeStyle.height = `${(compareNode as [number, number])[1]}px`;
        sortedBarStyle.backgroundColor = THEME.accent.hex;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [idx, xNewHeight] = animations[i];
        const sortedNode = arrayBars[idx].style;
        sortedNode.height = `${xNewHeight}px`;
        sortedNode.backgroundColor = THEME.primary.hex;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
