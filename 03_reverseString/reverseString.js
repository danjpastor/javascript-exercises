const reverseString = function(string) {
    let stringArray = []
    for (let i = 0; i < string.length; i++) {
        stringArray.push(string[i])
    }
    stringArray.reverse()
    return stringArray.join("")

};

console.log(reverseString("hello"))

// Do not edit below this line
module.exports = reverseString;
