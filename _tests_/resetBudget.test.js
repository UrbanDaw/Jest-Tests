const { resetBudget } = require("../modules/resetBudget");

describe("Functionality for reseting budget:", () => {
  document.body.innerHTML = `
  <div id="balance-test"></div>
  `;

  const balanceToInner = document.body.querySelector("#balance-test");

  resetBudget(balanceToInner);

  const targetBudget = JSON.parse(window.localStorage.getItem("budget"));
  test("Function for reseting budget is declared", () => {
    expect(resetBudget).toBeDefined();
  });

  test("Function for reseting budget is declared as a function", () => {
    expect(typeof resetBudget).toEqual("function");
  });

  test("Function for reseting budget is setting the budget as a number", () => {
    expect(typeof targetBudget).toEqual("number");
  });

  test("Function for reseting budget is correctly innered to DOM", () => {
    expect(balanceToInner.innerHTML).toEqual("0.00 zł");
  });
});
