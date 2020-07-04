import React from 'react'
import '../css/SliderB.css'

import Pic0 from '../Images/Slider/Pic0.png'
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

const SliderB = () => {
    return (
        <div id="carouselExampleIndicators" className="carousel slide container" data-ride="carousel" >
            {/* <ol className="carousel-indicators">
                <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="3"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="4"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="5"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="6"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="7"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="8"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="9"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="10"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="11"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="12"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="13"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="14"></li>
                <li data-target="#carouselExampleIndicators" data-slide-to="15"></li>
            </ol> */}
            <div className="carousel-inner">
            <div className="carousel-item active">
                    <img className="d-block w-100" src={Pic0} alt="First slide" />
                </div>
                <div className="carousel-item ">
                    <img className="d-block w-100" src={Pic1} alt="First slide" />
                    <div className="text-center text-white">
                        <h5>July 5th 1997</h5>
                        <p>The weight of the earth increased 10 fold</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic2} alt="Second slide" />
                    <div className="text-center text-white">
                        <p>Bachpan me toh sab cute hote hai :p</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic3} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>Pizzaa is lou..!</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic4} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>Aloo toh tera fav hai re baba. Piri Piri toh jaan se bhi pyara :p</p>
                        <p>PS: IDK ye image ulta kyu hai -_-</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic5} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>Year 2016, Jab tum actually patli thi..</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic6} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>Bunk maar ke food court jana still one of the best memories</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic7} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>Paise kam the lekin McD se coke peena toh banta hai.. 😊</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic8} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>Ye kaise bhula sakte hai bhala.. 😊</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic9} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>Hope you still remember why this pic was taken</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic10} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>😊</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic11} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>😊</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic12} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>😊</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic13} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>Again, IDK..! </p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic14} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>😊</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic15} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>😊</p>
                    </div>
                </div>
                <div className="carousel-item">
                    <img className="d-block w-100" src={Pic16} alt="Third slide" />
                    <div className="text-center text-white">
                        <p>Bachpan toh gaya, Jawani bhi gayi, Ek pal toh ab hume jeene do..</p>
                    </div>
                </div>
            </div>
            <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                <span className="sr-only">Previous</span>
            </a>
            <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                <span className="sr-only">Next</span>
            </a>
        </div>
    )
}

export default SliderB
