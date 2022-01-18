import {settingNewBudget} from "./modules/budgetSet";
import {resetBudget} from "./modules/resetBudget";
import {idGenerator} from "./modules/idGenerator";
import { addExpense} from "./modules/addExpense"


// Set budget - tested

let budget = 0;

const balance = document.getElementById("balance");
const setBudgetButton = document.getElementById("budget-set-button");
const valueInput = document.getElementById("number-set-budget");

setBudgetButton.addEventListener("click", () => {
  settingNewBudget(budget, valueInput, balance, resetBudgetButton, setBudgetButton)
});

// reset budget - tested
const resetBudgetButton = document.getElementById("budget-reset-button");

resetBudgetButton.addEventListener("click", () => {
  resetBudget(budget, balance);
});

// if generator  
function idGenerator() {
  return Math.floor(Math.random() * 1000000000);
};

// function addExpense (exData, description, cost, minusBudget) {

const tableBody = document.getElementById("table-body");
const addTable = document.getElementById("add-table");
let expensesHistory = [];
let expenseDom = ``;

function addExpenseToDom(expense) {
  for (let i = 0; i < expense.length; i++) {
    const expenseToAdd = `
    <tr>
    <th>${expense[i].date}</th>
    <td>${expense[i].description}</td>
    <td>${expense[i].cost}</td>
    <td>- ${expense[i].cost}</td>
    <td><button class="button" onClick="deletingExpense(${expense[i].id})">X</button></td>
</tr>
    `;

    expenseDom += expenseToAdd;
  }

  tableBody.innerHTML = expenseDom;
}

addTable.addEventListener("click", () => {

  
  const tableDate = document.getElementById("date").value;
  const tableDescription = document.getElementById("description").value;
  const tableNumber = document.getElementById("number-add-expense").value;

  addExpense(tableDate, tableDescription, tableNumber, expensesHistory, expenseDom)
//  if (
//     tableDate.trim() === "" ||
//     tableDescription.trim() === "" ||
//     tableNumber.trim() === ""
//   ) {
//     alert("Please add all details.");
//   } else {
//     const expense = {
//       id: idGenerator(),
//       date: tableDate,
//       description: tableDescription,
//       cost: tableNumber,
//     };

//     budgetDelete(tableNumber);

//     expensesHistory.push(expense);
//     expenseDom = "";
//     addExpenseToDom(expensesHistory);
//   }
// });

//deleting expense

function deletingExpense(expenseId) {
  newExpenseArray = expensesHistory.filter(
    (transaction) => transaction.id !== expenseId
  );

  toMinus = expensesHistory.filter(
    (transaction) => transaction.id === expenseId
  );

  budgetAdd(toMinus[0].cost);

  expensesHistory = newExpenseArray;
  expenseDom = "";
  expenseDom(expensesHistory);
};

//adding expense from budger function
function budgetAdd(expenseAdd) {
  budget += Number(expenseAdd);
  balance.innerHTML = `${budget.toFixed(2)} zł`;
}

// deleting to budget function
function budgetDelete(expenseCost) {
  budget -= Number(expenseCost);
  balance.innerHTML = `${budget.toFixed(2)} zł`;
}

module.exports = {idGenerator , setBudgetButton, budgetDelete}; 