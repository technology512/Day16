// Only change code below this line

class Microsoft {
  constructor(name) {
    this.name = name;
  }
  get name() {
    return this._name;
  }
  set name(value) {
    this._name = value;
  }
  occupation() {
    return `${this.name} is philanthropist!`;
  }
}

class Facebook extends Microsoft {
  constructor(name, age) {
    super(name);
    this.age = age;
  }
  studentAge() {
    return `${this.name} is ${this.age}`;
  }
}

const henry = new Microsoft("William Henry Gates III");
console.log(henry.occupation());

const elliot = new Facebook("Mark Elliot Zuckerberg", 23);
console.log(elliot.occupation());
console.log(elliot.studentAge());

// Only change code above this line

module.exports = { Microsoft, Facebook };
