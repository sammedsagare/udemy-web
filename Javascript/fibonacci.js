function fibonacciGenerator(n) {
  // Do NOT change any of the code above 👆

  // Check if n is less than or equal to 0, return an empty array
  if (n <= 0) {
    return [];
  } else if (n === 1) {
    // Special case for n=1, return [0]
    return [0];
  } else {
    // Initialize the Fibonacci sequence with the first two numbers (0 and 1)
    var fibonacciSeq = [0, 1];

    // Use a for loop to generate the Fibonacci sequence
    for (var i = 2; i < n; i++) {
      // Calculate the next Fibonacci number by adding the last two numbers
      var nextFibonacci = fibonacciSeq[i - 1] + fibonacciSeq[i - 2];
      fibonacciSeq.push(nextFibonacci);
    }

    // Return the generated Fibonacci sequence as an array
    return fibonacciSeq;
  }

  // Do NOT change any of the code below 👇
}
