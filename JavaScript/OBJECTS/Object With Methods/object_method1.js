const person = {
    firstName: "John",
    lastName: "Doe",
    id: 5566,
    fullName: function() {
      return this.firstName + " " + this.lastName;
    }
  };

  document.write(person.fullName()+ "<br>");
  
// note: to call the method, you need to invoke the object.property with (), else it will not execute as a function:

/* 
In the example above, this refers to the person object:

    this.firstName means the firstName property of person.
    this.lastName means the lastName property of person.
*/

// "<br>" is used to seperate the statement