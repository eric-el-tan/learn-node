'use strict';

// print process.argv
process.argv.forEach(function (val, index, array) {
  console.log(index + ': ' + val);
});

let args = process.argv.slice(2);
console.log(`args: ${JSON.stringify(args)}`);