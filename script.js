import { settingNewBudget } from "./modules/budgetSet";
import { resetBudget } from "./modules/resetBudget";
import { addExpense } from "./modules/addExpense";
import { addExpenseToDom } from "./modules/addExpenseToDom";
import { budgetDelete } from "./modules/budgetDelete";
import { deletingExpense } from "./modules/deletingExpense";

// Set budget - tested

window.localStorage.setItem("budget", 0);

const setBudgetButton = document.getElementById("budget-set-button");

setBudgetButton.addEventListener("click", () => {
  const balance = document.getElementById("balance");
  const setBudgetButton = document.getElementById("budget-set-button");
  const valueInput = document.getElementById("number-set-budget").value;
  settingNewBudget(valueInput, balance, resetBudgetButton, setBudgetButton);
});

// reset budget - tested
const resetBudgetButton = document.getElementById("budget-reset-button");

resetBudgetButton.addEventListener("click", () => {
  const balance = document.getElementById("balance");
  resetBudget(balance);
});

// Generating a table of expenses
const addTable = document.getElementById("add-table");

addTable.addEventListener("click", () => {
  const tableBody = document.getElementById("table-body");
  const tableDate = document.getElementById("date").value;
  const tableDescription = document.getElementById("description").value;
  const tableNumber = document.getElementById("number-add-expense").value;

  addExpense(tableDate, tableDescription, tableNumber);

  addExpenseToDom(tableBody);

  budgetDelete(tableNumber);
});
