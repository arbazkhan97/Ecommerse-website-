import './contact.css'

export default function ContactForm(){

    let style={marginLeft:"4rem"}
    return(

        <div className='form-container mt-4 mb-4  '  >

            <div className="form-items">
                <p className='text-dark mt-5 ms-5  ' > <b>Don't be a stranger!</b> </p>
                <h1 className='text-dark ms-5' >You tell us. We listen.</h1>
                <p className='text-dark ms-5' >Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident perferendis voluptatibus voluptatem veniam deleniti impedit suscipit, saepe, libero earum ab ducimus dicta itaque ipsum a ut, unde sint perspiciatis quis.</p>
            </div>

            <div  className=" forms  col-6 form-items">
                <p className='text-center mt-2  ' > LEAVE A MESSAGE </p>
                <div className="  ms-5 col-10 ">
                    <label for="name" className="form-label  "> </label>
                    <input type="text" className="form-control" id="name" placeholder="Name"></input>
                </div>

                <div className=" ms-5 col-10 ">
                    <label for="subject" className="form-label"></label>
                    <input type="text" className="form-control" id="subject" placeholder="Subject"></input>
                </div>
                <div className=" ms-5 col-10 ">
                    <label for="email" className="form-label"></label>
                    <input type="email" className="form-control" id="email" placeholder="Email"></input>
                </div>



                <div className=" ms-5 col-10">
                    <label for="message" className="form-label"></label>
                    <textarea  className="form-control  " id="message" rows="5" placeholder='Message' ></textarea>
                </div>
                
                <button style={style}  className=' mt-3 btn btn-outline-dark' >Send message</button>
        
                
            </div>

        </div>
    )
}