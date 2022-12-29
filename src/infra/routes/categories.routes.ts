import { Router } from "express";

const categoryRoutes = Router();

const categories = [];

categoryRoutes.post("/", async (req, res) => {
  const { name, description } = req.body;
  categories.push({ name, description });
  res.status(201).end();
});

categoryRoutes.get("/", (req, res) => {
  res.status(200).send({ msg: "hello world" });
});

export default categoryRoutes;
