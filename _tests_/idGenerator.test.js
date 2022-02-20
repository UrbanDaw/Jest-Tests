const { idGenerator } = require("../modules/idGenerator");

describe("Functionality for generating id:", () => {
    const numberToTest = idGenerator();

    test("Function for generating id is declared", () => {
      expect(idGenerator()).toBeDefined();
    });

    test("Function for generating id is declared as a function", () => {
      expect(typeof idGenerator).toEqual("function");
    });

    test("Function for generating id is returning a number", () => {
      expect(typeof numberToTest).toBe("number");
    });

    test("Function for generating id is returning a number greater or equal than 0", () => {
      expect(numberToTest).toBeGreaterThanOrEqual(0);
    });

    test("Function for generating id is returning a number less or equal than 999999999", () => {
      expect(numberToTest).toBeLessThanOrEqual(999999999);
    });
  });