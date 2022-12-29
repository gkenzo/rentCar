import { Request, Response } from "express";
import { ListSpecificationUseCase } from "./ListSpecificationUseCase";

class ListSpecificationController {
  constructor(private listSpecificationUseCase: ListSpecificationUseCase) {}
  execute(req: Request, res: Response) {
    try {
      const specifications = this.listSpecificationUseCase.handle();
      return res.status(200).send(specifications).end();
    } catch (error) {
      res.status(400).send({ message: "There was an error", error }).end();
    }
  }
}

export { ListSpecificationController };
