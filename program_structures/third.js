/*
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.


loop 15 times


its a 8x8 grid pattern
every even position is #
after every position divisible by 8 there is a newline character

loop {gridSize}
   
        if {isOddLine} 
             loop {gridSize}
                if({innerCounter} % 2 == 0) add ' ' to {pattern}
                else add '#' to {pattern}
        else
            loop {gridSize}
                if({innerCounter} % 2 == 0) add '#' to {pattern}
                else add ' ' to {pattern}
        add newline to {pattern}
     

*/


let pattern = ''
let isOddLine = true
let gridSize = 21
for (let count = 0; count < gridSize; count++) {
    if (isOddLine) {
        for (let innerCount = 0; innerCount < gridSize; innerCount++) {
            if (innerCount % 2 == 0) pattern += '#';
            else pattern += ' ';
        }
    } else {
        for (let innerCount = 0; innerCount < gridSize; innerCount++) {
            if (innerCount % 2 == 0) pattern += ' ';
            else pattern += '#';
        }
    }
    pattern += '\n'
    isOddLine = !isOddLine;
}


console.log(pattern)