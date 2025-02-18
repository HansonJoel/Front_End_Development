let number = 4.7;
 
//Math.round() method: This method round our number to the nearest closest integer
newNumber = 26 + Math.round(number);
document.write(newNumber, "<br>");


//Math.ceil() Method: This method, rounds UP a number to the nearest integer
newNumber = 26 + Math.ceil(`${number}`);
document.write(newNumber, "<br>");


//Math.floor() Method: This method round DOWN the numbe to the nearest integer
newNumber = 26 + Math.floor(number);
document.write(newNumber, "<br>");


// sqrt() method: This method returns the square root of a number
square_root = Math.sqrt(16);
document.write(`The square root of 16 is ${square_root}`);

// document.write(Math.PI);
document.write(Math.trunc(Math.PI));