
import './Cards.css'
import { useState } from 'react';

export default function Cards({title,idx}){


    // description array

    const description=[
        " men's Heritage Classic Oxford Shirt in Optic White from Crew Clothing ",
        "Lyst - Lacoste Short Sleeve Piqué Polo T-Shirt - Classic Fit in Red for Men.",
        "Take Your Look a Notch Higher With a Range Of , Shorts more.",
        "Take Your Look a Notch Higher With a Range Of Hoodies, Shorts more. ",
        "Classic Shirt Regular Fit 100% Cotton Off white - TIE HOUSE",
        "men's Heritage Classic Oxford Shirt in Optic White from Crew Clothing",
        "'Lyst - Ralph Lauren Classic Fit Short Sleeve Solid Linen Sport Shirt in. " ,
        "Take Your Look a Notch Higher With a Range Of , Shorts more.",
        "men's Heritage Classic Oxford Shirt in Optic White from Crew Clothing ",
        "Lyst - Lacoste Short Sleeve Piqué Polo T-Shirt - Classic Fit in Red for Men.",
        "Take Your Look a Notch Higher With a Range Of Hoodies, Shorts more. ",
        "Classic Shirt Regular Fit 100% Cotton Off white - TIE HOUSE",
        'Pattern: solid colorColor: white, black, army greenProduct Category',
        'PRICES MAY VARY. 100%  Button closure Machine Wash Relaxed fit. ',
        'PRICES MAY VARY. Corduroy Import Button closure Machine Wash  : ',
        'Mens Cotton Breathable  Embroidered Button up Casual Shirts Brand:',
        'SPECIFICATIONS Brand Name: NoEnName_Null Hign-concerned Chemical: ',
        'SAYO TOMASYON Mens Casual    Shirt With Chest Pocket, Male Clothes',
        '#menfashion #menstylefashion #menstreetfashion  #mensshirts ',
        'PRICES MAY VARY. 100% Polyester Imported  closure Comfy  with no stretch,',
        'Embrace a blend of comfort and  uniquely designed Beach   Pattern Shirts',
        'ShortPlace Of Origin: China Pattern Type: PatchworkOrigin: Mainland',
        'PRICES MAY VARY. 100% Polyester Imported  closure Comfy  with no stretch,',

    ];

    // price array

   const cardPrice=['2000','4000','1500','7810','2800','4750','1780','1200','7150','4255',
        '9892','1580','2000','4000','1500','7810','2800','4750','1780','1200','7150','4255','8765'
    ];

    // images array

    const productImages=[

        '/gentscollection/image04.jpeg','/gentscollection/image05.jpeg',
        '/gentscollection/image06.jpeg','/gentscollection/image07.jpeg',
         '/gentscollection/image08.jpeg','/gentscollection/image09.jpeg',
         '/gentscollection/image10.jpeg','/gentscollection/image11.jpeg',
        '/gentscollection/image03.jpeg','/gentscollection/image02.jpeg',
        '/gentscollection/image01.jpeg','/gentscollection/image12.jpeg',
        '/gentscollection/image13.jpeg','/gentscollection/image14.jpeg',
        '/gentscollection/image15.jpeg','/gentscollection/image16.jpeg',
         '/gentscollection/image17.jpeg','/gentscollection/image18.jpeg',
         '/gentscollection/image19.jpeg','/gentscollection/image20.jpeg',
        '/gentscollection/image21.jpeg','/gentscollection/image22.jpeg',
        '/gentscollection/image23.jpeg'
        ];  

        // rating array
        const rating=[
            [<i class=" text-warning   fa-solid fa-star"></i>,<i class="  text-warning fa-solid fa-star"></i>,
            <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning fa-solid fa-star"></i> ] ,

            [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,

            [<i class="text-warning  fa-solid fa-star"></i>,<i class="text-warning   fa-solid fa-star"></i>,
            <i class=" text-warning   fa-solid fa-star"></i>],

            [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,

            [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,

            [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,

            [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,

            [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning  fa-solid fa-star"></i> ] ,


            [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
             <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning  fa-solid fa-star"></i> ] ,

            [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
            <i class=" text-warning  fa-solid fa-star"></i> ] ,

            [<i class=" text-warning  fa-solid fa-star"></i>,<i class="  text-warning fa-solid fa-star"></i>,
                <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning fa-solid fa-star"></i> ] ,
    
                [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,
    
                [<i class="text-warning  fa-solid fa-star"></i>,<i class="text-warning   fa-solid fa-star"></i>,
                <i class=" text-warning   fa-solid fa-star"></i>],
    
                [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,
    
                [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,
    
                [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,
    
                [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,
    
                [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                <i class=" text-warning  fa-solid fa-star"></i> ] ,

                [<i class=" text-warning  fa-solid fa-star"></i>,<i class="  text-warning fa-solid fa-star"></i>,
                    <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning fa-solid fa-star"></i> ] ,
        
                    [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                    <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,
        
                    [<i class="text-warning  fa-solid fa-star"></i>,<i class="text-warning   fa-solid fa-star"></i>,
                    <i class=" text-warning   fa-solid fa-star"></i>],
        
                    [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                    <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,
        
                    [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                    <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,

                    [<i class=" text-warning  fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                    <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i> ] ,
        
                    

            
        
            



        ]

            // views array
            
        const views=[
            '56views','33views','67views','98views','90views','25views','83views','93views','232views',
            '213views','243views','273views','238views','203views','73views','23views','44views','32views',
            '93views','73views','276views','103views','79views'
        ]

        let [isLiked,setIsLiked]=useState(false)
        let [count,isCount]=useState(0)
       

        function toggleLikedBtn(){

            setIsLiked(!isLiked);
            isCount(count+1)
        }

        let heartStyle={color:"red"}

        let spanStyle1={fontSize:"28px"}
        let spanStyle2={fontSize:"15px"}

    return(
        
        // card component

            <div className='card mt-3 mb-2 ms-3 me-3 ' >
                <img src={productImages[idx]} alt="..." />

                <h4 id='card-title'  className='text-dark ms-3 mt-3 d-inline'>
                    
                     <span style={spanStyle1} onClick={toggleLikedBtn} >

                        { isLiked?<i style={heartStyle}  className="   fa-solid fa-heart"></i> :
                        <i className="fa-regular fa-heart"></i> }
                        </span> 
                        <span style={spanStyle2} className='ms-2'  onClick={toggleLikedBtn} >{count}</span>
                    
                    
                    
                    <b className='ms-2' > {title  } <br /> </b>  <i  className= " cart  text-light  fa-solid fa-cart-shopping"> </i> </h4>

                <p className='text-primary ms-3 mt-3  description ' > {description[idx]} </p>
                <span className='text-dark ms-3 mb-4  ' > Price- <b className='me-4' > &#x20b9;   {cardPrice[idx] }</b> {rating[idx]} &nbsp; {views[idx]} </span>
                

                

            </div>
                


        
    )
}