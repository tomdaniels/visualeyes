import getArrayBars from '../../utils/get-array-bars';

type PreviousNodeProperties = {
  previous: any[];
  startIdx: number;
  endIdx: number;
  colour: string;
};

// recursive algo animations highlight the start & end nodes
// this func paints those nodes a colour when they change
function setPreviousStyles({
  previous,
  startIdx,
  endIdx,
  colour,
}: PreviousNodeProperties): void {
  const arrayBars = getArrayBars(document);
  if (!!previous) {
    if (startIdx !== previous[0]) {
      const oldStartIdx = previous[0];
      const oldStartNodeStyles = arrayBars[oldStartIdx].style;
      oldStartNodeStyles.backgroundColor = colour;
    }
    if (endIdx !== previous[1]) {
      const oldEndIdx = previous[1];
      const oldEndNodeStyles = arrayBars[oldEndIdx].style;
      oldEndNodeStyles.backgroundColor = colour;
    }
  }
}

export default setPreviousStyles;
