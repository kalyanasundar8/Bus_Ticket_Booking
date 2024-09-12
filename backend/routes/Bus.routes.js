import express from "express";
import { createTravel } from "../controllers/Bus.controller.js";

const busRouter = express.Router();

busRouter.post("/createTravel", createTravel);

export default busRouter;