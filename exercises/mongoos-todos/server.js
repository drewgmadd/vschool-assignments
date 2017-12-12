const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/todos");

const Schema = mongoose.Schema;

const todoSchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: String,
  completed: Boolean,
})

const Todo = mongoose.model("Todo", todoSchema);

const myTodo = new Todo({
  title: "Get food",
  description: "Go get food",
  completed: false
})

myTodo.save((err, todo)=>{
  console.log(todo, "Saved")
})

// Todo.findOne({completed: false}, (err, todo)=>{
//   todo.completed = true;
//   todo.save((err, todo)=>{
//     console.log("Now completed")
//   })
// })

// Todo.findOne({completed: true}, (err, todo)=>{
//   todo.remove((err, todo)=>{
//     console.log("Removed", todo)
//   })
// })
Todo.find((err, todos)=>{
  console.log(todos)
})
