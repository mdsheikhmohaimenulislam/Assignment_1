
## What are generics and do generics produce type-safe code?


## Generics ছাড়া সমস্যা

এখানে সমস্যা হচ্ছে দুইটা function  ও logic  একই কাজ করে। শুধু class 
type আলাদা।  এজন্য ভিন্ন ভিন্ন  type  এর জন্য  ভিন্ন ভিন্ন function  লিখতে হয়। 
এজন্য clean and professional  ভাবে code লেখা যায় না।  এজন্য এটাকে বলে code  duplication.

```javascript
function getString(input: string): string {
return input;
}

function getNumber(input: number): number {
return input;
}

```

#### Now watch:
- ` getString() ` → Just ` string ` For this.
- ` getNumber() ` → Just ` number ` For this.
####  But the logic is the same for both:
#### 1.  Takes parameters.
#### 2.  Returns that value.
#### 3.  Only the type has changed.
তাই নতুন type আসলে আবার নতুন function লিখতে হয়।

#### For example:

```javascript
function getBoolean(input: boolean): boolean {
  return input;
}
```
#### এখানে:
#### 1. এখানে code  বরাবর লিখতে হয়।
#### 2.  Code Clean থাকে না। 
#### 3.  code  বড় হয়ে যায়।
#### 4. maintain  করা কঠিন হয়।
## Generics ব্যবহারের সুবিধা :

`Generics` এমন একটি  ` feature ` যা একই `function` বা `class` কে বিভিন্ন `type` এর সাথে কাজ করতে দেয়, কিন্তু `type safety` বজায় রাখে। and `code duplication Reduce` করার সমাধানের  জন্য ` Generics `ব্যবহার করা হয়। 


### example : 
```javascript
function getInput<T>(input: T): T {
  return input;
}

```
এখন একই `function` বা `class` কে বিভিন্ন টাইপের সাথে কাজ করতে দেয় কিন্তু `type safety` বজায় রেখে।

####  যেমন:
- `getInput`<string>("Hello");
- `getInput`<number>(100);

### Generics এর সুবিধা
#### 1. Reusable code.
#### 2. Strong type safety.
#### 3. Duplicate code কমে.
#### 4. scalable architecture তৈরি হয়.

## Generic Constraint

  আমরা চাইলেই generics এর উপর role  / restriction  দিতে পারি।

```javascript
function getLength<T extends { length: number }>(item: T) {
 return item.length;
}
 ```
 এখানে শুধুমাত্র `length property `আছে এমন value ব্যবহার করা যাবে।

#### উপসংহার:
Generics TypeScript এ flexible এবং reusable code তৈরি করতে সাহায্য করে, আবার type safety ও বজায় রাখে।
