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
