import mongoose from "mongoose";

const connectToDb = async () => {
  const dbUri = process.env.uri;
  try {
    await mongoose.connect(dbUri);
    console.log("Connection established");
  } catch (error) {
    console.error(error);
  }
};

export default connectToDb;
