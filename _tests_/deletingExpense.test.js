const { deletingExpense } = require("../modules/deletingExpense");
const { addExpense } = require("../modules/addExpense");

describe("Functionality for deleting expense:", () => {
  test("Function for deleting a expense from localStorage is declared", () => {
    expect(deletingExpense).toBeDefined();
  });

  test("Function for adding a expense to dom is declared as a function", () => {
    expect(typeof deletingExpense).toEqual("function");
  });

  test("Function for deleting expense expense is deleting one of two expenses", () => {
    addExpense("2020-05-22", "description", "299");
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
    const expenseHistory = JSON.parse(window.localStorage.getItem("expenses"));
    expect(expenseHistory).toEqual(
      expect.not.objectContaining(newExpenseToDelete)
    );
  });

  test("Function for deleting expense expense is deleting one of two expenses and leaving one expense in localStorage ", () => {
    const expenseHistory = JSON.parse(window.localStorage.getItem("expenses"));
    expect(expenseHistory.length).toEqual(1);
  });
});
