let orc = {
    hair : "green",
    age : 26,
    stomachFull : false,
    eat:function(){          // here, our game character can eat so we gave him action ability (method) to eat.
      document.write("Yum Yum");
    }
};

orc.eat();   // We called our game character method. This will display Yum Yum


if (orc.stomachFull == true){
   orc.eat();
}
else{
    document.write("not eating")
}


