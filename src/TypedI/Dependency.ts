// 의존성은 구성 요소들이 서로 의존하는 성질입니다.
// Programmer 클래스는 Laptop 클래스에 의존성을 띕니다.

class Laptop {
  public turnOn() {}
}

class Macbook extends Laptop {}

class Programmer {
  private laptop: Laptop;

  constructor() {
    this.laptop = new Laptop();
  }

  public programming() {
    this.laptop.turnOn();
  }
}

// programmer가 Mabook을 사용한다면 생성자 함수에 Macbook으로 변경해야 하는 이슈가 발생한다.
class Programmer2 {
  private laptop: Laptop;

  constructor() {
    this.laptop = new Macbook();
  }

  public programming() {
    this.laptop.turnOn();
  }
}

const programmer: Programmer = new Programmer();
programmer.programming();
