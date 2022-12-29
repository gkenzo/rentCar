import { Request, Response } from "express";
import { DeleteCategoryUseCase } from "./DeleteCategoryUseCase";

class DeleteCategoryController {
  constructor(private deleteCategoryUseCase: DeleteCategoryUseCase) {}
  execute(req: Request, res: Response) {
    const { name } = req.params;
    try {
      const category = this.deleteCategoryUseCase.handle({ name });
      return res.status(201).send(category).end();
    } catch (error) {
      res.status(400).send({ message: "There was an error", error }).end();
    }
  }
}

export { DeleteCategoryController };
