
    // const tableDate = document.getElementById("date").value;
    // const tableDescription = document.getElementById("description").value;
    // const tableNumber = document.getElementById("number-add-expense").value;
    const { idGenerator } = require("./idGenerator");
    
  
    function addExpense(tableDateP, tableDescriptionP, tableNumberP, expensesHistoryP, expenseDomP) {
    if (
        
      tableDateP.trim() === "" ||
      tableDescriptionP.trim() === "" ||
      tableNumberP.trim() === ""
    ) {
      throw "Please add all details.";
    } else {
      const expense = {
        id: idGenerator(),
        date: tableDateP,
        description: tableDescriptionP,
        cost: tableNumberP,
      };
  
      budgetDelete(tableNumber);
  
      expensesHistoryP.push(expense);
      expenseDomP = "";
      addExpenseToDom(expensesHistory);
    }
  };

//   export { addExpense };
  module.exports = { addExpense };