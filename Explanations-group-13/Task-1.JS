class Car {
  constructor(name, model, price) {
    this.n = name;
    this.m = model;
    this.p = price;
  }
  carDetailes() {
    return `Car One Name Is ${this.n} And Model Is ${this.m} And Price Is ${this.p}`;
  }
  carRun() {
    return this.m >= 2023 ? "Car Is Running Now" : "Car Is Stopped";
  }
}

let CarModel = new Car("Lamborghini Revuelto", 2023, 640000);
console.log(CarModel.carDetailes());
console.log(CarModel.carRun());

// Needed Output

// "Car One Name Is Lamborghini Revuelto And Model Is 2023 And Price Is 640000"
// "Car Is Running Now"
