function findLongestWord (string = "") {
  // Write code under this line
  let array = string.split(" ");
  let longestWord = array[0].length;
  let namelongestWord = '';
  for (let i = 0; i < array.length; i += 1) {
    if (array[i].length >= longestWord) {
      longestWord = array[i].length;
      namelongestWord = array[i];
    }
  }
  return namelongestWord
}

console.log(findLongestWord('The quick brown fox jumped over the lazy dog'));
// 'jumped'

//console.log(findLongestWord('Google do a roll'));
// 'Google'

//console.log(findLongestWord('May the force be with you'));
// 'force'