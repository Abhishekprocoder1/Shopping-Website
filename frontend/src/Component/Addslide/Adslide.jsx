import React, { useState} from 'react';
import './Addslide.css';
// import img1 from '../../Component/Assets/sliderimg/s1.webp';
// import img2 from '../../Component/Assets/sliderimg/s7.png';
// import img3 from '../../Component/Assets/sliderimg/s8.jpg'; // Corrected import path
// import back from '../../Component/Assets/sliderimg/back.png'; // Corrected import path
// import next from '../../Component/Assets/sliderimg/next.png'; // Corrected import path

const Adslide = ({ images }) => {

  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  };
  

  return (
    <div className="slider">
      <div className="slide">
        <img src={images[currentIndex]} alt=" " />
      </div>
      <div className="buttons">
        <button className="left-arrow" onClick={prevSlide}>&#10094;</button>
        <button className="right-arrow" onClick={nextSlide}>&#10095;</button>
      </div>
    </div>
  )
}

export default Adslide;
