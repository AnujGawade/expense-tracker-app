let expenseForm = document.getElementById("expenseForm");
let expenseList = document.getElementById("expenseList");

expenseForm.addEventListener("submit", function (event) {
  event.preventDefault();
  let description = document.getElementById("description").value;
  let category = document.getElementById("category").value;
  let amount = document.getElementById("amount").value;

  if (document && category && !isNaN(amount)) {
    let newRow = document.createElement("tr");
    newRow.innerHTML = `<td>${description}</td>
    <td>${category}</td>
    <td>₹ ${amount}</td>`;

    expenseList.appendChild(newRow);
  }
  expenseForm.reset();
});
