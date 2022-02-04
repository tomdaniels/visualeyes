import setPreviousStyles from './helpers/set-previous-styles';
import { THEME, ANIMATION_SPEED_MS } from '../constants';
import getMergeSortAnimations from '../algo/merge-sort';
import animateCompletion from './helpers/animate-completion';

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
        animateCompletion(arr, arrayBars);
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
      const colour = i % 3 === 0 ? THEME.secondary.colour : THEME.primary.light;
      const previous = animations[i - 3];
      setTimeout(() => {
        startNodeStyle.backgroundColor = THEME.accent.hex;
        endNodeStyle.backgroundColor = THEME.accent.hex;
        barOneStyle.backgroundColor = colour;
        barTwoStyle.backgroundColor = colour;

        if (!!previous) {
          setPreviousStyles({
            previous: animations[i - 3],
            startIdx,
            endIdx,
            arrayBars,
            colour: THEME.primary.light,
          });
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
