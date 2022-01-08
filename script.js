// Set budget

let budget = 0;

const balance = document.getElementById("balance");
const setBudgetButton = document.getElementById("budget-set-button");
const resetBudgetButton = document.getElementById("budget-reset-button");

setBudgetButton.addEventListener("click", () => {
  const valueToSet = document.getElementById("number-set-budget").value;
  budget += Number(valueToSet);
  balance.innerHTML = `${budget.toFixed(2)} zł`;
  resetBudgetButton.style.display = "block";
  setBudgetButton.value = "Add budget";
});

resetBudgetButton.addEventListener("click", () => {
  budget = 0;
  balance.innerHTML = `${budget.toFixed(2)} zł`;
});

// function addExpense (exData, description, cost, minusBudget) {

const tableBody = document.getElementById("table-body");
const addTable = document.getElementById("add-table");
let expensesHistory = [];
let expenseArray = ``;

function idGenerator() {
  return Math.floor(Math.random() * 1000000000);
}

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

    expenseArray += expenseToAdd;
  }

  tableBody.innerHTML = expenseArray;
}

addTable.addEventListener("click", () => {
  const tableDate = document.getElementById("date").value;
  const tableDescription = document.getElementById("description").value;
  const tableNumber = document.getElementById("number-add-expense").value;

  if (
    tableDate.trim() === "" ||
    tableDescription.trim() === "" ||
    tableNumber.trim() === ""
  ) {
    alert("Please add all details.");
  } else {
    const expense = {
      id: idGenerator(),
      date: tableDate,
      description: tableDescription,
      cost: tableNumber,
    };

    budgetDelete(tableNumber);

    expensesHistory.push(expense);
    expenseArray = "";
    addExpenseToDom(expensesHistory);
  }
});

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
  expenseArray = "";
  addExpenseToDom(expensesHistory);
}

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
