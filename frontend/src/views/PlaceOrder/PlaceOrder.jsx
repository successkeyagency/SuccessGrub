import React, { useContext, useState } from "react";
import "./PlaceOrder.css";
import { Scontext } from "../../context/Scontext";

const PlaceOrder = () => {
  const { getTotalCartAmount } = useContext(Scontext);

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

  return (
    <form className="place-order">
      <div className="place-order-left">
        <p className="title">Delivery Information</p>
        <div className="multi-fields">
          <input type="text" placeholder="First name" />
          <input type="text" placeholder="Last name" />
        </div>
        <input type="email" placeholder="Email Address" />
        <input type="text" placeholder="Street" />
        <div className="multi-fields">
          <input type="text" placeholder="City" />
          <input type="text" placeholder="State" />
        </div>
        <div className="multi-fields">
          <input type="text" placeholder="Zip Code" />
          <input type="text" placeholder="Country" />
        </div>
        <input type="text" placeholder="Phone Number" />
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
