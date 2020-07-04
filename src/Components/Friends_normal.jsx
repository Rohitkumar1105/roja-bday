import React from 'react'

import Arpit from '../Videos/Arpit.mp4'
import Darshu from '../Videos/Darshu.mp4'
import Gandha from '../Videos/Gandha.mp4'
import Harsha from '../Videos/Harsha.mp4'
import Manju from '../Videos/Manju.mp4'
import Pavan from '../Videos/Pavan.mp4'
import Ravil from '../Videos/Ravil.mp4'
import Sahaar from '../Videos/Sahaar.mp4'
import Sakshu from '../Videos/Sakshu.mp4'
import Sangram from '../Videos/Sangram.mp4'
import Sirisha from '../Videos/Sirisha.mp4'
import Sujit from '../Videos/Sujit.mp4'
import Upasini from '../Videos/Upasini.mp4'
import Varsha from '../Videos/Varsha.mp4'
import Vivek from '../Videos/Vivek.mp4'
import Yogesh from '../Videos/Yogesh.mp4'

const Friends_Normal = (props) => {

    const list = [
        { url: Arpit, alt: 'Arpit'},
        { url: Vivek, alt: 'Vivek'},
        { url: Sakshu, alt: 'Sakshu'},
        { url: Ravil, alt: 'Ravil'}, 
        { url: Sangram, alt: 'Sangram'}, 
        { url: Manju, alt: 'Manju'}, 
        { url: Sahaar, alt: 'Sahaar'}, 
        { url: Upasini, alt: 'Upasini'}, 
        { url: Sirisha, alt: 'Sirisha'},
        { url: Pavan, alt: 'Pavan'}, 
        { url: Darshu, alt: 'Darshu'},
        { url: Harsha, alt: 'Harsha'},
        { url: Gandha, alt: 'Gandha'},
        { url: Sujit, alt: 'Sujit'},
        { url: Varsha, alt: 'Varsha'},
        { url: Yogesh, alt: 'Yogesh'},

        // { url: b3, alt: 'sadiya'}, 
        // { url: b3, alt: 'swetha'}, 
        // { url: 'Anmol', alt: 'anmol'}, 
        // { url: 'Meghu', alt: 'Meghu'},
        // { url: 'Divya', alt: 'Divya'}, 
    ]

    return (
        <div className="container">
            <h3>{props.match.params.name}</h3>
            {
                list.map((item, index) => {
                    if(item.alt === props.match.params.name){
                        return (
                            <div key={index}>
                                <video controls>
                                    <source src={item.url} type="video/mp4" />
                                    <source src="movie.ogg" type="video/ogg" />
                                    Your browser does not support HTML video.
                                </video> 
                            </div>
                        )
                    }
                })
            }
            
            {/* <video controls>
                <source src="gs://rojabday.appspot.com/Anmol.mp4" type="video/mp4" />
                Your browser does not support HTML video.
            </video>  */}
        </div>
    )
}

export default Friends_Normal
