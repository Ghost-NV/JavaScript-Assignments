let driver = {
  name: "Captain Aly",
  baseSalary: 1500,
  city: "UnKnown",
};

let deliveryData = ["Alexandria", 320, 5000];

function calculateTotalPayout(city, distance, weight) {
  let bonus = distance * 2 + weight / 1000;
  let total = this.baseSalary + bonus;

  console.log(`Driver: ${this.name}`);
  console.log(`Delivered to: ${city}`); // Alexandria
  console.log(`Delivered to: ${this.city}`); // UnKnown
  console.log(`Total Payout: ${total} EGP`);
}

calculateTotalPayout.apply(driver, deliveryData);
// apply() works as call() but using array instead of single parameters
