console.log("Welcome to Typescript");
//Installation ->npm install -g typescript
//compilation ->tsc <filename>.ts ->it compiles the ts file to js file.
//run file// node <filename>.js 
//1.data type
//mostly used 3 primitive datatypes are avilable in javascript
/* 1.string 2.number 3.boolean */
//1.number
var a = 6;
var b = 78;
var c = a + b;
console.log(c);
//2.string
var a1 = 'raja';
var b1 = 'kumar';
var c1 = a1 + b1;
console.log(c1);
//3.boolean
var v = true;
console.log(v);
//special data types
//1.any-> datatypes became any
var g = 3;
g = 'hello';
console.log(g);
//2.unknown->similar to any
var h = 9;
console.log(h);
h = 'hello';
//3.never->effectively throws errors
//let e:never=true
//console.log(e)
//4.undefined & null
var y = undefined;
var z = null;
console.log(y);
console.log(z);
//5.Arrays
var arr = [];
arr.push("Ram");
arr.push("Ramu");
arr.push("Ragu");
console.log(arr);
//6.Type inference
var arr1 = [1, 2, 3];
//arr1.push("2")
console.log(arr1);
//7.read only it  only read the array values not add new one
var arr2 = [1, 2, 3];
//arr2.push(4)
//8.Tuples
var tuple1;
tuple1: [45, true, 'do something for us'];
//tuple1.push('HELLO HOW ARE YOU')
console.log("tuple1");
//8.1 read only tuples
var readonlytuple1 = [15, 'hello', true];
console.log(readonlytuple1);
//readonlytuple1.push('text')
//9.objects 
var car = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log(car);
//9.1 type inference
var car1 = {
    name: "toyato",
    age: 45,
    holder: "Rahul"
};
//car.age=49;
console.log(car1);
//9.2 optional properties-not want define value initially
var car2 = {
    name: "toyato",
    holder: "Rahul"
};
car1.age = 18;
console.log(car1);
//10.enum->enum is a collecion of constants
var Car3;
(function (Car3) {
    Car3[Car3["car"] = 0] = "car";
    Car3[Car3["bike"] = 1] = "bike";
    Car3[Car3["van"] = 2] = "van";
    Car3[Car3["cycle"] = 3] = "cycle";
})(Car3 || (Car3 = {}));
var con = Car3.bike;
console.log(con);
//10.1 partially numeric enum
var Car4;
(function (Car4) {
    Car4[Car4["car"] = 6] = "car";
    Car4[Car4["bike"] = 7] = "bike";
    Car4[Car4["van"] = 8] = "van";
    Car4[Car4["cycle"] = 9] = "cycle";
})(Car4 || (Car4 = {}));
var conp = Car4.bike;
console.log(conp);
//10.2 fully numeric enum
var Car5;
(function (Car5) {
    Car5[Car5["car"] = 6] = "car";
    Car5[Car5["bike"] = 67] = "bike";
    Car5[Car5["van"] = 76] = "van";
    Car5[Car5["cycle"] = 78] = "cycle";
})(Car5 || (Car5 = {}));
var conf1 = Car5.bike;
var conf2 = Car5.car;
var conf3 = Car5.van;
var conf4 = Car5.cycle;
console.log(conf1, conf2, conf3, conf4);
//10.3 string numeric
var Car7;
(function (Car7) {
    Car7["car"] = "maruti";
    Car7["bike"] = "FZ";
    Car7["van"] = "maruti";
    Car7["cycle"] = "hero";
})(Car7 || (Car7 = {}));
var cons1 = Car7.bike;
var cons2 = Car7.car;
var cons3 = Car7.van;
var cons4 = Car7.cycle;
console.log(cons1, cons2, cons3, cons4);
var carType = "jeep";
var carModel = 2563;
var carYear = 2000;
var det = {
    type: carType,
    model: carModel,
    year: carYear
};
console.log(det);
var rec = {
    height: 100,
    width: 50
};
console.log(rec);
var recc = {
    height: 100,
    width: 50,
    color: 'red'
};
console.log(recc);
//12. union type -used to support pass one value with multiple types using '|' symbol between the types
function printattendence(code) {
    console.log("today attendes is ".concat(code, "."));
}
printattendence("ram");
printattendence(1);
//12.union type errors -if use different type of methods to apply different type of methods became error
function printattendence1(code) {
    // console.log(`today attendes is ${code.toUpperCase()}.`)
}
printattendence("ram");
printattendence(1);
//13.functions in typescript -it get explicitely defined values and return that
function gettime() {
    return new Date().getTime();
}
console.log(gettime());
//13.1 functions with void return type 
function getresult() {
    console.log("the result is 56");
}
//13.2 functions with parameter
function getdata(v, v1) {
    return v * v1;
}
console.log(getdata(18, 20));
//13.3 functions with default parameter
function getdata1(v2, v3) {
    if (v3 === void 0) { v3 = 10; }
    return Math.pow(v2, v3);
}
console.log(getdata1(18, 20));
//13.4 functions with optional parameter-By default TypeScript will assume all parameters are required, but they can be explicitly marked as optional.
function getdata2(v2, v3, v4) {
    return v2 + v3 + (v4 || 0);
}
console.log(getdata2(2, 5));
//13.5 named parameters with function -same as normal function paramater but declare name
function getdata4(_a) {
    var first = _a.first, second = _a.second;
    return first / second;
}
console.log(getdata4({ first: 14, second: 2 }));
var negfunction = function (value) { return value * -1; };
console.log(negfunction(10));
//
//14. casting -casting is a straight forward way to cast the variable .to assign the datatypes to variable straight way.
var x = "Hello";
console.log(x.length);
//14.1 casting using <>
var yy = 12;
console.log(yy);
//14.2 forecasting 
var x1 = 5;
console.log(x1);
//.............
//15 null/undefined 
var o = null;
console.log(o);
o = undefined;
console.log(o);
o = "hello";
console.log(o);
var mycolor = "#0000ff";
console.log(mycolor);
//16.1 index signature labels
