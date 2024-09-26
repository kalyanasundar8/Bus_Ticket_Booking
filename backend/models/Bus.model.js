import mongoose from "mongoose";

const seatSchema = new mongoose.Schema({
  seatNumber: {
    type: String,
    required: true,
  },
  seatStatus: {
    type: Boolean,
    required: true,
    default: false,
  },
  price: {
    type: Number,
    default: 250,
    required: true,
  },
});

const busSchema = new mongoose.Schema(
  {
    busName: {
      type: String,
      required: true,
    },
    busNumber: {
      type: String,
      required: true,
    },
    source: {
      type: String,
      required: true,
    },
    destination: {
      type: String,
      required: true,
    },
    seats: [[seatSchema]],
    date: {
      type: Date,
      required: true,
    }
  },
  { timestamps: true }
);

const Bus = mongoose.model("buse", busSchema);
export default Bus;
