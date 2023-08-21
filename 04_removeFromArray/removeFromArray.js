const removeFromArray = function(oldArray, ...args) {
    newArray = []
    for(let i=0; i<oldArray.length; i++) {
        let includeVal = true;
        for(let j=0; j<args.length; j++) {
            if(oldArray[i] === args[j]) {
                includeVal = false;
            }
        }
        if(includeVal) {
            newArray.push(oldArray[i]);
        }
    }
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
