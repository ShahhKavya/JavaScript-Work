const name ="kavya";
const num=16;
console.log(`hi my name is ${name} and my num is ${num}`);
const gamename = new String  ('shah');
console.log(gamename[0]);
console.log(gamename.__proto__);
console.log(gamename.length);
console.log(gamename.toUpperCase())
console.log(gamename.charAt(2));
console.log(gamename.indexOf('s'));

const newString = gamename.substring(0,2);
console.log(newString);
const anotherString=gamename.slice(0,2);
console.log(anotherString);

const login = "  hiii  "
console.log(login.trim());