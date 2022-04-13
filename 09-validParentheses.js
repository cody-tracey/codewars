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
//Orignal
// const validParentheses = (parens) => {
//     //Early Test Cases
//     if (parens.length === 0) return true;
//     else if (parens.length % 2 !== 0) return false;
//     //Main Testing
//     else {
//         let res = true;
//         //Get an arr to make it easier to compare
//         let arr = parens.split("");
//         let c = 0;
//         //Standard while loop
//         while (arr.length > 0 && res === true && c < 10) {
//             c++;
//             console.log(c, arr)
//             if (!arr.includes(')') || !arr.includes('(')) res = false;

//             for (let i = 0; i < arr.length; i++) {
//                 let checkI = i - 1;
//                 //We are only looking for the starting char to the second half of the equation
//                 if (arr[i] === ')') {
//                     //If immediately before the start of the close we have an open, we take that part out and use recusrsion to repeat the process slowly cutting down our string
//                     if (arr[checkI] === '(') {
//                         arr.splice(checkI, 2);
//                         break;
//                     }
//                     else if (arr[checkI] === ')' || checkI === -1) {
//                         res = false;
//                         return res;
//                     }
//                 }
//             };
//         }
//         return res;
//     };
// };

//Refactored:
const validParentheses = (parens) => {
    //While we still have valid parens we replace them with nothing
    while(parens.includes('()')){
        parens = parens.replace('()','');
    };

    //If there is anything left then they didnt all match ip.
    return parens.length === 0;
};


//Test Cases:
console.log(validParentheses("(") === false);
console.log(validParentheses(")") === false);
console.log(validParentheses("") === true);
console.log(validParentheses("()") === true);
console.log(validParentheses("())") === false);
console.log(validParentheses("()()((()") === false);
console.log(validParentheses("()") === true);
console.log(validParentheses("((((()))))") === true);
console.log(validParentheses("(()()()())(())") === true);
console.log(validParentheses("(())((()((()))))") === true);
console.log(validParentheses("()))") === false);
console.log(validParentheses("())(") === false);
console.log(validParentheses("))((") === false);




