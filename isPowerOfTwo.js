 // n must be a power of 2
 // we can repeatedly divide the number by 2 and check if the number becomes 1

 var isPowerOfTwo = function(n) {
    if (n <= 0) {
        return false;
    }

    while (n%2 === 0) {
        n = n /2;
    }
    return n === 1;
};