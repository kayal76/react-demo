import React, { useEffect, useState } from "react";

function UpdateComp(){

    const[name,setname]=useState("")
    const[count,setcount]=useState(0)

    useEffect(()=>{
        setname("kayalkayal")
        localStorage.setItem("status","jgfuv")

        return()=>{
            localStorage.removeItem("status")
            console.log("closed")
        }

     },[count])
      const handleadd=()=>{
        setcount(count+1)
      }

    return(
   <div>

        <h1>name is{name}</h1>
        {count}
        <button onClick={handleadd}>add</button>
       </div> 
    )
}
export default UpdateComp