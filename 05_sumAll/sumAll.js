const sumAll = function(first, last) {
    if((!(typeof first === 'number')) || (!(typeof last === 'number'))) {
        return "ERROR";
    }
    let temp = Math.min(first, last);
    last = Math.max(first, last);
    first = temp;
    let sum = 0;
    if((first<0) || (last<0))   {
        return "ERROR";
    }
    for(let i = first; i<=last; i++) {
        sum+=i;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
