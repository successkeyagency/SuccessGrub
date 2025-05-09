import React, { useEffect, useState } from "react";
import "./ReservationList.css";



const API_BASE_URL = import.meta.env.VITE_BACKEND_URL;


const ReservationList = () => {
  const [reservations, setReservations] = useState([]);

  useEffect(() => {
    const fetchReservations = async () => {
      try {
        const res = await fetch(`${API_BASE_URL}/api/reservations`);
        const data = await res.json();
        data.sort((a, b) => new Date(b.date) - new Date(a.date));

        setReservations(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchReservations();
  }, []);

  const handleStatusChange = async (id, status) => {
    try {
      const res = await fetch(`${API_BASE_URL}/api/reservations/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ status }),
      });
      const updatedReservation = await res.json();
      setReservations((prevReservations) =>
        prevReservations.map((reservation) =>
          reservation._id === updatedReservation._id ? updatedReservation : reservation
        )
      );
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div className="reservation-list">
      <h2>Reservations</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Date</th>
            <th>Time</th>
            <th>People</th>
            <th>Requests</th>
            <th>Status</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {reservations.map((res) => (
            <tr key={res._id}>
              <td data-label="Name">{res.name}</td>
              <td data-label="Email">{res.email}</td>
              <td data-label="Phone">{res.phone}</td>
              <td data-label="Date">{res.date}</td>
              <td data-label="Time">{res.time}</td>
              <td data-label="People">{res.numberOfPeople}</td>
              <td data-label="Requests">{res.specialRequests}</td>
              <td data-label="Status">{res.status}</td>
              <td data-label="Actions">
                {res.status === "pending" && (
                  <>
                    <button 
                      className="accept" 
                      onClick={() => handleStatusChange(res._id, "accepted")}>
                        Accept
                    </button>
                    <button 
                      className="decline" 
                      onClick={() => handleStatusChange(res._id, "declined")}>
                        Decline
                    </button>
                  </>
                )}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ReservationList;
