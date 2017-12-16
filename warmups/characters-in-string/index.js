// charFreq('Ceres');
// *  // returns { c: 1, e: 2, r: 1, s: 1 }
//



function charFreq(sentence) {
  let chars = sentence.toLowerCase().split("");
  let holder = {};
  for (let i = 0; i < chars.length; i++) {
    if (holder[chars[i]]) {
      holder[chars[i]]++;
    }else {
      holder[chars[i]] = 1;
    }
  }
  return holder;
}

console.log(charFreq("KJDINVVS  NSVVSBD"));

module.exports = charFreq;
