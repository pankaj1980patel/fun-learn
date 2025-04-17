import React from "react";

const Rahul = () => {

  // Start here
  let arr = [1,2,3,4]
  for(let i=0; i<arr.length; i++)
  {
    console.log("simple for loop", arr[i])
  }


  //for each
  
  arr.forEach(function(integer){
         console.log("for each loop",integer*3);
         
  })

  //for of loop 
  for (num of arr){
    console.log("for of loop", num)
  }

  //for in loop

  for (let a in arr) {
    console.log( a) //give array index number 
    console.log(arr[])
    
  }

  
  return <div>Rahul</div>;  

};

export default Rahul;
