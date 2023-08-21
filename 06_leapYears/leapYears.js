const leapYears = function(year) {
    let divisibleBy4 = year%4 === 0;
    let divisibleBy100 = year%100 === 0;
    let divisibleBy400 = year%400 === 0;
    return (divisibleBy400) || ((!divisibleBy100) && (divisibleBy4));
};

// Do not edit below this line
module.exports = leapYears;
