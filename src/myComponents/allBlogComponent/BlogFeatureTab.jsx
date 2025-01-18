import './blog.css'

import BlogFeature from './BlogFeature'

 export default function BlogFeatureTab(){
    return(
        < >

            <BlogFeature  idx={0} />
            <BlogFeature idx={1} />
            <BlogFeature  idx={2} />
            <BlogFeature idx={3} />
            <BlogFeature  idx={4} />
            <BlogFeature idx={5} />

            <nav  aria-label="Page navigation example  ">
            <ul className="pagination    mt-5 mb-4">
                <li className="page-item  ">
                    <a className="page-link  bg-dark text-light " href="#" aria-label="Previous">
                        <span aria-hidden="true">&laquo;</span>
                    </a>
                </li>
                <li className="page-item  "><a className="page-link  text-dark  text-center " href="#">1</a></li>
                <li className="page-item"><a className="page-link text-dark text-center  " href="#">2</a></li>
                <li className="page-item"><a className="page-link text-dark text-center " href="#">3</a></li>
                <li className="page-item">
                    <a className="page-link  text-light bg-dark " href="#" aria-label="Next">
                        <span aria-hidden="true">&raquo;</span>
                    </a>
                </li>
            </ul>
        </nav>
            

        </>
    )
 }