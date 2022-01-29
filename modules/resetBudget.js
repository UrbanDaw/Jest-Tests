function resetBudget(balanceP) {
  window.localStorage.setItem("budget", 0);
  balanceP.innerHTML = `0.00 zł`;
}

export { resetBudget };
// module.exports = { resetBudget };
