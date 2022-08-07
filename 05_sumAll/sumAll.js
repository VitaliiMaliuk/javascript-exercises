const sumAll = function(min, max) {
    let finalSum = 0;
    if (min < 0) {
        return "ERROR";
    }
    if (max === String(max)) {
        return "ERROR";
    }
    if (!Number.isInteger(min) || !Number.isInteger(max)) {
        return "ERROR";
    }
    if (min > max) {
        for (let j = min; j >= max; j--) {
            finalSum += j;
        }
    }
    for (let i = min; i <= max; i++) {
        finalSum += i;
    }
    return finalSum;
};

// Do not edit below this line
module.exports = sumAll;
