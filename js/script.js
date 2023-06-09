const calculateExpense = () => {
  const income = parseInt(document.querySelector("#income").value);
  const food = Number(document.querySelector("#food").value);
  const rent = Number(document.querySelector("#rent").value);
  const clothes = Number(document.querySelector("#clothes").value);
  // console.log(income, food, rent, clothes);

  if (
    income < 0 ||
    income == "" ||
    food < 0 ||
    food == "" ||
    rent < 0 ||
    rent == "" ||
    clothes < 0 ||
    clothes == ""
  ) {
    alert("Inputs must be positive numbers");
    return;
  }
  // calculate expense
  const expense = food + rent + clothes;
// console.log(expense)
  // calculate balance
  const balance = income - expense;
  //   validate income
  if (expense > income) {
    alert("Expenses cannot be more than income");
  } else {
    // view total expense and balance
    document.getElementById("total-expense").innerText = expense;
    document.getElementById("balance").innerText = balance;
  }
};

const calculateSavings = () => {
  // calculate saving amount
  const savePercentage = Number(document.getElementById("save").value);
  // console.log(savePercentage)
//   Validate saving percentage value
  if (savePercentage < 0) {
    alert("Provide positive saving value");
  }
  // console.log(Number(income.value), (savePercentage / 100))
  const savingAmount = ((savePercentage / 100) * Number(income.value)).toFixed(2);

  // calculate remaining balance
  const balance = Number(document.getElementById("balance").innerText);
  const remainingBalance = balance - savingAmount;
// console.log(savingAmount, remainingBalance)
  //   validate saving amount
  if (savingAmount > balance) {
    alert("SavingAmount is greater than balance");
  } else {
    // view saving amount and remaining balance
    document.getElementById("saving-amount").innerText = savingAmount;
    document.getElementById("remaining-balance").innerText = remainingBalance;
  }
};
