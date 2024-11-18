
const calculationInput = document.getElementById("calculation");
const calculateButton = document.getElementById("calculate");
const resultParagraph = document.getElementById("result");


calculateButton.addEventListener("click", () => {

    const input = calculationInput.value.trim();
    let result;


    if (input.includes("+")) {

        const numbers = input.split("+");
        const num1 = parseInt(numbers[0], 10);
        const num2 = parseInt(numbers[1], 10);
        result = num1 + num2;
    } else if (input.includes("-")) {
        const numbers = input.split("-");
        const num1 = parseInt(numbers[0], 10);
        const num2 = parseInt(numbers[1], 10);
        result = num1 - num2;
    } else if (input.includes("*")) {
        const numbers = input.split("*");
        const num1 = parseInt(numbers[0], 10);
        const num2 = parseInt(numbers[1], 10);
        result = num1 * num2;
    } else if (input.includes("/")) {
        const numbers = input.split("/");
        const num1 = parseInt(numbers[0], 10);
        const num2 = parseInt(numbers[1], 10);
        if (num2 === 0) {
            result = "Error: Division by zero!";
        } else {
            result = Math.floor(num1 / num2); // Use integer division
        }
    } else {
        result = "Invalid operation. Please use +, -, *, or /.";
    }


    resultParagraph.textContent = `Result: ${result}`;
});
