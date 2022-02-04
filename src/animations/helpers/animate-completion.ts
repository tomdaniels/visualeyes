import { ANIMATION_SPEED_MS, THEME } from '../../constants';

function animateCompletion(arr: number[], arrayBars: any[]): void {
  for (let j = 0; j < arr.length; j++) {
    setTimeout(() => {
      arrayBars[j].style.backgroundColor = THEME.primary.hex;
      arrayBars[j].style.border = `1px solid ${THEME.primary.hex}`;
    }, j * ANIMATION_SPEED_MS);
  }
}

export default animateCompletion;
