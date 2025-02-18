# JavaScript Objects, Properties, and Methods

I have recently completed a tutorial on **JavaScript objects, object properties, and object methods**. This README documents my learning journey and key concepts.

---

## 📚 JavaScript Objects

Objects in JavaScript are collections of properties and methods. They allow us to store, manipulate, and retrieve data efficiently.

### 🛠️ Creating Objects:

- **Using Object Literals**
- **Using the `new` Keyword**
- **Using Constructors**

---

## 🏷️ Object Properties

Properties are values associated with an object. They can be accessed using **dot notation** or **bracket notation**.

```js
const person = { firstName: "John", lastName: "Doe", age: 50 };
console.log(person.firstName); // Output: John
```

---

## ⚡ Object Methods

Methods are functions stored as object properties.

```js
const person = {
  firstName: "John",
  lastName: "Doe",
  fullName: function () {
    return this.firstName + " " + this.lastName;
  },
};
console.log(person.fullName()); // Output: John Doe
```

---

## 🎯 What I Learned

- Creating objects using different methods
- Accessing and modifying object properties
- Defining and calling object methods

---

## 🚀 Next Steps

I plan to continue enhancing my JavaScript skills by exploring:

- 🔹 Object prototypes
- 🔹 ES6 Classes
- 🔹 Working with JSON and APIs

---

_This project is part of my JavaScript learning journey documented on [GitHub](https://github.com/yourusername)._
