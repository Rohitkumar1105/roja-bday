import React from 'react'
// import { storage } from '../Firebase'
// import b3 from '../Images/byju3.png'

const Friends_Vids = (props) => {
    //https://firebasestorage.googleapis.com/v0/b/rojabday.appspot.com/o/videos%2FDarshu.mp4?alt=media&

    const list = [
        { url: 'Vivek', alt: 'vivek'},
        { url: 'Sakshu', alt: 'sakshu'},
        { url: 'Ravil', alt: 'ravil'}, 
        { url: 'Sangram', alt: 'sangram'}, 
        { url: 'Manju', alt: 'manju'}, 
        { url: 'Sahaar', alt: 'sahaar'}, 
        // { url: b3, alt: 'sadiya'}, 
        // { url: b3, alt: 'swetha'}, 
        { url: 'Anmol', alt: 'anmol'}, 
        { url: 'Upasini', alt: 'upas'}, 
        { url: 'Meghu', alt: 'Meghu'},
        { url: 'Sirisha', alt: 'Siri'},
        { url: 'Pavan', alt: 'Pavan'}, 
        { url: 'Darshu', alt: 'Darshu'},
        { url: 'Divya', alt: 'Divya'}, 

        //Yet to give
        // { url: b3, alt: 'sujit'}, 
        // { url: b3, alt: 'gandha'}, 
        // { url: b3, alt: 'varsha'}, 
        // { url: b3, alt: 'yogesh'}, 
        // { url: b3, alt: 'tanmay'}, 
        // { url: b3, alt: 'sushmita'}, 
        // { url: b3, alt: 'sangyaa'}, 
        // { url: b3, alt: 'Arpit'}, 
        // { url: b3, alt: 'santhyaa'}, 
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
                                    <source src={`https://firebasestorage.googleapis.com/v0/b/rojabday.appspot.com/o/videos%2F${item.url}.mp4?alt=media&token=f926c074-d46b-4d27-a0c7-f8a507c9a23d`} type="video/mp4" />
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

export default Friends_Vids
