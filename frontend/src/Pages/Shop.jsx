import React from 'react'
import Populer from '../Component/populer/Populer'
import Offer from '../Component/Offer/Offer'
import Newcollection from '../Component/Newcollection/Newcollection'
import NewsLatter from '../Component/NewsLatter/NewsLatter'
import FastDelvery from '../Component/FastDelvery/FastDelvery'
// import Slider from '../Component/Slider/Slider'
import Adslide from '../Component/Addslide/Adslide';
import img1 from '../Component/Assets/sliderimg/s6.png';
import img2 from '../Component/Assets/sliderimg/s7.png';
// import img3 from '../Component/Assets/sliderimg/s8.jpg';
// import img4 from '../Component/Assets/sliderimg/s11.jpg';
import img5 from '../Component/Assets/sliderimg/s12.jpg';
import img6 from '../Component/Assets/sliderimg/lt1.jpg';
// import Shopslide from '../Component/Shopslides/Shopslide';



const Shop = () => {

  const images = [img6,
   img1,img2,img5
  ];
  return (
    <div>
       <Adslide images={images} />
      {/* <Hero/> */}
      <Populer/>
      <Offer/>
      <Newcollection/>
      <FastDelvery/>
      <NewsLatter/>
    </div>
  )
}

export default Shop
