# TypeScript Practice & OOP Concepts

This repository contains TypeScript practice problems, generic functions, array operations, object handling, and Object-Oriented Programming (OOP) concepts.

---

# Topics Covered

- TypeScript Basics
- Functions
- Array Methods
- Type Aliases
- Union Types
- Generics
- Interfaces
- Classes & Objects
- Inheritance
- Polymorphism
- Abstraction
- Encapsulation
- Type Safety

---

# Solved Problems

## 1. Filter Even Numbers

Created a function to filter even numbers from an array.

```ts
function filterEvenNumbers(inputs: number[]): number[] {
  return inputs.filter((input) => input % 2 === 0);
}

```

## 3. Check Input Type

Used Union Types and typeof to check whether the input is a string or number.

```ts
type StringOrNumber = number | string;

```

## 4. Generic Property Access

Used Generics and keyof to safely access object properties.

```ts
function getProperty<T extends object>(obj: T, key: keyof T) {
  return obj[key];
}

```

## 5. Interface & Object Update

Used Interface and object spread operator to update book read status.


## 6. OOP Inheritance Example

Created Person and Student classes using inheritance.

```ts
class Student extends Person
```


## 7. Array Intersection

Found common values between two arrays without duplicates.



## Blog Questions

### Blog 3
How do Generics allow you to build reusable components and functions that stay strictly typed regardless of the data structures passed in?

#### Discussed:

- Reusable code
- Type safety
- Generic classes
- Dynamic typing with Generics
- Flexible functions and classes

### Blog 4
How do the four pillars of OOP help manage logic and reduce complexity in large-scale TypeScript projects?

#### Discussed:

- Inheritance
- Polymorphism
- Abstraction
- Encapsulation

## Technologies Used
- TypeScript
- Node.js

## Author 
#### Mohaimenul Islam


