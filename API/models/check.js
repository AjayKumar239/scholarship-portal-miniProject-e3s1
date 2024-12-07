import Institute from "./Institute_APP.js";
import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect('mongodb+srv://admin2:admin123@cluster0.y0uqy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0', {
    });

    console.log(`MongoDB Connected: ${conn.connection.host}`);
    return conn;
  } catch (error) {
    console.error(`Error: ${error.message}`);
    process.exit(1);
  }
};

async function getData(){
  try {
    return await Institute.find({});
  } catch (error) {
    console.error('Error fetching data:', error);
    throw error;
  }
}

// Wrap in an async function to properly handle await
async function main() {
  await connectDB();
  const data = await getData();
  console.log(data);
}

// Call the main function
main().catch(console.error);

export default connectDB;