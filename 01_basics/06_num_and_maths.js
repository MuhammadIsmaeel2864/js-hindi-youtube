const score = 400;
console.log(score);

const balance = new Number(100);
//  console.log(typeof(balance));

// console.log(balance.toString().length);
const otherNumber = 102.365;

// console.log(otherNumber.toFixed());
// console.log(otherNumber.toPrecision(4));
// console.log( );

const hundred = 1000000;
// console.log(hundred.toLocaleString('en-IN'));

//+++++++++++++++++ Maths +++++++++++++++++//

// console.log(Math);

// console.log(Math.abs(-4)); // change negative value to positive
// console.log(Math.round(4.2653)); // round the figure
// console.log(Math.ceil(4.2653));// will always round the figure to the top value
// console.log(Math.floor(4.2653));// will always round the figure to the bottom value
// console.log(Math.min(4.2653,4.562,4.9865)); // will show minimum value

// console.log((Math.random() * 10) + 1);

const min = 40;
const max = 50;

console.log(Math.floor((Math.random()*(max-min+1))+min)+1);