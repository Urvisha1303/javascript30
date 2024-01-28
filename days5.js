const countries = [
    'Albania',
    'Bolivia',
    'Canada',
    'Denmark',
    'Ethiopia',
    'Finland',
    'Germany',
    'Hungary',
    'Ireland',
    'Japan',
    'Kenya'
  ]
  
  const webTechs = [
    'HTML',
    'CSS',
    'JavaScript',
    'React',
    'Redux',
    'Node',
    'MongoDB'
  ]

// 1.Declare an empty array;
let array = []
// let arr = Array()

// 2.Declare an array with more than 5 number of elements
let a = [1,2,3,4,5,6]
console.log(a);

// 3.Find the length of your array
console.log(a.length);

// 4.Get the first item, the middle item and the last item of the array
console.log(webTechs[0]);
console.log(webTechs[parseInt(webTechs.length/2)]);
console.log(webTechs[webTechs.length-1]);

// 5.Declare an array called mixedDataTypes, put different data types in the array and find the length of the array. The array size should be greater than 5
let arr = [NaN, 1, 1.50, false,'Gujarat' ,{Name : ['urvisha', 'hemangi', 'krupali']},{countryName : 'india', city: 'Surat'}]
console.log(arr.length);
console.log(arr);
console.log(typeof arr);

// 6.Declare an array variable name itCompanies and assign initial values Facebook, Google, Microsoft, Apple, IBM, Oracle and Amazon
let itCompaines = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']

// 7.Print the array using console.log()
console.log(itCompaines);

// 8.Print the number of companies in the array
console.log(itCompaines.length);

// 9.Print the first company, middle and last company
console.log(itCompaines[0]);
console.log(itCompaines[parseInt(itCompaines.length/2)]);
console.log(itCompaines[itCompaines.length-1]);

// 10.Print out each company
console.log(itCompaines[0]);
console.log(itCompaines[1]);
console.log(itCompaines[2]);
console.log(itCompaines[3]);
console.log(itCompaines[4]);
console.log(itCompaines[5]);
console.log(itCompaines[6]);

// 11.Change each company name to uppercase one by one and print them out
console.log(itCompaines[0].toUpperCase());
console.log(itCompaines[1].toUpperCase());
console.log(itCompaines[2].toUpperCase());
console.log(itCompaines[3].toUpperCase());
console.log(itCompaines[4].toUpperCase());
console.log(itCompaines[5].toUpperCase());
console.log(itCompaines[6].toUpperCase());

// 12.Print the array like as a sentence: Facebook, Google, Microsoft, Apple, IBM,Oracle and Amazon are big IT companies.
console.log(itCompaines.toString());

// 13.Check if a certain company exists in the itCompanies array. If it exist return the company else return a company is not found
// const company = prompt("Enter Company Name : ")
// if (itCompaines.includes(company)){
//   console.log(`${company} is exist`);
// }else{
//   console.log(`${company} is no exist`);
// }

//**  14.Filter out companies which have more than one 'o' without the filter method
const itCompaines1 = ['Facebook', 'Google', 'Microsoft', 'Apple', 'IBM', 'Oracle', 'Amazon']
let ocount = []
for (let i= 0; i< itCompaines1.length; i++){
  const  company = itCompaines1[i]
  const count = company.split('o').length - 1;
  if (count> 1){
    ocount.push(company)
  }
}
console.log(ocount);

// 15.Sort the array using sort() method
console.log(itCompaines1.sort());

// 16.Reverse the array using reverse() method
console.log(itCompaines1.reverse());

// 17.Slice out the first 3 companies from the array
// console.log(itCompaines1.slice(0, 3));

// 18.Slice out the last 3 companies from the array
// console.log(itCompaines1.slice(itCompaines.length-3));

// 19.Slice out the middle IT company or companies from the array
// console.log(itCompaines1.slice(parseInt(itCompaines1.length/2),parseInt(itCompaines1.length/2)+1));

// 20.Remove the first IT company from the array
/* console.log(itCompaines.shift());
console.log(itCompaines); */

// 21.Remove the middle IT company or companies from the array**
console.log(itCompaines.splice((itCompaines.length/2)-1,(itCompaines.length/2)));

// 22.Remove the last IT company from the array
console.log(itCompaines1.pop());
console.log(itCompaines1);

// 23.Remove all IT companies
console.log(itCompaines1.splice());

// Exercise: Level 2

// 1.Create a separate countries.js file and store the countries array in to this file, create a separate file web_techs.js and store the webTechs array in to this file. Access both file in main.js file



// 2.First remove all the punctuations and change the string to array and count the number of words in the array
let text =
'I love teaching and empowering people. I teach HTML, CSS, JS, React, Python.'
const words = text.split(" ")
console.log(words)
console.log(words.length)


// 3.In the following shopping cart add, remove, edit items
const shoppingCart = ['Milk', 'Coffee', 'Tea', 'Honey']
// i)add 'Meat' in the beginning of your shopping cart if it has not been already added
console.log(shoppingCart.unshift('Meat'));
console.log(shoppingCart);

// ii)add Sugar at the end of you shopping cart if it has not been already added
console.log(shoppingCart.push('sugar'));
// console.log(shoppingCart);

// iii)remove 'Honey' if you are allergic to honey

console.log(shoppingCart.splice(4,1));
console.log(shoppingCart);

// iv)modify Tea to 'Green Tea'
console.log(shoppingCart[shoppingCart.indexOf('Tea')]= "GreenTea");
// console.log(shoppingCart);

// *4.In countries array check if 'Ethiopia' exists in the array if it exists print 'ETHIOPIA'. If it does not exist add to the countries list.

if (countries.indexOf('Ethiopia')){
  console.log('ETHIOPIA');
}else{
  countries.push('Ethiopia')
  console.log(countries);
}

//* 5.In the webTechs array check if Sass exists in the array and if it exists print 'Sass is a CSS preprocess'. If it does not exist add Sass to the array and print the array.
const webTechs1 = [
  'HTML',
  'CSS',
  'JavaScript',
  'React',
  'Redux',
  'Node',
  'MongoDB',
  
]

if(webTechs1.includes('Sass')){
   console.log('Sass is a CSS preprocess');
}else{
  webTechs1.push('Sass')
  console.log(webTechs1);
}


// 6.Concatenate the following two variables and store it in a fullStack variable.
const frontEnd = ['HTML', 'CSS', 'JS', 'React', 'Redux']
const backEnd = ['Node','Express', 'MongoDB']
const fullstack = frontEnd.concat(backEnd)
console.log(fullstack);


//Exercise: Level 3

// 1.The following is an array of 10 students ages:

const ages = [19, 22, 19, 45, 20, 25, 26, 46, 25, 24]

// i)Sort the array and find the min and max age
console.log(ages.sort());
const min = ages[0];
console.log(min);
const max = ages[ages.length - 1];
console.log(max);

// ii)Find the median age(one middle item or two middle items divided by two)

var middle1 = ages[Math.floor((ages.length - 1) / 2)];
var middle2 = ages[(Math.floor((ages.length - 1) / 2)) +1];

var midAge = (middle1+middle2)/2
console.log(parseInt(midAge));

