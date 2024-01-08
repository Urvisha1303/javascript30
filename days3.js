// Exercises: Level 1

// 1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
// let firstName = "urvisha",lastname = "Donga",countery = "India",city = "Surat", age = 25, isMarried = true,year = 2023;
console.log(typeof(firstName));
console.log(typeof(lastname));
console.log(typeof(countery));
console.log(typeof(city));
// console.log(typeof(age));
console.log(typeof(isMarried));
// console.log(typeof(year));



// 2.Check if type of '10' is equal to 10
console.log('10' == 10);
console.log('10'=== 10);

// 3.Check if parseInt('9.8') is equal to 10
console.log(parseInt('9.8') == 10);
console.log(parseInt('9.8') === 10);

// 4.Boolean value is either true or false.
//   i)Write three JavaScript statement which provide truthy value.
console.log(Boolean('vishal'));
console.log(Boolean(25.246));
console.log(Boolean(true));

// ii)Write three JavaScript statement which provide falsy value.
console.log(Boolean(0));
console.log(Boolean(0n));
console.log(Boolean(undefined));
console.log(Boolean(''));
console.log(Boolean(NaN));
console.log(Boolean(null));
console.log(Boolean(false));

// 5.Figure out the result of the following comparison expression first without using console.log(). After you decide the result confirm it using console.log()
console.log(4 > 3); //true
console.log(4 >= 3);  //true
console.log(4 < 3);  // false
console.log(4 <= 3); // false
console.log(4 == 4); //true
console.log(4 === 4); // true
console.log(4 != 4); // false
console.log(4 !== 4); // false
console.log(4 != '4'); // false
console.log(4 == '4'); // true
console.log(4 === '4'); // false

// Find the length of python and jargon and make a falsy comparison statement.
console.log('python'.length !== 'jargon'.length);  // false


// 6.Figure out the result of the following expressions first without using console.log(). After you decide the result confirm it by using console.log()
console.log(4 > 3 && 10 < 12); //true
console.log(4 > 3 && 10 > 12); //false
console.log(4 > 3 || 10 < 12); // true
console.log(4 > 3 || 10 > 12); // true
console.log(!(4 > 3)); // false
console.log(!(4 < 3)); //true
console.log(!(false));  //true
console.log(!(4 > 3 && 10 < 12)); //false
console.log(!(4 > 3 && 10 > 12)); //true
console.log(!(4 === '4')); //true
// There is no 'on' in both dragon and python
let x = 'dragon'
let y = 'python'
console.log(!(x.includes('on') && y.includes('on'))); // false

// 7.Use the Date object to do the following activities

// What is the year today?
// const now = new Date()
// console.log(now);
// console.log(now.getFullYear());

// What is the month today as a number?
// console.log(now.getMonth() + 1);

// What is the date today?
// console.log(now.getDate());

// What is the day today as a number?
// console.log(now.getDay()); // sunday - 0, thursday - 4

// What is the hours now?
// console.log(now.getHours());

// What is the minutes now?
// console.log(now.getMinutes());
// console.log(now.getMilliseconds());

//Find out the numbers of seconds elapsed from January 1, 1970 to now.


// Exercises: Level 2

// 1.Write a script that prompt the user to enter base and height of the triangle and calculate an area of a triangle (area = 0.5 x b x h).
/* const base = prompt("Enter Base value:")
const height = prompt("Enter Height Value:")
const area = ((base * height) / 2)
console.log(`The Area of The Triangle is ${area}`);
console.log("The Area of The Triangle is " + area + "");
 */

// 2.Write a script that prompt the user to enter side a, side b, and side c of the triangle and and calculate the perimeter of triangle (perimeter = a + b + c)
/* const a = parseInt(prompt("Enter side a: "))
const b = parseInt(prompt("Enter side b: "))
const c = parseInt(prompt("Enter side c: "))
const total =(a + b + c);
console.log("The perimeter of the triangle is " + total + ""); */


// 3.Get length and width using prompt and calculate an area of rectangle (area = length x width and the perimeter of rectangle (perimeter = 2 x (length + width))
// const length = parseInt(prompt("Enter the length: "))
// const width = parseInt(prompt("Enter the width: "))
// // const perimeter = 2 * (length + width)
// console.log((length + width) * 2);

// 4.Get radius using prompt and calculate the area of a circle (area = pi x r x r) and circumference of a circle(c = 2 x pi x r) where pi = 3.14.
/* const r = parseInt(prompt("Enter th value: "))
console.log(Math.PI * r * r);
 */

// 5.Calculate the slope, x-intercept and y-intercept of y = 2x -2
/* let a_intercept = prompt("Enter X Value: ")
let b_intercept = 2*a_intercept - 2
console.log(b_intercept) */


// 6.Slope is m = (y2-y1)/(x2-x1). Find the slope between point (2, 2) and point(6,10)

/* const x1 = prompt("Enter X1: ")
const x2 = prompt("Enter x2: ")
const y1 = prompt("Enetr y1: ")
const y2 = prompt("Enter y2: ")
const m = (y2-y1) / (x2-x1)
console.log(m); */

// 7.Compare the slope of above two questions.
// m > b_intercept?console.log("m is bigger"): console.log("b_intercept is bigger");

// 8.Calculate the value of y (y = x2 + 6x + 9). Try to use different x values and figure out at what x value y is 0.
// const x3 = prompt("enter X Value:")
// const y3 = x3*2 + 6*x3 + 9
// console.log(y3);

// 9.Writ a script that prompt a user to enter hours and rate per hour. Calculate pay of the person?
// let h = (prompt("Enter hours:"))
// let r = prompt("Enter rate per hour:")
// console.log(h* r);

// 10.If the length of your name is greater than 7 say, your name is long else say your name is short.
// let name = prompt("Enter Name:")
// if (name.length > 7){
//     console.log("Your name is Long");
// }
// else{
//     console.log("Your Name is Short");
// }

// 11.Compare your first name length and your family name length and you should get this output.
//  let firstName1 = prompt("Enter First name: ")
//  let familyName = prompt("Enter Family name:")
//  if (firstName.length > familyName.length){  
//     console.log("Your first name, Asabeneh is longer than your family name, Yetayeh");
//  }
//  else{
//     console.log("Your first name, Asabeneh is Shorter than your family name, Yetayeh");
//  }

// 12.Declare two variables myAge and yourAge and assign them initial values and myAge and yourAge.
// let myAge = prompt("Enter My Age:")
// let yourAge = prompt("Enter Your Age: ")
// console.log(`I am ${myAge - yourAge} years older than you.`);

// 13.Using prompt get the year the user was born and if the user is 18 or above allow the user to drive if not tell the user to wait a certain amount of years.

/* let birth = prompt("Enter Your Birth: ")
let now = new Date() 
let age = now.getFullYear() - birth;
if (age >= 18){
console.log(`You are ${age}. You are old enough to drive`);
}
else{
    console.log(`You are ${age}. You will be allowed to drive after ${18-age} years.`);
} */


// 14.Write a script that prompt the user to enter number of years. Calculate the number of seconds a person can live. Assume some one lives just hundred years

// let numberofYear = prompt("Enter number of years you live: ")
// let second = numberofYear *60*60*24*365
// console.log(`You lived ${second} seconds.`)

// 15.Create a human readable time format using the Date time object
// let now = new Date()
// let year = now.getFullYear()
// let month = now.getMonth() + 1;
// let hour = now.getHours()
// let day = now.getDay()
// let date = now.getDate()
// let minutes = now.getMinutes()
// console.log(now.getTime());
//  i) YYYY-MM-DD HH:mm
// console.log(`${year}-${month}-${date}  ${hour}:${minutes}`);

// ii)DD-MM-YYYY HH:mm
// console.log(`${date}-${month}-${year}  ${hour}:${minutes}`);

// iii)DD/MM/YYYY HH:mm
// console.log(`${date}/${month}/${year}  ${hour}:${minutes}`);

// Exercises: Level 3
// Create a human readable time format using the Date time object. The hour and the minute should be all the time two digits(7 hours should be 07 and 5 minutes should be 05 ) 
//i) YYY-MM-DD HH:mm eg. 20120-01-02 07:05

let now = new Date()
let year = now.getFullYear()
let month = (now.getMonth() + 1).toString().padStart(2, '0');
let hour = now.getHours().toString().padStart(2, '0')
let day = now.getDay().toString().padStart(2, '0')
let date = now.getDate().toString().padStart(2, '0')
let minutes = now.getMinutes().toString().padStart(2, '0')
console.log(now.getTime());

console.log(`${year}-${month}-${date}  ${hour}:${minutes}`);





