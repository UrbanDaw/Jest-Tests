const { idGenerator } = require("./idGenerator");

function addExpense(tableDateP, tableDescriptionP, tableNumberP) {
  if (
    tableDateP.trim() === "" ||
    tableDescriptionP.trim() === "" ||
    tableNumberP.trim() === ""
  ) {
    throw Error("Please add all details.");
  } else {
    let expenseArrayNew =
      JSON.parse(window.localStorage.getItem("expenses")) || [];
    const expense = {
      id: idGenerator(),
      date: tableDateP,
      description: tableDescriptionP,
      cost: tableNumberP,
    };

    expenseArrayNew.push(expense);
    window.localStorage.setItem("expenses", JSON.stringify(expenseArrayNew));
  }
}

// export { addExpense };
module.exports = { addExpense };
