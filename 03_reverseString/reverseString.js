const reverseString = function(string) {
    let newString = String(string);
    let lenOfString = newString.length;
    let revStr = "";
    for (let i=lenOfString-1; i>=0; i--) {
        let char = newString.charAt(i);
        revStr += char;
    }
    return revStr;
};

// Do not edit below this line
module.exports = reverseString;
