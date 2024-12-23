import express from "express";
import dotenv from "dotenv";
import router from "./routes/index.js";
import cors from 'cors';
dotenv.config();
const app = express();
const port = process.env.PORT || 5000;
app.use(cors({origin:"http://localhost:5173"}))
app.use(express.json());
app.use(router);
app.listen(port,()=>{
   console.log(`server is connected on ${port}`);
})