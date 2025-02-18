// Date Object in Javscript

let todaysDate  = new Date();  // the new keyword, allows us to copy an existing objecst and use it (in this case, we are copying the date object)

document.write(todaysDate, "<br>");


// To make our text more readable we use the toDatestring() method
let useString = todaysDate.toDateString();
document.write(useString); 