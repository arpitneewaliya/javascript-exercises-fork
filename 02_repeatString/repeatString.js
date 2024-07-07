const repeatString = function(string, num) {
    string = String(string);
    num = Number(num);

    let newString="";
    if (num<0)  {
        return "ERROR";
    } else {
        for (let i=1; i<=num; i++) {
            newString += string;
        }
        return newString;    
    }
};

// Do not edit below this line
module.exports = repeatString;
