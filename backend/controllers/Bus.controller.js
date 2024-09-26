import asyncHandler from "express-async-handler";
import Bus from "../models/Bus.model.js";
import { seat } from "../services/SeatsMatrix.js";

// Create bus
const createTravel = asyncHandler(async (req, res) => {
  const {
    busName,
    busNumber,
    source,
    destination,
    rows,
    columns,
    price,
    date,
  } = req.body;

  const busAlreadyExists = await Bus.findOne({ busNumber });

  const currentDate = new Date();
  const formatedDate = new Date(date);

  let seats = seat(rows, columns);

  if (currentDate >= formatedDate) {
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
      return res
        .status(400)
        .json({ message: "Travel is already created for this bus" });
    }
  } else {
    return res
      .status(400)
      .json({
        message:
          "Date must be greater than currentdate or equal to currentdate",
      });
  }
});

export { createTravel };
