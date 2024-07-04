import express from "express";
import { config } from "dotenv";
import usersRoute from "./routes/users.routes.js";
import cors from 'cors';

config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors({
    origin: ["http://localhost:5174", "http://localhost:5173"], 
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"] 
  }));

app.use(express.urlencoded({ extended: true }));  
app.use(express.json());

app.use("/api/users", usersRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
