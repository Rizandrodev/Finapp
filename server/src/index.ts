import express, { Express } from "express";
import mongoose from "mongoose";
import financialRecordRouter from "./routes/financial-record";
import dotenv from "dotenv"

dotenv.config()
const app: Express = express();
const port = process.env.PORT || 3001;
app.use(express.json());

const mongoURI: string = process.env.URl_DB="mongodb+srv://carvalhorizandro:0CZo6NLfbh3ItyvM@finapp1.tbxqp.mongodb.net/" || '';

mongoose
  .connect(mongoURI)
  .then(() => console.log("CONNECT TO MONGODB"))
  .catch((err) => console.error("Failed to Connect to MongoDb ", err));

app.use("/finacial-records", financialRecordRouter);
app.listen(port, () => {
  console.log(`Server runing on Port ${port}`);
});
