/*
Instructions:
Write a function done_or_not/DoneOrNot passing a board (list[list_lines]) as parameter. If the board is valid return 'Finished!', otherwise return 'Try again!'
Sudoku rules:
Complete the Sudoku puzzle so that each and every row, column, and region contains the numbers one through nine only once.
Rows:
There are 9 rows in a traditional Sudoku puzzle. Every row must contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. There may not be any duplicate numbers in any row. In other words, there can not be any rows that are identical.
In the illustration the numbers 5, 3, 1, and 2 are the "givens". They can not be changed. The remaining numbers in black are the numbers that you fill in to complete the row.
Columns:
There are 9 columns in a traditional Sudoku puzzle. Like the Sudoku rule for rows, every column must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Again, there may not be any duplicate numbers in any column. Each column will be unique as a result.
In the illustration the numbers 7, 2, and 6 are the "givens". They can not be changed. You fill in the remaining numbers as shown in black to complete the column.
Regions
A region is a 3x3 box like the one shown to the left. There are 9 regions in a traditional Sudoku puzzle.
Like the Sudoku requirements for rows and columns, every region must also contain the numbers 1, 2, 3, 4, 5, 6, 7, 8, and 9. Duplicate numbers are not permitted in any region. Each region will differ from the other regions.
In the illustration the numbers 1, 2, and 8 are the "givens". They can not be changed. Fill in the remaining numbers as shown in black to complete the region.
Valid board example:
For those who don't know the game, here are some information about rules and how to play Sudoku: http://en.wikipedia.org/wiki/Sudoku and http://www.sudokuessentials.com/
*/


const doneOrNot = board => {
    let test = '123456789'

    let done = true;

    //Add all my rows to my master 'row format' array, will be adding more to this.
    let rowsMaster = [...board];

    //Get my columns in row format
    for (let i = 0; i < board.length; i++) {
        let temp = [];
        board.forEach(item => temp.push(item[i]));
        rowsMaster.push(temp)
    };

    //Get my regions in row format
    for (let i = 0; i < board.length; i += 3) {
        let holder1 = [];
        let holder2 = [];
        let holder3 = [];
        for (let j = 0; j < board[i].length; j++) {

            switch (j) {
                case 0:
                case 1:
                case 2:
                    holder1.push(board[i][j], board[i + 1][j], board[i + 2][j])
                    break;
                case 3:
                case 4:
                case 5:
                    holder2.push(board[i][j], board[i + 1][j], board[i + 2][j])
                    break;
                case 6:
                case 7:
                case 8:
                    holder3.push(board[i][j], board[i + 1][j], board[i + 2][j])

            }
        }
        rowsMaster.push(holder1,holder2,holder3)
    }


    // Check to see if each row has 1-9
    rowsMaster.forEach(i => {
        let copy = i;
        copy = copy.sort().join('')
        if (copy !== test) {
            done = false;
        }
    })

    return done ? "Finished!" : "Try again!"
};




//Test Cases:
console.log(doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 5, 3, 4, 8],
    [1, 9, 8, 3, 4, 2, 5, 6, 7],
    [8, 5, 9, 7, 6, 1, 4, 2, 3],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 6, 1, 5, 3, 7, 2, 8, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 4, 5, 2, 8, 6, 1, 7, 9]
]) === "Finished!");

console.log(doneOrNot([
    [5, 3, 4, 6, 7, 8, 9, 1, 2],
    [6, 7, 2, 1, 9, 0, 3, 4, 9],
    [1, 0, 0, 3, 4, 2, 5, 6, 0],
    [8, 5, 9, 7, 6, 1, 0, 2, 0],
    [4, 2, 6, 8, 5, 3, 7, 9, 1],
    [7, 1, 3, 9, 2, 4, 8, 5, 6],
    [9, 0, 1, 5, 3, 7, 2, 1, 4],
    [2, 8, 7, 4, 1, 9, 6, 3, 5],
    [3, 0, 0, 4, 8, 1, 1, 7, 9]
]) === "Try again!");

