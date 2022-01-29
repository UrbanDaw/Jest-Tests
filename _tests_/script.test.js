const { settingNewBudget } = require("../modules/budgetSet");
const { resetBudget } = require("../modules/resetBudget");
const { idGenerator } = require("../modules/idGenerator");
const { addExpense } = require("../modules/addExpense");
const { addExpenseToDom } = require("../modules/addExpenseToDom");

describe("Functionality for setting budget:", () => {
  let testBudget = 0;

  document.body.innerHTML = `
        <input id="wantedValue" value="30" type="number"></div>
        <div id="balance-test"></div>
        <div id="style-test"></div>
        <button id="button-test" value=""></button>
        `;

  const wantedValue = document.body.querySelector("#wantedValue");
  const balanceToInner = document.body.querySelector("#balance-test");
  const styleToInner = document.body.querySelector("#style-test");
  const buttonToInner = document.body.querySelector("#button-test");

  settingNewBudget(
    testBudget,
    wantedValue,
    balanceToInner,
    styleToInner,
    buttonToInner
  );

  test("Function for setting budget is declared", () => {
    expect(settingNewBudget).toBeDefined();
  });

  test("Function for setting budget is declared as a function", () => {
    expect(typeof settingNewBudget).toBe("function");
  });

  test("Function for setting budget is setting balance as a number", () => {
    expect(typeof testBudget).toEqual("number");
  });

  test("Function for setting budget is setting style of reset button to block", () => {
    expect(styleToInner.style.display).toEqual("block");
  });

  test("Function for setting budget is changing the value of button to adding budget", () => {
    expect(buttonToInner.value).toEqual("Add budget");
  });

  test("Function for setting budget is correctly innered to DOM", () => {
    expect(balanceToInner.innerHTML).toEqual("30.00 zł");
  });
});

describe("Functionality for reseting budget:", () => {
  let budget = 20;

  document.body.innerHTML = `
  <div id="balance-test"></div>
  `;

  const balanceToInner = document.body.querySelector("#balance-test");

  resetBudget(budget, balanceToInner);

  test("Function for reseting budget is declared", () => {
    expect(resetBudget).toBeDefined();
  });

  test("Function for reseting budget is declared as a function", () => {
    expect(typeof resetBudget).toEqual("function");
  });

  test("Function for reseting budget is setting the budget as a number", () => {
    expect(typeof budget).toEqual("number");
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
  const wantedDateEmpty = document.body.querySelector("#wantedDateEmpty").value;
  const wantedDescription =
    document.body.querySelector("#wantedDescription").value;
  const wantedNumber = document.body.querySelector("#wantedNumber").value;
  let expenseHistory = [];
  let expenseDom = "";

  test("Function for adding expense is declared", () => {
    expect(addExpense).toBeDefined();
  });

  test("Function for adding expense i declared as a function", () => {
    expect(typeof addExpense).toEqual("function");
  });

  test("Function for adding expense is alerting when one of the input is empty", () => {
    expect(() =>
      addExpense(
        wantedDateEmpty,
        wantedDescription,
        wantedNumber,
        expenseHistory,
        expenseDom
      )
    ).toThrow("Please add all details.");
  });

  test("Function for adding expense is adding a single expense to array of expenses", () => {
    addExpense(
      wantedDate,
      wantedDescription,
      wantedNumber,
      expenseHistory,
      expenseDom
    );

    const arrayToCheck = [
      { date: "2020-05-22", description: "description", cost: "299" },
    ];

    expect(expenseHistory[0]).toEqual(expect.objectContaining(arrayToCheck[0]));
  });

  test("Function for addding expense is reseting expenseDom variable to empty string", () => {
    expenseDom = "needs to be clear";

    addExpense(
      wantedDate,
      wantedDescription,
      wantedNumber,
      expenseHistory,
      expenseDom
    );

    expect(expenseDom).toEqual("");
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
    const expense = [
      {
        date: "2020-06-12",
        description: "description",
        cost: "199",
        id: "2131231232343",
      },
    ];

    let expectedExpenseDom = [`
    <tr>
    <th>2020-06-12</th>
    <td>description</td>
    <td>199</td>
    <td>- 199</td>
    <td><button class="button" onClick="deletingExpense(2131231232343)">X</button></td>
</tr>`
    ]
    let expenseDom = [];
    let tableBody = [];
    addExpenseToDom(expense, expenseDom, tableBody);
    expect(expenseDom).toEqual(expect.objectContaining(expectedExpenseDom));
  });

  test("Function for adding a expense is adding a expenses to DOM.", () => {});
});


description("Functionality for deleting expense:", () => {

  
}) 