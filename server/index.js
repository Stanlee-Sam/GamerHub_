import express from "express";
import { config } from "dotenv";
import usersRoute from "./routes/users.routes.js";
import newsletterRoute from "./routes/newsletter.routes.js";
import cors from "cors";
import cookieParser from 'cookie-parser';

config();
const app = express();
const PORT = process.env.PORT || 3000;

app.use(
  cors({
    origin: ["http://localhost:5174", "http://localhost:5173"],
    methods: ["GET", "POST", "PATCH", "DELETE"],
    allowedHeaders: ["Content-Type", "Authorization"],
    credentials: true,
  })
);

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/users", usersRoute);
app.use("/api/newsletter", newsletterRoute);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
