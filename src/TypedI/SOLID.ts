interface Laptop {
  turnOn(): void;
}

class Macbook implements Laptop {
  public turnOn() {}
}

class Gram implements Laptop {
  public turnOn() {}
}

class Programmer {
  constructor(private laptop: Laptop) {}

  public programming() {
    this.laptop.turnOn();
  }
}

const programmer1: Programmer = new Programmer(new Macbook());

const programmer2: Programmer = new Programmer(new Gram());
