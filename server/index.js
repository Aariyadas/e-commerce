import dotenv from "dotenv";
import connectDatabase from "./db.js";
import express from "express";

import productRoutes from "./routes/productRoutes.js";
// import userRoutes from "./routes/userRoutes.js";
dotenv.config();
connectDatabase();
const app = express();
app.use(express.json());

app.use("/api/products", productRoutes);
// app.use("/api/users", userRoutes);

console.log(process.env.PORT);
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
