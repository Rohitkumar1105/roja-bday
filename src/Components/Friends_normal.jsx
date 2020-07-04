import React from 'react'
import '../css/Friends_normal.css'

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

import Sadiya from './Sadiya'
import Shwetha from './Shwetha'

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
        
        // { url: '', alt: 'Sadiya'}, 
        // { url: b3, alt: 'swetha'}, 
        { url: 'https://firebasestorage.googleapis.com/v0/b/rojabday.appspot.com/o/videos%2FAnmol.mp4?alt=media&token=e44be1ba-1f0e-422c-917f-28f332d3ef6c', alt: 'Anmol'}, 
        { url: 'https://firebasestorage.googleapis.com/v0/b/rojabday.appspot.com/o/videos%2FMeghu.mp4?alt=media&token=c6faf57b-091c-42fb-a82a-5a3fa8a35251', alt: 'Meghu'},
        { url: 'https://firebasestorage.googleapis.com/v0/b/rojabday.appspot.com/o/videos%2FDivya.mp4?alt=media&token=7cc0c345-b30f-4b1c-bdfe-489f1509b05a', alt: 'Divya'}, 
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
                                    <source src={item.url} type="video/mp4"  />
                                    <source src="movie.ogg" type="video/ogg" />
                                    Your browser does not support HTML video.
                                </video> 
                            </div>
                        )
                    } 
                })
            }
            {
                props.match.params.name === 'Sadiya' ? <Sadiya /> : null
            }
            {
                props.match.params.name === 'Shwetha' ? <Shwetha /> : null
            }
            
            {/* <video controls>
                <source src="gs://rojabday.appspot.com/Anmol.mp4" type="video/mp4" />
                Your browser does not support HTML video.
            </video>  */}
        </div>
    )
}

export default Friends_Normal
