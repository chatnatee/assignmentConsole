// this is your main.js script
var first_name = 'marry'; 
var Last_name = 'johnson';
var country = 'Canada';
var city = 'Toronto';
var age = 32;
var ismarried = true;
var year = 2022;

console.log(typeof first_name);
console.log(typeof Last_name);
console.log(typeof country);
console.log(typeof city);
console.log(typeof age);
console.log(typeof ismarried);
console.log(typeof year);

console.log(10 == 10);
console.log(9.8 == 10);

console.log(12 > 3);
console.log(3 > 1);
console.log(420 > 69);
console.log(123 < 123);
console.log(156 == 123);
console.log(3.14 != 3.14);

console.log(4 > 3); //true
console.log(4 >= 3); //false
console.log(4 < 3); //false
console.log(4 <= 3); //false
console.log(4 == 4); //true
console.log(4 === 4); //true
console.log(4 != 4); //false
console.log(4 !=== 4); //false
console.log(4 != '4'); //false
console.log(4 == '4'); //false
console.log(4 === '4'); //false
console.log('python'.length == 'jargon'.length);

console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); //true
console.log(4 > 3 || 10 > 12); //true
console.log(!(4 > 3)); //false
console.log(!(4 < 3)); //true
console.log(!(false)); //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true
console.log('python'.length === 'jargon'.length);

const now = new Date()
console.log(now)
const year = now.getFullYear()
console.log(year)
const month = now.getMonth()
console.log(month)
const date = now.getDate()
console.log(date)
const day = now.getDay()
console.log(day)
const hours = now.getHours()
console.log(hours)
const minutes = now.getMinutes()
console.log(minutes)
const allSeconds = Date.now()
console.log(allSeconds)

let base = prompt('Enter number', 'number goes here')
let height = prompt('Enter number', 'number goes here')
var x = 0.5
console.log(x * base * height)

let side_A = prompt('Enter number', 'number goes here')
let side_B = prompt('Enter number', 'number goes here')
let side_C = prompt('Enter number', 'number goes here')
console.log(side_A + side_B + side_C)


const allSeconds = Date.now() //
console.log(allSeconds)

console.log(`${year}-${month}-${day} ${hours}:${minutes})
console.log(`${day}-${month}-${year} ${hours}:${minutes})
console.log(`${date}/${month}/${year} ${hours}:${minutes})

console.log(`${date}-${month}-${year} ${hours}:${minutes})

