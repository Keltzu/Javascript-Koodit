
const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const operationSelect = document.getElementById("operation");
const calculateButton = document.getElementById("calculate");
const resultParagraph = document.getElementById("result");


calculateButton.addEventListener("click", () => {

    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);
    const operation = operationSelect.value;
    let result;


    switch (operation) {
        case "add":
            result = num1 + num2;
            break;
        case "subtract":
            result = num1 - num2;
            break;
        case "multiply":
            result = num1 * num2;
            break;
        case "divide":
            if (num2 !== 0) {
                result = num1 / num2;
            } else {
                result = "Error: Division by zero!";
            }
            break;
        default:
            result = "Invalid operation.";
    }


    resultParagraph.textContent = `Result: ${result}`;
});
