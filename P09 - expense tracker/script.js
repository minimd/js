let balanceNumber = document.querySelector(".balanceNumber");
let income = document.querySelector("h4.income");
let outcome = document.querySelector("h4.expense");
let boxesSection = document.querySelector(".boxes");
let cardSection = document.querySelector(".history");
let textInput = document.querySelector("input[type='text']");
let amountInput = document.querySelector("input[type='number']");
let btn = document.querySelector("#center");
let cards = document.querySelectorAll(".card");
let expenseNumber = document.querySelectorAll(".expensePrice");

let transactions = [
];
loadTransactions();
function updateBalance() {
  let expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, cardSection) => acc + cardSection.amount, 0);
  outcome.textContent = expenses + "$";
  let incomes = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, curr) => acc + curr.amount, 0);
  income.textContent = incomes + "$";
  let balance = transactions.reduce((acc, curr) => acc + curr.amount, 0);
  balanceNumber.textContent = balance + "$";
}
updateBalance();
function loadCards() {
  cardSection.innerHTML = "<h2>history</h2>";
  transactions.forEach((card) => {
    cardSection.innerHTML += `
         <div class="card ${card.type == "income" ? "green" : "red"} ">
          <p class="expenseName">${card.name}</p>
          <p class="expensePrice">${card.amount}</p>
        </div>
        `;
  });
  //update cards click event listener to delete transaction
  cards = document.querySelectorAll(".card");
  cards.forEach((card, index) => {
    card.addEventListener("click", function () {
      transactions.splice(index, 1);
      updateBalance();
      loadCards();
    });
  });
  saveTransactions();
}
loadCards();
//add transaction
btn.addEventListener("click", function () {
  if (!textInput.value || !amountInput.value) {
    alert("Please fill all fields");
    return;
  }
  let newTransaction = {
    name: textInput.value,

    type: amountInput.value > 0 ? "income" : "expense",
    amount: Number(amountInput.value),
  };
  transactions.push(newTransaction);
  updateBalance();
  loadCards();
  saveTransactions();
});
function saveTransactions() {
  localStorage.setItem("transactions", JSON.stringify(transactions));
}
function loadTransactions() {
  transactions = JSON.parse(localStorage.getItem("transactions"));
}
