
import Navbar from './allHOmeComponent/Navbar'
import AboutHero from './allAboutComponent/AboutHero'
import Abouthero02 from './allAboutComponent/Abouthero02'
import Team from './allAboutComponent/Team'
import FooterHeading from './allHOmeComponent/FooterHeading'
import FeatureCard from './allHOmeComponent/FeatureCard'
import Footer from './allHOmeComponent/Footer'


export default function AboutUs(){
    return(
        <>
        <Navbar/>
        <AboutHero/>
        <Abouthero02/>
        <Team/>
        <h1 className='text-dark mt-4 mb-1 text-center' > Our Features </h1>
        
        <FeatureCard/>
        <FooterHeading/>
        <Footer/>
        
        </>
        
    )
}