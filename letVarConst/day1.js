// let a=10;
// a=5;
// console.log(a);  // reasign and redeclear




// if(true){
//     var a=20;
// }

// console.log(a); 

// if(true){
//     let b=30;
// }
// console.log(b);


// number 

// let a=10;
// let b=2.5
// console.log(a,b);

// string
// let c="komal"
// let d="i am comming"

// console.log(c,d)

//boolean

// let a=true;
// let b=false;

// undefine

// let user;
// console.log(user)

//symbol

const id1=Symbol("id");
// console.log(id1)
const id2=Symbol("id");
// console.log(id2)   

console.log(id1==id2)
// create unique value


//object
let user={
    name:"Rohit",
    age:19,
    category:"gen"
}

//function

function add(){
    console.log("hello")
} 

add();


//type of null --> object (exception)


let obj={
    name:"Mohan",
    age:10
}
let obj2=obj

obj2.name="ankit"
console.log(obj)
console.log(obj2)

const obj3={...obj}

obj3.name="komal"
console.log(obj3)
console.log(obj)




let a=0.1
let b=0.2
let c=a+b;
console.log(c)   // output 0.30000004



//toFixed()


// but if i want exact value 
console.log(Number((a + b).toFixed(2))); // 0.3


// Feature	Description
// Purpose	Format a number to fixed decimal places
// Argument	Number of digits after decimal (0–20)
// Rounding	Yes
// Returns	String
// Convert back	Use Number()

let a=0.1
let b=0.2

console.log(Math.round((a + b) * 100)/100)  // 0.3

