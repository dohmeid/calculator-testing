//the calculator function
const calc = (...args) => {
  //the number of arguments passed must be at least 3 (num1,op,num2), also, for multiple operations, make sure the args are odd number
  if (args.length < 3 || args.length % 2 === 0) {
    throw new Error("Invalid input - missing arguments");
  }

  const ops = "+-*/"; //the valid operationa
  const operandStack = []; //Stack for numbers/operands
  const operatorStack = []; //Stack for Operators

  for (let i = 0; i < args.length; i++) {
    //current token is a number, push to operands stack
    if (typeof args[i] === "number") {
      let operand = parseFloat(args[i]);
      if (operand > 1000) 
        operandStack.push(0);
      else 
        operandStack.push(operand);
    }

    //current token is an operator, push to operators stack
    else if (ops.includes(args[i])) {
      let currOp = args[i];
      let prevOp = operatorStack[operatorStack.length - 1];

      //as long as prev op has same or greater precedence to curr op -> apply op prev to top two elements in operandStack
      while (operatorStack.length && hasPrecedence(currOp, prevOp)) {
        let res = applyOperation(operatorStack, operandStack);
        operandStack.push(res);
      }
      operatorStack.push(currOp);
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

  //apply remaining ops to remaining values
  while (operatorStack.length) {
    let res = applyOperation(operatorStack, operandStack);
    operandStack.push(res);
  }

  return operandStack.pop();
};

//this function checks if op2 has higher or same precedence as op1
const hasPrecedence = (op1, op2) => {
  if ((op1 === "*" || op1 === "/") && (op2 === "+" || op2 === "-")) {
    return false;
  }
  return true;
};

//this function applies an operator from operatorStack on top 2 operands from operandStack and returns the result
const applyOperation = (operatorStack, operandStack) => {
  let op = operatorStack.pop();
  let num2 = operandStack.pop();
  let num1 = operandStack.pop();

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
      return 0;
  }
};

module.exports = calc;
