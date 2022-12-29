import { ICar } from "../model/Car.interface";
import { Car } from "../model/Car";

class CarBuilder implements ICar {
  license_plate: string;
  created_at: Date;
  name: string | undefined;
  description: string | undefined;
  daily_rate: number | undefined;
  available: boolean | undefined;
  fine_amount: number | undefined;
  brand: string | undefined;

  constructor(license_plate: string) {
    this.license_plate = license_plate;
    this.created_at = new Date();
  }

  build() {
    return new Car(this);
  }

  setName(value: string) {
    this.name = value;
  }

  setDescription(value: string) {
    this.description = value;
  }

  setDaily_rate(value: number) {
    this.daily_rate = value;
  }

  setAvailable(value: boolean) {
    this.available = value;
  }

  setFine_amount(value: number) {
    this.fine_amount = value;
  }

  setBrand(value: string) {
    this.brand = value;
  }
}

export { CarBuilder };
