const { addExpense } = require("../modules/addExpense");

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
    const expenseHistory = JSON.parse(window.localStorage.getItem("expenses"));
    const arrayToCheck = [
      { date: "2020-05-22", description: "description", cost: "299" },
    ];

    expect(expenseHistory[0]).toEqual(expect.objectContaining(arrayToCheck[0]));
  });
});
