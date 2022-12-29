import { createCategoryController } from "../../modules/cars/useCases/category/createCategory";
import { deleteCategoryController } from "../../modules/cars/useCases/category/deleteCategory";
import { listCategoryController } from "../../modules/cars/useCases/category/listCategories";
import { searchCategoryController } from "../../modules/cars/useCases/category/searchCategory";
import { Router } from "express";

const categoryRoutes = Router();

categoryRoutes.post("/", async (req, res) => {
  return createCategoryController.execute(req, res);
});

categoryRoutes.get("/", (req, res) => {
  return listCategoryController.execute(req, res);
});

categoryRoutes.get("/:name", (req, res) => {
  return searchCategoryController.execute(req, res);
});

categoryRoutes.delete("/:name", (req, res) => {
  return deleteCategoryController.execute(req, res);
});

export { categoryRoutes };
