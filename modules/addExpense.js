const { idGenerator } = require("./idGenerator");

function addExpense(tableDateP, tableDescriptionP, tableNumberP) {
  if (
    tableDateP.trim() === "" ||
    tableDescriptionP.trim() === "" ||
    tableNumberP.trim() === ""
  ) {
    throw Error("Please add all details.");
  } else if (window.localStorage.getItem("expenses") === null) {
    let expenseArrayNew = [];
    const expense = {
      id: idGenerator(),
      date: tableDateP,
      description: tableDescriptionP,
      cost: tableNumberP,
    };
    expenseArrayNew.push(expense);
    window.localStorage.setItem("expenses", JSON.stringify(expenseArrayNew));
  } else {
    const expense = {
      id: idGenerator(),
      date: tableDateP,
      description: tableDescriptionP,
      cost: tableNumberP,
    };
    let expenseArray = JSON.parse(window.localStorage.getItem("expenses"));
    expenseArray.push(expense);
    window.localStorage.setItem("expenses", JSON.stringify(expenseArray));
  }
}

export { addExpense };
// module.exports = { addExpense };
