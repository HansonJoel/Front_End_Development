// String Object in Javascript

let greeting = "How are you doing";

//  toUppercase Method: This string method, takes all the characters and convert them to uppercase

hello = greeting.toUpperCase();   // converted greeting to uppercase and save it in the variable hello
document.write(hello, "<br>");  // br is used to create a space between the statement



// toLowerCase Method: This string method, takes all the characters and convert them to lowercase.

hello = greeting.toLowerCase();
document.write(hello, "<br>");

// length Method: This gives us the length of the variable
hello = greeting.length;   // note: length stats counting from 0 index
document.write('The length of "How are you doing is" ' +hello, "<br></br>");


// charAt Method: This Method returns the character at the position we specify
hello = greeting.charAt(4);
document.write(hello, "<br>");


// replace Method: This method replace word in our string object
hello = greeting.replace('doing','today');  // here i replaced doing with today
document.write(hello, "<br>");

//bold Method:  This method make our string bold
hello = greeting.bold();
document.write(hello);








