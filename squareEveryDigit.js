/*
Instructions:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/

const squareDigits = num => {
    //Turn the num into an arr of strs
    let str = num.toString().split('');

    //map over the arr turn them back into nums and use math
    let res = str.map(i => Math.pow(parseInt(i), 2))

    //join the arr and turn it back into a num
    return parseInt(res.join(''));
};

//Test Cases:
console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);