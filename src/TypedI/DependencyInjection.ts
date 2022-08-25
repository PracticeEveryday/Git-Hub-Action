// 의존성 주입이란 말그대로 외부에서 의존성을 주입해주는 것을 말합니다.

export class Laptop {
  public turnOn() {
    console.log("programming start");
  }
}

export class Macbook extends Laptop {
  public turnOn() {
    console.log("programming start with Macbook");
  }
}

export class Programmer {
  private laptop: Laptop;

  constructor(laptop: Laptop) {
    this.laptop = laptop;
  }

  public programming() {
    this.laptop.turnOn();
  }
}

const programmer: Programmer = new Programmer(new Laptop());
const programmer2: Programmer = new Programmer(new Macbook());
