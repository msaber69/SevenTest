const minAlph = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
const majAlph = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
let str = '';

function reverse(s){
    return s.split("").reverse().join("");
}

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please insert a permutation', p => {
    readline.question('Please insert a text', text => {
    const TextArray = text.split("");
    for (let i=0; i < TextArray.length; i++) {
        if (minAlph.indexOf(TextArray[i]) !== -1){
            TextArray[i] = minAlph[minAlph.indexOf(TextArray[i])+parseInt(p)]
        }
        else if (majAlph.indexOf(TextArray[i]) !== -1){
            if (i%2 == 0) {
                TextArray[i] = majAlph[majAlph.indexOf(TextArray[i])+parseInt(p)]
            }
            else {
                TextArray[i] = majAlph[majAlph.indexOf(TextArray[i])+parseInt(p)].toLocaleLowerCase();
            }
        }
        else if (Number.isInteger(parseInt(TextArray[i]))){
            TextArray[i] = 9 - parseInt(TextArray[i]);
        }
        str += TextArray[i]
    }
    console.log(`Text encypted : ${reverse(str)}`);
    readline.close();
  })
});


