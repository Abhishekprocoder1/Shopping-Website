import React, { useEffect } from 'react';
import './Slider.css';
import img1 from '../../Component/Assets/sliderimg/p1.jpeg';
import img2 from '../../Component/Assets/sliderimg/p2.jpeg';
import img3 from '../../Component/Assets/sliderimg/p2.jpeg'; // Corrected import path
import back from '../../Component/Assets/sliderimg/back.png'; // Corrected import path
import next from '../../Component/Assets/sliderimg/next.png'; // Corrected import path

const Slider = () => {

  useEffect(() => {
    const scrollContainer = document.querySelector(".gallery");
    const backBtn = document.getElementById("backBtn");
    const nextBtn = document.getElementById("nextBtn");

    if (scrollContainer && backBtn && nextBtn) {
      scrollContainer.addEventListener("wheel", (evt) => {
        evt.preventDefault();
        scrollContainer.scrollLeft += evt.deltaY;
        scrollContainer.style.scrollBehavior = "auto";
      });

      nextBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft += 900;
      });

      backBtn.addEventListener("click", () => {
        scrollContainer.style.scrollBehavior = "smooth";
        scrollContainer.scrollLeft -= 900;
      });
    }
  }, []); // Empty dependency array to run only once

  return (
    <div className="gallery-wrap">
      <img src={back} id='backBtn' alt="Back" /> {/* Added alt attribute */}
      <div className='gallery'>
        <div>
          <span><img src={img1} alt="Image 1" /></span> {/* Added alt attribute */}
          <span><img src={img2} alt="Image 2" /></span> {/* Added alt attribute */}
          <span><img src={img3} alt="Image 3" /></span> {/* Added alt attribute */}
        </div>
        <div>
          <span><img src={img1} alt="Image 1" /></span> {/* Added alt attribute */}
          <span><img src={img2} alt="Image 2" /></span> {/* Added alt attribute */}
          <span><img src={img3} alt="Image 3" /></span> {/* Added alt attribute */}
        </div>
      </div>
      <img src={next} id='nextBtn' alt="Next" /> {/* Added alt attribute */}
    </div>
  )
}

export default Slider;
