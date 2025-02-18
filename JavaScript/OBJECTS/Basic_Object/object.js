let orc = {
    hair : "green",
    age : 26,
    stomachFull : true,
}

document.write(orc.age);   // This will display the age of our game character orc 


// In the game, some of the properties will constantly change. so if orc age changes, we will have to update the age
let newAge = orc.age + 2;
document.write(newAge);    // we will get a new age i.e 28