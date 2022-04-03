/*
Instructions:
In this kata we want to convert a string into an integer. The strings simply represent the numbers in words.
Examples:
"one" => 1
"twenty" => 20
"two hundred forty-six" => 246
"seven hundred eighty-three thousand nine hundred and nineteen" => 783919
Additional Notes:
The minimum number is "zero" (inclusively)
The maximum number, which must be supported is 1 million (inclusively)
The "and" in e.g. "one hundred and twenty-four" is optional, in some cases it's present and in others it's not
All tested numbers are valid, you don't need to validate them
*/

const parseInt = string => {
    let num = 0;

    str = string.toLowerCase().replace(/\band\b|-/g, ' ').replace(/\s\s+/g, " ").trim().split(' ');

    let keys = ['million', 'thousand', "hundred"];
    let zeros = ['000000', '000', '']
    let numberStr = 'one two three four five six seven eight nine ten eleven twelve thirteen fourteen fifteen sixteen seventeen eighteen nineteen twenty thirty forty fifty sixty seventy eighty ninety'.split(' ')
    let numArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 30, 40, 50, 60, 70, 80, 90]


    keys.forEach((item, index) => {

        let i = str.indexOf(item);

        if (i > -1) {
            let tempNum = 0;

            let sub = str.splice(0, i + 1);

            if (sub.includes(keys[2])) {
                let nIndex = sub.indexOf('hundred') - 1;
                let n = numArr[numberStr.indexOf(sub[nIndex])];
                tempNum += n * 100;
                let j = sub.indexOf('hundred') + 1;

                for (let i = j; i < sub.length - 1; i++) {
                    let m = numberStr.indexOf(sub[i]);
                    tempNum += numArr[m]
                };

                tempNum += zeros[index];

                num += Number(tempNum);

            };
        };
    });

    if (str.length > 0) {
        str.forEach(i => {
            let g = numberStr.indexOf(i);
            num += numArr[g];
        });
    };

    //Planning on splitting the text into the categories and building from there, will have to slice the string out from the key word to the left.
    return num
}

//Test Cases:
console.log(parseInt('one'), 1);
console.log(parseInt('twenty'), 20);
console.log(parseInt('two hundred and forty-six'), 246);
console.log(parseInt('two hundred and four thousand and nine'),204009);
