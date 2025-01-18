import './Footer.css'

export default function Footer(){
    return(
        <footer className=" mt-2 mb-2" >

            <div className="footer-items">
                <h2 className=' text-center mt-3' >Arbaz khan</h2>
                <li className='mt-5' > <b>The best look anytime,anywhere</b> </li>
                
            </div>

            <div className="footer-items">

            <h2 className='mt-3 text-center text-dark' >For her</h2>
            <li>Women Jeans</li>
            <li>Top and Shirts</li>
            <li>Women Jacket</li>
            <li>Heels and Flats</li>
            <li>Women Accessories</li>
            
            

            </div>


            <div className="footer-items">
                <h2 className='mt-3 text-center text-dark' >For Him</h2>
                <li >Men Jeans</li>
                <li>Men Shirts</li>
                <li>Men Shoes</li>
                <li>Men Jacket</li>
                <li>Men Accessories</li>
            </div>

            <div className="footer-items ">
                <h2 className='mt-3 text-center text-dark' >Subscribe</h2>
                <input className='ms-5 mt-3' type="text" name="" id="" placeholder='Your email address' /> <br />
                <button className='btn btn-outline-dark mt-2 ms-5'  >Subscribe</button>

                <div className="social mt-3 mb-2 ms-5 ">
                    <h4 className=' mt-1 mb-2 text-dark' >Socials</h4>


                   <a className='d-block mb-1 text-dark' href="https://www.instagram.com/mr.khan_o9dc/profilecard/?igsh=NTVlNzg5bzMybGln"><i class="fa-brands fa-square-instagram"></i>Instagram</a> 
                    <a className='d-block mb-1 text-dark  '  href="https://www.facebook.com/profile.php?id=100051095463286&mibextid=ZbWKwL"><i class="  fa-brands fa-facebook"></i>Facebook</a>
                    <a className='d-block mb-1 text-dark ' href=""><i class="  fa-brands fa-whatsapp"></i>Whatsapp</a>
                   <a className='d-block mb-1  text-dark'  href="https://www.linkedin.com/in/arbaz-khan%F0%9F%9A%80-68b732259?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"> <i class="  fa-brands fa-linkedin"></i>Linkedin </a>  
                   <a  className='d-block mb-1  text-dark' href="https://github.com/arbazkhan97/"><i class="fa-brands fa-github"></i>Github</a>             

                </div>
                
                
            
            </div>

            

            <span className='text-center text-dark' >2024@coopyrightwith <strong>arbazkhan</strong> </span>
            

           

       
        </footer>
    )
}