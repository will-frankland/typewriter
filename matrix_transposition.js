// looping method
const transpose = function(matrix) {
  // create a new empty array variable
  let newArray = [];
  // loop through the original aarray
  for (let i = 0; i < matrix[0].length; i++) {
    // push the elements to the new array
    newArray.push([]);
    //console.log(newArray)
  }
  // loops through the rows of the original element
  for (let j = 0; j < matrix.length; j++) {
    // loops through the columns of the original array
    for (let c = 0; c < matrix[j].length; c++) {
      // Reverses the columns and rows from input (matrix) to newArray
      newArray[c][j] = matrix[j][c];
    }
  }
  return newArray;
};

// .map() method test
// const transpose = function(matrix) {
//   return matrix[0].map((col, i) => matrix.map(row => row[i]));
// };

// Do not edit this function.
const printMatrix = (matrix) => {
    for (const row of matrix) {
        for (const el of row) {
            process.stdout.write(el + " ");
        }
        process.stdout.write('\n')
    }
}

printMatrix(transpose([
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4],
  [1, 2, 3, 4]
]));

console.log('----')

printMatrix(transpose([
  [1, 2],
  [3, 4],
  [5, 6]
]));

console.log('----')

printMatrix(transpose([
  [1, 2, 3, 4, 5, 6, 7]
]));