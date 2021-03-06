/*
Instructions:
The Vigenère cipher is a classic cipher originally developed by Italian cryptographer Giovan Battista Bellaso and published in 1553. It is named after a later French cryptographer Blaise de Vigenère, who had developed a stronger autokey cipher (a cipher that incorporates the message of the text into the key).

The cipher is easy to understand and implement, but survived three centuries of attempts to break it, earning it the nickname "le chiffre indéchiffrable" or "the indecipherable cipher."

From Wikipedia:

The Vigenère cipher is a method of encrypting alphabetic text by using a series of different Caesar ciphers based on the letters of a keyword. It is a simple form of polyalphabetic substitution.

. . .

In a Caesar cipher, each letter of the alphabet is shifted along some number of places; for example, in a Caesar cipher of shift 3, A would become D, B would become E, Y would become B and so on. The Vigenère cipher consists of several Caesar ciphers in sequence with different shift values.

Assume the key is repeated for the length of the text, character by character. Note that some implementations repeat the key over characters only if they are part of the alphabet -- this is not the case here.

The shift is derived by applying a Caesar shift to a character with the corresponding index of the key in the alphabet.

Visual representation:

"my secret code i want to secure"  // message
"passwordpasswordpasswordpasswor"  // key
Write a class that, when given a key and an alphabet, can be used to encode and decode from the cipher.

Example
var alphabet = 'abcdefghijklmnopqrstuvwxyz';
var key = 'password';

// creates a cipher helper with each letter substituted
// by the corresponding character in the key
var c = new VigenèreCipher(key, alphabet);

c.encode('codewars'); // returns 'rovwsoiv'
c.decode('laxxhsj');  // returns 'waffles'
Any character not in the alphabet must be left as is. For example (following from above):

c.encode('CODEWARS'); // returns 'CODEWARS'
*/

//Need to make the code more dry but for the moment it is working fine.

function VigenèreCipher(key, abc) {

    /*
    At the high level both the encode and decode work the same way with one key differnce, if they are moving forward or backwards in the key.

    I break down the key, and the alphabet being used into arrays, I then split the string and being to map over it.
    I create a var that determines which position in the key we are at so we can figure out how far to move it forward. 
    Find the index of the key item, and the current item then move it forward or backwards that many.
    If the item is not in the provided alphabet we just return it. FInally we join the string back together.
    
    */

    this.encode = (str) => {
        let a = abc.split('');
        let k = key.split('');
        return str.split('').map((curr, i) => {
            let j = i % k.length;
            let pos = a.indexOf(curr);
            let add = a.indexOf(k[j]);
            let newPos = (pos + add) % a.length;
            if (pos > -1) return a[newPos]
            else return curr;
        }).join('');

    };
    this.decode = (str) => {
        let a = abc.split('');
        let aR = abc.split('').reverse();
        let k = key.split('');
        return str.split('').map((curr, i) => {
            let j = i % k.length;
            let pos = aR.indexOf(curr);
            let add = a.indexOf(k[j]);
            let newPos = (pos + add) % a.length;
            if (pos > -1) return aR[newPos]
            else return curr;
        }).join('');
    };
}

//Test Cases:
let abc, key;
abc = "abcdefghijklmnopqrstuvwxyz";
key = "password"
let c = new VigenèreCipher(key, abc);

console.log(c.encode('codewars'), 'rovwsoiv');
console.log(c.decode('rovwsoiv'), 'codewars');

console.log(c.encode('waffles'), 'laxxhsj');
console.log(c.decode('laxxhsj'), 'waffles');

console.log(c.encode('CODEWARS'), 'CODEWARS');
console.log(c.decode('CODEWARS'), 'CODEWARS');