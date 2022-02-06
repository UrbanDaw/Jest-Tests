function budgetAdd(expenseAdd) {
  let budget = JSON.parse(window.localStorage.getItem("budget"));
  budget += Number(expenseAdd);
  window.localStorage.setItem("budget", JSON.stringify(budget));
  // balance.innerHTML = `${budget.toFixed(2)} zł`;
};

// export { budgetAdd };
module.exports = { budgetAdd };
