function collectUniqueNumbers() {
  const numbers = [];
  let num;

  while (true) {
    num = parseInt(prompt("Enter a number:"));


    if (numbers.includes(num)) {
      console.log("Number already given! Stopping...");
      break;
    }

    numbers.push(num);
  }

  numbers.sort((a, b) => a - b);
  console.log("Numbers in ascending order:", numbers);
}

collectUniqueNumbers();
