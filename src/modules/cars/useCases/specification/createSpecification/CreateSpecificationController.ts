import { Request, Response } from "express";
import { CreateSpecificationUseCase } from "./CreateSpecificationUseCase";

class CreateSpecificationController {
  constructor(private createSpecificationUseCase: CreateSpecificationUseCase) {}
  execute(req: Request, res: Response) {
    try {
      const specification = this.createSpecificationUseCase.handle(req.body);
      return res.status(201).send(specification).end();
    } catch (error) {
      res.status(400).send({ message: "There was an error", error }).end();
    }
  }
}

export { CreateSpecificationController };
