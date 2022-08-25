import "reflect-metadata";
import { Service, Container } from "typedi";

@Service()
export class Laptop_TypedI {
  public turnOn() {}
}

@Service()
export class Programmer_TypedI {
  constructor(private laptop: Laptop_TypedI) {}

  public programming() {
    this.laptop.turnOn();
  }
}

export const programmer_With_TypedI: Programmer_TypedI =
  Container.get(Programmer_TypedI);
export const programmer2_With_TypedI: Laptop_TypedI =
  Container.get(Laptop_TypedI);
