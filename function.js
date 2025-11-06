//function-- it always return something if we dont write return then it will return undefined



//  1------
// function greeting(){
//     console.log("hello world!!")
// }
// greeting()
// console.log(greeting());

// greeting() chalne se → "hello world!!" print hota hai ✅

// Function kuch return nahi karta → undefined return hota hai 😴

// console.log() us undefined ko print karta hai → undefined ✅


// 2---------------

// function add(a,b,c=9){
//     const sum= a+b+c;
//    console.log(sum);
// }
// result = add(2,3) //5
// result=add(2,3,4) // 5 not include 4
// result=add(2,4,5)
// result=add(10,20,30,40) 

// 40 not include in aargument , agr hmko bahot sare data ko add krna h aur pta ni hota aage kitne parameter aur argument aane wale h to rest operator use kr skte h

// function add(...num){
//    console.log(num)
//     let sum=0;
//     for(let n of num){
//         sum+=n
//     }
 
//    console.log(sum);}

// add(2,3,4)  //9
// add(3,4,5,6) // 18
// add(10,20,30,40,50,60) //210


// rest operator me jitne value ko dalenge wo utne value ko array me daal Dega like--[ 2, 3 ]
// [ 2, 3, 4 ]
// [ 2, 4, 5 ]
// [ 10, 20, 30, 40 ]
// [ 2, 3, 4 ]
// [ 3, 4, 5, 6 ]
// [ 10, 20, 30, 40, 50, 60 ]  

// when we use rest operator???
// 1 when we dont know how many argument will come
// 2 when we want to pass multiple value in function
// jb value ko catch krna ho like num koi array ni h na but jo v value usme jaa rhe too ek tarike se catch kr rhe h to uske liye rest operator use krte h

// and spread operator--
// when we want to open the array or add one or more add to a single array  to spread operator use krte h

// like
// const arr1=[2,3,4]
// const arr2=[10,20,30]
// const merged=[...arr1,...arr2,40,50]
// console.log(merged); // [ 2, 3, 4, 10, 20, 30, 40, 50 ]
// spread operator se array ke sare element ko open kr deta h aur fir usme hum kuch or value add kr skte h 

// another way to create function -- function expression

// const add = function(a,b){
//     return a+b;
// }
// console.log(add(3,5)); //8



// another case use concpt of hoisting------

// console.log(add(3,5)); 
// it will give error because function expression me hoisting ni hota

// const add = function(a,b){
//     return a+b;
// }

//  when we call function  before declaration it then it will give error in function expression 
 
//  but in function declaration it will not give error

//   greeting()
// function greeting(){
//     console.log("hello world!!")
// }
// hello world!!
//  it will work fine because function declaration me hoisting hota h


// 3rd------
// arrow function

// const add=(a,b)=> {
//     return a+b  
// } 
// console.log(add(4,5)); //9

// if function me ek hi statement h to curly bracket and return keyword dono ko hata skte h
// const sum=(a,b)=> a+b
// console.log(sum(10,20)); //30

// 4th-------
// IIFE - Immediately Invoked Function Expression
// iska use krke hum function ko turant call kr skte h bina usko kisi variable me store kiye

// function(){
//     console.log("hello world!!")
//     }()  
// it will give error because function ko wrap krna jaruri h IIFE me
// to fix this wrap the function in parenthesis

// (function(){
//     console.log("hello world!!")
//     })()  
    // it will work fine
// hello world!!

// 5th-------
// callback function-- function jo dusre function ke argument ke roop me pass hota h

//normally--
// function greet(){
//     console.log("hello world!!")
// }
// function meet(){
//     console.log("good morning!!")
// }

// meet(greet());

// hello world!!
// good morning!!


// in callback function--

function greet(){
    console.log("hello world!!")
}
function meet(callback){
    console.log("good morning!!")
    callback()
}
meet(greet);
// good morning!!
// hello world!!

// how it works--
// jab meet function call hoga to sabse pehle wo apna kaam karega jo uske andar likha h fir wo callback function ko call krega jo uske argument me pass hua h to is case me greet function ko call krega to pehle good morning print hoga fir hello world print hoga
// iska use jyadatar asynchronous programming me hota h jese ki api call krne ke baad kuch kaam krna ho to wo kaam callback function me likh dete h taaki jab api se data aa jaye to wo callback function call ho jaye


//📘 Rest vs Spread

// Use	Kaam
// ... in function parameter	Collect values → Rest
// ... in function call / array	Spread values → Spread