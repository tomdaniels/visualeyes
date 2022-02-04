import getArrayBars from './get-array-bars';

const clearNodeStyles = (): void => {
  const nodes = getArrayBars(document);
  nodes.forEach((elem: HTMLElement) => elem.setAttribute('style', ''));
};

export default clearNodeStyles;
