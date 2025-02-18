// Adding new prperty to an object

const person = {
    firstname: "John",
    lastname: "Doe",
    age: 50,
    eyecolor:"blue",
};

//syntax: objectName.newProperty = newValue
person.language = "English";

document.write("Person speaks "+ person.language)