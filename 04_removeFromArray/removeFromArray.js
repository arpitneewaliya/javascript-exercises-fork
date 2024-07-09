const removeFromArray = function(myArray, ...otherArgs) {
    let newArray = [...myArray];   // Makes a copy of myArray, now myArray will not change even if newArray changes

    let finalArr;
    for (let element of otherArgs) {
        finalArr = newArray.filter((value) => value !== element);
        newArray = [...finalArr];
    }

    return newArray;
};


// Do not edit below this line
module.exports = removeFromArray;
