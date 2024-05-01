function calc(...args) {
  //the number of arguments passed must be at least 3 (num1,op,num2)
  //also, for multiple operations, make sure the args are odd number
  if (args.length < 3 || args.length % 2 === 0) {
    throw new Error("Invalid input");
  }

  let number1 = parseFloat(args[0]);
  let result = number1;

  for (let i = 1; i < args.length; i += 2) {
    const operation = args[i];
    const operand = parseFloat(args[i + 1]);

    if (isNaN(operand)) {
      throw new Error("Invalid input type");
    }

    switch (operation) {
      case "+":
        result += operand;
        break;
      case "-":
        result -= operand;
        break;
      case "*":
        result *= operand;
        break;
      case "/":
        if (operand === 0) {
          throw new Error("Division by zero");
        }
        result /= operand;
        break;
      default:
        throw new Error("Invalid operation");
    }
  }

  return result;
}

module.exports = calc;
