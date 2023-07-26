// Write a function that reverses a string. The input string is given as an array of characters s.

var reverseString = function(s) {
    let left = 0; 
    let right = s.length - 1;

    while (left <= right){
        let temp = s[left];
        s[left] = s[right];
        s[right] = temp;
        left++;
        right--;
    }

    return s;
};