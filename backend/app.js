import express from "express";
import dotenv from "dotenv";
import parser from "body-parser";
import connectToDb from "./config/ConnectToDb.js";
import busRouter from "./routes/Bus.routes.js";
import { errorHandler } from "./Middlewares/Error.middleware.js";
import ticketRouter from "./routes/Ticket.routes.js";
dotenv.config();

const app = express();

const port = process.env.PORT || 8000;

connectToDb();

app.use(parser.json());
app.use(parser.urlencoded({ extended: false }));

// Routes
app.use("/api/bus", busRouter);
app.use("/api/tickets", ticketRouter);
app.use(errorHandler);

app.listen(port, () => {
  console.log(`App listening port ${port}`);
});
