import express from "express";
import "dotenv/config";
import productRouter from "./src/routes/product.js";


const app = express()

app.use(express.json())

app.use("/product", productRouter);

app.listen(3000, () => console.log('Server is running on port 3000'));