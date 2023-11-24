// const x = 5; //number
// let y = "hello" //string
// let z = true //boolean
// let a = null //null
// let b = undefined //undefined
// let c; //undefined

// //Objects and array must need to define with const, change to let in extreme condition
// //Objects
// const d = {
//     name: "vishal",
//     age: 26
// }

// //Array (Object) 
// const e = ["vsiha"]

// d.school = "JNV"
// console.log(d);

// e.push("urvsiha")
// console.log(e)


// //Symbol => Differentiate two values
// //Symbol can never be same

// let x1 = 5
// let x2 = 5
// console.log(x1 === x2) //true

// let s1 = Symbol(5)
// let s2 = Symbol(5)
// console.log(s1 === s2) //false



//1. Block scope => Code written inside a block or inside { } bracket
//Ex.
if (5 === 5) {
    let a = 6; //Block scope till if condition
} else {
    let a = 7; //Block scope till else condtion
}

const fn = () => 5 + 5
//2. Fucntion Scope

function xyz() {
    let c = 7;
    if (5 === 5) a = 6; //Block scope till if condition
    else {
        let a = 7; //Block scope till else condtion
        var b = 10;
    }
    console.log(c)
    for (let i = 0; i < 6; i++) {

    }
}
xyz()
//3. Global Scope => Accessible globally

console.log(b)
var b = 10;
//let => Block Scope , Can be reassign
//const => Block Scope , cannot be reassign
//var => Function scope , Can reassign


//Changing Datatype => Type casting
//1. Boolean
//2. ParseInt => Mostly convert String to number integer => parseInt('5')
//3. parseFloat => parseFloat('6.50')
//4. + => same use as parseInt or parseFloat => +('5') => 5
//5. Number => same use as parseInt or parseFloat => Number('5') => 5
console.log(typeof parseInt('5'))
console.log(typeof parseFloat('5.6'))
console.log(typeof +'5')
console.log(typeof Number('5'))



