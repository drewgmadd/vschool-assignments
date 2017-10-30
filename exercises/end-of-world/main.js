var count = Number(document.getElementById('count').innerText);
var startButton = document.getElementById('start-button');
console.log(count);
// setInterval(function(){
//   count = count - 1;
// }, 1000)

function countDown() {
  var counter = setInterval(function(){
    count--;
    if (count === 0) {
      clearInterval(counter);
      document.getElementById('final-text').innerText = "the end is near";
    }
    document.getElementById('count').innerText = count;
  }, 1000)
}


//
startButton.addEventListener("click", countDown);
//   count--;
//   document.getElementById('count').innerText = count;
// }, 1000));

// setInterval(function(){
//   count--;
//   document.getElementById('count').innerText = count;
// }, 1000)


//
// function countDown(){
//   var counter = setInterval(function(){
//     count = count - 1;
//     document.getElementById('count').innerText = count;
//   }
// }
