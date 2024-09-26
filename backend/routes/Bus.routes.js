import express from "express";
import { createTravel, getAllTravels } from "../controllers/Bus.controller.js";

const busRouter = express.Router();

busRouter.post("/createTravel", createTravel);
busRouter.get("/getAllTravels", getAllTravels);

export default busRouter;