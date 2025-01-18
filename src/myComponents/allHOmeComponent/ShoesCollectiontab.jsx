
import './Cardtab.css'
import ShoesCollections from './ShoesCollections'

export default function ShoesCollectiontab(){

    
    return(

        <div id='card-container' className='   d-flex mb-4 '  >

        <ShoesCollections  title="Men's lofer "   idx={0} />
        <ShoesCollections title="Lather boot "  idx={1} />
        <ShoesCollections title="Sport shoes"  idx={2} />
        <ShoesCollections title=" men's boot"  idx={3} />
        <ShoesCollections  title=" men's boot"  idx={4} />
        <ShoesCollections  title="Nike sneaker"  idx={5} />
        <ShoesCollections  title="Nike shoes"  idx={6} />
        <ShoesCollections  title=" Formal  shoes "  idx={7} />
       <ShoesCollections  title="Sport sneaker"  idx={8} />
        <ShoesCollections  title="Nike sneaker"  idx={9} />
        <ShoesCollections  title="Fashion sneaker"  idx={10} />
        <ShoesCollections title=" Most  shoes "  idx={11} />
        
        


        </div>
    )


}