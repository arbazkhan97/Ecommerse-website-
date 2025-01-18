
import './blog.css'

export default function BlogFeature({idx}){

    let blogImages=['/blogImages/image01.jpg','/blogImages/image02.jpg','/blogImages/image03.jpg',

        '/blogImages/image04.jpg','/blogImages/image05.jpg','/blogImages/image06.jpg'
    ]

    let blogTitle=['The cotton Jersy Zip-up Hodies','How to style a quiff',
        'Runway -inspired Trends','Must-have skater Girl Items','AW20 Girlsswear Trends',
        'AW20 Menswear Trends'
    ]

    let blogDesc=['Kickstarter man braid godard coloring book. reclatte waistcot selfies yr wolf chartreuse hexagon irony, godard_', 
        'kickstarter man braid godard book reclatte waistcoot selfies yr walf chartrevise hexagon irony godard_', 

        'Kickstarter man braid godard coloring book. reclatte waistcot selfies yr wolf chartreuse hexagon irony, godard_',

        'Kickstarter man braid godard coloring book. reclatte waistcot selfies yr wolf chartreuse hexagon irony, godard_',
        'Kickstarter man braid godard coloring book. reclatte waistcot selfies yr wolf chartreuse hexagon irony, godard_',
        'Kickstarter man braid godard coloring book. reclatte waistcot selfies yr wolf chartreuse hexagon irony, godard_',

    ]

    return(
    <>        <div className='blog-container mt-3 mb-3  ' >
            <div className="blog-box ms-5">
                <img src={blogImages[idx]} alt="" />
                <h1>26/24</h1>

            </div>
            <div className="blog-box ms-3 ">
                <h4 className='feature-img' > {blogTitle[idx]} </h4>
                <p> {blogDesc[idx]} </p>
            </div>

        </div>

        

       



    </>


    )
}