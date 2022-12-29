import { SpecificationService } from "../../domain/services/SpecificationService";
import { Router } from "express";
import { SpecificationRepositoryInMemory } from "../repository/SpecificationRepositoryInMemory";

const specificationsRoutes = Router();
const specificationService = new SpecificationService(
  new SpecificationRepositoryInMemory()
);

specificationsRoutes.post("/", async (req, res) => {
  try {
    const specification = specificationService.create(req.body);
    res.status(201).send(specification).end();
  } catch (error) {
    res.status(400).send({ message: "There was an error", error }).end();
  }
});

specificationsRoutes.get("/", (req, res) => {
  try {
    const specification = specificationService.findAll();
    res.status(200).send(specification).end();
  } catch (error) {
    res.status(204).end();
  }
});

specificationsRoutes.get("/:name", (req, res) => {
  try {
    const specification = specificationService.findByName(req.params);
    res.status(200).send(specification).end();
  } catch (error) {
    res.status(204).end();
  }
});

specificationsRoutes.delete("/:name", (req, res) => {
  try {
    specificationService.remove(req.params);
    res.status(200).end();
  } catch (err) {
    res
      .status(404)
      .send({ message: "No specification found with this id" })
      .end();
  }
});

export { specificationsRoutes };
