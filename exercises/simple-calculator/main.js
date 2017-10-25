document.getElementById('add-button').addEventListener('click', function(){
  var num1 = Number(document.getElementById('first-add-num').value);
  var num2 = Number(document.getElementById('second-add-num').value);
  document.getElementById('addition-solution').innerText = num1 + num2;
  console.log(typeof num1);
})

document.getElementById('sub-button').addEventListener('click', function(){
  var subNum1 = Number(document.getElementById('first-sub-num').value);
  var subNum2 = Number(document.getElementById('second-sub-num').value);
  document.getElementById('sub-solution').innerText = subNum1 - subNum2;
})

document.getElementById('mult-button').addEventListener('click', function(){
  var mult1 = document.getElementById('first-mult-num').value;
  var mult2 = document.getElementById('second-mult-num').value;
  document.getElementById('mult-solution').innerText = mult1 * mult2;
})
