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
import Rohit from './Rohit'

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
        
        { url: 'https://firebasestorage.googleapis.com/v0/b/bday-4a697.appspot.com/o/Anmol.mp4?alt=media&token=1545c802-3d48-4211-9a38-20ef51915180', alt: 'Anmol'}, 
        { url: 'https://firebasestorage.googleapis.com/v0/b/bday-4a697.appspot.com/o/Meghu.mp4?alt=media&token=95e1efe6-c4bc-422b-b6e1-fe8cf2bc677c', alt: 'Meghu'},
        { url: 'https://firebasestorage.googleapis.com/v0/b/rojabday.appspot.com/o/videos%2FDivya.mp4?alt=media&token=7cc0c345-b30f-4b1c-bdfe-489f1509b05a', alt: 'Divya'}, 
    ]

    return (
        <div className="container">
            <h3>{props.match.params.name}</h3>
            <div className="row">
                <div className="col-sm-12">
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
                                    <a href={item.url} className="btn btn-info" download>Download Video</a>
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
                {
                    props.match.params.name === 'Rohit' ? <Rohit /> : null
                }
                </div>
            </div>
        </div>
    )
}

export default Friends_Normal
