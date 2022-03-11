/*
Instructions:
Welcome. In this kata, you are asked to square every digit of a number and concatenate them.
For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.
Note: The function accepts an integer and returns an integer
*/

const squareDigits = num => {
    //Turn the num into an arr of strs
    let str = num.toString().split('');

    //map over the arr turn them back into nums and use math
    let res = str.map(i => Math.pow(parseInt(i), 2))

    //join the arr and turn it back into a num
    return parseInt(res.join(''));
};

//Test Cases:
console.log(squareDigits(3212), 9414);
console.log(squareDigits(2112), 4114);
console.log(squareDigits(0), 0);
console.log(squareDigits(8191172), 6418111494);
console.log(squareDigits(7519949), 4925181811681);
console.log(squareDigits(5483003), 2516649009);
console.log(squareDigits(8708835), 644906464925);
console.log(squareDigits(9278639), 814496436981);
console.log(squareDigits(3388515), 99646425125);
console.log(squareDigits(5255350), 25425259250);
console.log(squareDigits(4327158), 16944912564);
console.log(squareDigits(1454905), 116251681025);
console.log(squareDigits(7168849), 4913664641681);
console.log(squareDigits(1104901), 110168101);
console.log(squareDigits(2421679), 41641364981);
console.log(squareDigits(2584208), 42564164064);
console.log(squareDigits(2722267), 4494443649);
console.log(squareDigits(2806905), 46403681025);
console.log(squareDigits(7865228), 496436254464);
console.log(squareDigits(627532), 364492594);
console.log(squareDigits(3944508), 981161625064);
console.log(squareDigits(2441950), 41616181250);
console.log(squareDigits(2987622), 48164493644);
console.log(squareDigits(3017692), 9014936814);
console.log(squareDigits(642753), 3616449259);
console.log(squareDigits(841779), 64161494981);
console.log(squareDigits(3626608), 93643636064);
console.log(squareDigits(4528563), 162546425369);
console.log(squareDigits(1914086), 18111606436);
console.log(squareDigits(7802782), 49640449644);
console.log(squareDigits(2622783), 4364449649);
console.log(squareDigits(3658398), 936256498164);
console.log(squareDigits(3372030), 99494090);
console.log(squareDigits(245163), 416251369);
console.log(squareDigits(3848054), 964166402516);
console.log(squareDigits(7469631), 491636813691);
console.log(squareDigits(3810555), 96410252525);
console.log(squareDigits(9073157), 81049912549);
console.log(squareDigits(1703047), 1490901649);
console.log(squareDigits(4379154), 169498112516);
console.log(squareDigits(4383004), 1696490016);
console.log(squareDigits(9873173), 81644991499);
console.log(squareDigits(6499931), 361681818191);
console.log(squareDigits(2849598), 4641681258164);
console.log(squareDigits(9905507), 818102525049);
console.log(squareDigits(1043591), 1016925811);
console.log(squareDigits(9020060), 810400360);
console.log(squareDigits(2732887), 44994646449);
console.log(squareDigits(8206914), 64403681116);
console.log(squareDigits(3408890), 91606464810);
console.log(squareDigits(5417616), 251614936136);
console.log(squareDigits(7573301), 4925499901);
console.log(squareDigits(6313824), 3691964416);
console.log(squareDigits(411542), 161125164);
console.log(squareDigits(2446146), 416163611636);
console.log(squareDigits(8816912), 64641368114);
console.log(squareDigits(8659182), 643625811644);
console.log(squareDigits(2961476), 481361164936);
console.log(squareDigits(4113192), 161191814);
console.log(squareDigits(9286068), 814643603664);
console.log(squareDigits(1090745), 10810491625);
console.log(squareDigits(5202479), 25404164981);
console.log(squareDigits(5678387), 2536496496449);
console.log(squareDigits(1515303), 125125909);
