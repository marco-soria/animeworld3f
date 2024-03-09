import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';

import GiftC from '../../assets/store/giftcard.png';

import { FaHeart} from "react-icons/fa";
import { FaStar} from "react-icons/fa";
import { IconContext } from 'react-icons';

function GiftCard() {
  const [giftCardPrice, setGiftCardPrice] = useState(200);
  const [addToCartDisabled, setAddToCartDisabled] = useState(true);

  const updatePrice = (e) => {
    const selectedValue = parseInt(e.target.value);
    setAddToCartDisabled(selectedValue === 0);
    setGiftCardPrice(selectedValue);
  };

  const addToCart = () => {
    // Lógica para agregar al carrito
    console.log('Added to cart:', giftCardPrice);
  };

  return (
    <div className="container-fluid mt-3 mb-2">
        
      <div className="row">
      <IconContext.Provider value={{ color: '#C21292', size: '28px' }}>
        <p className="fs-2 text-center">THE FAVORITE GIFT CARD <FaHeart className='mb-1'/></p>
        </IconContext.Provider>
      </div>
      <div className="row justify-content-center align-items-center">
        <div className="col-md-6 p-0" style={{ height: '600px', width: '600px' }}>
          <div className="card border-0" id="signupCard" style={{ height: '100%', width: '100%' }}>
            <img src={GiftC} className="img-fluid" alt="Signup Image" style={{ height: '100%', width: '100%', objectFit: 'cover' }} />
          </div>
        </div>
        <div className="col-md-6 p-0" style={{ height: '600px', width: '600px' }}>
          <div className="card border-0 p-5 d-flex justify-content-center" id="signupCard" style={{ backgroundColor: '#E9F6FF', height: '100%', width: '100%', objectFit: 'cover' }}>
            <div className="d-flex justify-content-between align-items-center mb-2">
              <h3 className="text-center mb-4"><strong>AnimeWorld Digital Card</strong></h3>
              <IconContext.Provider value={{ color: '#C21292', size: '24px' }}>
              <div className="mb-4">
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
                <FaStar/>
              </div>
              </IconContext.Provider>
            </div>
            <p className="text-start mb-2"><strong>${giftCardPrice}</strong></p>
                <div className="mb-3">
                <select className="form-select" id="giftCardDropdown" onChange={updatePrice}>
                <option value="0">-- Select Gift Card --</option>
                    <option value="25">$25</option>
                    <option value="50">$50</option>
                    <option value="100">$100</option>
                    <option value="200">$200</option>
                                </select>
                                </div>
                                <button type="button" className="btn btn-secondary storebutton" id="addToCartButton"
                    onClick={addToCart} disabled={addToCartDisabled}>Add to Cart</button>
                </div>
            </div>
        </div>
    </div>
);
}

export { GiftCard };
