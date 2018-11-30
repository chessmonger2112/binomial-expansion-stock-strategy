console.log("sup");

var paths1 = [];
var paths2 = [];
var paths3 = [];
var paths4 = [];
var paths5 = [];
var paths6 = [];

function calculateAllPaths(path, t, paths, sellpoint) {

  if (path.length === t) {
    paths.push(path);
    return false;
  }

  var state = calculateState(path);

  if (state <= sellpoint) {
    return false;
  }

  console.log("state: " + state + " sellpoint: " + sellpoint);

  calculateAllPaths(path + "0", t, paths, sellpoint);
  calculateAllPaths(path + "1", t, paths, sellpoint);
}

function calculateState(path) {
  var paths = path.split("").map(Number);
  var state = paths.reduce((a,b) => {
    if (b === 0) {
      b = -1;
    }
    return a + b;
  }, 0);
  return state;
}


function doAllTests() {
  calculateAllPaths("", 4, paths1);
  calculateAllPaths("", 2, paths2);
  calculateAllPaths("", 1, paths3);
  calculateAllPaths("", 0, paths4);
  calculateAllPaths("", 5, paths5);

  console.log(paths1.length === 16);
  console.log(paths2.length === 4);
  console.log(paths3.length === 2);
  console.log(paths4.length === 1);
  console.log(paths5.length === 32);

  var testArrays = [];
  var answers = [];

  for (var i = 0; i <= 20; i ++) {
    testArrays.push([]);
    calculateAllPaths("", i, testArrays[i]);
    var numberOfPaths = 2 ** i;
    console.log(testArrays[i].length === numberOfPaths)
  }

  calculateAllPaths("", 20, paths5);
}


// doAllTests();

