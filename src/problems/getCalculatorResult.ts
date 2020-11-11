const zipAndFlatten = (a1: string[], a2: string[]): string[] =>
  a1.reduce<string[]>((zipped, element, idx) => {
    zipped.push(element);

    if (a2[idx]) {
      zipped.push(a2[idx]);
    }

    return zipped;
  }, new Array<string>());

const getCalculatorResult = (calculatorExpression: string): number => {
  const operands = calculatorExpression
    .split(/[\+,\-,\*,\/]/)
    .filter((c) => c !== "");
  const operators = calculatorExpression.split(/\d/).filter((c) => c !== "");
  const tokens = zipAndFlatten(operands, operators);
  let idx = 0;

  // First order of operations
  while (tokens.length > 1 && idx < tokens.length - 1) {
    const expression = tokens.splice(idx, 3);
    const leftOperand = Number(expression[0]);
    const operator = expression[1];
    const rightOperand = Number(expression[2]);

    if (operator === "*") {
      tokens.splice(idx, 0, `${leftOperand * rightOperand}`);
    } else if (operator === "/") {
      tokens.splice(idx, 0, `${leftOperand / rightOperand}`);
    } else {
      tokens.splice(
        idx,
        0,
        leftOperand.toString(10),
        operator,
        rightOperand.toString(10)
      );
      idx += 2;
    }
  }

  // Second order of operations
  while (tokens.length > 1) {
    const expression = tokens.splice(0, 3);
    const leftOperand = Number(expression[0]);
    const operator = expression[1];
    const rightOperand = Number(expression[2]);

    if (operator === "+") {
      tokens.unshift(`${leftOperand + rightOperand}`);
    } else if (operator === "-") {
      tokens.unshift(`${leftOperand - rightOperand}`);
    }
  }

  return tokens[0] === undefined ? 0 : Number(tokens[0]);
};

export default getCalculatorResult;
