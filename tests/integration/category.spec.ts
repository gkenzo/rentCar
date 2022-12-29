import axios from "axios";
import { config } from "../config";
import { expect } from "@jest/globals";

type axiosRequest = {
  url?: string;
  method?: "get" | "post" | "delete" | "put" | "patch";
  data?: any;
};

const { baseUrl } = config;

const categoryUrl = `${baseUrl}/categories`;

const request = ({ url = categoryUrl, method = "get", data }: axiosRequest) =>
  axios({ url, method, data, validateStatus: () => true });

describe("Testing category routes", () => {
  it("should be able to get category endpoint", async () => {
    const { data, status } = await request({});
    expect(status).toBe(200);
    expect(data).toBeDefined();
  });
  it("should be able to create a category", async () => {
    const categoryDTO = {
      name: "name2",
      description: "description2",
    };

    const { data, status } = await request({
      method: "post",
      data: categoryDTO,
    });

    expect(status).toBe(201);
    expect("name" in data).toBe(true);
    expect("description" in data).toBe(true);
    expect("created_at" in data).toBe(true);

    await request({
      url: `${categoryUrl}/${categoryDTO.name}`,
      method: "delete",
    });
  });
  it("should not be able to create two categories with the same name", async () => {
    const categoryDTO = {
      name: "name2",
      description: "description2",
    };
    const { data, status } = await request({
      method: "post",
      data: categoryDTO,
    });

    expect(status).toBe(201);
    expect(data).toBeDefined();

    const request2 = await request({
      method: "post",
      data: categoryDTO,
    });

    const { status: status2 } = request2;
    expect(status2).toBe(400);
  });

  it("should be able to get a category by name", async () => {
    const categoryDTO = {
      name: "name2",
      description: "description2",
    };
    await request({
      method: "post",
      data: categoryDTO,
    });

    const { data, status } = await request({
      url: `${categoryUrl}/${categoryDTO.name}`,
    });

    expect(data.name).toBeDefined();

    await request({
      url: `${categoryUrl}/${categoryDTO.name}`,
      method: "delete",
    });
  });
  it("should be able to get all categories", async () => {
    const categoryDTO = {
      name: "name",
      description: "description",
    };

    await request({
      method: "post",
      data: categoryDTO,
    });

    const categoryDTO2 = {
      name: "name2",
      description: "description2",
    };

    await request({
      method: "post",
      data: categoryDTO2,
    });

    const { data, status } = await request({ url: categoryUrl, method: "get" });

    expect(status).toBe(200);
    expect(data).toHaveLength(2);

    await request({
      url: `${categoryUrl}/${categoryDTO.name}`,
      method: "delete",
    });
    await request({
      url: `${categoryUrl}/${categoryDTO2.name}`,
      method: "delete",
    });
  });
});
