import { Request, Response } from "express";
import { DeleteSpecificationUseCase } from "./DeleteSpecificationUseCase";

class DeleteSpecificationController {
  constructor(private deleteSpecificationUseCase: DeleteSpecificationUseCase) {}
  execute(req: Request, res: Response) {
    const { name } = req.params;
    try {
      const specification = this.deleteSpecificationUseCase.handle({ name });
      return res.status(201).send(specification).end();
    } catch (error) {
      res.status(400).send({ message: "There was an error", error }).end();
    }
  }
}

export { DeleteSpecificationController };
