function resetBudget(budgetP, balanceP) {
  budgetP = 0;
  balanceP.innerHTML = `${budgetP.toFixed(2)} zł`;
}

// export { resetBudget };
module.exports = { resetBudget };