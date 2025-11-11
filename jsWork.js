// How javascript code run

var a=10;
var b=20;

function  addNum(num1,num2){
    var sum=num1+num2;
    return sum;
}

var sumResult1=addNum(a,b);
var sumResult2=addNum(4,5);
console.log(sumResult1,sumResult2); 

//1 firstly run code toh create execution context 
// means code run in 2 phase 
// 1st phase- memory allocation
// 2nd phase - execution phase

// # undefine , null allocated in heap memory

//execution context

//memeory allocation
//a=undefined
//b=undefined
// addNum= function code
// sumResult1=undefined
// sumResult2=undefined

//execution phase
// a=10
// b=20
// sumResult1=func code yaha v executio contex bnega
// sumResult2=func code  same here

// let const

// EXECUTION CONTEXT

// MEMORY ALLOCATION PHASE
// a=uninitialized (temporal dead zone)
// b=uninitialized (temporal dead zone)

// EXECUTION PHASE
// a=10;
// b=20;

// console.log(a); 
// let a=10;
// const b=20;   error because of temporal dead zone


// #temporal dead zone :-  the time between the creation of the variable and its initialization is known as the temporal dead zone. During this period, if we try to access the variable, it will result in a ReferenceError.

let a=10;
const b=20;

function addNum(num1,num2){
    const sum=num1+num2;
    return sum;
}

const sumResult1=addNum(a,b);

console.log(sumResult1); //30


//hoisting is javascripts behaviour of knowning about a variable or function's existence before executing the code . hpow it treats that knowledge depends on the keyword(function,var,let conbst)