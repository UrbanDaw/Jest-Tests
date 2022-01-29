const { deletingExpense } = require("./deletingExpense");

function addExpenseToDom(tableBodyP) {
  tableBodyP.innerHTML = "";
  const expenseP = JSON.parse(window.localStorage.getItem("expenses"));
  for (let i = 0; i < expenseP.length; i++) {
    const tableRow = document.createElement("tr");
    const th = document.createElement("th");
    const expenseDate = expenseP[i].date;

    th.textContent = expenseDate;

    const firstTd = document.createElement("td");
    const expenseDescription = expenseP[i].description;

    firstTd.textContent = expenseDescription;

    const secondTd = document.createElement("td");
    const expenseCost = expenseP[i].cost;

    secondTd.textContent = expenseCost;

    thirdTd = document.createElement("td");

    thirdTd.textContent = `- ${expenseCost}`;

    fourthTd = document.createElement("td");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "X";
    deleteButton.classList.add("button");
    deleteButton.addEventListener("click", () => {
      deletingExpense(expenseP[i].id);
    });

    fourthTd.appendChild(deleteButton);

    tableRow.appendChild(th);
    tableRow.appendChild(firstTd);
    tableRow.appendChild(secondTd);
    tableRow.appendChild(thirdTd);
    tableRow.appendChild(fourthTd);

    tableBodyP.appendChild(tableRow);
  }
}
export { addExpenseToDom };
// module.exports = { addExpenseToDom };
