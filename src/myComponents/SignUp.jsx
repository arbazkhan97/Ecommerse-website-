

import Navbar from "./allHOmeComponent/Navbar"
import Footer from './allHOmeComponent/Footer'
export default function SignUp() {
    let style={marginLeft:"4rem"}
    let style2={boxShadow:"0 0 20px rgb(144, 139, 139)"}
    return (
        <>

        
            <Navbar />

            <h1 className="mt-4 mb-4 text-center" >Registration Form</h1>

            <div  style={style2}  className=" forms offset-3 mt-5 mb-5  col-6n form-items">
                
                <div className="  ms-5 col-10  mt-4 ">
                    <label for="username" className="form-label mt-4 ms-4 mb-3  "> Username: </label>
                    <input type="text" className="form-control" id="name" placeholder="Username"></input>
                </div>

                <div className=" ms-5 col-10 mb-2 mt-2 ">
                    <label for="email" className="form-label mt-2 ms-4  ">Email:</label>
                    <input type="email" className="form-control" id="email" placeholder="Email"></input>
                </div>

                <div className=" ms-5 col-10 mb-2 mt-2  ">
                    <label for="password" className="form-label mt-2 ms-4  ">Password:</label>
                    <input type="password" className="form-control" id="password" placeholder="Password"></input>
                </div>
                

                <button style={style}  className=' mt-3 mb-4  btn btn-outline-dark' >Submit</button>
        

                </div>

            <Footer/>

                </>
    )
}