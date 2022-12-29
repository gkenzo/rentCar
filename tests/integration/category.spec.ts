import axios from "axios";
import { config } from "../config";

type axiosRequest = {
  url: string;
  method: string;
  data?: any;
};

const { baseUrl } = config;

const categoryUrl = `${baseUrl}/categories`;

const request = ({ url, method, data }: axiosRequest) =>
  axios({ url, method, data });

describe("Testing category routes", () => {
  it("should be able to get category endpoint", async () => {
    const { data, status } = await request({ url: categoryUrl, method: "get" });
    expect(status).toBe(200);
    expect(data).toBeDefined();
  });
});
