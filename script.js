const hasDriversLicense = true;
const hasGoodVision = false;
const shouldDrive = hasDriversLicense && hasGoodVision;

console.log(`Should drive: ${shouldDrive}`);

if (hasDriversLicense && hasGoodVision) {
  console.log("Driver is able to drive");
} else {
  console.log("Someone else should drive");
}

const isTired = true;

if (hasDriversLicense && hasGoodVision && !isTired) {
  console.log("Driver is able to drive");
} else {
  console.log("Someone else should drive");
}
