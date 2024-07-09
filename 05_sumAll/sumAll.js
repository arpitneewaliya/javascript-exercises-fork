const sumAll = function(num1, num2) {
    if (num1<0 || num2<0) {
        return "ERROR";
    } else if (typeof num1 !== "number" || typeof num2 !== "number") {
        return "ERROR";
    } else {
        let sum = 0;
        if (num1 < num2) {
            let i = num1;
            while (i <= num2) {
                sum += i;
                i++;
            }
            return sum;
        } else if (num1 > num2) {
            let i = num1;
            while (i >= num2) {
                sum += i;
                i--;
            }
            return sum;   
        }
    }
};

// Do not edit below this line
module.exports = sumAll;
