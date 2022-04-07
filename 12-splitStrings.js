/*
Instructions: 
Complete the solution so that it splits the string into pairs of two characters. If the string contains an odd number of characters then it should replace the missing second character of the final pair with an underscore ('_').
Examples:
* 'abc' =>  ['ab', 'c_']
* 'abcdef' => ['ab', 'cd', 'ef']
*/

const solution = str => {
    //Holder arr for res
    let res = [];

    //Check to make sure we have a string to work with
    if (str.length === 0) return [];

    //Split so we can map, if index is even push the item in, if it is odd add it to the last item
    str.split('').forEach((item, index) => {
        if (index % 2 === 0) {
            res.push(item)
        } else {
            res[res.length - 1] += item
        }
    })

    //Check to see if we need to add an underscore
    if (res[res.length - 1].length < 2) {
        res[res.length - 1] += '_'
    }

    return res
}


//Test Cases:
console.log(solution("abcdef"), ["ab", "cd", "ef"]);
console.log(solution("abcdefg"), ["ab", "cd", "ef", "g_"]);
console.log(solution(""), [])