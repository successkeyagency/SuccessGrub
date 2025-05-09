import React, { useContext, useState } from 'react'
import './Cart.css'
import { Scontext } from '../../context/Scontext'
import { useNavigate } from 'react-router-dom'

const Cart = () => {
  const { cartItems, food_list, removeFromCart, getTotalCartAmount, url} = useContext(Scontext)

  const [promoCode, setPromoCode] = useState("")
  const [discount, setDiscount] = useState(0)
  const navigate = useNavigate();

  const deliveryFee = 2
  const subtotal = getTotalCartAmount()
  const total = subtotal + deliveryFee - discount

  const handleApplyPromo = () => {
    if (promoCode.toLowerCase() === "will10") {
      setDiscount(10)
    } else {
      setDiscount(0)
      alert("Invalid promo code")
    }
  }

  return (
    <div className='cart'>
      <div className="cart-items">
        <div className="cart-items-title">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item) => {
          if (cartItems[item._id] > 0) {
            return (
              <div key={item._id} className='cart-items-title cart-item-item'>
                <img src={item.image} alt={item.name} />
                <p>{item.name}</p>
                <p>${item.price}</p>
                <p>{cartItems[item._id]}</p>
                <p>${(item.price * cartItems[item._id]).toFixed(2)}</p>
                <p className="remove-btn" onClick={() => removeFromCart(item._id)}>x</p>
              </div>
            )
          }
          return null
        })}
      </div>

      <div className="cart-bottom">
        <div className="cart-total">
          <h2>Cart Totals</h2>
          <hr />
          <div className="cart-total-details">
            <p>Subtotal</p>
            <p>${subtotal.toFixed(2)}</p>
          </div>
          <div className="cart-total-details">
            <p>Delivery Fee</p>
            <p>${deliveryFee.toFixed(2)}</p>
          </div>
          <hr />
          <div className="cart-total-details total-highlight">
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>
        </div>



        <button onClick={()=>navigate('/order')} className="checkout-btn">PROCEED TO CHECKOUT</button>
      </div>
    </div>
  )
}

export default Cart
