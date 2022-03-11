/*
Instructions:
Write a function that takes a string of parentheses, and determines if the order of the parentheses is valid. The function should return true if the string is valid, and false if it's invalid.
Examples
"()"              =>  true
")(()))"          =>  false
"("               =>  false
"(())((()())())"  =>  true
Constraints
0 <= input.length <= 100
*/

const validParentheses = parens => {

    //Early Test Cases
    if(parens.length === 0) return true;
    else if (parens.length % 2 !== 0) return false;

};

//Test Cases:
console.log(validParentheses("(") === false);
console.log(validParentheses(")") === false);
console.log(validParentheses("") === true);
console.log(validParentheses("()") === true);
console.log(validParentheses("())") === false);