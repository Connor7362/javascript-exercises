const removeFromArray = function(arr , ...remove) {
   return arr.filter(thing => !remove.includes(thing) );

};

// Do not edit below this line
module.exports = removeFromArray;
