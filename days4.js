// 1.Get user input using prompt(“Enter your age:”). If user is 18 or older , give feedback:'You are old enough to drive' but if not 18 give another feedback stating to wait for the number of years he needs to turn 18.

/* let age = prompt("Enter Your Age: ")
if (age >= 18){
    console.log("You are old enough to drive");
}else{
    console.log(`You are left with ${18-age} years to drive.`);
} */

// 2.Compare the values of myAge and yourAge using if … else. Based on the comparison and log the result to console stating who is older (me or you). Use prompt(“Enter your age:”) to get the age as input.

/* let myAge = prompt("Enter myAge: ")
let yourAge = prompt("Enter yourAge: ")
if (myAge < yourAge) {
    console.log(`You are ${ yourAge- myAge} years older than me.`);
}else{
    console.log(`You are ${myAge- yourAge} years elder than you.`);
} */

// 3.If a is greater than b return 'a is greater than b' else 'a is less than b'. Try to implement it in to ways
// i)using if else

let a = 2
let b = 3
/* if (a > b){
    console.log(`${a} is greater than ${b}`);
}else{
    console.log(`${a} is less than ${b}`);
} */

// ii)ternary operator.

a > b ?console.log(`${a} is greater than ${b}`) : console.log(`${a} is less than ${b}`);
 

// 4.Even numbers are divisible by 2 and the remainder is zero. How do you check, if a number is even or not using JavaScript?
/* let number = prompt("Enter a Number: " )
if (number % 2 === 0){
    console.log(`${number} is an even number.`);

}else{
    console.log(`${number} is an odd number.`);
} */

// Exercises: Level 2

// 1.Write a code which can give grades to students according to theirs scores: 
/* let Score = prompt("Enter The Score: ")
if (Score <= 100 && Score >= 80){
console.log("Grade A");
}
else if (Score <= 89 && Score >= 70) {
    console.log("Grade B");
    
} else if (Score <= 69 && Score >= 60) {
    console.log("Grade C");
} else if (Score <= 59 && Score >= 50){
    console.log("Grade D");
}else{
    console.log("Grade F");
} */

/* 2.Check if the season is Autumn, Winter, Spring or Summer. If the user input is :

    September, October or November, the season is Autumn.
    December, January or February, the season is Winter.
    March, April or May, the season is Spring
    June, July or August, the season is Summer
 */

/* let season = prompt("Enter The Month: ")
if (season === "November "|| season==="October" || season === "September"){
    console.log("The Season is Autumn");

}else if (season=== "December" || season === "January" || season === "February"){
    console.log("The Season is Winter");
}else if (season=== "March" || season === "April" || season==="May" ){
    console.log("The Season is Spring");
}else{
    console.log("The Season is Summer");
} */

// 3.Check if a day is weekend day or a working day. Your script will take day as an input.
/* let weekend = prompt("What Is The Day Today? : ").toLowerCase()
if (weekend === "sunday" || weekend === "saturday" ) {
    console.log(`${weekend} is a Weekend.`);
}else{
    console.log(`${weekend} is a working day.`);
}
 */

// Exercises: Level 3

// 1.Write a program which tells the number of days in a month.

let month = prompt(" Enter a month: ").toLowerCase()
switch(month){
    case 'january':
    case 'march':
    case 'may' :
    case 'july':
    case 'auguest' :
    case 'octomber' :
    case 'december' :
        console.log(`${month} has 31 days.`);
        break;
    case 'february' :
        console.log(`${month} has 29 days.`);
        break;
    case 'april':
    case 'june' :
    case 'september':
    case 'november':
        console.log(`${month} has 30 days.`);
        break
    default:
            console.log('Enter valid month name.');
}


















