//  Displaying the Object Properties by name
// The properties of an object can be displayed as a string:

const person = {
    name: "John",
    age: 30,
    city: "New York"
  };
  document.write(person.name + ", " + person.age + ", " + person.city+"<br></br>");


  // Displaying the Object Properties in a Loop
  // The properties of an object can be collected in a loop:

  const person1 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Build a Text
  let text = "";
  for (let x in person1) {
    text += person1[x] + " ";
  };

  document.write(person.name + ", " + person.age + ", " + person.city);


  // Displaying the Object using Object.values()
  // Object.values() creates an array from the property values:
  const person3 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Create an Array
  const myArray = Object.values(person3);

  document.write(person3.name + ", " + person3.age + ", " + person3.city);


  // Displaying the Object using JSON.stringify()
  // Object.entries() makes it simple to use objects in loops:
  const person4 = {
    name: "John",
    age: 30,
    city: "New York"
  };
  
  // Stringify Object
  let myString = JSON.stringify(person4);
  document.write(person4.name + ", " + person4.age + ", " + person4.city);


  //
  
  

