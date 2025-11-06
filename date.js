// const now=new Date();
// console.log(now)   //2025-10-08T09:45:41.097Z  9:45:41.097Z it is UTC time (universal time cordinate) 5 hr slow to our time


// indian time

// console.log(now.toString()) Wed Oct 08 2025 15:16:52 GMT+0530 
// console.log(typeof now)
// console.log(now.getDay())
// console.log(now.getDate())



//days:mon-tue(1 based)

//month :0 1

// day start from 1 but month from 0 which is inconsist in Date method in js

//year month date hour min sec millisec
// const now=new Date(2025,8,20,8,25,16,125)
// console.log(now)

//time kaha se aata h ??
// //hmre system se hi access leta h but js ke pass access ni hota hmre system ka 
// then how??

//Answer:-

// Host Environment
// Platform jahan JS run hoti hai

//JavaScript ko direct system access nahi chahiye — runtime environment (browser ya Node.js) hi OS se time puchta hai aur JS ko woh value provide karta hai. JS ka Date object woh value use karta hai.

// Thoda detail (step-by-step)

// Environment layer

// Tumhara JS code browser (Chrome, Firefox) ya Node.js me chalta hai.

// Browser/Node OS ke upar run hote hain aur unhe OS se system clock read karne ki permission hoti hai.

// JS ko kya milta hai

// Jab tum new Date() ya Date.now() call karte ho, JS engine (V8 etc.) internally host environment API ko call karta hai.

// Host environment OS se current time leke JS ko return kar deta hai.


const now= Date.now()
console.log(now)   // output 1759918529380 in millisecond

const dates=new Date(0)

const date=new Date(-12312312)
console.log(dates.toString())

console.log(dates.toString())  //Thu Jan 01 1970 05:30:00 GMT+0530 (India Standard Time)
console.log(date) //1969-12-31T20:34:47.688Z