function getArrayBars(document: Document): HTMLElement[] {
  return Array.from(
    document.getElementsByClassName(
      'array-bar'
    ) as HTMLCollectionOf<HTMLElement>
  );
}

export default getArrayBars;
