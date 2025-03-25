import React from 'react'
import CstmImage from '../common/CstmImage'
const  CompanyLogoCarousel = ({src, alt, className}) => {
    return (
        <div className='company'>
            <div className={className}></div>
            <div>
                <CstmImage src={src} alt={alt}/>
            </div>
        </div>
    )
}
export default CompanyLogoCarousel
