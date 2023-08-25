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

const str1 = "Hi Mark"
console.log(removeSpace(str1))