// loop through arr at i
    // while at the index, start another loop through arr at j
    // if i + j - target
        // break
    // else continue
    // i cannot be === j

function twoSum(arr, t) {
    for (i = 0; i < arr.length; i++){
        for (j = i +1; j < arr.length; j++){
            if (arr[i] + arr[j] === t){
                return [i , j];
            }
        }
    }
}

const arr1 = [1, 5, 9];
console.log(twoSum(arr1, 10))