
console.log("Welcome to Typescript")

//Installation ->npm install -g typescript
//compilation ->tsc <filename>.ts ->it compiles the ts file to js file.
//run file// node <filename>.js 
//1.data type

//mostly used 3 primitive datatypes are avilable in javascript
/* 1.string 2.number 3.boolean */

//1.number
var a=6;
var b =78;
var c= a+b;
console.log(c);

//2.string
var a1='raja';
var b1='kumar';
var c1= a1+b1;
console.log(c1);

//3.boolean
var v=true
console.log(v)

//special data types
//1.any-> datatypes became any
let g:any =3;
g='hello'

console.log(g)

//2.unknown->similar to any
let h:unknown=9
console.log(h)
h='hello'

//3.never->effectively throws errors
//let e:never=true
//console.log(e)

//4.undefined & null
let y:undefined=undefined;
let z:null=null;
console.log(y)
console.log(z)

//5.Arrays
let arr :string[] =[];
arr.push("Ram")
arr.push("Ramu")
arr.push("Ragu")
console.log(arr)

//6.Type inference
let arr1:number []=[1,2,3]
arr1.push("2")
console.log(arr1)

//7.read only it  only read the array values not add new one
let arr2:readonly number []=[1,2,3]
arr2.push(4)

//8.Tuples
let tuple1:[number,boolean,string]
tuple1:[45,true,'do something for us']
tuple1.push('HELLO HOW ARE YOU')
console.log("tuple1")