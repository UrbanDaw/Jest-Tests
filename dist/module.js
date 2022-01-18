var $2835eae3a90432eb$exports = {};
var $f8df62307d3d54ba$exports = {};
function $f8df62307d3d54ba$var$settingNewBudget(budgetP, valueInputP, balanceP, resetBudgetButtonP, setBudgetButtonP) {
    valueToSetP = valueInputP.value;
    budgetP += Number(valueToSetP);
    balanceP.innerHTML = `${budgetP.toFixed(2)} zł`;
    resetBudgetButtonP.style.display = "block";
    setBudgetButtonP.value = "Add budget";
}
// export {settingNewBudget}
$f8df62307d3d54ba$exports = {
    settingNewBudget: $f8df62307d3d54ba$var$settingNewBudget
};


function $78a622fd959553ab$export$5db81a3086ff9569(budgetP, balanceP) {
    budgetP = 0;
    balanceP.innerHTML = `${budgetP.toFixed(2)} zł`;
}


// Set budget
let $2835eae3a90432eb$var$budget = 0;
const $2835eae3a90432eb$var$balance = document.getElementById("balance");
const $2835eae3a90432eb$var$setBudgetButton = document.getElementById("budget-set-button");
const $2835eae3a90432eb$var$valueInput = document.getElementById("number-set-budget");
$2835eae3a90432eb$var$setBudgetButton.addEventListener("click", ()=>{
    $f8df62307d3d54ba$exports.settingNewBudget($2835eae3a90432eb$var$budget, $2835eae3a90432eb$var$valueInput, $2835eae3a90432eb$var$balance, $2835eae3a90432eb$var$resetBudgetButton, $2835eae3a90432eb$var$setBudgetButton);
});
// reset budget
const $2835eae3a90432eb$var$resetBudgetButton = document.getElementById("budget-reset-button");
$2835eae3a90432eb$var$resetBudgetButton.addEventListener("click", ()=>{
    $78a622fd959553ab$export$5db81a3086ff9569($2835eae3a90432eb$var$budget, $2835eae3a90432eb$var$balance);
// budget = 0;
// balance.innerHTML = `${budget.toFixed(2)} zł`;
});
// function addExpense (exData, description, cost, minusBudget) {
const $2835eae3a90432eb$var$tableBody = document.getElementById("table-body");
const $2835eae3a90432eb$var$addTable = document.getElementById("add-table");
let $2835eae3a90432eb$var$expensesHistory = [];
let $2835eae3a90432eb$var$expenseDom = ``;
function $2835eae3a90432eb$var$idGenerator() {
    return Math.floor(Math.random() * 1000000000);
}
function $2835eae3a90432eb$var$addExpenseToDom(expense) {
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
        $2835eae3a90432eb$var$expenseDom += expenseToAdd;
    }
    $2835eae3a90432eb$var$tableBody.innerHTML = $2835eae3a90432eb$var$expenseDom;
}
$2835eae3a90432eb$var$addTable.addEventListener("click", ()=>{
    const tableDate = document.getElementById("date").value;
    const tableDescription = document.getElementById("description").value;
    const tableNumber = document.getElementById("number-add-expense").value;
    if (tableDate.trim() === "" || tableDescription.trim() === "" || tableNumber.trim() === "") alert("Please add all details.");
    else {
        const expense = {
            id: $2835eae3a90432eb$var$idGenerator(),
            date: tableDate,
            description: tableDescription,
            cost: tableNumber
        };
        $2835eae3a90432eb$var$budgetDelete(tableNumber);
        $2835eae3a90432eb$var$expensesHistory.push(expense);
        $2835eae3a90432eb$var$expenseDom = "";
        $2835eae3a90432eb$var$addExpenseToDom($2835eae3a90432eb$var$expensesHistory);
    }
});
//deleting expense
function $2835eae3a90432eb$var$deletingExpense(expenseId) {
    newExpenseArray = $2835eae3a90432eb$var$expensesHistory.filter((transaction)=>transaction.id !== expenseId
    );
    toMinus = $2835eae3a90432eb$var$expensesHistory.filter((transaction)=>transaction.id === expenseId
    );
    $2835eae3a90432eb$var$budgetAdd(toMinus[0].cost);
    $2835eae3a90432eb$var$expensesHistory = newExpenseArray;
    $2835eae3a90432eb$var$expenseDom = "";
    $2835eae3a90432eb$var$expenseDom($2835eae3a90432eb$var$expensesHistory);
}
//adding expense from budger function
function $2835eae3a90432eb$var$budgetAdd(expenseAdd) {
    $2835eae3a90432eb$var$budget += Number(expenseAdd);
    $2835eae3a90432eb$var$balance.innerHTML = `${$2835eae3a90432eb$var$budget.toFixed(2)} zł`;
}
// deleting to budget function
function $2835eae3a90432eb$var$budgetDelete(expenseCost) {
    $2835eae3a90432eb$var$budget -= Number(expenseCost);
    $2835eae3a90432eb$var$balance.innerHTML = `${$2835eae3a90432eb$var$budget.toFixed(2)} zł`;
}
$2835eae3a90432eb$exports = {
    idGenerator: $2835eae3a90432eb$var$idGenerator,
    setBudgetButton: $2835eae3a90432eb$var$setBudgetButton
};


export {$2835eae3a90432eb$exports as default};
//# sourceMappingURL=module.js.map
