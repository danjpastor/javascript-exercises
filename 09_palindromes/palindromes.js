const palindromes = function (orgstring) {
    let string = orgstring.toLowerCase();
    let replace = string.replace(/[^a-z0-9]/gi, '').split('');
    let reverse = replace.reverse();
    let newstring = reverse.join('');
    if (newstring === string.replace(/[^a-z0-9]/gi, '')){
        return true
    } else {
        return false
    }
};

// Do not edit below this line
module.exports = palindromes;

console.log(palindromes('Animal loots foliated detail of stool lamina.'));

// let string = "bob";
// let replace = string.replace(/[^a-z0-9]/gi, '').split('');
// // console.log(replace.join(''))
// let reverse = replace.reverse();
// let newstring = reverse.join('');
// if (newstring == replace.join('')){
//     console.log("true")
// }