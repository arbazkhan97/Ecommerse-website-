import './FeatureCard.css'

export default function FeatureCard(){
    return(
        <div className="feature-container d-flex mt-4 mb-2"  >
            <div className="feature-card">
               <i class="fa-solid fa-earth-americas"></i>
                <h4>Worldwide Shopping </h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
                <button className='btn btn-outline-dark  ' > Read more!</button>

            </div>

            <div className="feature-card">
               <span > <i class="fa-solid fa-person-dress"></i></span>
                <h4>Best Quality</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
                <button className='btn btn-outline-dark  ' > Read more!</button>

            </div>

            <div className="feature-card">
                <span><i class="fa-solid fa-tag"></i></span>
                <h4>Best Offer</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
                <button className='btn btn-outline-dark  ' > Read more!</button>

            </div>

            <div className="feature-card">
                <span><i class="fa-solid fa-lock"></i></span>
                <h4>Secure Payments</h4>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit!</p>
                <button className='btn btn-outline-dark  ' > Read more!</button>

            </div>





        </div>

    )
}