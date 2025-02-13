
import { useState } from "react"
import SignUp from "./SignUp"
import Footer from "./allHOmeComponent/Footer"

export default function FormData(){

    const [data,setData]=useState([{
        username:'arbaz kkhan',
        email:'arbazkhan@gmail.com',
        password:'123'
    }])


    const addNewData=(newdata)=>{

        setData((currData)=>{
            return [...currData,newdata]
        })
    }

return(
<>
<SignUp addNewData={addNewData} />

<h1 className="text-center mt-2 mb-1 text-dark" >All Data</h1>

<div className="data-container d-flex mt-4 mb-4 " >

    {
        data.map((items,index)=>(
            
            <div style={{border:'2px solid black', padding:'10px' }} className="data me-3" key={index}  >

                <span> <b>Username: &nbsp; &nbsp;</b> {items.username}  </span> <br />
                <span> <b>Email: &nbsp; &nbsp;</b> {items.email}  </span> <br />
                <span> <b>Password: &nbsp; &nbsp;</b> {items.password}  </span>

            </div>
        ))

    }



</div>



<Footer/>
</>

)}