import asyncHandler from "express-async-handler";
import Ticket from "../models/Ticket.model.js";
import Bus from "../models/Bus.model.js";
import { changeSeatStatus } from "../services/SeatsMatrix.js";

const bookTicket = asyncHandler(async (req, res) => {
  const {
    userId,
    busId,
    seatId,
    passengerName,
    passengerAge,
    gender,
    email,
    mobileNumber,
  } = req.body;

  // Existense checking
  const busExists = await Bus.findOne({ _id: busId });

  if (!busExists) {
    return res.status(400).json({ message: "Something went wrong!" });
  }

  // Seat existense
  const seatBooked = await Ticket.findOne({ seatId });

  if (seatBooked) {
    return res.status(400).json({ message: "Seat was already booked" });
  }

  // Email validation
  const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
  const isValidEmail = emailRegex.test(email);

  // Mobilenumber validation
  const mobileRegex = /^[6-9]\d{9}$/;
  const isValidMobile = mobileRegex.test(mobileNumber);

  if (!isValidEmail) {
    return res.status(400).json({ message: "Enter a valid email" });
  } else if (!isValidMobile) {
    return res.status(400).json({ message: "Enter a valid mobilenumber" });
  }

  if (isValidEmail && isValidMobile) {
    const ticket = await Ticket.create({
      userId,
      busId,
      seatId,
      passengerName,
      passengerAge,
      gender,
      email,
      mobileNumber,
    });

    if (ticket) {
      const seatStatus = await changeSeatStatus(busId, seatId);
      return res.status(201).json({ ticket, seatStatus });
    }

    return res.status(400).json({ message: "Something went wrong!!" });
  } else {
    return res
      .status(400)
      .json({ message: "Please check your mail & mobilenumber is correct" });
  }
});

export { bookTicket };
