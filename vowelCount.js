/*
Instructions:
Return the number (count) of vowels in the given string.
We will consider a, e, i, o, u as vowels for this Kata (but not y).
The input string will only consist of lower case letters and/or spaces.
*/

const getCount = str => {
    let vowelsCount = 0;

    let strArr = str.split('');

    strArr.map(i => {
        switch (i) {
            case 'a':
            case 'e':
            case 'i':
            case 'o':
            case 'u':
            vowelsCount++;
            break;
        };
    });

    return vowelsCount;
};


//Test Cases:
console.log(getCount("abracadabra"), 5)
console.log(getCount("pear tree"), 4)
console.log(getCount("o a kak ushakov lil vo kashu kakao"), 13)
console.log(getCount("my pyx"), 0)
