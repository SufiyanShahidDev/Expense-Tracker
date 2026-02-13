
// const balanceEl = document.getElementById("balance");
// const incomeAmountEl = document.getElementById("income-amount");
// const expenseAmountEl = document.getElementById("expense-amount");
// const transactionListEl = document.getElementById("transaction-list");
// const transactionFormEl = document.getElementById("transaction-form");
// const descriptionEl = document.getElementById("description");
// const amountEl = document.getElementById("amount");

// let transactions = JSON.parse(localStorage.getItem("transactions")) || [];

// transactionFormEl.addEventListener("submit", (e) => addTransaction(e));

// const addTransaction = (e) => {
//     e.preventDefault();
//     const description = descriptionEl.value.trim();
//     const amount = parseFloat(amountEl.value);

//     transactions.push({ id: Date.now(), description, amount });
//     localStorage.setItem("transactions", JSON.stringify(transactions));
//     updateTransactionList();
//     updateSummary();
//     transactionFormEl.reset();
// };

// const updateTransactionList = () => {
//     transactionListEl.innerHTML = "";
//     for (let i = transactions.length - 1; i >= 0; i--) {
//         transactionListEl.appendChild(createTransactionElement(transactions[i]));
//     }
// };

// const createTransactionElement = (t) => {
//     const li = document.createElement("li");
//     li.classList.add("transaction");
//     li.classList.add(t.amount > 0 ? "income" : "expense");
//     li.innerHTML = `<span>${t.description}</span><span>${formatMoney(t.amount)} <button class='delete-btn' onclick='removeTransaction(${t.id})'>x</button></span>`;
//     return li;
// };

// const updateSummary = () => {
//     let balance = 0, income = 0, expenses = 0;
//     for (let i = 0; i < transactions.length; i++) {
//         const amt = transactions[i].amount;
//         balance += amt;
//         if (amt > 0) income += amt; else expenses += amt;
//     }
//     balanceEl.textContent = formatMoney(balance);
//     incomeAmountEl.textContent = formatMoney(income);
//     expenseAmountEl.textContent = formatMoney(expenses);
// };

// const formatMoney = (num) => {
//     let sign = num < 0 ? "-" : "";
//     num = Math.abs(num);
//     let rupees = Math.floor(num);
//     let paisa = Math.round((num - rupees) * 100);
//     if (paisa < 10) paisa = "0" + paisa;

//     let r = "", count = 0;
//     while (rupees > 0) {
//         if (count === 3) { r = "," + r; count = 0; }
//         r = (rupees % 10) + r;
//         rupees = Math.floor(rupees / 10);
//         count++;
//     }
//     if (r === "") r = "0";
//     return sign + "PKR " + r + "." + paisa;
// };

// const removeTransaction = (id) => {
//     let arr = [];
//     for (let i = 0; i < transactions.length; i++) if (transactions[i].id !== id) arr.push(transactions[i]);
//     transactions = arr;
//     localStorage.setItem("transactions", JSON.stringify(transactions));
//     updateTransactionList();
//     updateSummary();
// };

// updateTransactionList();
// updateSummary();