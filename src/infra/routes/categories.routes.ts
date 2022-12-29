import { Router } from "express";
import { CategoryService } from "../../domain/services/CategoryService";
import { CategoryRepositoryInMemory } from "../repository/CategoryRepositoryInMemory";

const categoryRoutes = Router();
const categoryService = new CategoryService(new CategoryRepositoryInMemory());

categoryRoutes.post("/", async (req, res) => {
  try {
    const category = categoryService.create(req.body);
    res.status(201).send(category).end();
  } catch (error) {
    res.status(400).send({ message: "There was an error", error }).end();
  }
});

categoryRoutes.get("/", (req, res) => {
  try {
    const category = categoryService.findAll();
    res.status(200).send(category).end();
  } catch (error) {
    res.status(204).end();
  }
});

categoryRoutes.get("/:name", (req, res) => {
  try {
    const category = categoryService.findByName(req.params);
    res.status(200).send(category).end();
  } catch (error) {
    res.status(204).end();
  }
});

categoryRoutes.delete("/:name", (req, res) => {
  try {
    categoryService.remove(req.params);
    res.status(200).end();
  } catch (err) {
    res.status(404).send({ message: "No category found with this id" }).end();
  }
});

export { categoryRoutes };
