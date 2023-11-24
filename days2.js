// 1.Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
let a = '30 Days Of JavaScript'

// 2.Print the string on the browser console using console.log()
console.log(a); //30 Days Of JavaScript

// 3.Print the length of the string on the browser console using console.log()
console.log(a.length); //21

// 4.Change all the string characters to capital letters using toUpperCase() method
console.log(a.toUpperCase()); //30 DAYS OF JAVASCRIPT

// 5.Change all the string characters to lowercase letters using toLowerCase() method
console.log(a.toLowerCase()); //30 days of javascript

// 6.Cut (slice) out the first word of the string using substr() or substring() method
console.log(a.substr(3)); // ys Of J
console.log(a.substring(3, 10)); //Days Of

// 7.Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(a.slice(3,22)); // Days Of JavaScript

// 8.Check if the string contains a word Script using includes() method
console.log(a.includes("Script"));  //true

// 9.Split the string into an array using split() method
console.log(a.split()); //[ '30 Days Of JavaScript' ]

// 10.Split the string 30 Days Of JavaScript at the space using split() method
console.log(a.split(' ')); // [ '30', 'Days', 'Of', 'JavaScript' ]

// 11.'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
let u = 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon';
console.log(u.split(','));//['Facebook', ' Google', ' Microsoft', ' Apple', ' IBM', ' Oracle', ' Amazon']

// 12.Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(a.replace('JavaScript', 'Python')); //30 Days Of Python

// 13.What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(a.charAt(15));  // s

// 14.What is the character code of J in '30 Days Of JavaScript' string using charCodeAt() ASCII number provided
console.log(a.charCodeAt(11))  //74

// 15.Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(a.indexOf('a')); //4

// 16.Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(a.lastIndexOf('a')); //14

// 17.Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
var b= 'You cannot end a sentence with because because because is a conjunction';
console.log(b.indexOf('because')); // 31

// 18.Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(b.lastIndexOf('because'));  //47

// 19.Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(b.search("because")); //31

// 20.Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
let r = ' 30 Days Of JavaScript'
console.log(r);
console.log(r.trim());

// 21.Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(r.startsWith(" ")); //true

// 22.Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(r.endsWith("JavaScript")); //true

// 23.Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(r.match('Days'));

// 24.Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
let e = '30 Days Of '
console.log(e.concat('JavaScript'));

// 25.Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(r.repeat(2));

// Exercise: Level 2

// 1.Using console.log() print out the following statement:
let f= "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.";
console.log(f);

// 2.Using console.log() print out the following quote by Mother Teresa:
let g = "Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead.";
console.log(g);

// 3.Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
let w = '10'
let q = 10
console.log(typeof q);
console.log(typeof w);
console.log(typeof parseInt(w));

// 4.Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.
let p = '9.8'
console.log(typeof p);
let o = 10
console.log(typeof o);
console.log(typeof parseFloat(p));

// 5.Check if 'on' is found in both python and jargon
let j = 'python'
console.log(j.includes('on'));
let k = 'jargon'
console.log(k.includes('on'));


// 6.I hope this course is not full of jargon. Check if jargon is in the sentence.
let t= 'I hope this course is not full of jargon'
console.log(t.search('jargon'));

//7.Generate a random number between 0 and 100 inclusively.
const ra = Math.floor(Math.random() * 101)
console.log(ra);

// 8.Generate a random number between 50 and 100 inclusively.
const ram = Math.floor(Math.random() * 51) + 50
console.log(ram);

// 9.Generate a random number between 0 and 255 inclusively.
const ram1 = Math.floor(Math.random() * 256)
console.log(ram1);

// 10.Access the 'JavaScript' string characters using a random number.
const sm = "JavaScript"
const sm1 = Math.floor(Math.random() * 9)
console.log(sm.charAt(sm1));

// 11.Use console.log() and escape characters to print the following pattern.
console.log(" 1 1 1 1 1\n 2 1 2 4 8\n 3 1 3 9 27\n 4 1 4 16 64\n 5 1 5 25 125");

// 12.Use substr to slice out the phrase because because because from the following sentence:'You cannot end a sentence with because because because is a conjunction'
let one = 'You cannot end a sentence with because because because is a conjunction'
console.log(one.substr(30, 25));

// Exercise: Level 3

// 1.'Love is the best thing in this world. Some found their love and some are still looking for their love.' Count the number of word love in this sentence.
 let text = "Love is the best thing in this world. Some found their love and some are still looking for their love."
 console.log(text.search('love'));

//  2.Use match() to count the number of all because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
let t1 = "You cannot end a sentence with because because because is a conjunction"
let t2 = /because/gi
console.log(t1.match(t2))



