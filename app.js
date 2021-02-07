const form = document.getElementById("transaccionFormulario");

form.addEventListener("submit", function (event) {
  event.preventDefault(); // Detiene el envio del evento que hace que no se recargue la pagina
  let transactionFormData = new FormData(form); // Obtiene los datos del formulario
  let transactionObject = convertFormDataToTransactionObject(
    transactionFormData
  );
  saveTransactionObject(transactionObject);
  insertRowTransactionTable(transactionObject);
  form.reset();
});

document.addEventListener("DOMContentLoaded", function (event) {
  let transactionObjectArray = JSON.parse(
    localStorage.getItem("transactionData")
  );
  transactionObjectArray.forEach((transactionElement) => {
    insertRowTransactionTable(transactionElement);
    console.log("Se inserta un elemento");
  });
});

function convertFormDataToTransactionObject(transactionFormData) {
  let transactionType = transactionFormData.get("transaccionType");
  let transactionDescription = transactionFormData.get(
    "transaccionDescription"
  ); // Toma el name del html y lo guarda en la tabla
  let transactionAmonut = transactionFormData.get("transaccionAmount");
  let transactionCategory = transactionFormData.get("transaccionCategory");
  return {
    transaccionType: transactionType,
    transaccionDescription: transactionDescription,
    transaccionAmount: transactionAmonut,
    transaccionCategory: transactionCategory,
  };
}

function insertRowTransactionTable(transactionObject) {
  let tabla = document.getElementById("transaccionTable"); // Obtiene los datos de la tabla, una referencia
  let newTransactionRow = tabla.insertRow(-1); // A esta tabla le agrega una nueva fila

  let newTypeCell = newTransactionRow.insertCell(0); // y esta nueva fila le agrega una nueva celda en la posicion 0
  newTypeCell.textContent = transactionObject["transaccionType"];

  newTypeCell = newTransactionRow.insertCell(1);
  newTypeCell.textContent = transactionObject["transaccionDescription"]; // Toma el name del html y lo guarda en la tabla

  newTypeCell = newTransactionRow.insertCell(2);
  newTypeCell.textContent = transactionObject["transaccionAmount"];

  newTypeCell = newTransactionRow.insertCell(3);
  newTypeCell.textContent = transactionObject["transaccionCategory"];
}

function saveTransactionObject(transactionObject) {
  let myTransactionArray =
    JSON.parse(localStorage.getItem("transactionData")) || [];
  myTransactionArray.push(transactionObject);
  // Convierto mi array de transacciones a json
  let transactionArrayJson = JSON.stringify(myTransactionArray);
  // guardo mi array de transaccion en formato Json en el local storage
  localStorage.setItem("transactionData", transactionArrayJson);
}
