import React from 'react'
import {Link} from 'react-router-dom'

import '../css/Friends.css'

import Arpit1 from '../Images/Arpit1.jpg'
import Anmol from '../Images/Anmol.jpg'
import Divya from '../Images/Divya.jpg'
import Darshu from '../Images/Darshu.jpeg'
import Gandha from '../Images/Gandha.jpeg'
import Harsha from '../Images/Harsha.jpeg'
import Manju from '../Images/Manju.jpg'
import Ravil from '../Images/Ravil.jpg'
import Rohit from '../Images/Rohit.jpg'
import Pavan from '../Images/Pavan.jpeg'
import Sahaar from '../Images/Sahaar.jpg'
import Sakshu from '../Images/Sakshu.jpeg'
import Sangram from '../Images/Sangram.jpg'
import Sadiya from '../Images/Sadiya.jpeg'
import Sujit from '../Images/Sujit.jpg'
import Shwetha from '../Images/Shwetha.jpg'
import Sirisha from '../Images/Sirisha.jpeg'
import Upas from '../Images/Upas.jpg'
import Vivek from '../Images/Vivek.jpeg'
import Varsha from '../Images/Varsha.jpg'
import Yogesh from '../Images/Yogesh.jpg'
import Meghu from '../Images/Meghu.jpeg'

const Friends = () => {


    const list = [
        { url: Arpit1, alt: 'Arpit'}, 
        { url: Darshu, alt: 'Darshu'},
        { url: Divya, alt: 'Divya'},
        { url: Gandha, alt: 'Gandha'}, 
        { url: Harsha, alt: 'Harsha'}, 
        { url: Manju, alt: 'Manju'}, 
        { url: Pavan, alt: 'Pavan'}, 
        { url: Ravil, alt: 'Ravil'}, 
        { url: Sahaar, alt: 'Sahaar'}, 
        { url: Sakshu, alt: 'Sakshu'},
        { url: Sangram, alt: 'Sangram'}, 
        { url: Sirisha, alt: 'Sirisha'},
        { url: Sujit, alt: 'Sujit'}, 
        { url: Upas, alt: 'Upasini'}, 
        { url: Varsha, alt: 'Varsha'}, 
        { url: Vivek, alt: 'Vivek'},
        { url: Yogesh, alt: 'Yogesh'}, 
        { url: Meghu, alt: 'Meghu'},
        { url: Anmol, alt: 'Anmol'}, 

        { url: Sadiya, alt: 'Sadiya'}, 
        { url: Shwetha, alt: 'Shwetha'}, 
        { url: Rohit, alt: 'Rohit'}, 
    ]

    return (
        <div className="container">
            <h3>Look at what your FRIENDS have to say on your special day..! </h3>
            <div className="row">
                {
                    list.map((item, index) => {
                        return (
                            <div className="col-sm-6 col-md-3" key={index}>
                                <div className="card">
                                    <Link to={`${process.env.PUBLIC_URL}/${item.alt}`}>
                                        <img src={item.url} alt={item.alt} />
                                    </Link>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            
        </div>
    )
}

export default Friends
