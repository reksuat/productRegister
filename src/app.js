import express from "express";
import connectDB from "./config/db.js";
import productRouter from "./routes/product.js";

connectDB();

const app = express()

app.use(express.json())

app.use("/product", productRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));