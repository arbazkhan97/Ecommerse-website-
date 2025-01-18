

import './Navbar.css'

// import { Helmet } from 'react-helmet'


export default function  Navbar(){

   


    return(
        <div id="navbar"  >
            <p className='logo   text-light '>Arbaz khan  </p>
            
            <ul  className=" d-flex nav-items" >
                <li><a className='text-light' href="/">Home</a></li>
                <li><a className='text-light' href="/AboutUs">About</a></li>
                <li><a className='text-light' href="/Blog">Blog</a></li>
                
                <li><a className='text-light' href="/Signup">Registration</a></li>
                <li><a className='text-light' href="/Login">Login</a></li>
                <li> <i className= " cart   text-light  fa-solid fa-cart-shopping"><sup className='text-warning' > </sup></i></li>
                <li> <a   className=' button  btn btn-outline-light' href='/contactUs'>Contact Us  </a>   </li>

            </ul>

            {/* <Helmet>
            <JavaScript src='/script.js' type="javascript"
                       
                />
            </Helmet>
  */}
        
           
        </div>
    )
    
}