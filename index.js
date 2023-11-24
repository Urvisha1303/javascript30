// console.log("hello"); // single line
/* */  // multi line 

// data type

// Number // 1,2,3,4,5,1.1,1.2,1.5
//bigint => Not widely use
// String // " " ,' '
// boolean // true and flase
// null //
// undefined  //
// Symbol  //  Not widely use
// Object // {}
// array // []

console.log(typeof(1));
console.log(typeof("Hello world"));
console.log(typeof true);
console.log(typeof null);  //object
console.log(typeof undefined);
console.log(typeof Symbol(5));
console.log(typeof { key : "value"});
console.log(typeof []);


let w= 5 //number
let q = "urvisha" // string
let u= true // boolean
let k = null // null
let l; // undefined

const f = {
    name : "urvisha",
    age : 26
}
console.log(f);
f.gender= "female";
console.log(f);


const g =[
    "vishal"
]
console.log(g);
g.push("urvisha");
console.log(g);

let v = Symbol(8);
let m = Symbol(8);
console.log(v === m);