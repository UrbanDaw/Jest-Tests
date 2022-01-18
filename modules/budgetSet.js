function settingNewBudget(
  budgetP,
  valueInputP,
  balanceP,
  resetBudgetButtonP,
  setBudgetButtonP
) {
  valueToSetP = valueInputP.value;
  budgetP += Number(valueToSetP);
  balanceP.innerHTML = `${budgetP.toFixed(2)} zł`;
  resetBudgetButtonP.style.display = "block";
  setBudgetButtonP.value = "Add budget";
}

// export {settingNewBudget}
module.exports = { settingNewBudget };
