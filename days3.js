// Exercises: Level 1

// 1.Declare firstName, lastName, country, city, age, isMarried, year variable and assign value to it and use the typeof operator to check different data types.
let firstName = "urvisha",lastname = "Donga",countery = "India",city = "Surat", age = 25, isMarried = true,year = 2023;
console.log(typeof(firstName));
console.log(typeof(lastname));
console.log(typeof(countery));
console.log(typeof(city));
console.log(typeof(age));
console.log(typeof(isMarried));
console.log(typeof(year));

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
const now = new Date()
console.log(now);
console.log(now.getFullYear());

// What is the month today as a number?
console.log(now.getMonth() + 1);

// What is the date today?
console.log(now.getDate());

// What is the day today as a number?
console.log(now.getDay()); // sunday - 0, thursday - 4

// What is the hours now?
console.log(now.getHours());

// What is the minutes now?
console.log(now.getMinutes());
console.log(now.getMilliseconds());

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
