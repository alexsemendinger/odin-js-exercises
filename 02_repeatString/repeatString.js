const repeatString = function(text, numRepeats) {
    if (numRepeats < 0) return "ERROR";
    let repeatedText = "";
    for (let i = 0; i < numRepeats; i++) {
        repeatedText += text;
    }
    return repeatedText;
};

// Do not edit below this line
module.exports = repeatString;
