// var axios = require('axios');

axios.get("https://api.vschool.io/andrewmadden/todo/").then(function(response){
  for (var i = 0; i < response.data.length; i++) {
    var todoTitle = response.data[i].title;
    document.getElementById('todo-list')
    .innerHTML += `<h1>${todoTitle}</h1><input id="check" type="checkbox"/>`;
  // console.log(response.data);
    // var todoDescription = response.data[i].description;
    // document.getElementById('todo-list').innerHTML += `<h2>${todoDescription}</h2>`;
    // var todoPrice = response.data[i].price;
    // document.getElementById('todo-list').innerHTML += `<h2>${todoPrice}</h2>`;
}
});

document.getElementById('submit-button').addEventListener("click", function(){
  var newObj = {
    title: document.getElementById('title-val').value,
  }
  axios.post("https://api.vschool.io/andrewmadden/todo/", newObj)
    document.getElementById('todo-list').innerHTML += `<h1>${newObj.title}</h1>`;
    if (newObj.description === "description") {
      return '';
    }
    document.getElementById('todo-list').innerHTML += `<h2>${newObj.description}</h2>`;
    document.getElementById('todo-list').innerHTML += `<h2>${newObj.price}</h2>`;
});

axios.get("https://api.vschool.io/andrewmadden/todo/").then(function(response){
  response.data.map(function(todo){
    if (todo.completed === true) {
      var checked = 'checked';
    } else {
      checked = '';
    }
    document.getElementById('todo-list').innerHTML += `<input type='checkbox'${checked}/>`;
  })
})
