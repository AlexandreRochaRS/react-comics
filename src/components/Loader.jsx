import React from 'react'
import Lottie from 'react-lottie'
import * as loading from '../utils/loading.json'

const defaultOptions = {
    loop: true,
    autoplay: true, 
    animationData: loading.default,
    rendererSettings: {
      preserveAspectRatio: 'xMidYMid slice'
    }
};

const Loader = () => {
    return (
        <div className="loader">
            <Lottie options={defaultOptions} height={120} width={120}/>
        </div>
    )
}

export default Loader
