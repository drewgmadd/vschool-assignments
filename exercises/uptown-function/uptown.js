var lyrics = ["This", "hit", "that", "ice", "cold",
              "Michelle", "Pfeiffer", "that", "white",
              "gold", "This", "one", "for", "them",
              "hood", "girls", "Them", "good", "girls",
              "straight", "masterpieces", "Stylin'",
              "whilen'", "livin'", "it", "up", "in",
              "the", "city", "Got", "Chucks", "on",
              "with", "Saint", "Laurent", "Gotta", "kiss",
              "myself", "I'm", "so", "pretty"];

//
// function printLyrics() {
//   for (var i = 0; i < lyrics.length; i++) {
//     console.log(lyrics[i] + " ");
//   }
// }
//
// printLyrics();

function printLyricsTwo() {
  console.log(lyrics.join(" "));
}
// printLyricsTwo()

//
// function reverseLyrics() {
//   for (var i = lyrics.length; i >= 0; i--) {
//     console.log(lyrics[i] + " ")
//   }
// }
// reverseLyrics();
function reverseLyricsTwo() {
  console.log(lyrics.reverse().join(" "));
}
// reverseLyricsTwo();

function everyOtherWord() {
  var otherWordArr = [];
  for (var i = 0; i < lyrics.length; i += 2) {
    otherWordArr.push(lyrics[i] + " ");
  }
  console.log(otherWordArr.join(" "));
}
// everyOtherWord();
function reverseEveryTwo() {
  var reversed = [];
  for (var i = 1; i < lyrics.length; i +=2) {
    reversed.push(lyrics[i] + " " + lyrics[i - 1]);
  }
  console.log(reversed.join(" "));
}
reverseEveryTwo();
