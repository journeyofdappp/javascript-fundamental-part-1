const day = "Saturday";

switch (day) {
  case "Monday":
    console.log("Starting day of the week");
    break;
  case "Tuesday":
  case "Wednesday":
    console.log("Learn javascript fundamentals");
    break;
  case "Thursday":
    console.log("Today is Thursday");
    break;
  case "Friday":
    console.log("Practice javascript projects");
    break;
  case "Saturday":
  case "Sunday":
    console.log("Break for the weekend");
    break;
  default:
    console.log("Invalid day");
}
