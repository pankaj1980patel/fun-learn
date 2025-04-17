import React from "react";

const Gopal = () => {
  let A = [1, 2, 3];

  const B = { a: "asd" };
  for (let i = 0; i < A.length; i++) {
        
     
       
  }
  console.log(A); // [3,4,5]
  A = [1, 2, 3];
  A.map((a) => );

  for (let a of A) {
    console.log("gopal for of", a);
  }

  for (let b in A) {
    console.log("gopal for in", A[b]);
  }

  A.forEach((each) => {
    console.log("gopal foreach", each);
  });

  A.reduce((accum, currenvalue) => {
    console.log("gopal reduce ", currenvalue);
  }, 0);

  let j = 0;
  while (j < A.length) {
    console.log("gopal while loop", A[j]);
    j++;
  }

  return <div>Gopal</div>;
};

export default Gopal;
