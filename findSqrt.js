// Given a non-negative integer x, 
// return the square root of x rounded down to the nearest integer. 
// The returned integer should be non-negative as well.

var mySqrt = function(x) {
    // For special cases when x is 0 or 1, return x.
    if (x < 2){
        return x;
    } 

    // setup binary search
    let left = 2;
    let right = x;

    // loop through
    while (left <= right) {
        const mid = Math.floor((left + right) / 2);
        const num = mid * mid;

        if (num === x) {
            return mid;
        }
        if (num < x) {
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }

    return right;
}

let k = 81;
console.log(mySqrt(k));

var mySqrt = function(x) {
    if (x < 2){
        return x;
    }

    let left = 2;
    let right = x;

    while (left < right){
        let mid = Math.floor((left + right) / 2);
        let squared = mid * mid;

        if (x === squared){
            return mid;
        }
        if (x < squared){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}