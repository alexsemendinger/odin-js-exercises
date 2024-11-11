const sumAll = function(num1, num2) {
    if ( typeof num1 != 'number' || typeof num2 != 'number') {
        return "ERROR"
    }
    if ( num1 < 1 || num2 < 1 ) {
        return "ERROR"
    }
    if ( num1 % 1 != 0 || num2 % 1 != 0 ) {
        return "ERROR"
    }

    let low = (num1 < num2) ? num1 : num2;
    let high = (num1 >= num2) ? num1 : num2;

    let sum = 0;
    for (let i = low; i <= high; i++) {
        sum += i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
