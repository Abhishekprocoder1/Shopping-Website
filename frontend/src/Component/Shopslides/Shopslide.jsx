import React from 'react';
import './Shopslide.css';
import img1 from '.././Assets/sliderimg/image-1.png';
import img2 from '../Assets/sliderimg/image-2.png';
import img3 from '../Assets/sliderimg/image-3.png';
const Shopslide = () => {
const images=[img1,img2,img3]
  return (
    <div className='shopslide'>
           <div className="content">
                     <div className='prev'></div>
                     <div className='slide-panel'></div>
                     {images.map(image=>{
                        return (
                            <img src={image} className='img1' alt='' />
                        )
                     })}
                     <div className='next'></div>
           </div>
    </div>
  )
}

export default Shopslide