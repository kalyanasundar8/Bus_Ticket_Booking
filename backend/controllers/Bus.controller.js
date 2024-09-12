import asyncHandler from "express-async-handler";
import Bus from "../models/Bus.model.js";
import { seat } from "../services/SeatsMatrix.js";

// Create bus
const createTravel = asyncHandler(async (req, res) => {
  const { busName, busNumber, source, destination, rows, columns, price } = req.body;

  const busAlreadyExists = await Bus.findOne({ busNumber });

  let seats = seat(rows, columns);

  if (!busAlreadyExists) {
    const bus = await Bus.create({
      busName,
      busNumber,
      source,
      destination,
      seats,
      price,
    });

    res.status(201).json(bus);
  } else {
    return res.status(400).json({ message: "Travel is already created for this bus" });
  }
});

export { createTravel };