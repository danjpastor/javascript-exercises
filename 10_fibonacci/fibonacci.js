const fibonacci = function(num) {
    num = Number(num)
    if (num == 0) {
        return 0
    } else if (num < 0){
        return "OOPS"
    } else {
        let num1 = 0;
        let num2 = 1;
        let sum;
        for (i = 1; i< num; i++) {
            sum = num1 + num2;
            num1 = num2;
            num2 = sum;
        }
        return num2
    }
};

// // Do not edit below this line
module.exports = fibonacci;


    