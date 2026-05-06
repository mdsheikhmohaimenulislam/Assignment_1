// Problem 1:
function filterEvenNumbers(inputs: number[]): number[] {
  return inputs.filter((input) => input % 2 === 0);
}

const result1 = filterEvenNumbers([1, 2, 3, 4, 5, 6]);
// console.log(result1);

// Problem 2:
function reverseString(input: string): string {
  return input.split("").reverse().join("");
}

const result2 = reverseString("typescript");
// console.log(result2);

// Problem 3:
