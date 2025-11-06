// let a="Rohit";
// let b="Mohit"
// let c=a&&b
// console.log(c)  // output mohit because and operator check both left right is left side is true then it will retun right side value;

// let a="";
// let b="Mohit"
// let c=a&&b
// console.log(c)// it return nothing means empty because it firstly check on left side of c which is false then it quicky retrun null if firstly left side is true then go check for right side


// 🧠 1. Bitwise Operators (&, |)

// These work at the bit level — i.e., they convert numbers to binary and operate on each bit.

// ➤ & → Bitwise AND

// Rule: Returns 1 only if both bits are 1.

// a	b	a & b
// 0	0	 0
// 0	1	 0
// 1	0	 0
// 1	1	 1

// let a = 5;   // 0101 in binary
// let b = 3;   // 0011 in binary

// console.log(a & b);  // 1 → (0001)



// ➤ | → Bitwise OR

// Rule: Returns 1 if at least one bit is 1.

// | a | b | a | b |
// |---|---|-------|
// | 0 | 0 | 0 |
// | 0 | 1 | 1 |
// | 1 | 0 | 1 |
// | 1 | 1 | 1 |

// Example:

// let a = 5;  // 0101
// let b = 3;  // 0011

// console.log(a | b);  // 7 → (0111)


// Explanation:

//    0101
// |  0011
// =  0111  → 7
