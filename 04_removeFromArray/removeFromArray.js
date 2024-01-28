const removeFromArray = function() {

let argArray = [];
let givenArray = arguments[0];

for (i = 0; i < arguments.length; i++) {
    if (i != 0) {
        argArray.push(arguments[i])
    }
};
// ----------------------------------------

const newArray = givenArray.filter(function(x) { 
    return argArray.indexOf(x) < 0;
  });

  return newArray;
}


console.log(removeFromArray([1, 2, 3, 4], 3))


// // Do not edit below this line
module.exports = removeFromArray;
