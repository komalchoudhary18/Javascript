// forEach, filter,map,reducer,set

// forEach

// const arr=[1,2,3,4,5,"rohit"];

// arr.forEach((number,index,arr)=>{
//     console.log(number,index,arr);
// })

// forEach has 3 parameters value,index,array
// it doesn't return anything
// it just iterate the array
// it is faster than for loop
// it is used when we want to perform some operation on each element of array but don't want to return anything

// filter

// const arr=[1,2,3,4,5,"rohit"];

// const newArray=arr.filter((number)=> number>3)
//  console.log(newArray);

 // filter returns a new array
    // it is used when we want to filter some elements from an array based on some condition

//  #### create custom filter ourself

 const arr=[1,2,3,4,5,"rohit"];

// this=[1,2,3,4,5,"rohit"];

const compare=(number)=>number>3;

compare(5)
 arr.filtering= function(compare){

    const ans=[];
    for(let num of this)
    {
      if(compare(num)){
        ans.push(num);
    }
}
    return ans;
    }

    const result=arr.filtering((number)=> number>3);