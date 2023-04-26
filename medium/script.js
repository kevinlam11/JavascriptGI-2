// Create a program that accepts a number (1-12) as input and logs to the console that number and its corresponding month. For example: if the user enters the number 3, then it should return the month “March.” Alert the user if they enter an invalid number (e.g. less than 1 or greater than 12).
const monthNumber = parseInt(prompt("Enter a number between 1 and 12:"));
if (monthNumber >= 1 && monthNumber <= 12) {
  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  console.log(`${monthNumber} - ${months[monthNumber - 1]}`);
} else {
  console.log("WRONG NUMBER. Please enter a number between 1 and 12!!");
}
// OPEN IN LIVE WEBSITE AND TYPE IN NUMBER AND LOOK AT CONSOLE FOR ANSWER.
