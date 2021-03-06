import { ANIMATION_SPEED_MS, THEME } from '../constants';
import getInsertionSortAnimations from '../algo/insertion-sort';
import animateCompletion from './helpers/animate-completion';
import getArrayBars from '../utils/get-array-bars';

export default function animateMergeSort(
  arr: number[],
  onCompletion: Function
): void {
  const arrayBars = getArrayBars(document);
  const animations = getInsertionSortAnimations(arr);

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

      setTimeout(() => {
        compareNodeStyle.backgroundColor = THEME.secondary.colour;
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
