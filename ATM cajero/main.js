var cuentas = [
    { nombre: "Mali", saldo: 200 },
    { nombre: "Gera", saldo: 290 },
    { nombre: "Maui", saldo: 67 }
];

var selectedAccount;
var passwordInput = document.getElementById('passwordInput');
var actionsDiv = document.getElementById('actions');
var resultDiv = document.getElementById('result');

function login() {
    var accountSelect = document.getElementById('accountSelect');
    selectedAccount = parseInt(accountSelect.value);

    if (passwordInput.value === '1234') {
        actionsDiv.classList.remove('hidden');
        showMessage('¡Bienvenido, ' + cuentas[selectedAccount].nombre + '!');
    } else {
        showMessage('Contraseña incorrecta. Intenta nuevamente.');
    }
}

function checkBalance() {
    showMessage('Saldo actual: $' + cuentas[selectedAccount].saldo);
}

function deposit() {
    var amount = prompt('Ingrese el monto a ingresar:');
    amount = parseFloat(amount);

    if (!isNaN(amount) && amount > 0) {
        cuentas[selectedAccount].saldo += amount;
        showMessage('Has ingresado $' + amount + '. Nuevo saldo: $' + cuentas[selectedAccount].saldo);
    } else {
        showMessage('Monto inválido. Por favor, ingresa un número positivo.');
    }
}

function withdraw() {
    var amount = prompt('Ingrese el monto a retirar:');
    amount = parseFloat(amount);

    if (!isNaN(amount) && amount > 0) {
        if (cuentas[selectedAccount].saldo - amount >= 10 && cuentas[selectedAccount].saldo - amount <= 990) {
            cuentas[selectedAccount].saldo -= amount;
            showMessage('Has retirado $' + amount + '. Nuevo saldo: $' + cuentas[selectedAccount].saldo);
        } else {
            showMessage('No puedes retirar esa cantidad para mantener el saldo entre $10 y $990.');
        }
    } else {
        showMessage('Monto inválido. Por favor, ingresa un número positivo.');
    }
}

function showMessage(message) {
    resultDiv.innerHTML = message;
    resultDiv.classList.remove('hidden');
    setTimeout(() => {
        resultDiv.innerHTML = '';
        resultDiv.classList.add('hidden');
    }, 3000);
}
function withdraw() {
    let withdrawAmount = parseInt(document.getElementById("withdrawInput").value);

    console.log(`Intento de retiro: ${withdrawAmount}`);

    if (withdrawAmount > 0) {
        if (withdrawAmount <= cuentas[usuario].saldo) {
            cuentas[usuario].saldo -= withdrawAmount;
            alert(`Retiraste $${withdrawAmount}. Nuevo saldo: $${cuentas[usuario].saldo}`);
            updateUI();
        } else {
            alert("Insuficiente saldo.");
        }
    } else {
        alert("Monto no válido. Ingrese un monto positivo.");
    }
}
