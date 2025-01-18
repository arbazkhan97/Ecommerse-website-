
import './Hero.css'
export default function Hero(){

    return(
        <div className="hero-section  ">

            <h2 className='text-light  heading' >YOUR DREAM SHOPPING  </h2>
            <p className='text-light  hero-description '  >25% OF ON ALL PRODUCTS!  <br />   </p>
            <button  className=' btn-outline-light' >Shop!</button>
            <button  className='btn1  btn-light' >Catagory</button>
            <p className='icons' > Also available in flipcart and amazon</p>
            <i className="fa-brands fa-amazon"></i>
            <i><img src="/flipcart.jpeg" alt="" /></i>
            
            

        </div>
        
    )
}