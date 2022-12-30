import * as dotenv from "dotenv";
dotenv.config({ path: `./.env.${process.env.NODE_ENV || "dev"}` });
import express from "express";
import { router } from "./infra/routes";

const app = express();
app.use(express.json());
app.use(router);

app.listen(process.env.PORT, () =>
  console.log(`server running on port ${process.env.PORT}`)
);
