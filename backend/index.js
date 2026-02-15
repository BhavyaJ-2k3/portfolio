import dotenv from "dotenv";
import contactRoutes from "./routes/contact.js";
import express from "express";
import mongoose from "mongoose";
import cors from "cors";
dotenv.config();

const app = express();
app.use(cors({
  origin: "https://bhavyajain-portfolio.vercel.app",
  methods: ["GET", "POST"],
  credentials: true
}));
app.use(express.json());
app.use("/api/contact", contactRoutes);

// Test route
app.get("/", (req, res) => {
  res.send("API is running 🚀");
});

const PORT = process.env.PORT || 5000;

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected");
    app.listen(PORT, () =>
      console.log(`Server running on port ${PORT}`)
    );
  })
  .catch((err) => console.error(err));
import projectRoutes from "./routes/projectRoutes.js";
app.use("/api/projects", projectRoutes);