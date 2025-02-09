"use strict";

// Function declaration
function calculateAge(birthYear) {
  return 2025 - birthYear;
}

const myAge = calculateAge(2005);
console.log(myAge);

// Function expression
const message = function (firstName, message) {
  return `Hi ${firstName}, ${message}`;
};

const messageData = message("Sara", "How are you?");
console.log(messageData);

// Arrow function
const calculateAgeArrow = (firstName, birthYear) => {
  const age = 2025 - birthYear;
  const retirement = 65 - age;
  const retirementYears = retirement + 2025;

  return `${firstName}'s age is ${age} years, she retires in ${retirementYears}`;
};
console.log(calculateAgeArrow("Sarah", 2005));
