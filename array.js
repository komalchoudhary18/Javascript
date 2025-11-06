//Array:-

// let marks1=100;
// let marks2=40;
// let marks3=56;
// let marks4=67;

// we can also write like this

// let marks=[100,40,56,67]
// console.log(marks)

// for length= Array.length

// any type of data can be store in array

// let arr=[100,30,"komal",true]

// console.log(arr)  [ 100, 30, 'komal', true ]
// console.log(arr[2])

// console.log(typeof arr)  object

// arr[1]=80;

// console.log(arr)  [ 100, 80, 'komal', true ] 

// push:insert element at end

// arr.push(90);
// arr.push("strike")

//pop delete element at end


// unshift: add element at first place

// let arr=[100,30,"komal",true]
// arr.unshift(10);
// console.log(arr)   [ 10, 100, 30, 'komal', true ]


// shift  : delete element from starting
// let arr=[100,30,"komal",true]

//  arr.shift();   [ 30, 'komal', true ]
// console.log(arr)

// let arr=[10,30,50,90,11]

// for(let i=0;i<arr.length;i++){
//     console.log(arr[i])
// }


// let arr=[100,30,"komal",true]
// for(let num of arr){
//     console.log(num)
// }

// const arr=[10,20,30,50,33,24]
// const arr2=arr.slice(2,4)
// console.log(arr.slice(2,4))  

// console.log(arr2)


// console.log(arr.splice(1,3))

// console.log(arr)


//slice do not change original array it only give output b/w the index which is given by us 

// splice give output b/w the index which is given by us and trim that part from original arrAy

// spread operator :- //  modern JavaScript to create copies or merge arrays.

// const arr=[10,20,30,80];
// const arr2=['rohit',11,true]
// const arr4=[90,4,false]

// const arr3=[...arr,...arr2,...arr4]
// console.log(arr3);

//output
//  [
//   10,    20,      30,
//   80,    'rohit', 11,
//   true,  90,      4,
//   false
// ]

// .join(seperator) 

// suppose a array want to convert into string but jo v seperator denge uske according seperate krega like .join(" "), .join("-")

// const names=["Alice","Bob","Charlie"]

// console.log(names.toString())       output :--Alice,Bob,Charlie

// console.log(names.join(" "))  output :-- Alice Bob Charlie

// console.log(names.lastIndexOf("Bob"))  //1


// const names=["Alice","Charlie","Mohit","Bob","rohit"]

// console.log(names.sort())

// output:-- [ 'Alice', 'Bob', 'Charlie', 'Mohit', 'rohit' ]

// reverse
// console.log(names.reverse())

// const a=[101,10,90,40,45]
// console.log(a.sort())

// output : [ 10, 101, 40, 45, 90 ]  bcz of ASCII value

// Apply sorting

// const a=[10,23,54,2,45,80,65]

// a.sort((a,b)=>a-b)  // ascending order

// a.sort((a,b)=>b-a)  //descending order
// console.log(a)


// const arr=[10,30,50,[40,90,11],80];
// console.log(arr)

// console.log(arr[3][1])

// [ 10, 30, 50, [ 40, 90, 11 ], 80 ]
// 90

// const a=[10,203,"Rohit",9.3,true]

// a.name="Mohan"
// console.log(a)