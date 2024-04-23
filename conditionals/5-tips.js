
// #1 Avoid direct comparisons where possible
// const user = "";

// if (user) {
//     console.log("ALLOWED INTO THE PLATFORM");
// } else {
//     console.log("NOT ALLOWED INTO THE PLATFORM");
// }

// ---------------------------------------------------

// #2 Use === (strict equal operators)
// console.log("23" === 23);
// "23" => Truthy
// 23 => Truthy

// ---------------------------------------------------

// #3 convert to real bool values where needed
// console.log(Boolean(NaN) === Boolean(NaN));

