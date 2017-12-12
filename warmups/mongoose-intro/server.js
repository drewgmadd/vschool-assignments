const mongoose = require("mongoose");
mongoose.connect('mongodb://localhost/friends');

const Schema = mongoose.Schema;

const friendSchema = new Schema({
  name: String,
  age: Number,
  interests: [String],
  friends: [String]
});

const Friend = mongoose.model("Friend", friendSchema);

const myFriend = new Friend({
  name: "Andrew",
  age: 25,
  interests: ["Music", "Skiing"],
  friends:[]
})

// myFriend.save((err, friend)=>{
//   console.log(friend, "Successfully added")
// })

// Friend.findOne({age: 25}, (err, friend)=>{
//   friend.remove((err, friend)=>{
//     console.log(friend, "Successfully added")
//   })
// })

Friend.find((err, friends)=>{
  console.log(friends);
})
