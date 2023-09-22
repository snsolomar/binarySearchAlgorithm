// Write a function that reverses a string. The input string is given as an array of characters s.


function reverseString(s) {
    let reverse = '';

    for (i = s.length -1; i >= 0; i--){
        reverse += s[i];
    }
    return reverse
}
// const str = "hello";
// console.log(reverseString(str));

function removeSpace(s) {
    let newStr = '';
    let space = ' ';

    for (i = 0; i < s.length; i++) {
        if (s[i] === space){
            
        } else {
            newStr += s[i];
        }
    }
    return newStr;
}

// const str1 = "Hi Mark"
// console.log(removeSpace(str1))

function hasDuplicates(arr){
    
    let map = {};

    for (let i = 0; i < arr.length; i++){
        if (map[arr[i]] === undefined) {
            map[arr[i]] = 1;
        } else {
            map[arr[i]]++;
        }
    }

    for (let key in map) {
        if (map[key] > 1) {
            return true
        }
    }
    return false;
}

// const arr1 = [0, 1, 1, 2];
// console.log(hasDuplicates(arr1));


// set up two pointers
// left pointer and right pointer
// switch left and right indexes
// create var to store left while swapping with right
// while loop 
// increment left
// decrement right
function revArr(arr) {
    let left = 0;
    let right = arr.length - 1;

    while (left < right) {
        let temp = arr[left];
        arr[left] = arr[right];
        arr[right] = temp;
        left++;
        right--;
    }
    return arr;
}

// const arr1 = ['h','e','l','l','o'];
// console.log(revArr(arr1));

