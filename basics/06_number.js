const score=4.45642
console.log(typeof score);
const balance=new Number(100)
console.log(typeof balance);
console.log(balance);
console.log(balance.toString().length);
console.log(balance.toFixed(5));
console.log(score.toPrecision(4));
const money=10000000;
console.log(money.toLocaleString('en-IN'));
console.log(Number.MIN_VALUE);

// MATHS         


console.log(Math);
console.log(Math.abs(-4));
console.log(Math.ceil(-5.8));
console.log(Math.floor(6.7));
console.log(Math.max(1,4,6,8));

// otp generator 

const min=100000;
const max=999999;
console.log(Math.floor(Math.random() * (max-min+1)+min))