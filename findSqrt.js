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