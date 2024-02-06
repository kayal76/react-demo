import React, { useEffect, useState } from "react";
import CardComp from "../Common/CardComp";

function ApiCallfun(){

const [resdata,setresdata]=useState([]);

useEffect(()=>{
 handleapi()
 console.log("kayal")
 },[])

const handleapi= async()=>{
 const response= await fetch('https://fakestoreapi.com/products/');
  const data= await response .json();
  setresdata(data)
console.log(data);
}
return(
<div>
<div className="container">
<div className="row" > 
{resdata.filter((too)=>too.price>20).map((too,i)=>(
<div className="col-4">
    <CardComp tittle={too.title} price={too.price} img={too.image}/>
</div>
))}
</div>
</div>
</div>

);
}
export default ApiCallfun