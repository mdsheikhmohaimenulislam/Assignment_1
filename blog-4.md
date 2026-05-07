
## OOP কীভাবে Large Project Manage করতে সাহায্য করে?

`Object-Oriented Programming (OOP)` বড় `project` কে `organized`, `reusable` এবং `maintainable` করতে সাহায্য করে। যখন `project` বড় হতে থাকে, তখন `code manage` করা কঠিন হয়ে যায়। `OOP` এর চারটি `pillar—Inheritance`, `Polymorphism`, `Abstraction` এবং `Encapsulation—এই` `complexity` কমাতে গুরুত্বপূর্ণ ভূমিকা পালন করে।

## Inheritance

Inheritance এর মাধ্যমে একটি class অন্য class এর property এবং method ব্যবহার করতে পারে। এতে একই code বারবার লিখতে হয় না।

### Example:
```javascript
class Person {
  name: string;

  constructor(name: string) {
    this.name = name;
  }

  introduce() {
    console.log(`Hi, I am ${this.name}`);
  }
}

class Student extends Person {
  grade: string;

  constructor(name: string, grade: string) {
    super(name);
    this.grade = grade;
  }
}
```
এখানে `Student class`, `Person class` এর সব `property` এবং `method` ব্যবহার করতে পারছে।

#### কেন দরকার?:
যদি inheritance না থাকত, তাহলে প্রতিটি class এ আলাদা করে name, introduce() ইত্যাদি লিখতে হতো।
#### Inheritance ব্যবহার করলে:
- ` duplicate code কমে`.
- `reusable structure পাওয়া যায়`.
- `maintain করা সহজ হয়`.


## Polymorphism

Polymorphism মানে একই method different class এ different behavior দেখাতে পারে।

### Example:
```javascript
class Animal {
  sound() {
    console.log("Animal sound");
  }
}

class Dog extends Animal {
  sound() {
    console.log("Bark");
  }
}

class Cat extends Animal {
  sound() {
    console.log("Meow");
  }
}
```
এখানে `sound()` `method` সব `class` এ আছে, কিন্তু `behavior` আলাদা।

#### কেন দরকার?:
বড় project এ একই ধরনের operation বিভিন্ন object এর জন্য আলাদা behavior দিতে হয়।
#### যেমন:
- ` Payment system`.
- `Notification system`.
- `Authentication provider`.

সবাই একই `method use` করতে পারে, কিন্তু `internally` কাজ আলাদা হবে।


## Abstraction

Abstraction implementation detail hide করে শুধুমাত্র প্রয়োজনীয় অংশ user কে দেখায়।

### Example:
```javascript
abstract class Vehicle {
  abstract start(): void;

  stop() {
    console.log("Vehicle stopped");
  }
}

class Car extends Vehicle {
  start() {
    console.log("Car started");
  }
}
```
এখানে `user` শুধু `start() method` ব্যবহার করবে।

#### কেন দরকার?:
বড় project এ সব detail সবাইকে দেখালে complexity বেড়ে যায়।
#### যেমন:
- ` unnecessary detail hide করে`.
- `clean API তৈরি করে`.
- `developer confusion কমায়`.



## Encapsulation

`Encapsulation data` কে `protect` করে এবং `direct access` বন্ধ করে।

### Example:
```javascript
class BankAccount {
  private balance = 1000;

  deposit(amount: number) {
    this.balance += amount;
  }

  getBalance() {
    return this.balance;
  }
}
```
এখানে `balance private` হওয়ায় বাইরে থেকে `modify` করা যাবে না।

#### কেন দরকার?:
যদি সব data public থাকে:
- ` accidental modification হতে পারে`.
- `security issue হতে পারে`.
- `debugging কঠিন হয়`.
#### Encapsulation:
- ` data নিরাপদ রাখে`.
- `controlled access দেয়`.
- `application stable রাখে`.

### উপসংহার

`OOP` এর চারটি `pillar—Inheritance`, `Polymorphism`, `Abstraction` এবং `Encapsulation`—বড় `TypeScript` `project` কে `clean, scalable `এবং `maintainable` করতে সাহায্য করে। এগুলো ব্যবহার করলে `code duplication` কমে, `security` বাড়ে এবং `project structure` আরও `organized` হয়।