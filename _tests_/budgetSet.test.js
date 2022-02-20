const { settingNewBudget } = require("../modules/budgetSet");

describe("Functionality for setting budget:", () => {
    describe("Functionality for setting budget:", () => {
      document.body.innerHTML = `
          <input id="wantedValue" value="30" type="number"></div>
          <div id="balance-test"></div>
          <div id="style-test"></div>
          <button id="button-test" value=""></button>
          `;
  
      const inputValue = document.body.querySelector("#wantedValue").value;
      const balanceToInner = document.body.querySelector("#balance-test");
      const styleToInner = document.body.querySelector("#style-test");
      const buttonToInner = document.body.querySelector("#button-test");
  
      window.localStorage.setItem("budget", 20);
  
      settingNewBudget(inputValue, balanceToInner, styleToInner, buttonToInner);
      const targetBudget = JSON.parse(window.localStorage.getItem("budget"));
  
      test("Function for setting budget is declared", () => {
        expect(settingNewBudget).toBeDefined();
      });
  
      test("Function for setting budget is declared as a function", () => {
        expect(typeof settingNewBudget).toBe("function");
      });
  
      test("Function for setting budget is setting balance as a number", () => {
        expect(typeof targetBudget).toEqual("number");
      });
  
      test("Function for setting budget is setting correct", () => {
        expect(targetBudget).toEqual(50);
      });
  
      test("Function for setting budget is setting style of reset button to block", () => {
        expect(styleToInner.style.display).toEqual("block");
      });
  
      test("Function for setting budget is changing the value of button to adding budget", () => {
        expect(buttonToInner.value).toEqual("Add budget");
      });
  
      test("Function for setting budget is correctly innered to DOM", () => {
        expect(balanceToInner.innerHTML).toEqual("50.00 zł");
      });
    });
});