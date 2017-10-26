var ask = require("readline-sync");

var name = ask.question("What is your name? ");
   console.log("Hello there, " + name.toUpperCase() + "!");
   console.log("Your name has " + name.length + " characters.")
var lastName = ask.question("What is you last name? ");
   console.log("Your full name is " + name + " " + lastName + ".");
var longStr = ask.question("Let's hear a short story: ");
  console.log("That's too long, here's the first half: " + longStr.substr(0, longStr.length / 2));
var startingPoint = ask.question("Enter the first occurence of the word you would like me to start reciting your story: ")
  console.log(longStr.substr(longStr.indexOf(startingPoint), longStr.length));
