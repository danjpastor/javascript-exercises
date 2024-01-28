const sumAll = function(num1, num2) {
    let rangeSum = 0
    if (typeof num1 !== 'number' || typeof num2 !== 'number'){
        return "ERROR";
    } else if (num1 < 0 || num2 < 0) {
        return "ERROR";
    }

    if (num1 > num2) {
        for (let i = num1; i >= num2; i-- ) {
            rangeSum += i
            console.log(rangeSum)
        }    
    } else {
        for (let i = num1; i <= num2; i++ ) {
            rangeSum += i
            console.log(rangeSum)
        }    
    }
    return rangeSum
};

console.log(sumAll(10, 1))

// Do not edit below this line
module.exports = sumAll;
