/*
Instructions:
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/


//Original
// const getCount = str => {
//     //Count variable
//     let vowelsCount = 0;

//     //Split to use arr methods
//     let strArr = str.split('');

//     //Loop over it and check to see if it is a vowel and if so increment the count
//     strArr.map(i => {
//         switch (i) {
//             case 'a':
//             case 'e':
//             case 'i':
//             case 'o':
//             case 'u':
//             vowelsCount++;
//             break;
//         };
//     });

//     return vowelsCount;
// };

//Refactored
const getCount = str => {
     /*
    Split into an array and then reduce the array to a single number.
    */
    return str.split('').reduce((total, curr) => {
        switch (curr) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
                total++
                break;
        };
        return total
    }, 0)
};



//Test Cases:
console.log(getCount("abracadabra") === 5)
console.log(getCount("pear tree") === 4)
console.log(getCount("o a kak ushakov lil vo kashu kakao") === 13)
console.log(getCount("my pyx") === 0)
