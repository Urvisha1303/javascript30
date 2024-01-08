// 1.Iterate 0 to 10 using for loop, do the same using while and do while loop
//  loop

for(let i = 0; i<= 10; i++){
    console.log(i);
}

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
// for(let i=0; i<=7; i++){
//     console.log("#".repeat(i));
// }

// 5.Use loop to print the following pattern:
// for(let i=0; i<11; i++){
//     console.log(`${i} x ${i} = ${i*i}`);
// }

// 6.Using loop print the following pattern
// console.log("i\ti^2\ti^3");
// for(let i=0; i<11; i++){
//     console.log(`${i}\t${i*2}\t${i*3}`);
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


// 10.Use for loop to iterate from 0 to 100 and print the sum of all numbers.
let sum = 0
for(let i=0; i<=100; i++){
    sum+= i;
}

console.log(sum);

// 11.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds.
let even=0
let odd= 0
for(let i=0; i<=100; i++){
    if(i%2 == 0){
        even+=i;
    }else{
        odd+=i;
    }
   
}
console.log(even, odd);
console.log([even, odd]);

// 12.Use for loop to iterate from 0 to 100 and print the sum of all evens and the sum of all odds. Print sum of evens and sum of odds as array
let arr= []
let sum1;
for(let i=1; i<5; i++){
    sum1 = Math.floor(Math.random()*100);
    arr.push(sum1);
}
console.log(arr);

// 13.Develop a small script which generate array of 5 random numbers
let randomArray = []
for(let i = 0; i< 5; i++){
    randomArray.push(Math.floor(Math.random()* 10))
}
console.log(randomArray);

// 14.Develop a small script which generate array of 5 random numbers and the numbers must be unique
let randomarray1 = []
for(let i = 5; randomarray1.length < i;){
    let random = Math.floor(Math.random()*10)
    if(randomarray1.indexOf(random) === -1){
        randomarray1.push(random)
    }
}
console.log(randomarray1);