import { CarBuilder } from "../../src/modules/cars/builder/CarBuilder";
import { Car } from "../../src/modules/cars/model/Car";

describe("Car", () => {
  it("expect CarBuilder to instantiate Car", () => {
    const car = new CarBuilder("ABC-0001").build();
    expect(car).toBeInstanceOf(Car);
  });
});
