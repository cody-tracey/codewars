/*
Instructions:
This time no story, no theory. The examples below show you how to write function accum:
Examples:
accum("abcd") -> "A-Bb-Ccc-Dddd"
accum("RqaEzty") -> "R-Qq-Aaa-Eeee-Zzzzz-Tttttt-Yyyyyyy"
accum("cwAt") -> "C-Ww-Aaa-Tttt"
The parameter of accum is a string which includes only letters from a..z and A..Z.
*/

//Original
// const accum = s => {
//     //Transform text into all lowercase to make it equal, and into an arr
//     let sArr = s.toLowerCase().split('');
//     //Map over it and push that item into a temp arr index+1 times
//     let longerArr = sArr.map((item, index) => {
//         let holder = [];
//         while (holder.length <= index) {
//             holder.push(item)
//         }
//         //Transform the first letter in the arr to capital
//         holder[0] = holder[0].toUpperCase();
//         //Join it back to a str and return it
//         return holder.join('')
//     });
//     //Return the longerArr as a str
//     return longerArr.join('-')
// };

//Refactored
const accum = s => {
    /*
    Transforms the text to all lovercase then splits and maps over it.
    It pushed the item in x times where x is the index, then transforms the first item to uppercase.
    */
    return s.toLowerCase().split('').map((item, index) => {
        let holder = [];
        while (holder.length <= index) {
            holder.push(item)
        }
        //Transform the first letter in the arr to capital
        holder[0] = holder[0].toUpperCase();
        //Join it back to a str and return it
        return holder.join('')
    }).join('-');

};


//Test Cases:
console.log(accum("AbC") === "A-Bb-Ccc");
console.log(accum("ZpglnRxqenU") === "Z-Pp-Ggg-Llll-Nnnnn-Rrrrrr-Xxxxxxx-Qqqqqqqq-Eeeeeeeee-Nnnnnnnnnn-Uuuuuuuuuuu");
console.log(accum("NyffsGeyylB") === "N-Yy-Fff-Ffff-Sssss-Gggggg-Eeeeeee-Yyyyyyyy-Yyyyyyyyy-Llllllllll-Bbbbbbbbbbb");
console.log(accum("MjtkuBovqrU") === "M-Jj-Ttt-Kkkk-Uuuuu-Bbbbbb-Ooooooo-Vvvvvvvv-Qqqqqqqqq-Rrrrrrrrrr-Uuuuuuuuuuu");
console.log(accum("EvidjUnokmM") === "E-Vv-Iii-Dddd-Jjjjj-Uuuuuu-Nnnnnnn-Oooooooo-Kkkkkkkkk-Mmmmmmmmmm-Mmmmmmmmmmm");
console.log(accum("HbideVbxncC") === "H-Bb-Iii-Dddd-Eeeee-Vvvvvv-Bbbbbbb-Xxxxxxxx-Nnnnnnnnn-Cccccccccc-Ccccccccccc");