var $690784d91ecace5d$exports = {};
function $690784d91ecace5d$var$settingNewBudget(budgetP, valueInputP, balanceP, resetBudgetButtonP, setBudgetButtonP) {
    valueToSetP = valueInputP.value;
    budgetP += Number(valueToSetP);
    balanceP.innerHTML = `${budgetP.toFixed(2)} zł`;
    resetBudgetButtonP.style.display = "block";
    setBudgetButtonP.value = "Add budget";
}
// export {settingNewBudget}
$690784d91ecace5d$exports = {
    settingNewBudget: $690784d91ecace5d$var$settingNewBudget
};


function $acc6156959f7d92e$export$5db81a3086ff9569(budgetP, balanceP) {
    budgetP = 0;
    balanceP.innerHTML = `${budgetP.toFixed(2)} zł`;
}


// Set budget
let $562e15c567a560c5$var$budget = 0;
const $562e15c567a560c5$var$balance = document.getElementById("balance");
const $562e15c567a560c5$var$setBudgetButton = document.getElementById("budget-set-button");
const $562e15c567a560c5$var$valueInput = document.getElementById("number-set-budget");
$562e15c567a560c5$var$setBudgetButton.addEventListener("click", ()=>{
    $690784d91ecace5d$exports.settingNewBudget($562e15c567a560c5$var$budget, $562e15c567a560c5$var$valueInput, $562e15c567a560c5$var$balance, $562e15c567a560c5$var$resetBudgetButton, $562e15c567a560c5$var$setBudgetButton);
});
// reset budget
const $562e15c567a560c5$var$resetBudgetButton = document.getElementById("budget-reset-button");
$562e15c567a560c5$var$resetBudgetButton.addEventListener("click", ()=>{
    $acc6156959f7d92e$export$5db81a3086ff9569($562e15c567a560c5$var$budget, $562e15c567a560c5$var$balance);
// budget = 0;
// balance.innerHTML = `${budget.toFixed(2)} zł`;
});
// function addExpense (exData, description, cost, minusBudget) {
const $562e15c567a560c5$var$tableBody = document.getElementById("table-body");
const $562e15c567a560c5$var$addTable = document.getElementById("add-table");
let $562e15c567a560c5$var$expensesHistory = [];
let $562e15c567a560c5$var$expenseDom = ``;
function $562e15c567a560c5$var$idGenerator() {
    return Math.floor(Math.random() * 1000000000);
}
function $562e15c567a560c5$var$addExpenseToDom(expense) {
    for(let i = 0; i < expense.length; i++){
        const expenseToAdd = `
    <tr>
    <th>${expense[i].date}</th>
    <td>${expense[i].description}</td>
    <td>${expense[i].cost}</td>
    <td>- ${expense[i].cost}</td>
    <td><button class="button" onClick="deletingExpense(${expense[i].id})">X</button></td>
</tr>
    `;
        $562e15c567a560c5$var$expenseDom += expenseToAdd;
    }
    $562e15c567a560c5$var$tableBody.innerHTML = $562e15c567a560c5$var$expenseDom;
}
$562e15c567a560c5$var$addTable.addEventListener("click", ()=>{
    const tableDate = document.getElementById("date").value;
    const tableDescription = document.getElementById("description").value;
    const tableNumber = document.getElementById("number-add-expense").value;
    if (tableDate.trim() === "" || tableDescription.trim() === "" || tableNumber.trim() === "") alert("Please add all details.");
    else {
        const expense = {
            id: $562e15c567a560c5$var$idGenerator(),
            date: tableDate,
            description: tableDescription,
            cost: tableNumber
        };
        $562e15c567a560c5$var$budgetDelete(tableNumber);
        $562e15c567a560c5$var$expensesHistory.push(expense);
        $562e15c567a560c5$var$expenseDom = "";
        $562e15c567a560c5$var$addExpenseToDom($562e15c567a560c5$var$expensesHistory);
    }
});
//deleting expense
function $562e15c567a560c5$var$deletingExpense(expenseId) {
    newExpenseArray = $562e15c567a560c5$var$expensesHistory.filter((transaction)=>transaction.id !== expenseId
    );
    toMinus = $562e15c567a560c5$var$expensesHistory.filter((transaction)=>transaction.id === expenseId
    );
    $562e15c567a560c5$var$budgetAdd(toMinus[0].cost);
    $562e15c567a560c5$var$expensesHistory = newExpenseArray;
    $562e15c567a560c5$var$expenseDom = "";
    $562e15c567a560c5$var$expenseDom($562e15c567a560c5$var$expensesHistory);
}
//adding expense from budger function
function $562e15c567a560c5$var$budgetAdd(expenseAdd) {
    $562e15c567a560c5$var$budget += Number(expenseAdd);
    $562e15c567a560c5$var$balance.innerHTML = `${$562e15c567a560c5$var$budget.toFixed(2)} zł`;
}
// deleting to budget function
function $562e15c567a560c5$var$budgetDelete(expenseCost) {
    $562e15c567a560c5$var$budget -= Number(expenseCost);
    $562e15c567a560c5$var$balance.innerHTML = `${$562e15c567a560c5$var$budget.toFixed(2)} zł`;
}
module.exports = {
    idGenerator: $562e15c567a560c5$var$idGenerator,
    setBudgetButton: $562e15c567a560c5$var$setBudgetButton
};


//# sourceMappingURL=main.js.map
