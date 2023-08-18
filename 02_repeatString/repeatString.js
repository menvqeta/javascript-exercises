const repeatString = function(stringToBeRepeated, numOfRepetitions) {
    let ans = '';
    if(numOfRepetitions<0) {
        ans = 'ERROR';
        return ans;
    }
    for(let i=0; i<numOfRepetitions; i++) {
        ans+=stringToBeRepeated;
    }
    return ans;
};

// Do not edit below this line
module.exports = repeatString;
