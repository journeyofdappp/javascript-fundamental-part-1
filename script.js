const yearBirth = [2009, 2005, 1990, 2000, 1998, 1993, 1999];
const ages = [];

for (let i = 0; i <= yearBirth.length; i++) {
  console.log(yearBirth[i]);
  if (2024 - yearBirth[i] >= 18) {
    ages.push(`Age: ${2024 - yearBirth[i]} (adult)`);
  } else {
    ages.push(`Age: ${2024 - yearBirth[i]} (minor)`);
  }
}

console.log(ages);

const dummyData = ["Michael", 12, "John", 1, 2, 3];

for (let data = 0; data < dummyData.length; data++) {
  if (typeof dummyData[data] !== "string") {
    continue;
  }

  console.log(dummyData[data]);
}

const dummyArr = [
  "Jonas",
  1991,
  "teacher",
  2018,
  ["Michael", "Peter", "Steven"],
];

for (let exercise = 1; exercise <= 4; exercise++) {
  console.log(`-`.repeat(30));
  for (let rep = 1; rep <= 5; rep++) {
    console.log(`Exercise ${exercise}: Lifting weights repetition ${rep} 🏋️‍♀️`);
  }
}
