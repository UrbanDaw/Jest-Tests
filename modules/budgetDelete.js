function budgetDelete(expenseCost) {
  let budget = JSON.parse(window.localStorage.getItem("budget"));
  budget -= Number(expenseCost);
  window.localStorage.setItem("budget", JSON.stringify(budget));
  balance.innerHTML = `${budget.toFixed(2)} zł`;
}

export { budgetDelete };
// module.export = { budgetDelete };
