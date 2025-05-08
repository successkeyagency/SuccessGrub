import React, { useContext, useEffect, useState } from "react";
import "./PlaceOrder.css";
import { Scontext } from "../../context/Scontext";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

const PlaceOrder = () => {
  const { getTotalCartAmount, token,food_list,cartItems,url } = useContext(Scontext);

  const [data,setData] = useState({
    firstName:"",
    lastName:"",
    email:"",
    street:"",
    city:"",
    state:"",
    zipcode:"",
    country:"",
    phone:"",
  })


  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData(data=>({...data,[name]:value}))
  }

  const placeOrder = async (event) => {
     event.preventDefault();
     let orderItems =[];
     food_list.map((item)=>{
      if (cartItems[item._id]>0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo)
      }
     })
     let orderData = {
      address:data,
      items:orderItems ,
      amount:getTotalCartAmount()+2,
     }
     let response = await axios.post(url+"/api/order/place",orderData,{headers:{token}});
     if (response.data.success) {
      const {session_url} = response.data;
      window.location.replace(session_url);
     }
     else{
      alert("Error");
      
     }
  } 

 
  

  const [discount, setDiscount] = useState(0);
  const [promoCode, setPromoCode] = useState("");

  const deliveryFee = 2;
  const subtotal = getTotalCartAmount();
  const total = subtotal + deliveryFee - discount;

  const applyPromo = () => {
    if (promoCode.trim().toLowerCase() === "willspot10") {
      setDiscount(10);
    } else {
      setDiscount(0);
    }
  };
  
  const navigate = useNavigate();

  useEffect(()=>{
    if (!token) {
      toast.warning('You need to log-in or sign-up to check out.');
      navigate('/cart')
    }
    else if (getTotalCartAmount()===0)
    {
      toast.info('Your cart is empty.');
      navigate('/cart')
    }
  },[token] )

  return (
    <form onSubmit={placeOrder} className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input required name="firstName" onChange={onChangeHandler} value={data.firstName} type="text" placeholder="First name" />
          <input required name="lastName" onChange={onChangeHandler} value={data.lastName} type="text" placeholder="Last name" />
        </div>
        <input required name="email" onChange={onChangeHandler} value={data.email} type="email" placeholder="Email Address" />
        <input required name="street" onChange={onChangeHandler} value={data.street} type="text" placeholder="Street" />
        <div className="multi-fields">
          <input required name="city" onChange={onChangeHandler} value={data.city} type="text" placeholder="City" />
          <input required name="state" onChange={onChangeHandler} value={data.state} type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input required name="zipcode" onChange={onChangeHandler} value={data.zipcode} type="text" placeholder="Zip Code" />
          <input required name="country" onChange={onChangeHandler} value={data.country} type="text" placeholder="Country" />
        </div>
        <input required name="phone" onChange={onChangeHandler} value={data.phone} type="text" placeholder="Phone Number" />
      </div>

      <div className="place-order-right">
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
          <div className="cart-total-details">
            <p>Promo Discount</p>
            <p>-${discount.toFixed(2)}</p>
          </div>

          <div className="promo-code-section">
            <input
              type="text"
              placeholder="Enter Promo Code"
              value={promoCode}
              onChange={(e) => setPromoCode(e.target.value)}
            />
            <button type="button" onClick={applyPromo}>
              Apply
            </button>
          </div>

          <hr />
          <div className="cart-total-details total-highlight">
            <b>Total</b>
            <b>${total.toFixed(2)}</b>
          </div>
        </div>
        <button type="submit">PROCEED TO PAYMENT</button>
      </div>
    </form>
  );
};

export default PlaceOrder;
