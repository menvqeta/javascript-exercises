const fibonacci = function(num) {
    num = +num;
    if(num<0) {
        return "OOPS";
    }
    return fib(num);
    
};

function fib(num) {
    let arr = [];
    arr[0] = 1;
    arr[1] = 1;
    for(let i=2; i<=num; i++) {
        arr[i] = arr[i-1] + arr[i-2];
    }
    return arr[num-1];
}

// Do not edit below this line
module.exports = fibonacci;
