const getGridOfSize = function(size) {
  let count = 1;
  let grid = new Array(size).fill(0).map(arr => new Array(size).fill(0));
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      grid[i][j] = count;
      count++;
    }
  }
  return grid;
};

const gridRotation = function(size) {
  let grid = getGridOfSize(size);
  console.log("original grid:\n", grid);
  let noOfLayers = Math.floor(size / 2);
  for (let layer = 0; layer < noOfLayers; layer++) {
    let first = layer;
    let last = size - 1 - layer;
    for (let i = first; i < last; i++) {
      let temp = grid[layer][i];
      grid[layer][i] = grid[size - 1 - i][layer];
      grid[size - 1 - i][layer] = grid[last][size - 1 - i];
      grid[last][size - 1 - i] = grid[i][last];
      grid[i][last] = temp;
    }
  }
  console.log("rotated grid:\n", grid);
};
