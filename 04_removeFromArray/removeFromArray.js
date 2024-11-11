const removeFromArray = function(array, ...args) {
    for (const itemToRemove of args) {
        array = array.filter(x => x !== itemToRemove);
    }
    return array
};

removeFromArray([1,2,3,4], 3)

// Do not edit below this line
module.exports = removeFromArray;
