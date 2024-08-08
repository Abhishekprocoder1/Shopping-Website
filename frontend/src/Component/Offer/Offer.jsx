import React from 'react'
import './Offer.css';
import exculsive_img from '../Assets/exclusive_image.png';
import { useNavigate } from 'react-router-dom';

const Offer = () => {
  
  const navigate = useNavigate();

  const handleNavigation = () => {
    navigate('/offers');
  };

  return (
    <div className='offers'>
      <div className="offer-left">
       <h1>Special</h1>
       <h1>Discounts For You</h1>
       <p>Just for the top-selling items</p>
      <button onClick={handleNavigation}>Check Now</button>
      </div>
      <div className="offer-right">
        <img src={exculsive_img} alt='' />
      </div>
    </div>
  )
}

export default Offer
