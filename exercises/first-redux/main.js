const redux = require("redux");

const store = redux.createStore(reducer);

function reducer(prevState = [], action){
  switch(action.type){
    case "ADD_CONTACT":
      return [...prevState, action.person];
    case "REMOVE_CONTACT":
      return prevState.filter(contact=>contact.name !== action.name);
    default:
      return prevState;
  }
}



store.subscribe(function() {
  const currentState = store.getState();
  console.log(currentState);
})

function addContact(name, phone, email) {
  return {
    type: "ADD_CONTACT",
    person: {
      name,
      phone,
      email
    }
  }
}
function removeContact(name) {
  return {
    type: "REMOVE_CONTACT",
    name
  }
}
store.dispatch(addContact("one", "tow", "three"))
store.dispatch(addContact("iiiii", "eeee", "wwwwww"))
store.dispatch(addContact("xxxxx", "vvvvvv", "aaaaaa"))
store.dispatch(addContact("mmmmmm", "kkkkk", "pppppp"))

store.dispatch(removeContact("one"))
store.dispatch(removeContact("xxxxx"))
