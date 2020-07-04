import React from 'react'

import '../css/Friends.css'
import b1 from '../Images/byju1.png'
import b2 from '../Images/byju2.png'
import b3 from '../Images/byju3.png'

const Friends = () => {


    const list = [
        { url: b1, alt: 'vivek'},
        { url: b2, alt: 'sakshu'},
        { url: b3, alt: 'ravil'}, 
        { url: b3, alt: 'sangram'}, 
        { url: b3, alt: 'manju'}, 
        { url: b3, alt: 'sahaar'}, 
        { url: b3, alt: 'sadiya'}, 
        { url: b3, alt: 'swetha'}, 
        { url: b3, alt: 'anmol'}, 
        { url: b3, alt: 'upas'}, 
        { url: b1, alt: 'Meghu'},
        { url: b2, alt: 'Siri'},
        { url: b3, alt: 'Pavan'}, 
        { url: b3, alt: 'Darshu'},
        { url: b3, alt: 'sujit'}, 
        { url: b3, alt: 'Divya'}, 
        { url: b3, alt: 'gandha'}, 
        { url: b3, alt: 'yogesh'}, 
        { url: b3, alt: 'Arpit'}, 

        //Yet to give
        // { url: b3, alt: 'varsha'}, 
        // { url: b3, alt: 'tanmay'}, 
        // { url: b3, alt: 'sangyaa'}, 
        // { url: b3, alt: 'sushmita'}, 
        // { url: b3, alt: 'santhyaa'}, 
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
                                    <a href={`${process.env.PUBLIC_URL}/${item.alt}`}>
                                        <img src={item.url} alt={item.alt} />
                                    </a>
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
