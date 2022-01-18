function addExpenseToDom(expenseP, expenseDomP, tableBodyP) {
    for (let i = 0; i < expenseP.length; i++) {
      const expenseToAdd = `
      <tr>
      <th>${expenseP[i].date}</th>
      <td>${expenseP[i].description}</td>
      <td>${expenseP[i].cost}</td>
      <td>- ${expenseP[i].cost}</td>
      <td><button class="button" onClick="deletingExpense(${expenseP[i].id})">X</button></td>
  </tr>
      `;
  console.log(expenseToAdd);
      expenseDomP += expenseToAdd;
      console.log(expenseDomP)
    };
  
    tableBodyP.innerHTML = expenseDomP;
  };
  
// export { addExpenseToDom };
module.exports = { addExpenseToDom };