import React from 'react'
import '../css/Rohit.css'

import google from '../Images/google.png'

const Rohit = () => {
  
    return ( 
        <div className="container">
            <video controls>
                {/* <source src="https://firebasestorage.googleapis.com/v0/b/bday-4a697.appspot.com/o/Rohit.mp4?alt=media&token=7d6b5b39-f454-47a2-9025-9fff1cd43072" type="video/mp4"  /> */}
                <source src="movie.ogg" type="video/ogg" />
                Your browser does not support HTML video.
            </video> 
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

export default Rohit
