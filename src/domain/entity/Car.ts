import ICar from "./Car.interface";

export default class Car implements ICar {
  constructor({
    name,
    description,
    daily_rate,
    available,
    license_plate,
    fine_amount,
    brand,
    created_at,
  }: ICar) {
    this.name = name;
    this.description = description;
    this.daily_rate = daily_rate;
    this.available = available;
    this.license_plate = license_plate;
    this.fine_amount = fine_amount;
    this.brand = brand;
    this.created_at = created_at;
  }
  license_plate: string;
  created_at: Date;
  name: string | undefined;
  description: string | undefined;
  daily_rate: number | undefined;
  available: boolean | undefined;
  fine_amount: number | undefined;
  brand: string | undefined;
}
