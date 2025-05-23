import React, { useState } from "react";
import "./Reservation.css";
import { assets } from "../../assets/assets";

const Reservation = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    date: "",
    time: "",
    numberOfPeople: "",
    specialRequests: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const response = await fetch(`${import.meta.env.VITE_BACKEND_URL}/api/reservations`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    });

    if (response.ok) {
      alert("Reservation submitted!");
    } else {
      alert("Failed to submit reservation");
    }
  };

  return (
    <div className="reservation-container">
      <video
        className="video-background"
        autoPlay
        loop
        muted
        playsInline
        disablePictureInPicture
        poster={assets.res_poster} 
      >
        <source src={assets.resvid} type="video/mp4" />
      </video>

      <form className="reservation-form" onSubmit={handleSubmit}>
        <h2>Book a Reservation</h2>
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          onChange={handleChange}
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number"
          onChange={handleChange}
          required
        />
        <input type="date" name="date" onChange={handleChange} required />
        <input type="time" name="time" onChange={handleChange} required />
        <input
          type="number"
          name="numberOfPeople"
          placeholder="Number of People"
          onChange={handleChange}
          required
        />
        <textarea
          name="specialRequests"
          placeholder="Special Requests"
          onChange={handleChange}
        ></textarea>
        <button type="submit">Book a Table</button>
      </form>
    </div>
  );
};

export default Reservation;
