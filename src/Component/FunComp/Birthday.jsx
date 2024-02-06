import React, { useEffect, useState } from "react";
import "./birthday.css"


const Birthday=()=>{

let[data,Setdata]=useState([

    {
  
      id: 1,
  
      name: 'Bertie Yates',
  
      age: 29,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
  
    },
  
    {
  
      id: 2,
  
      name: 'Hester Hogan',
  
      age: 32,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-3_rxtqvi.jpg',
  
    },
  
    {
  
      id: 3,
  
      name: 'Larry Little',
  
      age: 36,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883423/person-4_t9nxjt.jpg',
  
    },
  
    {
  
      id: 4,
  
      name: 'Sean Walsh',
  
      age: 34,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883417/person-3_ipa0mj.jpg',
  
    },
  
    {
  
      id: 5,
  
      name: 'Lola Gardner',
  
      age: 29,
  
      image:
  
        'https://res.cloudinary.com/diqqf3eq2/image/upload/v1586883334/person-1_rfzshl.jpg',
  
    },
    {
  
        id: 6,
    
        name: 'luffy Yates',
    
        age: 28,
    
        image:
    
          'https://res.cloudinary.com/diqqf3eq2/image/upload/v1595959131/person-2_ipcjws.jpg',
    
      },
  ]

);

const handleremove=()=>{
  Setdata([])
}
return(

<div className="bg">
<main className ="two">
<h1>{data.length} Birthday Today</h1>

{data.map((da)=>(

<section>
<img src={da.image}  className="one" width="80px"  height="80px"/>

<div className="a">
<h2>{da.name}</h2>
<p>{da.age}years ago</p>

</div>
</section>

))}
 <button onClick={handleremove} className="btn">Clear All</button> 

</main>
</div>
)
}
export default Birthday