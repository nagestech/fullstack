
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
//arr1.push("2")
console.log(arr1)

//7.read only it  only read the array values not add new one
let arr2:readonly number []=[1,2,3]
//arr2.push(4)

//8.Tuples
let tuple1:[number,boolean,string]
tuple1:[45,true,'do something for us']
//tuple1.push('HELLO HOW ARE YOU')
console.log("tuple1")

//8.1 read only tuples
let readonlytuple1:readonly [number,string,boolean]=[15,'hello',true]
console.log(readonlytuple1)
//readonlytuple1.push('text')

//9.objects 
const car: { type: string, model: string, year: number } = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
  };
  console.log(car);
  //9.1 type inference
  const car1:{ name:string ,age:number, holder:string  }={
    name: "toyato",
    age: 45,
    holder:"Rahul"
  };
  //car.age=49;
  console.log(car1)

  //9.2 optional properties-not want define value initially
  const car2:{ name:string ,age?:number, holder:string  }={
    name: "toyato",
    holder:"Rahul"
  };
  car1.age=18
  console.log(car1)

  //10.enum->enum is a collecion of constants

  enum Car3 { 
    car,
    bike,
    van,
    cycle

  }
  let con=Car3.bike
console.log(con)

//10.1 partially numeric enum
enum Car4{ 
    car =6,
    bike,
    van,
    cycle

}
let conp=Car4.bike
console.log(conp)
//10.2 fully numeric enum
enum Car5{ 
    car =6,
    bike=67,
    van =76,
    cycle =78
}
let conf1=Car5.bike
let conf2=Car5.car
let conf3=Car5.van
let conf4=Car5.cycle

console.log(conf1,conf2,conf3,conf4)
//10.3 string numeric
enum Car7{
    car="maruti",
    bike="FZ",
    van="maruti",
    cycle="hero"
}
let cons1=Car7.bike
let cons2=Car7.car
let cons3=Car7.van
let cons4=Car7.cycle

console.log(cons1,cons2,cons3,cons4)

//11 alais & interface -to provide alais for sharing type between variable and objects
type CarType=string
type CarModel=number
type CarYear=number



const carType:CarType="jeep"
const carModel:CarModel=2563
const carYear:CarYear=2000
let det={
    type:carType,
    model:carModel,
    year:carYear
}

console.log(det)

//11.1 interface using interface type to apply only object
 
interface rect{
    height:number
    width:number
}

const rec : rect ={
    height:100,
    width:50
}

console.log(rec)
//11.1.1 extended interface

interface rect1{
    height:number
    width:number
}

interface rectclr extends rect1{
    color:string
}
const recc : rectclr ={
    height:100,
    width:50,
    color:'red'
}


console.log(recc)

//12. union type -used to support pass one value with multiple types using '|' symbol between the types

function printattendence (code : string | number){
console.log(`today attendes is ${code}.`)
}
printattendence("ram")
printattendence(1)

//12.union type errors -if use different type of methods to apply different type of methods became error
function printattendence1 (code : string | number){
   // console.log(`today attendes is ${code.toUpperCase()}.`)
    }
    printattendence("ram")
    printattendence(1)

    //13.functions in typescript -it get explicitely defined values and return that
function gettime() : number {
return new Date().getTime()
}
console.log(gettime())

//13.1 functions with void return type 
function getresult() : void{
    console.log("the result is 56")
} 

//13.2 functions with parameter
function getdata(v:number , v1:number){
return v*v1;
} 
console.log(getdata(18,20))
//13.3 functions with default parameter

function getdata1(v2:number , v3:number=10){
    return v2**v3;
    } 
    console.log(getdata1(18,20))
//13.4 functions with optional parameter-By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.


function getdata2(v2:number , v3:number, v4?:number){
    return v2+v3+(v4||0);
    } 
    console.log(getdata2(2,5))
//13.5 named parameters with function -same as normal function paramater but declare name

function getdata4({first,second}:{first:number,second:number}){
    return first/second
}
console.log(getdata4({first:14,second:2}))
//13.6 alais parameter using in funtion-
type negate=(value:number)=>number
const negfunction :negate=(value)=>value* -1;
console.log(negfunction(10))

//



//14. casting -casting is a straight forward way to cast the variable .to assign the datatypes to variable straight way.
let x:unknown="Hello"
console.log((x as string).length)

//14.1 casting using <>
let yy:unknown=12
console.log(<number>yy)

//14.2 forecasting 
let x1=5
console.log((x1 as unknown )as number)
//.............
//15 null/undefined 
let o:string | undefined |null=null
console.log(o)

o=undefined
console.log(o)

o="hello"
console.log(o)

//typescript 5 updates

//typescript actively maintained and updated by  microsoft and its have lots of utility features and quality of life updates
//in this 5th version have 2 features there are 

//16.tamplate literal type -in this way to create custom data types
type  Color= "red" | "green" | "blue"
type HexColor<T extends Color>=`#${string}`;
let mycolor:HexColor<"blue">="#0000ff";
console.log(mycolor)

//16.1 index signature labels

