const reverseString = function(string) {
    let newString = String(string); //Convert to string
    let lenOfString = newString.length; //get the length of the string and store it
    let revStr = "";    //To hold the reversed string

    // The loop runs gets all the characters of the string
    // starting from the last to the first,
    // and adds them to the reversed string.
    for (let i=lenOfString-1; i>=0; i--) {
        let char = newString.charAt(i);
        revStr += char;
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
