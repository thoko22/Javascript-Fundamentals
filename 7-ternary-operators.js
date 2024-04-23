// Ternary operators
// && || () 

// Premium user example
const isPremium = true;
const color = isPremium ? "yellow" : "grey";
document.body.style.background = color;

// age example
// < 8 => "hi kiddo"
// >= 8 "hey there"
const age = 12;
//const greeting = age < 8 ? "HI KIDDO" : "HEY THERE";
//console.log(greeting)



// only good for short statements
const userType = "admin";
const age2 = 22;
let greeting;
if (userType == "admin") {
    if(age < 18) {
        greeting = "YOU ARE NOT ALLOWED HERE";
    } else {
        greeting = "WELCOME ADMIN USER";
    }
}
else {
    greeting = "ENTERPRISE USER LOGGED IN";
}
console.log("GREETING", greeting)