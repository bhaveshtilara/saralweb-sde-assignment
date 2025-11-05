const { mergeTimeRanges } = require("./my-module.js");

console.log(
  mergeTimeRanges(
    [
      [1000, 2000],
      [2500, 4000],
      [3900, 4100],
      [8000, 9000],
      [9050, 9500]
    ],
    200
  )
);

console.log(
  mergeTimeRanges(
    [
      [0, 10],
      [15, 20],
      [25, 30]
    ],
    4
  )
);

console.log(
  mergeTimeRanges(
    [
      [0, 10],
      [12, 15],
      [17, 25],
      [27, 35]
    ],
    3
  )
);
console.log(
  mergeTimeRanges(
    [
      [0, 5],
      [5, 10]
    ],
    0
  )
);


//i run this file on cmd and the output is this:

// [ [ 1000, 2000 ], [ 2500, 4100 ], [ 8000, 9500 ] ]
// [ [ 0, 10 ], [ 15, 20 ], [ 25, 30 ] ]
// [ [ 0, 35 ] ]
// [ [ 0, 10 ] ]