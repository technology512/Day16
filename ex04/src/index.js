// Only change code below this line

class Pets {
  constructor(name, legs) {
    this.name = name;
    this.legs = legs;
  }

  walk(numberOfLegs) {
    // return this.name + " is walking on" + this.legs + " legs.";
    return `${this.name} is walking on ${this.legs} legs.`;
  }
}

class Dog extends Pets {
  constructor(name, legs, dogSay) {
    super(name, legs);
    this.dogSay = dogSay;
  }

  bark() {
    this.dogSay = "WUF-WUF";
    return `${this.name} says ${this.dogSay}`;
  }
}

// Only change code above this line
let dog = new Dog("Pujdo", 4); // Change this line
console.log(dog.walk());
console.log(dog.bark());
module.exports = {
  Pets,
  Dog,
};
