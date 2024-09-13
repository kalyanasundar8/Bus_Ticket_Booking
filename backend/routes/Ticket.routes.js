import express from "express";
import { bookTicket } from "../controllers/Ticket.controller.js";

const ticketRouter = express.Router();

ticketRouter.post("/bookTicket", bookTicket);

export default ticketRouter;
