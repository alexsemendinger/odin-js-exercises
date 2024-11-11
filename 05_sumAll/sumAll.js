const sumAll = function(num1, num2) {
    const isValid = (n) => (
        typeof n === 'number' &&
        n >= 1 &&
        Number.isInteger(n)
    ) 

    if (!isValid(num1) || !isValid(num2)) return "ERROR";

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
