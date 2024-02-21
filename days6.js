// 1.Iterate 0 to 10 using for loop, do the same using while and do while loop
//  loop

// for (let i = 0; i <= 10; i++) {
//   console.log(i);
// }

// while loop
// let i = 0
// while (i<=10){
//     console.log(i);
//     i++
// }

// do while loop
// do {
//     console.log(i);
//     i++
// }while(i<=10)

// 2.Iterate 10 to 0 using for loop, do the same using while and do while loop

// for(let i=10; i>=0; i--){
//     console.log(i);
// }
// let i = 10
// while (i>=0){
//     console.log(i);
//     i--

// }

// do{
//     console.log(i);
//     i--
// }while (i>=0)

// 3.Iterate 0 to n using for loop
// let n = 100
// for(let i = 0; i<=n;i++ ){
//     console.log(i);
// }

// 4.Write a loop that makes the following pattern using console.log():
// for (let i = 1; i <= 7; i++) {
//   console.log("#".repeat(i));
// }

// 5.Use loop to print the following pattern:
// for(let i=0; i<11; i++){
//     console.log(`${i} x ${i} = ${i*i}`);
// }

// 6.Using loop print the following pattern
// console.log("i\ti^2\ti^3");
// for (let i = 0; i < 11; i++) {
//   console.log(`${i}\t${i * 2}\t${i * 3}`);
// }

// 7.Use for loop to iterate from 0 to 100 and print only even numbers
// let even=[]
// for(let i=0; i<=100; i++){
// if(i % 2 == 0)
//     even.push(i)
// }
// console.log(even);

// 8.Use for loop to iterate from 0 to 100 and print only odd numbers
// let odd= []
// for(let i=1;i<=100; i++){
//     if(i%2 !== 0)
//     odd.push(i)
// }
// console.log(odd);

// 9.Use for loop to iterate from 0 to 100 and print only prime numbers
let primeNumber = []
for(let i = 0;i<=100; i++){
    if(i===0 || i===1){
    continue;
    }
    if(i===2 || i===3){
        primeNumber.push(i)
    }
    for(let j= 0; j<primeNumber.length; j++){
        if(i % primeNumber[j] === 0){
            break;
        }else if(j === primeNumber.length -1){
            primeNumber.push(i)
            break;
        }
    }
}
console.log(primeNumber);

// 10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for(let i = 0; i<=100; i++){
    sum = sum + i
}
console.log(sum);

// 11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even = 0
let odd = 0
for(let i=0;i<=100;i++){
    if(i%2 === 0){
        even = even + i
    }else if(i%2 !== 0){
        odd = odd + i;
    }
}

console.log(even, odd);




// 12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
// let arr = [];
// let sum1;
// for (let i = 1; i < 5; i++) {
//   sum1 = Math.floor(Math.random() * 100);
//   arr.push(sum1);
// }
// console.log(arr);

// // 13.Develop a small script which generate array of 5 random numbers
// let randomArray = [];
// for (let i = 0; i < 5; i++) {
//   randomArray.push(Math.floor(Math.random() * 10));
// }
// console.log(randomArray);

// 14.Develop a small script which generate array of 5 random numbers and the numbers must be unique
// let randomarray1 = [];
// for (let i = 5; randomarray1.length < i; ) {
//   let random = Math.floor(Math.random() * 10);
//   if (randomarray1.indexOf(random) === -1) {
//     randomarray1.push(random);
//   }
// }
// console.log(randomarray1);

// 15.Develop a small script which generate a six characters random id:
// let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
// function charactersString() {
//     let result = ''

//     let charactersString = characters.length
//     for(let i=0; i<6; i++){
//         result += characters.charAt(Math.floor(Math.random()*charactersString))
//     }
//     return result
// }
// console.log(charactersString());


// Exercises: Level 2

// 1.Develop a small script which generate any number of characters random id:
let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789'
function charString(length){
    let result = ''
    let charString = characters.length
    for(let i=0; i<length; i++){
        result += characters.charAt(Math.floor(Math.random()*charString))
    }
    return result

}

console.log(charString(13));
console.log(charString(25));

// 2.Write a script which generates a random hexadecimal number.


// 4.Using the above countries array, create the following new array.

// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let newArray = []
// for(const country of countries){
//     newArray.push(country)
// }
// console.log(newArray);


// 5.Using the above countries array, create an array for countries length'.
// let countries = [7, 7, 6, 7, 8, 7, 7, 7, 7, 5, 5]
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let countrylength = []
// for(const country of countries ){
//     countrylength.push(country.length)
// }
// console.log(countrylength);

// 6.Use the countries array to create the following array of arrays:

// let arr = []
// for(const country of countries){
//     arr.push([country, country.slice(0,3),country.length])
// }
// console.log(arr);

// 7.In above countries array, check if there is a country or countries containing the word 'land'. If there are countries containing 'land', print it as array. If there is no country containing the word 'land', print 'All these countries are without land'.
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let arr1 = []
// for(let i= 0 ; i< countries.length; i++){
//     if(countries[i].includes('LAND'))
//     arr1.push(countries[i])
// }
// console.log(arr1);

// 8.In above countries array, check if there is a country or countries end with a substring 'ia'. If there are countries end with, print it as array. If there is no country containing the word 'ai', print 'These are countries ends without ia'.
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]

// let arr= []
// for(let i=0; i< countries.length; i++){
//     if(countries[i].endsWith('IA'))
//     arr.push(countries[i])
// }
// console.log(arr);

// 9.Using the above countries array, find the country containing the biggest number of characters.
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let max= 0
// let char = ''
// for(let i = 0; i<countries.length ; i++){
//     let len = countries[i].length
//     if(len > max){
//         max= len;
//         char = countries[i]
//     }
// }
// console.log(max,char);

// 10.Using the above countries array, find the country containing only 5 characters.
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let char= []
// for(let i= 0; i< countries.length; i++){
//     if(countries[i].length === 5){
//         char.push(countries[i])
//     }
// }
// console.log(char);

// 11.Find the longest word in the webTechs array
// let countries = ["ALBANIA", "BOLIVIA", "CANADA", "DENMARK", "ETHIOPIA", "FINLAND", "GERMANY", "HUNGARY", "IRELAND", "JAPAN", "KENYA"]
// let max= 0
// let char= ''
// for(let i = 0; i < countries.length; i++){
//     let len = countries[i].length
//     if(len > max){
//         max=len
//         char = countries[i]
//     }

// }
// console.log(char);

// 12.Use the webTechs array to create the following array of arrays:
const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

  let arr = []
  for(const country of webTechs){
    arr.push ([country, country.length])
  }
  console.log(arr);
