// calculator.test.js
const calc = require("./calculator.js");

/************************************************************* */
describe("Calculator test on two numbers", () => {
  // Test case: Addition
  it("should return the correct sum of two numbers", () => {
    expect(calc(2, "+", 3)).toBe(5);
  });

  // Test case: Subtraction
  it("should return the correct difference of two numbers", () => {
    expect(calc(5, "-", 2)).toBe(3);
  });

  // Test case: Multiplication
  it("should return the correct product of two numbers", () => {
    expect(calc(4, "*", 6)).toBe(24);
  });

  // Test case: Division
  it("should return the correct quotient of two numbers", () => {
    expect(calc(10, "/", 2)).toBe(5);
  });

  // Test case: Division by zero
  it("should throw an error when dividing by zero", () => {
    expect(() => calc(6, "/", 0)).toThrow("Division by zero");
  });

  // Test case: Negative numbers
  it("should handle negative numbers correctly", () => {
    expect(calc(-8, "+", 5)).toBe(-3);
  });

  // Test case: Decimal numbers
  it("should handle decimal numbers correctly", () => {
    expect(calc(3.5, "*", 2)).toBe(7);
  });

  it("should handle floating point numbers correctly", () => {
    expect(calc(0.1, "+", 0.2)).toBeCloseTo(0.3);
  });

  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(calc(2, "+", 3, "*", 4)).toBe(14);
  });
});

/************************************************************* */
describe("Calculator test on invalid arguments - error cases", () => {
  // Test case: Invalid operator
  it("should throw an error for an invalid operator", () => {
    expect(() => calc(5, "$", 3)).toThrow("Invalid operator");
  });

  // Test case: Invalid input type
  it("should throw an error for invalid input types", () => {
    expect(() => calc("2", "+", 3)).toThrow("Invalid input type");
  });

  // Test case: less than 3 arguments
  it("should throw an error for arguments less than 3", () => {
    expect(() => calc(2, 3)).toThrow("Invalid input - missing arguments");
  });

  // Test case: missing number argument
  it("should throw an error for missing number arguments", () => {
    expect(() => calc(2, "+", 3, "-")).toThrow(
      "Invalid input - missing arguments"
    );
  });

  // Test case: missing operation arguments
  it("should throw an error for missing operation arguments", () => {
    expect(() => calc(2, "+", 3, 4)).toThrow(
      "Invalid input - missing arguments"
    );
  });
});

/************************************************************* */
describe("Calculator test on multiple numbers", () => {

  it("should handle an unknown amount of numbers", () => {
    expect(calc(1, "+", 2, "+", 3, "+", 4)).toBe(10);
    expect(calc(1, "+", 2, "+", 3, "+", 4, "+", 5)).toBe(15);
    expect(calc(1, "+", 2, "+", 3, "+", 4, "+", 5, "+", 6)).toBe(21);
  });

  it("should follow the correct order of operations precedence", () => {
    expect(calc(10, "+", 15, "/", 3, "-", 2, "*", 8)).toBe(-1);
  });

  it("should handle expressions with multiple mixed operations correctly", () => {
    expect(calc(1, "+", 2, "*", 3, "-", 4, "/", 2)).toEqual(5);
  });
});


/************************************************************* */
describe("Calculator test on numbers bigger than 1000", () => {
  it("should ignore numbers bigger than 1000 in case of addition", () => {
    expect(calc(2, "+", 1001)).toBe(2);
  });

  it("should ignore numbers bigger than 1000 in case of subtraction", () => {
    expect(calc(2, "-", 1001)).toBe(2);
  });

  it("should ignore numbers bigger than 1000 in case of multiplication", () => {
    expect(calc(1200, "*", 2)).toEqual(0);
  });

  it("should ignore numbers bigger than 1000 in case of division", () => {
    expect(calc(1200, "/", 2)).toEqual(0);
  });

});
