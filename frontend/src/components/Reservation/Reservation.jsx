import React, { useState } from "react";
import "./Reservation.css";

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
    const response = await fetch("http://localhost:4000/api/reservations", {
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
      <video className="video-background" autoPlay loop muted>
        <source src="https://videos.pexels.com/video-files/5791733/5791733-uhd_2732_1440_25fps.mp4" type="video/mp4" />
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
        <input
          type="date"
          name="date"
          onChange={handleChange}
          required
        />
        <input
          type="time"
          name="time"
          onChange={handleChange}
          required
        />
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
