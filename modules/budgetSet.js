function settingNewBudget(
  valueInputP,
  balanceP,
  resetBudgetButtonP,
  setBudgetButtonP
) {
  let budgetP = JSON.parse(window.localStorage.getItem("budget"));
  console.log(budgetP);
  budgetP += Number(valueInputP);
  window.localStorage.setItem("budget", budgetP);
  balanceP.innerHTML = `${budgetP.toFixed(2)} zł`;
  resetBudgetButtonP.style.display = "block";
  setBudgetButtonP.value = "Add budget";
}

// export { settingNewBudget };
module.exports = { settingNewBudget };
