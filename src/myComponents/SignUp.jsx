
import { useState } from "react"
import Navbar from "./allHOmeComponent/Navbar"





export default function SignUp({addNewData}) {
    let style={marginLeft:"4rem"}
    let style2={boxShadow:"0 0 20px rgb(144, 139, 139)"}


    const [formData,setFormData]=useState({

        username:'',
        email:'',
        password:'',
    })

   

    // input handler

 function inputHandler(event){

        let element=event.target.name;
        
        let value=event.target.value;
       
        setFormData((curData)=>{
            return {...curData,[element]:value

            }
        })
    }

    // form handler


    function submitHandler(event){

        event.preventDefault();

        

      setFormData(  {
            username:'',
            email:'',
            password:''
        })

        addNewData(formData)

    }

    return (
        <>       
            <Navbar />

            <h1 className="mt-4 mb-4 text-center" >Registration Form</h1>

        <form onSubmit={submitHandler} style={style2}
          className=" forms offset-3 mt-5 mb-5  col-6 form-items" >

           
                
                <div className="  ms-5 col-10  mt-4 ">
                    <label htmlFor="username" className="form-label mt-4 ms-4 mb-3  "> Username: </label>
                    <input type="text" onChange={inputHandler} 
                    value={formData.username} className="form-control" 
                    id="username" name="username" placeholder="Username" />
                </div>

                <div className=" ms-5 col-10 mb-2 mt-2 ">
                    <label htmlFor="email" className="form-label mt-2 ms-4  ">Email:</label>
                    <input type="email" name="email" onChange={inputHandler}
                     value={formData.email} className="form-control"
                      id="email" placeholder="Email" />
                </div>

                <div className=" ms-5 col-10 mb-2 mt-2  ">
                    <label htmlFor="password" className="form-label mt-2 ms-4  ">Password:</label>
                    <input type="password" name="password" 
                    onChange={inputHandler} value={formData.password} 
                    className="form-control" id="password"
                     placeholder="Password" />
                </div>
                

                <button style={style} 
                 className=' mt-3 mb-4  btn btn-outline-dark' >Submit</button>
        

                
                </form>

            

                </>
    )
}