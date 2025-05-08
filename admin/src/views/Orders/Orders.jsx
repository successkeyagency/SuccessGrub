import React from "react";
import "./Orders.css";
import { useState } from "react";
import { toast } from "react-toastify";
import { useEffect } from "react";
import axios from "axios";

const Orders = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.success) {
      setOrders(response.data.data);
    } else {
      toast.error("Error");
    }
  };

  const statusHandler = async (event,orderId) => {
    const response = await axios.post(url+"/api/order/status",{
      orderId,
      status:event.target.value
    })
    if (response.data.success) {
      await fetchAllOrders();
    }
  }

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div className="orders-container">
      <h3 className="orders-title">Order Page</h3>
      <div className="orders-list">
        {orders.map((order, index) => (
          <div key={index} className="order-card">
            <div className="order-header">
              <span className="order-emoji">📦</span>
              <div className="order-info">
                <p className="order-items">
                  {order.items.map((item, index) => {
                    if (index === order.items.length - 1) {
                      return item.name + "x" + item.quantity;
                    } else {
                      return item.name + "x" + item.quantity + ",";
                    }
                  })}
                </p>
                <p className="order-name">
                  {order.address.firstName + " " + order.address.lastName}
                </p>
                <div className="order-address">
                  <p>{order.address.street + ","}</p>
                  <p className="">
                    {order.address.city +
                      ", " +
                      order.address.state +
                      ", " +
                      order.address.country +
                      ", " +
                      order.address.zipcode}
                  </p>
                </div>
                <p className="order-phone">{order.address.phone}</p>
              </div>
            </div>
            <div className="order-footer">
              <p>Items : {order.items.length}</p>
              <p>${order.amount}</p>
              <select onChange={(event)=>statusHandler(event,order._id)} value={order.status}>
                <option value="Food Processing">Food Processing</option>
                <option value="Out For Delivery">Out For Delivery</option>
                <option value="Delivered">Delivered</option>
              </select>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Orders;
