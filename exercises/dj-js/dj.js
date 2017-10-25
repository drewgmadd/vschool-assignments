var square = document.getElementById('dj-square');

function scrollOrange() {
    square.style.backgroundColor = "orange";
}
square.addEventListener("scroll", scrollOrange);

function dblClickGreen() {
  square.style.backgroundColor = "green";
}
square.addEventListener("dblclick", dblClickGreen);


function hoverBlue() {
  square.style.backgroundColor = "blue";
}
square.addEventListener("mouseover", hoverBlue);

function clickRed() {
  square.style.backgroundColor = "red";
}
square.addEventListener("mousedown", clickRed);

function releaseYellow() {
  square.style.backgroundColor = "yellow";
}
square.addEventListener("mouseup", releaseYellow);
