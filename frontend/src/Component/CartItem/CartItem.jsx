import React, { useContext } from "react";
import "./CartItem.css";
import remove_icon from "../Assets/cart_cross_icon.png";
import { ShopContext } from "../../Context/ShopContext";
import { useNavigate } from "react-router-dom";
import { loadStripe } from '@stripe/stripe-js';
// import carts from '../Assets/all_product';

const CartItem = () => {
  const { getTotalCartAmount, all_product, cartItem, removeaddToCart } = useContext(ShopContext);


const navigate=useNavigate();

  return (
    <div >
      <div className="cartitem">
        <div className="cart-format-main">
          <p>Product</p>
          <p>Title</p>
          <p className="prices-para">Prices</p>
          <p>Quantify</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <hr />
        {all_product.map((e, i) => {
          if (cartItem[e.id] > 0) {
            return (
              <div  key={e.id}>
                <div className="cartitem-format cart-format-main">
                  <img src={e.image} key={i.e} alt="" className="carticon-product-icon " />
                  <p>{e.name}</p>
                  <p>₹{e.new_price}</p>
                  <button className="cartim-button">{cartItem[e.id]}</button>
                  <p className="total-prices-para">{e.new_price * cartItem[e.id]}</p>
                  <img className='cart-remove-icon' src={remove_icon} onClick={() => removeaddToCart(e.id)} alt="" />
                </div>
                <hr />
              </div>
            );
          }
          return null;
        })}
        <div className="cartitem-down">
          <div className="cartitem-total">
            <h1>Cart totals</h1>
            <div>
              <div className="cartitem-total-item">
                <p>Subtotal</p>
                <p>₹{getTotalCartAmount()}</p>
              </div>
              <hr />
              <div className="cartitem-total-item">
                <p>Shipping Fee </p>
                <p>Free</p>
              </div>
              <hr />
              <div className="cartitem-total-item">
                <h3>Total</h3>
                <h3>₹{getTotalCartAmount()}</h3>
              </div>
            </div>
            <button className="checkoutbtn" onClick={()=>navigate('/order')} >PROCESS CHECKOUT</button>
          </div>
          <div className="cartitem-promocode">
            <p>I You have a promo code,Enter it here</p>
            <div className="cartitem-promobox">
              <input type="text" placeholder="promo code" />
              <button className="input-button">Submit</button>
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className="hello msg">abhi</h1>
      </div>
    </div>
  );
};

export default CartItem;
