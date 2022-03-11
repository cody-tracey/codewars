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
    if (parens.length === 0) return true;
    else if (parens.length % 2 !== 0) return false;
    //Main Testing
    else {
        //Get an arr to make it easier to compare
        let arr = parens.split("");
        //Standard loop
        for (let i = 0; i < arr.length; i++) {
            let checkI = i - 1;
            //We are only looking for the starting char to the second half of the equation
            // console.log(arr[i],i)
            if (arr[i] === ')') {
                //If immediately before the start of the close we have an open, we take that part out and use recusrsion to repeat the process slowly cutting down our string
                if (arr[checkI] === '(') {
                    arr.splice(checkI, 2);
                    //If we have no more string everything matched up so we can return true.
                    if (arr.length === 0) return true;
                    else validParentheses(arr.join(''));
                }
                else return false;
            }
        };
        return false;
    };
};

//Test Cases:
// console.log(validParentheses("(") === false);
// console.log(validParentheses(")") === false);
// console.log(validParentheses("") === true);
// console.log(validParentheses("()") === true);
// console.log(validParentheses("())") === false);
// console.log(validParentheses("()()((()") === false);
console.log(validParentheses("()()") === true);
// console.log(validParentheses("((((()))))") === true);
// console.log(validParentheses("(()()()())(())") === true);
// console.log(validParentheses("(())((()((()))))") === true);


