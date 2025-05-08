import Reservation from "../models/reservationModel.js";

export const createReservation = async (req, res) => {
  try {
    const reservation = new Reservation(req.body);
    await reservation.save();
    res.status(201).json("Reservation saved!");
  } catch (error) {
    res.status(500).json(error);
  }
};

export const getReservations = async (req, res) => {
  try {
    const reservations = await Reservation.find();
    res.status(200).json(reservations);
  } catch (error) {
    res.status(500).json(error);
  }
};
