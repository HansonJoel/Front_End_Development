// How to delete a property from an object

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  delete person.age;
  
  document.write(person.firstname + " is " + person.age + " years old.")


  // or you can use 
  const person1 = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor: "blue"
  };
  
  delete person1["eyecolor"];
  
  document.write(person1.firstname + " is " + person1.age + " years old.")
