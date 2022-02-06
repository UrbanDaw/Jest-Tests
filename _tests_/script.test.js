const { settingNewBudget } = require("../modules/budgetSet");
const { resetBudget } = require("../modules/resetBudget");
const { idGenerator } = require("../modules/idGenerator");
const { addExpense } = require("../modules/addExpense");
const { addExpenseToDom } = require("../modules/addExpenseToDom");
const { deletingExpense } = require("../modules/deletingExpense");
const { budgetAdd } = require("../modules/budgetAdd");
const { budgetDelete } = require("../modules/budgetDelete");

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

  describe("Functionality for adding expense:", () => {
    document.body.innerHTML = `
  <input id="wantedDate" value="2020-05-22" type="date">
  <input id="wantedDescription" value="description" type="text">
  <input id="wantedNumber" value="299" type="number">
  <input id="wantedDateEmpty" value="" type="date">
  <div id="budgetTest"></div>
  `;

    const wantedDate = document.body.querySelector("#wantedDate").value;
    const wantedDateEmpty =
      document.body.querySelector("#wantedDateEmpty").value;
    const wantedDescription =
      document.body.querySelector("#wantedDescription").value;
    const wantedNumber = document.body.querySelector("#wantedNumber").value;

    test("Function for adding expense is declared", () => {
      expect(addExpense).toBeDefined();
    });

    test("Function for adding expense i declared as a function", () => {
      expect(typeof addExpense).toEqual("function");
    });

    test("Function for adding expense is alerting when one of the input is empty", () => {
      expect(() =>
        addExpense(wantedDateEmpty, wantedDescription, wantedNumber)
      ).toThrow("Please add all details.");
    });

    test("Function for adding expense is adding a single expense to array of expenses", () => {
      addExpense(wantedDate, wantedDescription, wantedNumber);
      const expenseHistory = JSON.parse(
        window.localStorage.getItem("expenses")
      );
      const arrayToCheck = [
        { date: "2020-05-22", description: "description", cost: "299" },
      ];

      expect(expenseHistory[0]).toEqual(
        expect.objectContaining(arrayToCheck[0])
      );
    });
  });

  describe("Functionality for adding expense to DOM:", () => {
    test("Function for adding a expense array to dom is declared", () => {
      expect(addExpenseToDom).toBeDefined();
    });

    test("Function for adding a expense to dom is declared as a function", () => {
      expect(typeof addExpenseToDom).toEqual("function");
    });

    test("Function for adding expense is creating a DOM model correctly.", () => {
      const expenseP = JSON.parse(window.localStorage.getItem("expenses"));
      console.log(expenseP);
      document.body.innerHTML = `
  <div id="testing"></div>
  <div id="to-test">
  <tr>
  <th>2020-06-12</th>
  <td>description</td>
  <td>299</td>
  <td>- 299</td>
  <td><button class="button" onClick="deletingExpense(2131231232343)">X</button></td>
</tr>
  </div>
  `;

      const expectedExpenseDom = document.body.querySelector("#to-test");
      let tableBody = document.body.querySelector("#testing");
      addExpenseToDom(tableBody);
      expect(tableBody).toMatchObject(expectedExpenseDom);
    });
  });

  describe("Functionality for deleting expense:", () => {
    test("Function for deleting a expense from localStorage is declared", () => {
      expect(deletingExpense).toBeDefined();
    });

    test("Function for adding a expense to dom is declared as a function", () => {
      expect(typeof deletingExpense).toEqual("function");
    });

    test("Function for deleting expense expense is deleting one of two expenses", () => {
      let expensesHistory = JSON.parse(window.localStorage.getItem("expenses"));
      const newExpenseToDelete = {
        id: 999999999,
        date: "2021-03-01",
        description: "toDelete",
        cost: "99",
      };
      expensesHistory.push(newExpenseToDelete);
      window.localStorage.setItem("expenses", JSON.stringify(expensesHistory));
      const expenseToLengthCheck = JSON.parse(
        window.localStorage.getItem("expenses")
      );
      expect(expenseToLengthCheck.length).toEqual(2);

      deletingExpense(999999999);
      const expenseHistory = JSON.parse(
        window.localStorage.getItem("expenses")
      );
      expect(expenseHistory).toEqual(
        expect.not.objectContaining(newExpenseToDelete)
      );
    });

    test("Function for deleting expense expense is deleting one of two expenses and leaving one expense in localStorage ", () => {
      const expenseHistory = JSON.parse(
        window.localStorage.getItem("expenses")
      );
      expect(expenseHistory.length).toEqual(1);
    });
  });

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

      let budgetLocalStorage = JSON.parse(
        window.localStorage.getItem("budget")
      );
      expect(budgetLocalStorage).toStrictEqual(200);

      budgetAdd(budgetAddAmount);
      const finalBudgetAdd = JSON.parse(window.localStorage.getItem("budget"));
      expect(finalBudgetAdd).toStrictEqual(400);
    });
  });

  describe("Functionality for decreasing the budget:", () => {
    test("Function for decreasing the budget is declared", () => {
      expect(budgetDelete).toBeDefined();
    });

    test("Function for decreasing the budget is declared as a function", () => {
      expect(typeof budgetDelete).toEqual("function");
    });

    test("Function for increasing the budget added correct amount and set new LocalStorage", () => {
      let budgetLocalStorage = JSON.parse(
        window.localStorage.getItem("budget")
      );
      expect(budgetLocalStorage).toStrictEqual(400);

      const budgetDeleteAmount = 200;
      budgetDelete(budgetDeleteAmount);
      const finalBudget = JSON.parse(window.localStorage.getItem("budget"));
      expect(finalBudget).toStrictEqual(200);
    });
  });
});
