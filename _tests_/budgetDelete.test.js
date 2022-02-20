const { budgetDelete } = require("../modules/budgetDelete");

describe("Functionality for decreasing the budget:", () => {
  test("Function for decreasing the budget is declared", () => {
    expect(budgetDelete).toBeDefined();
  });

  test("Function for decreasing the budget is declared as a function", () => {
    expect(typeof budgetDelete).toEqual("function");
  });

  test("Function for increasing the budget added correct amount and set new LocalStorage", () => {
    window.localStorage.setItem("budget", 400);
    let budgetLocalStorage = JSON.parse(window.localStorage.getItem("budget"));
    expect(budgetLocalStorage).toStrictEqual(400);

    const budgetDeleteAmount = 200;
    budgetDelete(budgetDeleteAmount);
    const finalBudget = JSON.parse(window.localStorage.getItem("budget"));
    expect(finalBudget).toStrictEqual(200);
  });
});
