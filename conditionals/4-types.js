// Changing types
// coercion (implicit conversion)
// truthy & falsy values

const age1 = "23";
const age2 = parseInt(age1)


const age3 = 23;
const age4 = String(age3)
console.log(typeof (age4));

// coercion (implicit conversion)
console.log("23" + "3");


// truthy & falsy values
console.log(Boolean(""));
console.log(Boolean(0));
console.log(Boolean(undefined));
console.log(Boolean(null));
console.log(Boolean(NaN));

// const num = 45;
// if (num) {
//     console.log("RUN THE PROGRAM");
// }
// else {
//     console.log("END THE PROGRAM");
// }