const doesColContainZero = function(grid, colNum) {
  for (let row = 0; row < 4; row++) {
    if (grid[row][colNum] == 0) {
      return true;
    }
  }
  return false;
};

const doesRowContainZero = function(grid, rowNum) {
  for (let col = 0; col < 4; col++) {
    if (grid[rowNum][col] == 0) {
      return true;
    }
  }
  return false;
};

const makeRowZero = function(grid, rowNum) {
  for (let col = 0; col < 4; col++) {
    grid[rowNum][col] = 0;
  }
};

const makeColumnZero = function(grid, colNum) {
  for (let row = 0; row < 4; row++) {
    grid[row][colNum] = 0;
  }
};

const occupyZero = function() {
  let grid = [[1, 1, 1, 0], [1, 1, 1, 1], [1, 0, 1, 1], [0, 1, 1, 1]];
  let size = 4;
  let rowBufferContainsZero = doesColContainZero(grid, 0);
  let colBufferContainsZero = doesRowContainZero(grid, 0);

  for (let row = 1; row < size; row++) {
    if (doesRowContainZero(grid, row)) {
      grid[row][0] = 0;
    }
  }

  for (let col = 1; col < size; col++) {
    if (doesColContainZero(grid, col)) {
      grid[0][col] = 0;
    }
  }

  for (let row = 1; row < size; row++) {
    if (grid[row][0] == 0) {
      makeRowZero(grid, row);
    }
  }

  for (let col = 1; col < size; col++) {
    if (grid[0][col] == 0) {
      makeColumnZero(grid, col);
    }
  }

  if (rowBufferContainsZero) {
    makeColumnZero(grid, 0);
  }
  if (colBufferContainsZero) {
    makeRowZero(grid, 0);
  }
  return grid;
};

console.log(occupyZero());
