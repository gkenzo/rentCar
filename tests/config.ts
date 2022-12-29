import * as dotenv from "dotenv";
dotenv.config({ path: `../.env.${process.env.NODE_ENV || "dev"}` });

export const config = {
  baseUrl: `http://localhost:${process.env.PORT || 3000}`,
};
