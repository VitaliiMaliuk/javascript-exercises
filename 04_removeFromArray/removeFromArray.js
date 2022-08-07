const removeFromArray = function (...args) {
  const array = args[0];
  const myArray = [];
  array.forEach((item) => {
    if (!args.includes(item)) {
        myArray.push(item);
      }
  });
   return myArray; 
};

// Do not edit below this line
module.exports = removeFromArray;
