type GenerateTransformTypes = {
  total: number;
  initialValue: number;
  addValue: number;
};

export const generateTransforms = ({
  total,
  initialValue,
  addValue,
}: GenerateTransformTypes): number[] => {
  const middleIndex: number = Math.floor(total / 2);
  const result: number[] = Array(total).fill(0);
  const isOdd: boolean = total % 2 !== 0;

  if (total === 1) {
    return [0];
  }

  // Set middle number to 0 if total is odd
  if (isOdd) {
    result[middleIndex] = 0;
    // Set the first number after 0 as initialValue
    result[middleIndex + 1] = initialValue;
  } else {
    result[middleIndex] = initialValue;
  }

  // Fill numbers to the left of 0
  let value: number = -initialValue;
  result[middleIndex - 1] = value;
  for (let i: number = middleIndex - 2; i >= 0; i--) {
    result[i] = value - addValue;
    value -= addValue;
  }

  // Fill numbers to the right of 0
  value = initialValue;
  for (
    let i: number = isOdd ? 2 + middleIndex : 1 + middleIndex;
    i < total;
    i++
  ) {
    result[i] = value + addValue;
    value += addValue;
  }

  return result;
};
