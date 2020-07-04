import React from 'react'
import {Link} from 'react-router-dom'

import '../css/Friends.css'
import b1 from '../Images/byju1.png'
import b2 from '../Images/byju2.png'
import b3 from '../Images/byju3.png'

const Friends = () => {


    const list = [
        { url: b3, alt: 'Arpit'}, 
        { url: b3, alt: 'Darshu'},
        { url: b3, alt: 'Gandha'}, 
        { url: b3, alt: 'Harsha'}, 
        { url: b3, alt: 'Manju'}, 
        { url: b3, alt: 'Pavan'}, 
        { url: b3, alt: 'Ravil'}, 
        { url: b3, alt: 'Sahaar'}, 
        { url: b2, alt: 'Sakshu'},
        { url: b3, alt: 'Sangram'}, 
        { url: b2, alt: 'Sirisha'},
        { url: b3, alt: 'Sujit'}, 
        { url: b3, alt: 'Upasini'}, 
        { url: b3, alt: 'Varsha'}, 
        { url: b1, alt: 'Vivek'},
        { url: b3, alt: 'Yogesh'}, 

        // { url: b3, alt: 'sadiya'}, 
        // { url: b3, alt: 'swetha'}, 
        // { url: b3, alt: 'Divya'}, 
        // { url: b1, alt: 'Meghu'},
        // { url: b3, alt: 'anmol'}, 
    ]

    return (
        <div className="container">
            <h3>Look at what your FRIENDS have to say</h3>
            <div className="row">
                {
                    list.map((item, index) => {
                        return (
                            <div className="col-sm-12 col-md-3" key={index}>
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
