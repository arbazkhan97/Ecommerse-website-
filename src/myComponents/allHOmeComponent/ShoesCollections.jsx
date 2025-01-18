
import './Cards.css'
import { useState } from 'react';



export default function ShoesCollections({title,idx}){

    
let [isLiked,setIsLiked]=useState(false)
let [count ,setCount]=useState(0);

function toggleLikedBtn(){
    
    setIsLiked(!isLiked);
    setCount((currentCount)=>{
        return currentCount+1
    });
}

    // shoes description array

    let description=[

        ' Casual Fashion : Sewing Shoes Type Basic Fits to size, take your normal size',
        'haft-Genuine Leather Type : Upper-Genuine Leather Type : pigskin Style',
         'Unleash your fearless style with our Custom Nike Air Force  Shoes Gray!',
        'Unleash your fearless style with our Custom Nike boot  Shoes black!',
        'Unleash your fearless style with our Custom Nike Air Force  Shoes Gray!',
        'Unleash your fearless style with our Custom Nike Air Force black shoes',
        ' Casual Fashion : Sewing Shoes Type Basic Fits to size, take your normal size',
        'haft-Genuine Leather Type : Upper-Genuine Leather Type : pigskin Style',
         'Unleash your fearless style with our Custom Nike Air Force  Shoes Gray!',
        'Unleash your fearless style with our Custom Nike boot  Shoes black!',
        'Unleash your fearless style with our Custom Nike Air Force  Shoes Gray!',
        'Unleash your fearless style with our Custom Nike Air Force black shoes',

    ];

    // price array

    let cardPrice=['1200','4000','1500','7810','2800','4750','1780','1200','7150','4255',
        '9892','1580',
    ];

    // images array

    let productImages=[

        '/shoescollection/image04.jpeg','/shoescollection/image05.jpeg',
        '/shoescollection/image06.jpeg','/shoescollection/image07.jpeg',
         '/shoescollection/image08.jpeg','/shoescollection/image09.jpeg',
         '/shoescollection/image10.jpeg','/shoescollection/image11.jpeg',
        '/shoescollection/image03.jpeg','/shoescollection/image02.jpeg',
        '/shoescollection/image01.jpeg','/shoescollection/image12.jpeg',
        
        ];  

        //  // rating array
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
                <i class=" text-warning fa-solid fa-star"></i>,<i class=" text-warning  fa-solid fa-star"></i>,
                <i class=" text-warning  fa-solid fa-star"></i>
             ] ,
    
            ] ;
        
            // views array
            
        const views=[
            '576views','83views','57views','98views','90views','25views','83views','99views','22views',
            '213views','243views','23views',
        ];

        let heartStyle={color:"red"}

        let spanStyle1={fontSize:"28px"}
        let spanStyle2={fontSize:"15px"}



    return(
        
        // card component

            <div className='card mt-3 mb-2 ms-3 me-3 ' >
                <img src={productImages[idx]} alt="..." />

                <h4  className='text-dark ms-3 mt-3 d-inline'>
                    <span style={spanStyle1} onClick={toggleLikedBtn} >

                    { isLiked?<i style={heartStyle}  className=" fa-solid fa-heart"></i> :
                        <i className="fa-regular fa-heart"></i> }
                        </span> 
                        <span style={spanStyle2} className='ms-2'  onClick={toggleLikedBtn} >{count}</span>
                    
                    
                    
                    
                    <b className='ms-2' > {title} </b> <i className= " cart  text-light  fa-solid fa-cart-shopping"> </i> </h4>
                <p className='text-primary ms-3 mt-3  description ' > {description[idx]} </p>
                <span className='text-dark ms-3 mb-4 ' > Price- <b className='me-4'> &#x20b9; {  cardPrice[idx]  } </b> {rating[idx]} &nbsp; {views[idx]}  </span>

                

            </div>
                


        
    )
}