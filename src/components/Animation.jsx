import React from 'react'
import Lottie from 'react-lottie'
import * as check from '../utils/check.json'
import * as loading from '../utils/loading.json'


const Animation = ({loop, animation, width, height}) => {
    return (
        <div className="animation">
            <Lottie 
            height={height} 
            width={width}
            options={{
                loop: loop,
                autoplay: true, 
                animationData: animation === 'check' ?
                  check.default : animation === 'loading' ?
                  loading.default : null,
                rendererSettings: {
                  preserveAspectRatio: 'xMidYMid slice'
                }
            }}/>
     </div>
    )
}

export default Animation
