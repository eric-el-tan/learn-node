const numbers = [1, -1, 2, 3];

// let sum = 0;
// for (let n of numbers)
//     sum += n;


const sum = numbers.reduce((acc, val) => {
    return acc + val;
}, 0);

console.log('sum = ', sum);