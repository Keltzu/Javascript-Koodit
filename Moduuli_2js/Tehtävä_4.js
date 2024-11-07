function collectAndSortNumbers() {
  const numbers = [];
  let num;
  
  while (true) {
    num = parseInt(prompt("Enter a number (0 to stop):"));
    if (num === 0) break;
    numbers.push(num);
  }

  numbers.sort((a, b) => b - a);

  console.log("Numbers from largest to smallest:", numbers);
}

collectAndSortNumbers();
