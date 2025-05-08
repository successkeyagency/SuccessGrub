import React, { useContext, useEffect, useState } from 'react';
import './MyOrders.css';
import { Scontext } from '../../context/Scontext';
import axios from 'axios';

const Myorders = () => {
    const [data, setData] = useState([]);
    const { url, token } = useContext(Scontext);

    const fetchOrders = async () => {
        try {
            const response = await axios.post(url + "/api/order/userorders", {}, { headers: { token } });
            setData(response.data.data);
        } catch (error) {
            console.error("Error fetching orders:", error);
        }
    };

    useEffect(() => {
        if (token) {
            fetchOrders();
        }
    }, [token]);

    return (
        <div className='orders-container'>
            <h2 className='orders-title'>My Orders</h2>
            <div className='orders-list'>
                {data.map((order,index)=> {
                    return (
                        <div key={index} className='order-item'>
                            <span className='order-icon'>📦</span>
                            <p className='order-items'>
                                {order.items.map((item,index)=>{
                                if (index === order.items.length-1) {
                                    return item.name+"x"+item.quantity
                                }
                                else {
                                    return item.name+"x"+item.quantity+","
                                }
                            })}</p>
                            <p className='order-amount'>${order.amount}.00</p>
                            <p className='order-count'>items: {order.items.length}</p>
                            <p className='order-status'><span>&#x25cf;</span> <b>{order.status}</b> </p>
                            <button onClick={fetchOrders} className='track-button'>Tack Order</button>
                        </div>
                    )
                        
                    
                })}
            </div>
        </div>
    );
};

export default Myorders;
