import React, { useState } from 'react'

 function FormReact() {
   const[name,setname]=useState("")
    const[age,setage]=useState("")
    const[email,setemail]=useState("")
    const[ishow,setishow]=useState(false)

    const handlename=(e)=>{
     setname(e.target.value)
    }
     const handleage=(e)=>{
        setage(e.target.value)
     }
        const handleemail=(e)=>{
            setemail(e.target.value)

    }
    
        const handlesubmit=(e)=>{
         e.preventDefault()   
         setishow(true)
        }
    return (
    <div>
        <h1>Register Form</h1>

        {!ishow?

        
     <form>
     <label>Name</label>
     <input placeholder="enter u r name" onChange={handlename}/>
     <br/>
     <br/>

     <label>age</label>
     <input placeholder="enter u r age" onChange={handleage}/>
     <br/>
     <br/>

     <label>Email</label>
     <input placeholder="enter u r email" onChange={handleemail}/>
     <br/>
     <br/>

<button onClick={handlesubmit}>Submit</button>


</form>
:
<h1>u r response saved</h1>
}

{ishow &&
<div>
<h1>name:{name}</h1>
<h1>age:{age}</h1>
<h1>email:{email}</h1>
</div>
 }
    </div>
  )
}
export default FormReact