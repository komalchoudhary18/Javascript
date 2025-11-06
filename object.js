//!st----
// const user={
//     name:"komal",
//     age:20,
//     email:"komal@gmail.com",
//     amount:4500
// }
// console.log(user)

// const { ClientSession } = require("typeorm")

// { name: 'komal', age: 20, email: 'komal@gmail.com', amount: 4500 }

// user.adhar=1234
// console.log(user)

//2nd----
// user={
//   name: 'komal',
//   age: 20,
//   email: 'komal@gmail.com',   
//   amount: 4500,
//   adhar: 1234
// }

// user.amount=5000
// console.log(user)

// console.log(user["name"])  //komal fetch value like array , string type

// console.log(user.name) fetch like object

//3rd-----
// const user={
//     name:"komal",
//     age:20,
//     email:"komal@gmail.com",
//     amount:4500
// }

// const user2=user;
// user2.age=35

// console.log(user)

// { name: 'komal', age: 35, email: 'komal@gmail.com', amount: 4500 }
// bcz it user and user2 pointing same Reference


//4th----


// const user={
//     name:"komal",
//     age:20,
//     email:"komal@gmail.com",
//     amount:4500
// }
// console.log(Object.keys(user));    "
// [ 'name', 'age', 'email', 'amount' ]

// console.log(Object.values(user)); 
// [ 'komal', 20, 'komal@gmail.com', 4500 ]

//both
// console.log(Object.entries(user));

// [
//   [ 'name', 'komal' ],
//   [ 'age', 20 ],
//   [ 'email', 'komal@gmail.com' ],
//   [ 'amount', 4500 ]
// ]

// for(let keys in user){
//     console.log(keys,user[keys])
// }

//it is like user["name"]->komal
// user["age"] ->22
//  Agr user.keys kreneg to user ke age keys dhundgega like name age amount inme


// 4th----
// const user={
//     name:"komal",
//     age:20,
//     email:"komal@gmail.com",
//     amount:4500
// }
// const name=user.name
// const age=user.age
// console.log(name,age)   komal 20   not good practice

//destructuring
// const {name,age}=user
// console.log(name,age)


//5th---

// for of loop not apply on objects
// it apply on array
//Object.keys return array 
// so we can apply for of loop on that

// const user={
//     name:"komal",
//     age:20,
//     email:"komal@gmail.com",
//     amount:4500
// }

// for(let values of Object.keys(user)){
//     console.log(values)
// }
// name
// age
// email
// amount

// for(let values of Object.values(user)){
//     console.log(values)
// }
// komal
// 20
// komal@gmail.com
// 4500

// for(let values of Object.entries(user)){
//     console.log(values)
// }

// [ 'name', 'komal' ]
// [ 'age', 20 ]
// [ 'email', 'komal@gmail.com' ]
// [ 'amount', 4500 ]

// for(let [keys,value] of Object.entries(user)){
//     console.log(keys,value)
// }


//6th--------

// in object we can also create a function

//eg
// const user={
//     name:"komal",
//     age:20,
//     email:"komal@123",
//     amount:4500,
//     greeting: function(){
//     console.log("hello komal!!")
//     return 20;
//   }
// }

// user.greeting()
//  output - hello komal!!

// let x=user.greeting()
// console.log(x);
//  output - hello komal!!
//20

// 7th--------

// this keyword in object

// const user={
//     name:"komal",
//     age:20,
//     email:"komal@123",
//     amount:4500,
//     greeting: function(){
//     console.log(`hello ${user.name}!!`)
//     return 20;
//   }
// }

// const user2={
//     name:"strike",
//     age:22,
// }
// user2.greeting=user.greeting
// console.log(user2)   

//output  { name: 'strike', age: 22, greeting: [Function: greeting] }

// console.log(user2.greeting());

// hello komal!!
// 20

//but if we use this keyword in user object in place user.name to this.name then it will return  
// hello strike!!
// 20
// this keyword always point to current object jo call krega this usko point krega

//nested object me this keyword parent object ko point krega

// shallow copy 
// const user={
//     name:"priya",
//     age:20,
//     email:"priya@123",
//     amount:4500,
//     address:{
//         street:"main road",
//         city:"banglore",
//         country:"india"
//     }
//   }
  // const user2={...user}
  // user2.name="Annu"
  // console.log(user2)

  // user2.address.city="mumbai"
  // console.log(user2.address.city)

  //mumbai
  // console.log(user2)
//{
  // name: 'Annu',
  // age: 20,
  // email: 'priya@123',
  // amount: 4500,
  // address: { street: 'main road', city: 'mumbai', country: 'india' }


  // console.log(user)

  // {
//   name: 'priya',
//   age: 20,
//   email: 'priya@123',
//   amount: 4500,
//   address: { street: 'main road', city: 'mumbai', country: 'india' }
// }


//deep copy

const user={
    name:"priya",
    age:20,
    email:"priya@123",
    amount:4500,
    address:{
        street:"main road",
        city:"banglore",
        country:"india"
    }
  }
  const user2=structuredClone(user)
  user2.address.city="jaipur"
  console.log(user)
  console.log(user2)