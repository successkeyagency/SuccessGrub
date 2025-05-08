import express from 'express';
import nodemailer from 'nodemailer';
import Reservation from "../models/reservationModel.js";

const router = express.Router();

const sendEmail = async (email, status) => {
  let transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true, 
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });
  

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: 'Reservation Status Update',
    text: `Your reservation has been ${status}.`, 
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent successfully');
  } catch (err) {
    console.log('Error sending email:', err);
  }
};
console.log(process.env.EMAIL_USER);
console.log(process.env.EMAIL_PASS);


router.put("/:id", async (req, res) => {
  try {
    const { status } = req.body; 
    const reservation = await Reservation.findByIdAndUpdate(
      req.params.id,
      { status },
      { new: true }
    );
    if (!reservation) {
      return res.status(404).json({ error: "Reservation not found" });
    }

    await sendEmail(reservation.email, status); 

    res.status(200).json(reservation);
  } catch (err) {
    res.status(500).json({ error: "Failed to update reservation status", details: err });
  }
});

router.post("/", async (req, res) => {
  try {
    const { name, email, phone, date, time, numberOfPeople, specialRequests } = req.body;

    const newReservation = new Reservation({
      name,
      email,
      phone,
      date,
      time,
      numberOfPeople,
      specialRequests,
    });

    await newReservation.save();
    res.status(201).json({ message: "Reservation created successfully" });
  } catch (err) {
    res.status(500).json({ error: "Failed to create reservation", details: err });
  }
});

router.get("/", async (req, res) => {
  try {
    const reservations = await Reservation.find(); 
    res.status(200).json(reservations); 
  } catch (err) {
    res.status(500).json({ error: "Failed to retrieve reservations", details: err });
  }
});

export default router;
