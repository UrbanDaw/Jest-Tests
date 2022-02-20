const { budgetAdd } = require("../modules/budgetAdd");

describe("Functionality for increasing the budget:", () => {
  test("Function for increasing the budget is declared", () => {
    expect(budgetAdd).toBeDefined();
  });

  test("Function for increasing the budget is declared as a function", () => {
    expect(typeof budgetAdd).toEqual("function");
  });

  test("Function for increasing the budget added correct amount and set new LocalStorage", () => {
    let budgetAddAmount = 200;
    window.localStorage.setItem("budget", JSON.stringify(budgetAddAmount));

    let budgetLocalStorage = JSON.parse(window.localStorage.getItem("budget"));
    expect(budgetLocalStorage).toStrictEqual(200);

    budgetAdd(budgetAddAmount);
    const finalBudgetAdd = JSON.parse(window.localStorage.getItem("budget"));
    expect(finalBudgetAdd).toStrictEqual(400);
  });
});
