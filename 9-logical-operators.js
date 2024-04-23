// Logical Operators
// && Logical and
// || Logical or 
// ! Logical not

// name, age, password, biodata, hobbies, profilePicture
const name = "Akhil";
const password = "";

if(name==="" || password==="") 
    console.log("Please enter your name & password correctly");

//&&
// name, age, password, biodata, hobbies, profilePicture
//const name = "Akhil";
//const password = "";

if(name==="" && password==="") {
    console.log("Please enter your name & password correctly");
}  else {
    console.log("not going through the block");
}
      