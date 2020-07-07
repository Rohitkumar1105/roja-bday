import React, { useState } from 'react'
import '../css/Rohit.css'

import google from '../Images/google.png'

const Rohit = () => {
    // const [ pass, setPass ] = useState('')

    const showComponent = () => {
        return ( 
            <div className="container">
                <video controls>
                    <source src="https://firebasestorage.googleapis.com/v0/b/blah-2f18b.appspot.com/o/Rohit.mp4?alt=media&token=dccceed8-ba11-4f18-82c0-7f4ac9dfa770" type="video/mp4"  />
                    <source src="movie.ogg" type="video/ogg" />
                    Your browser does not support HTML video.
                </video> 
                <a href="https://firebasestorage.googleapis.com/v0/b/blah-2f18b.appspot.com/o/Rohit.mp4?alt=media&token=dccceed8-ba11-4f18-82c0-7f4ac9dfa770"
                className="btn btn-info" download Content-Disposition="inline">Download Video</a>
                <br />
                <br />
                <br />
                <br />
                <div className="row">
                    <div className="col-sm-12 col-md-4">
                        <div className="game">
                            <h4>This game can only be played on a PC</h4> 
                            <a href="http://ncase.me/door/#Utl!khxn!i%60%7B%60%60sno!r%60%60m!r%60%60m!jd!eho!ino!q%60bi%60%60r!i%60%7B%60%60s" 
                                className="btn btn-primary" 
                                target="blank"
                            >
                                Play a little game
                            </a>
                        </div>
                    </div>
    
                    <div className="col-sm-12 col-md-8">
                        <div className="meme">
                            <h4 className="text-white">What happens when people have doubts</h4>
                            <img src={google} alt="meme" />
                        </div>
                    </div>
                </div>
            </div>
        )
    }  

    return (
        <div>
            {/* <input type="password" value={pass} placeholder="Enter password here" onChange={e => setPass(e.target.value)} />
            {
                pass === 'rawr' ? showComponent() : <h4>HBD Roja..!</h4> 
            } */}
            {showComponent()}
        </div>
    )
  
}

export default Rohit
