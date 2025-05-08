import mongoose from 'mongoose';

const reservationSchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  date: String,
  time: String,
  numberOfPeople: Number,
  specialRequests: String,
  status: {
    type: String,
    enum: ['pending', 'accepted', 'declined'],
    default: 'pending',
  },
});

const Reservation = mongoose.model('Reservation', reservationSchema);

export default Reservation;
