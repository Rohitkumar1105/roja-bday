import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import b1 from '../Images/byju1.png'
import b2 from '../Images/byju2.png'
import b3 from '../Images/byju3.png'

import '../css/Slider.css'

const Slider = () => {
    return (
        <div className="container-fluid"> 
            <Carousel 
                autoPlay 
                infiniteLoop 
                width="700px"
                className="slider"
                showThumbs={false}
            >
                <div>
                    <img src={b1} alt="b1" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src={b2} alt="b2" />
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <img src={b3} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel>
        </div>
    )
}

export default Slider
