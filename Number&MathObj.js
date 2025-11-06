// let a=10;
// let b=345.689;
// console.log(b.toFixed(1))  // it return string

// console.log(b)
// console.log(b.toPrecision(4)) //kitne digit print krne h aur ye v string return krta h

// console.log(typeof b.toString())//string

// let a= new Number(20);

// let b=20;
// console.log(typeof b) //number
// console.log(typeof a) //object

// let a= new Number(20);

// let b=new Number(20);
// console.log( b) //number
// console.log( a) //object

// console.log(a==b) //false both have different address 


// console.log(Math.abs(-4));   4
// console.log(Math.PI);
// console.log(Math.LN10);
// console.log(Math.SQRT2);    1.4142. ..

// console.log(Math.ceil(6.3)); 7
// console.log(Math.floor(6.3)); 6

// console.log(Math.random());  //[0,1)  it will generate value between 0 and 1 where 0 is included but 1 is not included



//Math.floor(Math.random()*totalNoofOutomes)+shift 

// random number 0-9

console.log(Math.floor(Math.random()*10)) 

//1 to 10

console.log(Math.floor(Math.random()*10 +1)) 

//1 to 6

console.log(Math.floor(Math.random()*6 +1)) 


//15 to 25 11 number

console.log(Math.floor(Math.random()*11+15)) 


//Math.floor(Math.random()*(max-min+1)+min)


// where to use 

// 1  generate OTP : 4digit :1000-9999

//but this is not secure for generate random number

console.log(Math.floor(Math.random()*(9999-1000)+1000)) 

// 🔹 Math.random() kya karta hai?

// Math.random() JavaScript ka built-in function hai jo
// 0 (inclusive) se 1 (exclusive) ke beech ek random decimal number deta hai.

// Example:

// console.log(Math.random()); // 0.123456789

// 🔹 Lekin ye secure kyu nahi hai?
// 1️⃣ Pseudo-Random hai (not truly random)

// Math.random() ek PRNG (Pseudo-Random Number Generator) algorithm use karta hai.

// Ye ek deterministic algorithm hai — matlab agar kisi ko initial seed value mil jaaye,
// wo next numbers predict kar sakta hai.

// ⚠️ Iska matlab:

// Ye random dikhta hai, par actually predictable pattern follow karta hai.

// 2️⃣ No cryptographic seed

// Cryptographically secure random numbers ke liye engine ko unpredictable input chahiye
// (jaise system entropy, mouse movement, timing noise, etc.)

// Math.random() ye use nahi karta.
// Iska seed engine ke internal state pe depend karta hai, jise predict kiya ja sakta hai.

// 3️⃣ Same environment → same pattern

// Agar same JS engine same starting state se chalu ho,
// to Math.random() same sequence ke numbers generate kar sakta hai.

// So koi attacker theoretically guess kar sakta hai next number.

// 🔒 Example of risk:

// Agar tum Math.random() use karo:

// const otp = Math.floor(100000 + Math.random() * 900000);


// To OTP predictable ho sakta hai —
// especially agar attacker engine behavior jaanta ho.

// 🔹 Secure Alternative:

// For cryptographic / security purposes,
// use crypto module (Node.js me) ya window.crypto (browser me).

// ✅ Node.js example:
// const crypto = require("crypto");
// const otp = crypto.randomInt(100000, 999999);
// console.log(otp);

// ✅ Browser example:
// const array = new Uint32Array(1);
// window.crypto.getRandomValues(array);
// console.log(array[0]);


// Ye cryptographically secure random number deta hai —
// predict karna mushkil hota hai.

// Pehle “seed” samjho

// 👉 Seed ek starting value hoti hai jisse random number generator apne numbers banata hai.
// Tum ise samjho jaise ek formula me input dena.
// Agar same input diya to same result milega.

// Example:

// // Pseudo example (not real)
// randomNumber = (seed * 7 + 3) % 10;


// Agar seed = 2, to output hamesha same hoga.

// 🔹 Math.random() ka seed

// Math.random() internally ek fixed algorithm + ek hidden seed use karta hai.
// Ye seed:

// JavaScript engine (like V8, SpiderMonkey) khud generate karta hai

// But ye cryptographically strong nahi hota
// (matlab unpredictable sources jaise user ke system noise, mouse moves, etc. use nahi karta)

// Isiliye agar koi attacker engine ka seed guess kar le (ya same seed mile),
// to wo predict kar sakta hai ki next random number kya aayega.

// 🔹 “Same environment → same pattern” ka matlab:

// Agar do programs same JavaScript engine aur same initial seed ke sath start hue,
// to dono me Math.random() ka output exactly same sequence hoga.

// Example:

// // Program A
// console.log(Math.random()); // 0.736
// console.log(Math.random()); // 0.182

// // Program B (same engine, same state)
// console.log(Math.random()); // 0.736
// console.log(Math.random()); // 0.182


// Matlab random dikhta hai, par agar seed same ho to sequence repeat hota hai.
// ⚠️ Isliye ye predictable hai → attacker guess kar sakta hai OTP, token, etc.

// 🔹 Cryptographically Secure Generator kya karta hai?

// crypto.randomInt() ya window.crypto.getRandomValues()
// seed ke liye real system entropy (unpredictable sources) use karta hai:

// mouse move timing

// CPU clock jitter

// kitna ram use hua h mere system me

// cpu uaseage

// system noise

// keystroke delay

// Ye sab unpredictable hote hain, isiliye attacker next number predict nahi kar sakta.

// 🔹 crypto module kya hota hai?

// crypto ek built-in Node.js module hai
// jo security-related kaam ke liye use hota hai —
// jaise:

// passwords ko encrypt / hash karna

// secure random numbers banana

// digital signatures banana

// data ko encode/decode karna

// Ye sab kuch cryptography ke concept pe based hai.
// (“cryptography” ka matlab — data ko secure form me badalna jise easily samjha na ja sake.)

//seed->system time v ho skta h 