/*
Instructions:
In this kata, you will write a function that returns the positions and the values of the "peaks" (or local maxima) of a numeric array.
For example, the array arr = [0, 1, 2, 5, 1, 0] has a peak at position 3 with a value of 5 (since arr[3] equals 5).
The output will be returned as an object with two properties: pos and peaks. Both of these properties should be arrays. If there is no peak in the given array, then the output should be {pos: [], peaks: []}.
Example: pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]) should return {pos: [3, 7], peaks: [6, 3]} (or equivalent in other languages)
All input arrays will be valid integer arrays (although it could still be empty), so you won't need to validate the input.
The first and last elements of the array will not be considered as peaks (in the context of a mathematical function, we don't know what is after and before and therefore, we don't know if it is a peak or not).
Also, beware of plateaus !!! [1, 2, 2, 2, 1] has a peak while [1, 2, 2, 2, 3] and [1, 2, 2, 2, 2] do not. In case of a plateau-peak, please only return the position and value of the beginning of the plateau. For example: pickPeaks([1, 2, 2, 2, 1]) returns {pos: [1], peaks: [2]} (or equivalent in other languages)
Have fun!
*/

const pickPeaks = arr => {
    let res = {
        pos: [],
        peaks: []
    };

    //Early return if arr is empty otherwise we will get stuck in a for loop.
    if (arr.length === 0) return res;

    //Remove the last item(s) as we do not need them.
    let lastItem = arr.pop();
    while (arr[arr.length - 1] === lastItem) {
        if (arr[arr.length - 1] === lastItem) arr.pop();
    };


    //Removing the final climb as it never peaks
    while (arr[arr.length - 1] >= arr[arr.length - 2] && arr[arr.length - 1] < lastItem) {
        arr.pop()
    }

    let peak;
    let pos;


    for (let i = 1; i < arr.length; i++) {
        //Save myself some writing and keep it dry
        let curr = arr[i];
        let next = arr[i + 1];
        let prev = arr[i - 1];

        //If the current item is greater than the next item, and greater than the previous item we set it as the current peak/pos
        if (curr >= next && curr > prev) {
            peak = curr;
            pos = i;
        }
        // If the current item is less than the previous and the next item we push the peak/pos to the res and 'reset' the peak/pos
        else if (curr < prev && peak !== undefined) {

            res.pos.push(pos);
            res.peaks.push(peak);

            peak = undefined;
            pos = undefined;
        };

        // If we are on the last item and we have not pushed this current peak/pos we do so
        if (i === arr.length - 1) {
            if (curr > lastItem && curr > prev) {
                res.pos.push(i);
                res.peaks.push(curr)
            } else if (pos !== res.pos[res.pos.length - 1] && pos !== undefined) {
                res.pos.push(pos);
                res.peaks.push(peak);
            }
        };
    };
    return res
};

//Test Cases:
console.log(pickPeaks([1, 2, 3, 6, 4, 1, 2, 3, 2, 1]), { pos: [3, 7], peaks: [6, 3] });
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 3]), { pos: [3, 7], peaks: [6, 3] });
console.log(pickPeaks([3, 2, 3, 6, 4, 1, 2, 3, 2, 1, 2, 2, 2, 1]), { pos: [3, 7, 10], peaks: [6, 3, 2] });
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2, 1]), { pos: [2, 4], peaks: [3, 2] });
console.log(pickPeaks([2, 1, 3, 1, 2, 2, 2, 2]), { pos: [2], peaks: [3] });
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 5, 6]), { pos: [2], peaks: [3] });
console.log(pickPeaks([2, 1, 3, 2, 2, 2, 2, 1]), { pos: [2], peaks: [3] });
console.log(pickPeaks([1, 2, 5, 4, 3, 2, 3, 6, 4, 1, 2, 3, 3, 4, 5, 3, 2, 1, 2, 3, 5, 5, 4, 3]), { pos: [2, 7, 14, 20], peaks: [5, 6, 5, 5] });
console.log(pickPeaks([]), { pos: [], peaks: [] });
console.log(pickPeaks([1, 1, 1, 1]), { pos: [], peaks: [] });
console.log(pickPeaks([14, -1, 8, 4, 0, 2, 2, 0, 11, 5]), { pos: [2, 5, 8], peaks: [8, 2, 11] });
console.log(pickPeaks([9, 0, 6]), { pos: [], peaks: [] });
console.log(pickPeaks([0, 13, 15, 3, 9, 9, -3, 9, -3, 7, 3, 2, 9, -2, 10, 1, -1, -3, 1, 1, 2, 12, 15]), { pos: [2, 4, 7, 9, 12, 14], peaks: [15, 9, 9, 7, 9, 10] });
console.log(pickPeaks([7, 2, -1, 15, 0, 14, 2, 4, 6, 8, 4, -1, 5, -2, -1, 8, 5, 9, -1, 3, 4, 10, 14, 8, -1, 6, 3, 14, -1, 6]), { pos: [3, 5, 9, 12, 15, 17, 22, 25, 27], peaks: [15, 14, 8, 5, 8, 9, 14, 6, 14] });
// console.log(pickPeaks([-3, 6, 5, 0, 0, 11, -3, 11, -1, 7, -3, 3, 14, 7, 13, 14, 8, 0, 12, 10, 12, -2, 7, 2]), { pos: [1, 5, 7, 9, 12, 15, 18, 20, 22], peaks: [6, 11, 11, 7, 14, 14, 12, 12, 7] });









