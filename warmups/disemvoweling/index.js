// Input:
// "Pickle Rick!"
//
// Output:
// {
//   str: "pckrck!",
//   vowels: "iei"
// }


function disemvowel(str) {
  let holderObj = {
    str: "",
    vowels: ""
  }
  let stringToArray = str.split("");
  let vowels = ['a', 'e', 'i', 'o', 'u'];
  stringToArray.map(char=>{
    for (let i = 0; i < vowels.length; i++) {
      if (char === vowels[i]) {
        holderObj.vowels += char
      }
    }console.log(holderObj);
  })
}

disemvowel("Pickle Rick!")
