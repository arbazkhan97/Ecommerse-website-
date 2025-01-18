
import Navbar  from "./allHOmeComponent/Navbar"
import ContactHero from "./allContactComponent/ContactHero"
import ContactFeature from "./allContactComponent/ContactFeature"
import ContactForm from "./allContactComponent/ContactForm"
import ContactMap from "./allContactComponent/ContactMap"
import Footer from './allHOmeComponent/Footer'
import FooterHeading from './allHOmeComponent/FooterHeading'

export default function ContactUs(){

    return(
        <>
            <Navbar/>
            
            <ContactHero/>
            <ContactMap/>

            <p className="text-center text-dark mt-3" > <b>Have any question?</b> </p>
            <h1 className="text-center text-dark mb-3" >We'are here to help.</h1>
            <ContactFeature/>
            < ContactForm/>
            < FooterHeading/>
            <Footer/>
           
        </>
    )
}