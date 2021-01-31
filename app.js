const form = document.getElementById("transaccionFormulario");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Detiene el envio del evento que hace que no se recargue la pagina
  let transactionFormData = new FormData(form); // Obtiene los datos del formulario
});

function insertRowTransactionTable(
  transaccionType,
  transaccionDescription,
  transaccionAmount,
  transaccionCategory
) {
  let tabla = document.getElementById("transaccionTable"); // Obtiene los datos de la tabla, una referencia
  let newTransactionRow = tabla.insertRow(-1); // A esta tabla le agrega una nueva fila

  let newTypeCell = newTransactionRow.insertCell(0); // y esta nueva fila le agrega una nueva celda en la posicion 0
  newTypeCell.textContent = transactionFormData.get("transaccionType");

  newTypeCell = newTransactionRow.insertCell(1);
  newTypeCell.textContent = transactionFormData.get("transaccionDescription"); // Toma el name del html y lo guarda en la tabla

  newTypeCell = newTransactionRow.insertCell(2);
  newTypeCell.textContent = transactionFormData.get("transaccionAmount");

  newTypeCell = newTransactionRow.insertCell(3);
  newTypeCell.textContent = transactionFormData.get("transaccionCategory");
}
