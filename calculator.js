//the calculator function
const calc = (...args) => {

  //the number of arguments passed must be at least 3 (num1,op,num2), also, for multiple operations, make sure the args are odd number
  if (args.length < 3 || args.length % 2 === 0) {
    throw new Error("Invalid input");
  }

  const operandStack = []; //Stack for numbers/operands
  const operatorStack = []; //Stack for Operators
  const ops = "+-*/";

  for (let i = 0; i < args.length; i++) {

    //current token is a number, push to operands stack
    if (typeof args[i] === "number") {
      let operand = parseFloat(args[i]);
      operandStack.push(operand);
    }

    //current token is an operator, , push to operators stack
    else if (ops.includes(args[i])) {
      let operation = args[i];

      while (operatorStack.length &&hasPrecedence(operation, operatorStack[operatorStack.length - 1])
      ) {
        let op = operatorStack.pop();
        let num2 = operandStack.pop();
        let num1 = operandStack.pop();
        let res = apply(op, num1, num2);
        operandStack.push(res);
      }

      operatorStack.push(operation);
    }

    //if the expected operand token is not a number
    else if (i % 2 == 0 && typeof args[i] !== "number") {
      throw new Error("Invalid input type");
    }

    //if the expected operator token is not an operation
    else {
      throw new Error("Invalid operator");
    }
  }

  while (operatorStack.length) {
    let op = operatorStack.pop();
    let num2 = operandStack.pop();
    let num1 = operandStack.pop();
    let res = apply(op, num1, num2);
    operandStack.push(res);
  }

  return operandStack.pop();
}

const hasPrecedence = (op1, op2) => {
  if ((op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-")) {
    return false;
  }
  return true;
};

const apply = (op, num1, num2) => {
  switch (op) {
    case "+":
      return num1 + num2;
    case "-":
      return num1 - num2;
    case "*":
      return num1 * num2;
    case "/":
      if (num2 === 0) {
        throw new Error("Division by zero");
      }
      return num1 / num2;
    default:
      throw new Error("Invalid operator");
  }
};

module.exports = calc;
