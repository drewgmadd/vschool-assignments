document.getElementById('total-button').addEventListener('click', function(){
  var goombaValue = Number(document.getElementById('goombas-caught').value)*5;
  var bobombValue = Number(document.getElementById('bobombs-caught').value)*7;
  var cheepValue = Number(document.getElementById('cheeps-caught').value)*11;
  document.getElementById('total-coin').innerHTML = goombaValue + bobombValue + cheepValue;
})

document.getElementById('goomba-hover').addEventListener('mouseover', function(){
  document.getElementById('goomba-input-total').innerText = Number(document.getElementById('goombas-caught').value)*5;
})

document.getElementById('bobomb-hover').addEventListener('mouseover', function() {
  document.getElementById('bobomb-input-total').innerText = Number(document.getElementById('bobombs-caught').value)*7
})

document.getElementById('cheep-hover').addEventListener('mouseover', function() {
  document.getElementById('cheep-input-total').innerText = Number(document.getElementById('cheeps-caught').value)*7
})
