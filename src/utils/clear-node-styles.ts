const clearNodeStyles = (className: string) => {
  const nodes = Array.from(
    document.getElementsByClassName(className) as HTMLCollectionOf<HTMLElement>
  );
  nodes.forEach((elem: HTMLElement) => elem.setAttribute('style', ''));
};

export default clearNodeStyles;
