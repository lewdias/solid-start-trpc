import { generateTransforms } from "./generateTransforms";

export const openCards = (target: Element, total: number) => {
  const xValues = generateTransforms({
    total,
    addValue: 50,
    initialValue: 25,
  });

  const yDegValues = generateTransforms({
    total,
    addValue: 16,
    initialValue: 8,
  });

  const children = target.children as HTMLCollectionOf<HTMLDivElement>;

  for (let i = 0; i < total; i++) {
    children[i].style.setProperty(
      "transform",
      `translate(${xValues[i]}%, ${Math.abs(yDegValues[i])}%) rotate(${
        yDegValues[i]
      }deg)`
    );
  }
};

export const closeCards = (target: Element) => {
  const children = target.children as HTMLCollectionOf<HTMLDivElement>;
  for (const card of children) {
    setDefaultCardStyles(card, Number(card.dataset.index));
  }
};

export const setDefaultCardStyles = (el: HTMLDivElement, index?: number) => {
  if (index !== undefined) {
    el.style.setProperty("transform", `translateX(${2 * index}%`);
  }
};