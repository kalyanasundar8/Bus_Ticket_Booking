import mongoose from "mongoose";

const ticketSchema = new mongoose.Schema(
  {
    userId: {
      type: Number,
      required: true,
    },
    busId: mongoose.Schema.Types.ObjectId,
    seatId: mongoose.Schema.Types.ObjectId,
    passengerName: {
      type: String,
      required: true,
    },
    passengerAge: {
      type: Number,
      required: true,
    },
    gender: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    mobileNumber: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Ticket = mongoose.model("ticket", ticketSchema);
export default Ticket;
