function likeEvery(arr, fun) {
  fun(arr);
}


likeEvery([true,true], (thisArr)=>{
  let isTrue = false
  for (let i = 0; i < thisArr.length - 1; i++) {
    if (typeof thisArr[i] !== typeof thisArr[i + 1]) {
      isTrue = false;
      break;
    } else {
      isTrue = true;
    }
  } console.log(isTrue);
})

function likeSome(arr, fun) {
  fun(arr);
}
