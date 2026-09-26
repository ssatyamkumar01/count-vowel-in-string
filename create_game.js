// Create a game where the user keeps guessing until they find the correct number.

let real_num = 45;
let num = Number(prompt("Enter the number between 1 and 100:"));

while (num !== real_num) {
  num = Number(prompt("Wrong guess! Try again:"));
}
console.log("Congrats, Buddy! You guessed it right!");
