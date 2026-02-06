import express from "express";
const router = express.Router();
import Project from "../models/Project.js";

// GET all projects
router.get("/", async (req, res) => {
  try {
    const projects = await Project.find();
    res.json(projects);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

// POST a project (later for admin panel)
router.post("/", async (req, res) => {
  const project = new Project(req.body);
  await project.save();
  res.status(201).json(project);
});

export default router;
