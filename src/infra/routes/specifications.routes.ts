import { Router } from "express";
import { specificationController } from "../../application/specification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", async (req, res) => {
  return specificationController.create(req, res);
});

specificationsRoutes.get("/", (req, res) => {
  return specificationController.findAll(req, res);
});

specificationsRoutes.get("/:name", (req, res) => {
  return specificationController.findByName(req, res);
});

specificationsRoutes.delete("/:name", (req, res) => {
  return specificationController.remove(req, res);
});

export { specificationsRoutes };
