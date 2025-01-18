

import Navbar from './allHOmeComponent/Navbar'
import BlogHero from './allBlogComponent/BlogHero'
import BlogFeatureTab from './allBlogComponent/BlogFeatureTab'
import Footer from './allHOmeComponent/Footer'
import FooterHeading from './allHOmeComponent/FooterHeading'
import FeatureCard from './allHOmeComponent/FeatureCard'

export default  function Blog(){
    return(
        <>
        <Navbar/>
        < BlogHero/>
        <BlogFeatureTab/>
        <FeatureCard/>
        <FooterHeading/>
        <Footer/>
        
        </>
    )
}