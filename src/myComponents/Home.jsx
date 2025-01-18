

import Navbar from './allHOmeComponent/Navbar'
import Hero from './allHOmeComponent/Hero'
import Cardtab from './allHOmeComponent/Cardtab'
import GirlsCollectionstab from './allHOmeComponent/GirlsCollectionstab'
import Banner from './allHOmeComponent/Banner'
import ShoesCollectiontab from './allHOmeComponent/ShoesCollectiontab'
import Video from './allHOmeComponent/Video'
import FeatureCard from './allHOmeComponent/FeatureCard'
import FooterHeading from './allHOmeComponent/FooterHeading'
import Footer from './allHOmeComponent/Footer'

export default function Home(){
    return(
        <>
        <Navbar/>
        <Hero/>
        <h1 className='text-dark mt-3 mb-3 text-center' >Gents Collections </h1>
        <Cardtab/>
        <h1 className='text-dark mt-3 mb-3 text-center' >Ladies Collections </h1>
        <GirlsCollectionstab/>
        <h1 className='text-dark mt-3 mb-4 text-center' >New  Arrival </h1>
        <Banner/>
        <h1 className='text-dark mt-5 mb-2 text-center' >Shoes Collections </h1>
        <ShoesCollectiontab/>
        <h1 className='text-dark mt-3 mb-2 text-center' >Show Here </h1>
        <Video/>
        <h1 className='text-dark mt-3 mb-3 text-center' > Our Features </h1>
        < FeatureCard/>
        <FooterHeading/>
        
        <Footer/>

        </>
        
    )
}