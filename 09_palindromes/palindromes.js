const palindromes = function (string) {
    processedString = string.replaceAll(/[^A-Za-z0-9]/g, "").toLowerCase();
    reversed = Array.from(processedString).reverse().join('');
    return processedString === reversed;
};

// Do not edit below this line
module.exports = palindromes;
