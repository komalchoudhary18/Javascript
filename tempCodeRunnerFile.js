
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