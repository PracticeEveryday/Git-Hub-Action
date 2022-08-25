import { Macbook, Laptop, Programmer } from "./TypedI/DependencyInjection";

import {
  programmer_With_TypedI,
  programmer2_With_TypedI,
} from "./TypedI/DI.withTypedI";

const programmer: Programmer = new Programmer(new Laptop());
const programmer2: Programmer = new Programmer(new Macbook());

programmer.programming();
programmer2.programming();

console.log(programmer_With_TypedI);
console.log(programmer2_With_TypedI);
