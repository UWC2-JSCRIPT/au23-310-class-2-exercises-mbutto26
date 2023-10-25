// 1. Create an object representation of yourself
// Should include:
// - firstName
// - lastName
// - 'favorite food'
// - bestFriend (object with the same 3 properties as above)
const marissaButto = {
  firstName: `Marissa`,
  lastName: `Butto`,
  favoriteFood: `tacos`,

  bestFriend: {
    bestFriendFirstName: `Chris`,
    bestFriendLastName: `Hellmich`,
    bestFriendFavoriteFood: `Lasagna`,
  },
};
console.log(marissaButto[`firstName`]);
// 2. console.log best friend's firstName and your favorite food
console.log(marissaButto.bestFriend[`bestFriendFirstName`]);
console.log(marissaButto.bestFriend[`bestFriendFavoriteFood`]);
// 3. Create an array to represent this tic-tac-toe board
// -O-
// -XO
// X-X
const ticTacToe = [
  [`-`, `0`, `-`],
  [`-`, `X`, `0`],
  [`X`, `0`, `X`],
];

// 4. After the array is created, 'O' claims the top right square.
// Update that value.

ticTacToe[0][2] = `0`;

// 5. Log the grid to the console.
console.log(ticTacToe[0]);
console.log(ticTacToe[1]);
console.log(ticTacToe[2]);
// 6. You are given an email as string myEmail, make sure it is in correct email format.
// Should be 1 or more characters, then @ sign, then 1 or more characters, then dot, then one or more characters - no whitespace
// i.e. foo@bar.baz
// Hints:
// - Use rubular to check a few emails: https://rubular.com/
// - Use regexp test method https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/test
let test = RegExp(/([\w\.\-_]+)?\w+@[\w-_]+(\.\w+){1,}/gim);
// 7. You are given an assignmentDate as a string in the format "month/day/year"
// i.e. '1/21/2019' - but this could be any date.
// Convert this string to a Date
const assignmentDate = new Date(),
  month = assignmentDate.getMonth() + 1;
date = assignmentDate.getDate();
year = assignmentDate.getFullYear();
console.log(month, date, year);

// 8. Create a new Date instance to represent the dueDate.
// This will be exactly 7 days after the assignment date.
let dueDate = 7;

let newDueDate = parseInt(`assignmentDate` + dueDate);
console.log(newDueDate);
// 9. Use dueDate values to create an HTML time tag in format
// <time datetime="YYYY-MM-DD">Month day, year</time>
// I have provided a months array to help
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
const days = newDueDate.getDate;
const year = newDueDate.getFullYear();
let timeTag =
  "<time datetime=`[year], [months], [days]>Month, day, year</time>";

// 10. log this value using console.log
console.log(timeTag);
