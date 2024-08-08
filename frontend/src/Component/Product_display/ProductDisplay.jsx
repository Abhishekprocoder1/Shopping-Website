import React, { useContext,useState } from 'react';
import './ProductDisplay.css';
import star_icon from '../Assets/star_icon.png';
import star_dull_icon from '../Assets/star_dull_icon.png';
import { ShopContext } from '../../Context/ShopContext';

const ProductDisplay = (props) => {
  const { product } = props;
  const { addToCart } = useContext(ShopContext);
const [selectedSize, setSelectedSize] = useState(null);

  if (!product) {
    return <div>Loading...</div>;

  }


  const handleSizeClick = (size) => {
    setSelectedSize(size);
  };

  return (
    <div className='product-display'>
      <div className="productdisplay-left">
        <div className='produtDisplay-img-list'>
          <img src={product.image} alt='Product' />
          <img src={product.image} alt='Product' />
          <img src={product.image} alt='Product' />
          <img src={product.image} alt='Product' />
        </div>

        <div className="productDisplay-img">
          <img className='productdisplay-main-img' src={product.image} alt='Product' />
        </div>
      </div>
      <div className="productdisplay-right">
        <h1>{product.name}</h1>
        <div className="productdisplay-right-star">
          <img src={star_icon} alt='Star' />
          <img src={star_icon} alt='Star' />
          <img src={star_icon} alt='Star' />
          <img src={star_icon} alt='Star' />
          <img src={star_dull_icon} alt='Star' />
          <p>(122)</p>
        </div>
        <div className="productdisplay-right-prices">
          <div className='product-old-prices'>₹{product.old_price}</div>
          <div className="product-new-prices">₹{product.new_price}</div>
        </div>
        <div className="product-right-description">
          Elevate your skincare routine with our nourishing face serum packed with potent antioxidants and hydrating.
        </div>
        <div className="productDislay-right-size">
          <h1>Select Size</h1>
          <div className="productDislay-right-sizes">
            {['S', 'M', 'L', 'XL', 'XXL'].map(size => (
              <div
                key={size}
                className={selectedSize === size ? 'selected-size' : ''}
                onClick={() => handleSizeClick(size)}
              >
                {size}
              </div>
            ))}
          </div>
          </div>
        <button onClick={() => { addToCart(product.id) }}>ADD TO CART</button>
        <p className='product-right-category'><span>Category :</span> Woman, T-Shirt, Crop Top</p>
        <p className='product-right-category'><span>Category :</span> Modern, Latest</p>
      </div>
    </div>
  );
};

export default ProductDisplay;
