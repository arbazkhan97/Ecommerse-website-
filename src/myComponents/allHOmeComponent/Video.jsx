import './Video.css'

export default function Video(){

    return(
        <div className="video-container" >
        
           
                <video controls loop  src="/shoppingvideo02.mp4"></video>
                <video controls loop src="/shoppingvideo.mp4"></video>
                
            
        </div>
    )
}