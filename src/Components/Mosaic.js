import React from 'react'

const Mosaic = () => {
    return (
        <div>
            <iframe src="https://mosaically.com/embed/c8388ff5-4655-4b8e-a3b9-98599ab6ca12?title=1&artist=0&description=0&play=0&search=1&showContribute=0&buy=0&share=0&autoplay=0" scrolling="no" width="100%" height="480" frameborder="0" allowfullscreen></iframe>
            {/* <--REMOVING THE FOLLOWING CREDIT IS A VIOLATION OF YOUR TERMS OF USE--> */}
            <br />
            <small>Photo mosaic by: <a href="https://mosaically.com/publicguest">publicguest</a> @ <a href="https://mosaically.com">Mosaically</a></small>
        </div>
    )
}

export default Mosaic
