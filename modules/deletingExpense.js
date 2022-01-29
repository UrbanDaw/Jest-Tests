const { budgetAdd } = require("./budgetAdd");
const { addExpenseToDom } = require("./addExpenseToDom");

function deletingExpense(expenseIdP) {
  const expensesHistory = JSON.parse(window.localStorage.getItem("expenses"));

  newExpenseArray = expensesHistory.filter(
    (transaction) => transaction.id !== expenseIdP
  );

  toMinus = expensesHistory.filter(
    (transaction) => transaction.id === expenseIdP
  );

  budgetAdd(toMinus[0].cost);

  window.localStorage.setItem("expenses", JSON.stringify(newExpenseArray));

  const tableBodyP = document.getElementById("table-body");

  addExpenseToDom(tableBodyP);
}

export { deletingExpense };
// module.exports = { deletingExpense };
