import { Macbook, Laptop, Programmer } from "./TypedI/DependencyInjection";

const programmer: Programmer = new Programmer(new Laptop());
const programmer2: Programmer = new Programmer(new Macbook());

programmer.programming();
programmer2.programming();
