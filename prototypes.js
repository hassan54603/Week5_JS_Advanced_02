// In this assignment, you will be creating a a constructor function named "Person" and then create your whole family from that constructor.

// Create "Person" constructor function
function Person(name, age, hobby) {
  this.Name = name;
  this.Age = age;
  this.Hobby = hobby;
}
Person.prototype.Speak = function () {
  console.log(
    "Hello, My name is " +
      this.Name +
      " and I'm " +
      this.Age +
      " years old. I love " +
      this.Hobby
  );
};
let Me = new Person("Duraan", 37, "playing Basketball");
Me.Speak();
// Give it "Name", "Age", "Hobby" properties
// Also give it a method "Speak", which says "Hello, My name is + name + and I'm + age + years old. I love + Hobby"

// Move the "Speak" method outside of the constructor function and into the prototype.
// Create an object named "Me" using the "Person" constructor function
// Call the "Speak" method on the "Me" object
// Console log all your results
