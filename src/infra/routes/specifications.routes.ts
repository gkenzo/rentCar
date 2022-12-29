import { Router } from "express";
import { createSpecificationController } from "../../modules/cars/useCases/specification/createSpecification";
import { deleteSpecificationController } from "../../modules/cars/useCases/specification/deleteSpecification";
import { listSpecificationController } from "../../modules/cars/useCases/specification/listSpecification";
import { searchSpecificationController } from "../../modules/cars/useCases/specification/searchSpecification";

const specificationsRoutes = Router();

specificationsRoutes.post("/", async (req, res) => {
  return createSpecificationController.execute(req, res);
});

specificationsRoutes.get("/", (req, res) => {
  return listSpecificationController.execute(req, res);
});

specificationsRoutes.get("/:name", (req, res) => {
  return searchSpecificationController.execute(req, res);
});

specificationsRoutes.delete("/:name", (req, res) => {
  return deleteSpecificationController.execute(req, res);
});

export { specificationsRoutes };
