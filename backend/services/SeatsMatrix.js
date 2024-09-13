import Bus from "../models/Bus.model.js";

let matrix = [];
let value = 1;
const rowLetters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

export const seat = (row, column) => {
  for (let i = 0; i < row; i++) {
    let rows = [];
    for (let j = 0; j < column; j++) {
      const seatNumber = `${rowLetters[i]}${j + 1}`;
      rows.push({
        seatNumber: seatNumber,
        price: 250,
      });
    }
    matrix.push(rows);
  }

  return matrix;
};

// Change seat status
export const changeSeatStatus = async (busId, seatId) => {
  const busExists = await Bus.findOne({ _id: busId }).populate("seats");

  let seatFound = false;
  let seatNumber;
  if (Array.isArray(busExists.seats)) {
    busExists.seats.forEach((totalSeat) => {
      totalSeat.forEach((seat) => {
        if (seat._id.toString() === seatId.toString()) {
          seat.seatStatus = !seat.seatStatus;
          seatNumber = seat.seatNumber;
          seatFound = true;
        }
      });
    });
  }

  if (seatFound) {
    await busExists.save();
    return seatNumber;
  } else {
    throw new Error("Seat not found");
  }
};
