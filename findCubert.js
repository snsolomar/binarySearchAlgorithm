var myCubert = function(x) {
    if (x < 2) {
        return x;
    }

    let left = 2;
    let right = x;

    while (left <= right) {
        const mid =((left + right) / 2);
        const num = mid * mid * mid;

        if (num === x){
            return mid;
        }

        if (num < x){
            left = mid + 1;
        } else {
            right = mid - 1;
        }
    }
    return right;
}

let k = 27;
console.log(myCubert(k));