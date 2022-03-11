/*
Instructions:
Complete the solution so that the function will break up camel casing, using a space between words.
Example
"camelCasing"  =>  "camel Casing"
"identifier"   =>  "identifier"
""             =>  ""
*/

const solution = string => {
    //Splits the string into an arr, loops over it and returns either the item or the item plus a space depending on if it is upper or lowercase.
    return string.split('').map(i => {
        if(i === i.toUpperCase()) return ` ${i}`
        else return i
    }).join('');
};

//Test Cases:
console.log(solution('camelCasing') === 'camel Casing');
console.log(solution('camelCasingTest') === 'camel Casing Test');