import { Request, Response } from "express";
import { SearchSpecificationUseCase } from "./SearchSpecificationUseCase";

class SearchSpecificationController {
  constructor(private searchCategoryUseCase: SearchSpecificationUseCase) {}
  execute(req: Request, res: Response) {
    const { name } = req.params;
    try {
      const category = this.searchCategoryUseCase.handle({ name });
      return res.status(201).send(category).end();
    } catch (error) {
      res.status(400).send({ message: "There was an error", error }).end();
    }
  }
}

export { SearchSpecificationController };
