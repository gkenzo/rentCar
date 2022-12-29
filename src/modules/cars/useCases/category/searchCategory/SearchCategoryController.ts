import { Request, Response } from "express";
import { SearchCategoryUseCase } from "./SearchCategoryUseCase";

class SearchCategoryController {
  constructor(private searchCategoryUseCase: SearchCategoryUseCase) {}
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

export { SearchCategoryController };
