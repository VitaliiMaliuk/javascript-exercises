const reverseString = function(string) {
    // let myStr = string.split('');
    // let reverseArray = myStr.reverse();
    // let result = reverseArray.join('');
    // return result;
    
    let str = '';
    for (let i = string.length - 1; i >= 0; i--) {
        str = str + string[i];  
    }
    return str;
};

// Do not edit below this line
module.exports = reverseString;
