import React from 'react'
import CstmImage from './CstmImage'
const InstagramCarousel = ({src, alt, icon}) => {
    return (
        <div className='instagram-post'>  
        <div className='icon'>
          {icon}
        </div>
          <div className='instagram-image'>
            <CstmImage src={src} alt={alt}/>
          </div>
        </div>
  )
}
export default InstagramCarousel
