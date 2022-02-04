type PreviousNodeProperties = {
  previous: any[];
  startIdx: number;
  endIdx: number;
  arrayBars: any[];
  colour: string;
};

// recursive algo animations highlight the start & end nodes
// this func paints those nodes a colour when they change
function setPreviousStyles({
  previous,
  startIdx,
  endIdx,
  arrayBars,
  colour,
}: PreviousNodeProperties): void {
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
