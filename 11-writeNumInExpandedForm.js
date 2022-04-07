/*
Instructions:
Write Number in Expanded Form
You will be given a number and you will need to return it as a string in Expanded Form. For example:

expandedForm(12); // Should return '10 + 2'
expandedForm(42); // Should return '40 + 2'
expandedForm(70304); // Should return '70000 + 300 + 4'
NOTE: All numbers will be whole numbers greater than 0.
*/

const expandedForm = num => {
    let strArr = [];
    num
        .toString()
        .split('')
        .reverse()
        .forEach((item, index) => {
            let n = parseInt(item)
            let tenth = '1'
            while (tenth.length < index + 1) {
                tenth += '0';
            };

            let num = n * parseInt(tenth);
            if (num !== 0) {
                strArr.unshift(num);
            }

        })

    return strArr.join(' + ');
}

//Test Cases:
console.log(expandedForm(12) === '10 + 2');
console.log(expandedForm(42) === '40 + 2');
console.log(expandedForm(70304) === '70000 + 300 + 4');