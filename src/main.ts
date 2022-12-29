import * as dotenv from "dotenv";
dotenv.config({ path: `./.env.${process.env.NODE_ENV || "dev"}` });
import express from "express";

import { categoryRoutes, specificationsRoutes } from "./infra/routes";

const app = express();
app.use(express.json());
app.use("/categories", categoryRoutes);
app.use("/specifications", specificationsRoutes);

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
