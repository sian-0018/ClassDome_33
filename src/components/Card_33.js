import React from 'react'
// import demo from './demo';

export const Card_33 = (A) => {
    const { img, name, text } = A;
    return (
        <div className='tc bg-light-red dib br3 pa3 ma2 grow bw2 shadow-5'style={{width: 500}}>
            <img src={img} alt='#' />      
            <h2>{name}</h2>      
            <h3>{text}</h3>
        </div>
    )
}
export default Card_33;