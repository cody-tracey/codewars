/*
Instructions:
Write a function that takes in a string of one or more words, and returns the same string, but with all five or more letter words reversed (Just like the name of this Kata). Strings passed in will consist of only letters and spaces. Spaces will be included only when more than one word is present.

Examples: spinWords( "Hey fellow warriors" ) => returns "Hey wollef sroirraw" spinWords( "This is a test") => returns "This is a test" spinWords( "This is another test" )=> returns "This is rehtona test"
*/

const spinWords = str => {
    //Split the str into an arr so we can utilize arr methods
    let wordsArr = str.split(' ');

    //Map over the arr if the word is less than 5 in length, return it otherwise split it into an arr and reverse it with a method then join it back together and return it.
    let reverseStr = wordsArr.map(i => {
        if (i.length >= 5) {
            let w = i.split('').reverse().join("");
            return w;
        }
        else return i
    });

    //Join the arr back into a str and return it
    return reverseStr.join(' ');
};



//Test Cases:

console.log((spinWords("Hey fellow warriors"), "Hey wollef sroirraw"));
console.log((spinWords("This is a test"), "This is a test"));
console.log((spinWords("This is another test"), "This is rehtona test"));
console.log((spinWords("You are almost to the last test"), "You are tsomla to the last test"));
console.log((spinWords("Just kidding there is still one more"), "Just gniddik ereht is llits one more"));
console.log((spinWords("Seriously this is the last one"), "ylsuoireS this is the last one"));