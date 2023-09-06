// create an empty stack to store paranthesis
// loop through the string
// should start with opening
// if opening push into stack
// create const top to track that the last index of stack
// if its not an opening, then check to see if closing matches the top
    //if they match, then .pop and remove the last index in the stack
    // if they dont match, then return false
// stack should be empty if opening and closing are in correct order
// return true if stack.length === 0;

function isValid(s){
    const stack = [];
    
    for (let i = 0; i < s.length; i++){

        const top = stack[stack.length -1];

        if (s[i] === "(" || s[i] === "[" || s[i] === "{"){
            stack.push(s[i]);
        } else if (s[i] === ")" && top === "(" && stack.length !== 0){
            stack.pop(s[i]);
        } else if (s[i] === "]" && top === "[" && stack.length !== 0){
            stack.pop(s[i]);
        } else if (s[i] === "]" && top === "[" && stack.length !== 0){
            stack.pop(s[i]);
        } else if (s[i] === "}" && top === "{" && stack.length !== 0){
            stack.pop(s[i]);
        } else {
            return false;
        }
    }
    return stack.length === 0;
}

const s1 = "({})";
console.log(isValid(s1));