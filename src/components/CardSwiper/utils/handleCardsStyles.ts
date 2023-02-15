import { generateTransforms } from "./generateTransforms";

type TransformValuesType = {
  xValues: number[];
  yDegValues: number[];
};

export const getCardsTransformValues = (total: number) => {
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

  return { xValues, yDegValues };
};

export const openCards = (
  el: Element,
  total: number,
  transformValues: TransformValuesType
) => {
  const children = el.children as HTMLCollectionOf<HTMLDivElement>;

  for (let i = 0; i < total; i++) {
    setDefaultOpenCardStyles(children[i], i, transformValues);
  }
};

export const closeCards = (el: Element) => {
  const children = el.children as HTMLCollectionOf<HTMLDivElement>;
  for (const card of children) {
    setDefaultCardStyles(card, Number(card.dataset.index));
  }
};

export const setDefaultOpenCardStyles = (
  el: HTMLDivElement,
  index: number,
  transformValues: TransformValuesType
) => {
  const { xValues, yDegValues } = transformValues;

  el.style.setProperty(
    "transform",
    `translate(${xValues[index]}%, ${Math.abs(yDegValues[index])}%) rotate(${
      yDegValues[index]
    }deg)`
  );
  el.style.setProperty("z-index", "1");
};

export const setDefaultCardStyles = (el: HTMLDivElement, index?: number) => {
  if (index !== undefined) {
    el.style.setProperty("transform", `translateX(${2 * index}%`);
    el.style.setProperty("z-index", "1");
  }
};

export const setSelectedCardStyle = (el: HTMLDivElement) => {
  el.style.setProperty(
    "transform",
    "translate(0%, 0%) rotate(0deg) scale(1.5)"
  );

  el.style.setProperty("z-index", "100");
};
