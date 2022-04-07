/*
Instructions:
Complete the function/method (depending on the language) to return true/True when its argument is an array that has the same nesting structures and same corresponding length of nested arrays as the first array.

For example:

 // should return true
[ 1, 1, 1 ].sameStructureAs( [ 2, 2, 2 ] );          
[ 1, [ 1, 1 ] ].sameStructureAs( [ 2, [ 2, 2 ] ] );  

 // should return false 
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2, 2 ], 2 ] );  
[ 1, [ 1, 1 ] ].sameStructureAs( [ [ 2 ], 2 ] );  

// should return true
[ [ [ ], [ ] ] ].sameStructureAs( [ [ [ ], [ ] ] ] ); 

// should return false
[ [ [ ], [ ] ] ].sameStructureAs( [ [ 1, 1 ] ] );     
For your convenience, there is already a function 'isArray(o)' declared and defined that returns true if its argument is an array, false otherwise.
*/

Array.prototype.sameStructureAs = function (other) {
    // Return 'true' if and only if 'other' has the same
    // nesting structure as 'this'.

    if(Array.isArray(other) === false) return false;

    let res = true;

    let holder1 = [];
    let holder2 = [];
    let temp1 = [...this];
    let temp2 = [...other];



    while (res && temp1.length > 0) {

        let item1 = temp1.shift();
        let item2 = temp2.shift();

        if(temp1.length !== temp2.length){
            res = false;
            break;
        }
        if (Array.isArray(item1) === Array.isArray(item2)) {
            if (Array.isArray(item1)) {
                holder1.push(...item1);
                holder2.push(...item2);
            }
        } else {
            res = false;
        };

        if(temp1.length === 0 && temp2.length === 0){
            temp1 = holder1;
            holder1 = [];
    
            temp2 = holder2;
            holder2 = [];
        }

        if (temp1.length === 0) {
            return res;
        }

    };
    return res
};

//Test Cases:
// let test1 = [1, 1, []].sameStructureAs([2, 2, 2]);
// let test2 = [1, [1, 1]].sameStructureAs([2, [2, 2]]);
// let test3 = [1, [1, 1]].sameStructureAs([[2, 2], 2]);
// let test4 = [1, [1, 1]].sameStructureAs([[2], 2]);
// let test5 = [[[], []]].sameStructureAs([[[], []]]);
// let test6 = [[[], []]].sameStructureAs([[1, 1]]);
// let test7 = [1, [1, 1]].sameStructureAs([2, [2]]);
let test8 = [1,'[',']'].sameStructureAs(['[',']',1]);

// console.log(test1, true);
// console.log(test2, true);
// console.log(test3, false);
// console.log(test4, false);
// console.log(test5, true);
// console.log(test6, false);
// console.log(test7, false);
console.log(test8, true);





