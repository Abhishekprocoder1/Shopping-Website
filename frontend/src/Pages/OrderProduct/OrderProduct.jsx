import React, { useContext, useState } from 'react';
import "./OrderProduct.css";
import { ShopContext } from '../../Context/ShopContext';
import axios from 'axios';

const OrderProduct = () => {
  const { getTotalCartAmount, url } = useContext(ShopContext);

  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipcode: "",
    country: "",
    phone: ""
  });

  const onchangeHandler = (event) => {
    const { name, value } = event.target;
    setData({ ...data, [name]: value });
  };

  const buyFunction = async () => {
    console.log("buyFunction called"); // Add this line
  
    // Basic validation
    const isFormValid = Object.values(data).every(value => value.trim() !== "");
  
    if (!isFormValid) {
      alert("Please fill in all the fields.");
      return;
    }
  
    try {
      let response = await axios.post(`${url}/payment`, {
        ...data,
        amount: getTotalCartAmount() + 2 // assuming the shipping fee is 2
      });
  
      if (response && response.status === 200) {
        window.location.href = response.data.url;
      }
    } catch (error) {
      console.error("Error during payment initiation:", error);
      alert("There was an error processing your payment. Please try again.");
    }
  };
  

  return (
    <div className='place-order'>
      <div className="place-order-left">
        <h2 className='title'>Delivery Information</h2>
        <div className="multi-fields">
          <input name='firstName' required value={data.firstName} onChange={onchangeHandler} type='text' placeholder='First Name' />
          <input name='lastName' required value={data.lastName} onChange={onchangeHandler} type='text' placeholder='Last Name' />
        </div>
        <input name='email' required value={data.email} type='email' onChange={onchangeHandler} placeholder='Email address' />
        <input name='street' required value={data.street} type='text' onChange={onchangeHandler} placeholder='Street' />
        <div className="multi-fields">
          <input name='city' required value={data.city} type='text' onChange={onchangeHandler} placeholder='City' />
          <input name='state' required value={data.state} type='text' onChange={onchangeHandler} placeholder='State' />
        </div>
        <div className="multi-fields">
          <input name='zipcode' required value={data.zipcode} type='text' onChange={onchangeHandler} placeholder='Zip code' />
          <input name='country' required value={data.country} type='text' onChange={onchangeHandler} placeholder='Country' />
        </div>
        <input type='text' required name='phone' value={data.phone} onChange={onchangeHandler} placeholder='Phone' />
      </div>
      <div className="place-order-right">
        <div className="cartitem-total">
          <h2>Cart totals</h2>
          <div>
            <div className="cartitem-total-item">
              <p>Subtotal</p>
              <p>₹{getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <p>Shipping Fee</p>
              <p>₹{getTotalCartAmount() === 0 ? 0 : 2}</p>
            </div>
            <hr />
            <div className="cartitem-total-item">
              <h3>Total</h3>
              <h3>₹{getTotalCartAmount() === 0 ? 0 : getTotalCartAmount() + 2}</h3>
            </div>
          </div>
          <button className="checkoutbtn" onClick={buyFunction}>Payment</button>
        </div>
      </div>
    </div>
  );
};

export default OrderProduct;
