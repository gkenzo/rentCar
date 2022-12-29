import axios from "axios";
import { config } from "../config";
import { expect } from "@jest/globals";

type axiosRequest = {
  url?: string;
  method?: "get" | "post" | "delete" | "put" | "patch";
  data?: any;
};

const { baseUrl } = config;

const specificationsUrl = `${baseUrl}/specifications`;

const request = ({
  url = specificationsUrl,
  method = "get",
  data,
}: axiosRequest) => axios({ url, method, data, validateStatus: () => true });

describe("Testing specifications routes", () => {
  it("should be able to get specifications endpoint", async () => {
    const { data, status } = await request({});
    expect(status).toBe(200);
    expect(data).toBeDefined();
  });
  it("should be able to create a specifications", async () => {
    const specificationsDTO = {
      name: "name2",
      description: "description2",
    };

    const { data, status } = await request({
      method: "post",
      data: specificationsDTO,
    });

    expect(status).toBe(201);
    expect("name" in data).toBe(true);
    expect("description" in data).toBe(true);
    expect("created_at" in data).toBe(true);

    await request({
      url: `${specificationsUrl}/${specificationsDTO.name}`,
      method: "delete",
    });
  });
  it("should not be able to create two specifications with the same name", async () => {
    const specificationsDTO = {
      name: "name2",
      description: "description2",
    };
    const { data, status } = await request({
      method: "post",
      data: specificationsDTO,
    });

    expect(status).toBe(201);
    expect(data).toBeDefined();

    const request2 = await request({
      method: "post",
      data: specificationsDTO,
    });

    const { status: status2 } = request2;
    expect(status2).toBe(400);
  });

  it("should be able to get a specifications by name", async () => {
    const specificationsDTO = {
      name: "name2",
      description: "description2",
    };
    await request({
      method: "post",
      data: specificationsDTO,
    });

    const { data, status } = await request({
      url: `${specificationsUrl}/${specificationsDTO.name}`,
    });

    expect(data.name).toBeDefined();

    await request({
      url: `${specificationsUrl}/${specificationsDTO.name}`,
      method: "delete",
    });
  });
  it.only("should be able to get all specifications", async () => {
    const specificationsDTO = {
      name: "name",
      description: "description",
    };

    await request({
      method: "post",
      data: specificationsDTO,
    });

    const specificationsDTO2 = {
      name: "name2",
      description: "description2",
    };

    await request({
      method: "post",
      data: specificationsDTO2,
    });

    const { data, status } = await request({
      url: specificationsUrl,
      method: "get",
    });

    expect(status).toBe(200);
    expect(data).toHaveLength(2);

    await request({
      url: `${specificationsUrl}/${specificationsDTO.name}`,
      method: "delete",
    });
    await request({
      url: `${specificationsUrl}/${specificationsDTO2.name}`,
      method: "delete",
    });
  });
});
