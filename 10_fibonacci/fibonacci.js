const fibonacci = function(index) {
    index = Number(index);
    if (index < 0) return "OOPS";
    let a = 0;
    let b = 1;
    while (index > 0) {
        [a, b] = [b, a+b];
        index--;
    }
    return a;
};

// Do not edit below this line
module.exports = fibonacci;
