const redux = require("redux");

const store = redux.createStore(reducer);

function reducer(prevState = [], action) {
  switch (action.type){
    case "ADD_TODO":
      return [...prevState, action.todo]
  }
}

store.subscribe(()=>{
  console.log(store.getState());
})

function addTodo(todo){
  return {
    type: "ADD_TODO",
    todo
  }
}

store.dispatch(addTodo({name: "get milk", price: 2.5, amountNeeded: 1}))
