import * as dotenv from "dotenv";
dotenv.config();

import express from "express";
import categoryRoutes from "./infra/routes/categories.routes";

const app = express();

app.use(express.json());
app.use("/categories", categoryRoutes);

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
