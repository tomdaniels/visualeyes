import { ANIMATION_SPEED_MS, THEME } from 'src/constants';
import getInsertionSortAnimations from '../algo/insertion-sort';
import animateCompletion from './helpers/animate-completion';

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
        animateCompletion(arr, arrayBars);
        onCompletion();
      }, i * ANIMATION_SPEED_MS);
    }
    const isComparison = animations[i].length === 3;
    if (isComparison) {
      const [sortedNodeIdx, compareNodeIdx, compareNodeHeight] = animations[i];
      const sortedNodeStyle = arrayBars[sortedNodeIdx].style;
      const compareNodeStyle = arrayBars[compareNodeIdx].style;

      const colour =
        i !== 0 && i % 2 === 0 ? THEME.secondary.colour : THEME.primary.light;
      setTimeout(() => {
        compareNodeStyle.backgroundColor = colour;
        compareNodeStyle.height = `${compareNodeHeight}px`;
        sortedNodeStyle.backgroundColor = THEME.accent.hex;
      }, i * ANIMATION_SPEED_MS);
    } else {
      setTimeout(() => {
        const [idx, correctHeight] = animations[i];
        const sortedNode = arrayBars[idx].style;
        sortedNode.height = `${correctHeight}px`;
        sortedNode.backgroundColor = THEME.primary.light;
      }, i * ANIMATION_SPEED_MS);
    }
  }
}
