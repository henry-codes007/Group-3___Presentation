let displayElement = document.getElementById("display");
let currentInput = "";

function appendNumber(number) {
    if (currentInput === "0" && number !== ".") {
        currentInput = number;
    } else {
        currentInput += number;
    }
    displayElement.innerText = currentInput;
}

function appendOperator(operator) {
    if (currentInput === "") return;
    currentInput += operator;
    displayElement.innerText = currentInput;
}

function clearDisplay() {
    currentInput = "";
    displayElement.innerText = "0";
}

function deleteDigit() {
    currentInput = currentInput.slice(0, -1);
    displayElement.innerText = currentInput || "0";
}

function calculateResult() {
    try {
        currentInput = eval(currentInput).toString();
        displayElement.innerText = currentInput;
    } catch {
        displayElement.innerText = "Error";
    }
}