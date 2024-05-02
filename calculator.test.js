// calculator.test.js
const calc = require("./calculator.js");

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

  // Test case: Order of operations
  it("should follow the correct order of operations", () => {
    expect(calc(2, "+", 3, "*", 4)).toBe(14);
  });

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

  // Test case: missing arguments (either number or operation)
  it("should throw an error for missing arguments", () => {
    expect(() => calc(2, "+", 3, "-")).toThrow(
      "Invalid input - missing arguments"
    );
  });
});

describe("Calculator test on multiple numbers", () => {
  // Test case: More than two numbers
  it("should return the correct result with more than two numbers", () => {
    expect(calc(1, "+", 2, "+", 3, "+", 4)).toBe(10);
  });

  // Test case: handles an unknown amount of numbers
  it("should handle an unknown amount of numbers", () => {
    expect(calc(1, "+", 2, "+", 3, "+", 4)).toBe(10);
    expect(calc(1, "+", 2, "+", 3, "+", 4, "+", 5)).toBe(15);
    expect(calc(1, "+", 2, "+", 3, "+", 4, "+", 5, "+", 6)).toBe(21);
  });

  // Test case: follow the correct order for operations precedence
  it("should follow the correct order of operations precedence", () => {
    expect(calc(10, "+", 15, "/", 3, "-", 2, "*", 8)).toBe(-1);
  });

});


describe("Calculator test on numbers bigger than 1000", () => {
  // Test case: Numbers bigger than 1000 should be ignored
  it("should ignore numbers bigger than 1000", () => {
    expect(calc(2, "+", 1001)).toBe(2);
  });
});

