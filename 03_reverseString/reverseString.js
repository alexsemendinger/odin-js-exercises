reverseString = function(text) {
    const revArr = text.split('').reverse()
    let revText = ""
    for (const ch of revArr) {
        revText += ch
    }
    return revText
};

// Do not edit below this line
module.exports = reverseString;
