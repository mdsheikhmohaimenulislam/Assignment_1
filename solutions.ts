function filterEvenNumbers(inputs: number[]): number[] {
  return inputs.filter((input) => input % 2 === 0);
}
filterEvenNumbers([1, 2, 3, 4, 5, 6]);

function reverseString(input: string): string {
  return input.split("").reverse().join("");
}
reverseString("typescript");

type StringOrNumber = number | string;

function checkType(input: StringOrNumber) {
  if (typeof input === "number") {
    return "Number";
  } else {
    return "String";
  }
}
checkType("Hello");

function getProperty<T extends object>(obj: T, key: keyof T) {
  return obj[key];
}
const user = { id: 1, name: "John Doe", age: 21 };
getProperty(user, "name");

interface Book {
  title: string;
  author: string;
  publishedYear: number;
}

function toggleReadStatus(input: Book) {
  return {
    ...input,
    isRead: true,
  };
}

const myBook = {
  title: "TypeScript Guide",
  author: "Jane Doe",
  publishedYear: 2024,
};
toggleReadStatus(myBook);

class Person {
  name: string;
  age: number;

  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
}
class Student extends Person {
  grade: string;

  constructor(name: string, age: number, grade: string) {
    super(name, age);
    this.grade = grade;
  }

  getDetails() {
    return `Name: ${this.name}, Age: ${this.age}, Grade: ${this.grade}`;
  }
}
const student = new Student("Alice", 20, "A");
student.getDetails();

function getIntersection(num1: number[], num2: number[]) {
  const result: number[] = [];

  for (let i = 0; i < num1.length; i++) {
    const singleNum1 = num1[i];

    if (num2.includes(singleNum1) && !result.includes(singleNum1)) {
      result.push(singleNum1);
    }
  }

  return result;
}
getIntersection([1, 2, 3, 4, 5], [3, 4, 5, 6, 7]);
