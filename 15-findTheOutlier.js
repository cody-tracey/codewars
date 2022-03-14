/*
Instructions:
You are given an array (which will have a length of at least 3, but could be very large) containing integers. The array is either entirely comprised of odd integers or entirely comprised of even integers except for a single integer N. Write a method that takes the array as an argument and returns this "outlier" N.
Examples
[2, 4, 0, 100, 4, 11, 2602, 36]
Should return: 11 (the only odd number)
[160, 3, 1719, 19, 11, 13, -21]
Should return: 160 (the only even number)
*/

const findOutlier = integers => {

    let outlier;
    let test = 0;
    let counter = 0;

    //Checking to see if I need to search for odd or even
    for (let i = 0; i < 3; i++) {
        if (integers[i] % 2 === 0) {
            test++;
        } else {
            test--;
        };
    };

    //Determining what my remainder should be when testing
    test < 0 ? test = 1 : test = 0; 

    //While I have not solved the puzzle yet I will divide each number by 2 to see if it is odd or even, and then compare to the test to see if it matches the others or is the outlier.
    while (outlier === undefined) {
        if (Math.abs(integers[counter] % 2) !== test) {
            outlier = integers[counter]
        }
        counter++;
    }

    return outlier
};


//Test Cases:
console.log(findOutlier([0, 1, 2]) === 1)
console.log(findOutlier([1, 2, 3]) === 2)
console.log(findOutlier([2, 6, 8, 10, 3]) === 3)
console.log(findOutlier([0, 0, 3, 0, 0]) === 3)
console.log(findOutlier([1, 1, 0, 1, 1]) === 0)
console.log(findOutlier([103814921,66010227,-145052707,174258971,101785329,35254681,478253,-125908769,181055613,88449053,21056207,18525803,115314985,8796825,43655451,96715527,-105480319,46679085,-170846531,138817763,181847005,40565756,17608219,-89708309]) === 40565756)

