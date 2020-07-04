import React from 'react'
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';

import Pic1 from '../Images/Slider/Pic1.jpg'
import Pic2 from '../Images/Slider/Pic2.jpg'
import Pic3 from '../Images/Slider/Pic3.jpg'
import Pic4 from '../Images/Slider/Pic4.jpg'
import Pic5 from '../Images/Slider/Pic5.jpg'
import Pic6 from '../Images/Slider/Pic6.jpg'
import Pic7 from '../Images/Slider/Pic7.jpg'
import Pic8 from '../Images/Slider/Pic8.jpg'
import Pic9 from '../Images/Slider/Pic9.jpg'
import Pic10 from '../Images/Slider/Pic10.jpg'
import Pic11 from '../Images/Slider/Pic11.jpg'
import Pic12 from '../Images/Slider/Pic12.JPG'
import Pic13 from '../Images/Slider/Pic13.jpg'
import Pic14 from '../Images/Slider/Pic14.jpg'
import Pic15 from '../Images/Slider/Pic15.jpg'
import Pic16 from '../Images/Slider/Pic16.jpg'

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
                    <img src={Pic1} alt="b1" />
                </div>
                <div>
                    <img src={Pic2} alt="b2" />
                </div>
                <div>
                    <img src={Pic3} alt="b3" />
                </div>
                <div>
                    <img src={Pic4} alt="b3" />
                </div>
                <div>
                    <img src={Pic5} alt="b3" />
                </div>
                <div>
                    <img src={Pic6} alt="b3" />
                </div>
                <div>
                    <img src={Pic7} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Pic8} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Pic9} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Pic10} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Pic11} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Pic12} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Pic13} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Pic14} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Pic15} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>
                <div>
                    <img src={Pic16} alt="b3" />
                    <p className="legend">Legend 3</p>
                </div>

            </Carousel>
        </div>
    )
}

export default Slider
