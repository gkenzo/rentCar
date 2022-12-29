import { SpecificationService } from "@/domain/services/SpecificationService";
import { Request, Response } from "express";

class SpecificationController {
  constructor(private specificationService: SpecificationService) {}

  create(req: Request, res: Response) {
    try {
      const specification = this.specificationService.create(req.body);
      return res.status(201).send(specification).end();
    } catch (error) {
      res.status(400).send({ message: "There was an error", error }).end();
    }
  }

  findAll(req: Request, res: Response) {
    try {
      const specification = this.specificationService.findAll();
      res.status(200).send(specification).end();
    } catch (error) {
      res.status(204).end();
    }
  }

  findByName(req: Request, res: Response) {
    const { name } = req.params;

    try {
      const specification = this.specificationService.findByName({ name });
      res.status(200).send(specification).end();
    } catch (error) {
      res.status(204).end();
    }
  }
  remove(req: Request, res: Response) {
    const { name } = req.params;
    try {
      this.specificationService.remove({ name });
      res.status(200).end();
    } catch (err) {
      res
        .status(404)
        .send({ message: "No specification found with this id" })
        .end();
    }
  }
}

export { SpecificationController };
