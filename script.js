// Set budget

let budget = 0;

const balance = document.getElementById("balance")
const setBudgetButton = document.getElementById("budget-set-button");
const resetBudgetButton = document.getElementById("budget-reset-button")

setBudgetButton.addEventListener("click", () => {
    const valueToSet = document.getElementById("number-set-budget").value;
    budget += Number(valueToSet);
    balance.innerHTML = `${budget.toFixed(2)} zł`;
resetBudgetButton.style.display = "block"
    setBudgetButton.value = 'Add budget'
    
})

resetBudgetButton.addEventListener("click", () => {
    budget = 0
    balance.innerHTML = `${budget.toFixed(2)} zł`;
})



// Add expenses
let expensesArray = []


// function addExpense (exData, description, cost, minusBudget) {


const tableBody = document.getElementById("table-body");
const addTable = document.getElementById("add-table");

function idGenerator(){
    return Math.floor(Math.random() * 1000000000);
};


function addExpenseToDom(expense) {

    const expenseToAdd = `
    <tr>
    <th>${expense.date}</th>
    <td>${expense.description}</td>
    <td>${expense.cost}</td>
    <td>- ${expense.cost}</td>
</tr>
    `;
    console.log(expenseToAdd)

    tableBody.appendChild(expenseToAdd);
}

addTable.addEventListener("click", () => {
    const tableDate = document.getElementById("date").value;
    const tableDescription = document.getElementById("description").value;
    const tableNumber = document.getElementById("number-add-expense").value;

    if (tableDate.trim() === "" || tableDescription.trim() === "" || tableNumber.trim() === "" ) {
         alert("Please add all details.")
     } else {
         const expense = {
             id: idGenerator(),
             date: tableDate,
             description: tableDescription,
             cost: tableNumber,
         };

        //  expensesArray.push(expense)
         
        addExpenseToDom(expense)
     }

     


})
