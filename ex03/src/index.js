// only change code below this line

class Person {
  static display() {
    console.log("Static method is invoked from Person class");
  }

  show() {
    Person.display();
  }
}

// Only change code above this line
var message = new Person();
message.show();

module.exports = Person;
