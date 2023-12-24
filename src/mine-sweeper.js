const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper(matrix) {
  const rows = matrix.length;
  const columns = matrix[0].length;
  const res = Array.from({ length: rows }, () => Array(columns).fill(0));
  console.log(res);

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < columns; j++) {
      if (matrix[i][j]) {
        for (let x = Math.max(0, i - 1); x <= Math.min(rows - 1, i + 1); x++) {
          for (let y = Math.max(0, j - 1); y <= Math.min(columns - 1, j + 1); y++) {
            res[x][y]++;
          }
        }
        res[i][j]--;
      }
    }
  }

  return res;
}

module.exports = {
  minesweeper
};
