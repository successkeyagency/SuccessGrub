import React from 'react';
import './Admin.css';
import { assets } from '../../assets/assets'; 

const Admin = () => {
  return (
    <div className="admin-dashboard">
      <h1>👨‍💻 Admin Dashboard Overview</h1>
      <p className="intro-text">
        Welcome to the Admin Dashboard of this website. This powerful backend system was designed and built by <strong>SuccessKeyAgency LLC</strong> to help businesses manage their online operations with ease and precision.
      </p>

      <section className="admin-feature">
        <h2>➕ Add Food Items</h2>
        <img src={assets.desk_1 || "/images/add.png"} alt="Add food" />
        <p>
          The admin can easily add new menu items with a name, price, description, category, and an image. It uses <strong>Multer</strong> for image uploads and connects directly to the database to store the new product.
        </p>
      </section>

      <section className="admin-feature">
        <h2>📋 Foods List</h2>
        <img src={assets.desk_2 || "/images/list.png"} alt="List food items" />
        <p>
          Instantly view a full list of all menu items. This pulls real-time data from the backend using <strong>MongoDB</strong> and displays it in a clean, structured format.
          Remove outdated or incorrect food items. A secure backend endpoint ensures that only authorized admins can delete entries.
        </p>
      </section>

      <section className="admin-feature">
        <h2>📆 Manage Reservations</h2>
        <img src={assets.desk_4 || "/images/reserve.png"} alt="Reservation system" />
        <p>
          Accept and manage table reservations submitted by customers. Each reservation is logged with the customer’s details and time slot.
        </p>
      </section>

      <section className="admin-feature">
        <h2>📦 Manage Orders</h2>
        <img src={assets.desk_3 || "/images/delete.png"} alt="Delete item" />
        <p>
          Stay on top of all customer orders with our real-time dashboard. Admins can track order status from
            <strong> placement to delivery</strong>, update status stages, and manage transactions securely. Whether it's preparing,
            dispatching, or fulfilling, our system keeps everything in sync.
        </p>
      </section>
      <section className="admin-gallery">
        <h2>📸 Dashboard in Action</h2>
        <p>Here's a closer look at how the admin panel looks & works across mobile:</p>
        <div className="gallery-grid">
            <img src={assets.phone_1 || "/images/admin1.png"} alt="Admin panel 1" />
            <img src={assets.phone_2 || "/images/admin2.png"} alt="Admin panel 2" />
            <img src={assets.Phone_3 || "/images/admin3.png"} alt="Admin panel 3" />
            <img src={assets.Phone_4 || "/images/admin4.png"} alt="Admin panel 4" />
            <img src={assets.phone_5 || "/images/admin5.png"} alt="Admin panel 5" />
        </div>
    </section>


      <section className="admin-footer">
        <h3>Built By SuccessKeyAgency LLC</h3>
        <p>
          At SuccessKeyAgency, we specialize in building <strong>powerful admin dashboards</strong> and full-stack business tools tailored to your brand. Whether it's for e-commerce, food delivery, or internal tools — we bring your backend to life with clean UI, secure APIs, and scalable architecture.
        </p>
      </section>
    </div>
  );
};

export default Admin;
