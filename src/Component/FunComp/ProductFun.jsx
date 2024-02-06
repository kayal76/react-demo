import react, { useState } from "react";

function productFun(){

    const[count,setcount]=useState(0);
    const handleadd=()=>{
     setcount(count+1)
    };
 return(
<>
<h1>productFun</h1>
<h2>count-{count}</h2>
<button onClick={handleadd}>add</button>
</>
  )

}
export default productFun;






   