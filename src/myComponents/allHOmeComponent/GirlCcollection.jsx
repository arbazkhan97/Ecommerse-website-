

import './Cards.css'


import { useState } from 'react';


export default function GirlsCollection({title,idx}){


let [isLiked,setIsLiked]=useState(false)
    let [count ,setCount]=useState(0);

    function toggleLikedBtn(){
        
        setIsLiked(!isLiked);
        setCount(count+1);
    }


    // decscription array

    let description=[
        "White floral print fit & flare dressShoulder strapsShort, flared sleeve",
        "Blue tropical print fit & flare dressMandarin collarLong, regular sleeves",
        "White floral print fit & flare dressShoulder strapsShort, flared sleeve",
        "Blue tropical print fit & flare dressMandarin collarLong, regular sleeves",
        
        "Classic Shirt Regular Fit 100% Cotton Off white - TIE HOUSE",
        "girls's Heritage Classic Oxford Shirt in Optic White from Crew Clothing",
        "Lyst - Ralph Lauren Classic Fit Short Sleeve Solid Linen Sport Shirt in. " ,
        "Take Your Look a Notch Higher With a Range Of , Shorts more.",
        "White floral print fit & flare dressShoulder strapsShort, flared sleeve",
        "Blue tropical print fit & flare dressMandarin collarLong, regular sleeves",
        "White floral print fit & flare dressShoulder strapsShort, flared sleeve",
        "Blue tropical print fit & flare dressMandarin collarLong, regular sleeves",
        "Blue tropical print fit & flare dressMandarin collarLong, regular sleeves",
        "White floral print fit & flare dressShoulder strapsShort, flared sleeve",
        "Blue tropical print fit & flare dressMandarin collarLong, regular sleeves",
        'Classic Shirt Regular Fit 100% Cotton Off white - TIE HOUSE',
        "girls's Heritage Classic Oxford Shirt in Optic White from Crew Clothing",
        "Lyst - Ralph Lauren Classic Fit Short Sleeve Solid Linen Sport Shirt in. " ,
        'Shop for trendy fashion style spring dresses 2020 for women online at ZAFUL.',
        'I found these high street staples 3 months ago from  Stories, Arket and H&M, ',
        'Multicolor Casual  Sleeve   Top Embellished Non-Stretch Summer Women Tops',
        

    ];

// parice array

    let cardPrice=['2000','4200','1520','7810','2850','4750','1780',
        '1290','7080','4725','7810','2850','4750','1780','1290',
        ,'7810','2850','4750','4750','1780','5250',
    
    ];

    // images array

    let productImages=[

        '/girlscollection/image01.jpeg','/girlscollection/image02.jpeg',
        '/girlscollection/image03.jpeg','/girlscollection/image04.jpeg',
        '/girlscollection/image05.jpeg','/girlscollection/image06.jpeg',
        '/girlscollection/image07.jpeg','/girlscollection/image08.jpeg',
        '/girlscollection/image09.jpeg','/girlscollection/image10.jpeg',
        '/girlscollection/image11.jpeg','/girlscollection/image12.jpeg',
        '/girlscollection/image13.jpeg','/girlscollection/image14.jpeg',
        '/girlscollection/image15.jpeg','/girlscollection/image16.jpeg',
        '/girlscollection/image17.jpeg','/girlscollection/image18.jpeg',
        '/girlscollection/image19.jpeg','/girlscollection/image20.jpeg',
        '/girlscollection/image21.jpeg',
        ];  

        // rating icon array

        const rating=[
            [<i className=" text-warning   fa-solid fa-star"></i>,<i className="  text-warning fa-solid fa-star"></i>,
            <i className=" text-warning fa-solid fa-star"></i>,<i className=" text-warning fa-solid fa-star"></i> ] ,

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

        let heartStyle={color:"red"}

        let spanStyle1={fontSize:"28px"}
        let spanStyle2={fontSize:"15px"}


    return(
        

            <div className='card mt-3 mb-2 ms-3 me-3 ' >
                <img src={productImages[idx]} alt=".." />

                <h4  className='text-dark ms-3 mt-3 d-inline'>
                    <span style={spanStyle1} onClick={toggleLikedBtn} >

                    { isLiked?<i style={heartStyle}  className=" fa-solid fa-heart"></i> :
                        <i className="fa-regular fa-heart"></i> }
                        </span> 
                        <span style={spanStyle2} className='ms-2'  onClick={toggleLikedBtn} >{count}</span>
                    
                    
                    
                    
                    <b className='ms-2' > {title}</b> <i className= " cart  text-light  fa-solid fa-cart-shopping"> </i> </h4>

                <p className='text-primary ms-3 mt-3  description ' > {description[idx]} </p>
                <span className='text-dark ms-3 mb-4 ' > Price- <b className='me-4' > &#x20b9;   {cardPrice[idx]}   </b> {rating[idx]} &nbsp; {views[idx]}</span>

                

            </div>
                


        
    )
}