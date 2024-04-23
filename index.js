const uberRide = 200;
const driverCommission = 70 / 100;
const nameOfDriver = "Akhil";
const uberDriverEarning = uberRide * driverCommission;
const uberEarning = uberRide - uberDriverEarning;

// const output =
//   "From a ride costing R" +
//   uberRide +
//   ",\n" +
//   nameOfDriver +
//   " earns R " +
//   parseInt(uberDriverEarning) +
//   " with a '70%' commission,\nwhile uber earns R" +
//   parseInt(uberEarning) +
//   " with a '30%' commission";

const output = `From a ride costing R${uberRide},
${nameOfDriver} earns R${uberDriverEarning} with a "70%" commission,
while Uber earns R${uberEarning} with a '30%' commission`

console.log(output);


// Create variable fullName, jobTitle, university, age
// inject them into the string
// appear over multiple lines
// console.log("My name is Akhil Boddu,\nI am the co-founder at Zaio\nI graduated from the University of Cape Town,\nMy age is 23 years\n");

const fullName = "Akhil Boddu";
const jobTitle = "Co-Founder at Zaio";
const university = "University of Cape Town";
const age = 23;

const output = `
  My name is ${fullName}
  I am the ${jobTitle}
  I graduated from the ${university}
  My age is ${age} years
`;

console.log(output)



