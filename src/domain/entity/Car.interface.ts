interface ICar {
  license_plate: string;
  created_at: Date;
  name: string | undefined;
  description: string | undefined;
  daily_rate: number | undefined;
  available: boolean | undefined;
  fine_amount: number | undefined;
  brand: string | undefined;
}

export { ICar };
