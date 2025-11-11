// closure
//scope , clouser, HOF(higher order function)



// ### What is a Closure?

// **Closure** = A function that **remembers** variables from its **outer scope** even after the outer function has finished executing.

// This is THE most important concept for understanding JavaScript!

// let a=10; //global variable

// const b=20;

// function greet(){
//     console.log(a)
// }
// greet(); 

// global scope can be accessible to everyone

// functional-> accessible within function only

// block scope -> accessible within block only


// eg1------

// function createCounter(){

//     function increment(){
//         console.log("hello")
//     }

//     return increment;
// }

// const counter=createCounter();
// counter(); 



// eg2------

// function createCounter(){
     
//     let count=0;
//     function increment(){
//       count++;
//       return count;
//     }

//     return increment;
// }


// console.log(count)  error because count is not defined in global scope
//
// const counter=createCounter();
// console.log(counter())

//#### usecase of closure

// 1. private variable

// function createBankAccount(initialBalance) {
//     let balance = initialBalance;  // PRIVATE - can't be accessed directly

//     return {
//         deposit: function(amount) {
//             balance += amount;
//             return balance;
//         },

//         withdraw: function(amount) {
//             if (amount > balance) {
//                 return "Insufficient funds";
//             }
//             balance -= amount;
//             return balance;
//         },

//         getBalance: function() {
//             return balance;
//         }
//     };
// }

// const myAccount = createBankAccount(100);

// console.log(myAccount.getBalance());  // 100
// myAccount.deposit(50);  // 150
// myAccount.withdraw(30);  // 120

// // Can't directly access or modify balance!
// console.log(myAccount.balance);  // undefined
// myAccount.balance = 9999999;  // Doesn't work!
// console.log(myAccount.getBalance());  // 120 - still protected


// higher order function(HOF)

// function double(value){
//   return function execute(number){
//     return number*value;
//   }
// }

// const result=double(2); // execute function is returned
// console.log(result(5)); //10 
// it is same as console.log(double(2)(5));
// result double function ko return kr rha hai
// result(5) means execute(5) which is returned function from double function