import React, { useContext } from 'react';
import './FItems.css';
import { assets } from '../../assets/assets.js';
import { Scontext } from '../../context/Scontext';
import { toast } from 'react-toastify';




const FItems = ({ id, name, price, description, image }) => {
  const { cartItems, addToCart, removeFromCart, url } = useContext(Scontext);

  const itemCount = cartItems && typeof cartItems[id] === 'number' ? cartItems[id] : 0;

  const handleAdd = () => {
    addToCart(id);
    toast.success(`${name} added to cart 🛒`);
  };

  const handleRemove = () => {
    removeFromCart(id);
    toast.info(`${name} removed from cart ❌`);
  };


  return (
    <div className='food-item'>
      <div className='food-item-container'>
        <img className='food-item-image' src={`${url}/images/${image}`} alt={name} />
        {itemCount === 0 ? (
          <img
            className='add'
            onClick={handleAdd}
            src={assets.add_icon_white}
            alt="Add to cart"
          />
        ) : (
          <div className='food-item-counter'>
            <img
              onClick={handleRemove}
              src={assets.remove_icon_red}
              alt="Remove from cart"
            />
            <p>{itemCount}</p>
            <img
              onClick={handleAdd}
              src={assets.add_icon_green}
              alt="Add more"
            />
          </div>
        )}
      </div>

      <div className='food-item-info'>
        <div className='food-item-info-rating'>
          <p>{name}</p>
          <img src={assets.rating_starts} alt="Rating" />
        </div>
        <p className='food-item-desc'>{description}</p>
        <p className='food-item-price'>
          <span>$</span> {price}
        </p>
      </div>
    </div>
  );
};

export default FItems;
