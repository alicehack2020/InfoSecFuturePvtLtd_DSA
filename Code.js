const matrix = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
// desired output: [4, 8, 12, 11, 7, 3, 2, 6, 10, 9, 5, 1]

const matrix2 = [
    [2, 4, 23, 3],
    [7, 6, 5, 8],
    [9, 12, 10, 11]
];
// desired output: [3, 8, 11, 10, 5, 23, 4, 6, 12, 9, 7, 2]

const spiralMatrix = (matrix) => {

    let output = [];
    let temp = 0;
    for (let i = matrix[0].length - 1; i >= 0; i--) {
        
        if (temp === 0) {
            
            for (let j = 0; j < matrix.length; j++) {
                let element = matrix[j][i];
                output.push(element);
            }
            temp = 1;
        }
        else {
           
            for (let j = matrix.length - 1; j >= 0; j--) {
                let element = matrix[j][i];
                output.push(element);
            }
            temp = 0;
        }
        
    }

    return output;
}

console.log(spiralMatrix(matrix))
console.log(spiralMatrix(matrix2))