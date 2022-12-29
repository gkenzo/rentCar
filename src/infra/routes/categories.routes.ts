import { categoryController } from "../../application/category";
import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.post("/", async (req, res) => {
  return categoryController.create(req, res);
});

categoryRoutes.get("/", (req, res) => {
  return categoryController.findAll(req, res);
});

categoryRoutes.get("/:name", (req, res) => {
  return categoryController.findByName(req, res);
});

categoryRoutes.delete("/:name", (req, res) => {
  return categoryController.remove(req, res);
});

export { categoryRoutes };
