const reverseString = function(originalWord) {
    const size = originalWord.length;
    let reversed = '';
    for(let i=size-1; i>=0; i--) {
        reversed += originalWord[i];
    }
    return reversed;
};

// Do not edit below this line
module.exports = reverseString;
