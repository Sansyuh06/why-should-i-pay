// Lesson and Quiz Data for OOP Learning Platform
const learningData = {
  beginner: {
    title: "Beginner Level",
    requiredXP: 0,
    lessons: [
      {
        id: "b1",
        title: "Introduction to OOP",
        content: `
          <h3>What is Object-Oriented Programming?</h3>
          <p>Object-Oriented Programming (OOP) is a programming paradigm that organizes code around <strong>objects</strong> rather than functions and logic.</p>
          
          <h4>Why Use OOP?</h4>
          <ul>
            <li><strong>Reusability:</strong> Write code once, use it many times</li>
            <li><strong>Modularity:</strong> Break complex problems into smaller pieces</li>
            <li><strong>Maintainability:</strong> Easier to update and fix code</li>
            <li><strong>Real-world modeling:</strong> Represents real entities naturally</li>
          </ul>
          
          <h4>Core Concepts</h4>
          <p>OOP is built on four main pillars:</p>
          <ol>
            <li><strong>Encapsulation:</strong> Bundling data and methods together</li>
            <li><strong>Inheritance:</strong> Creating new classes from existing ones</li>
            <li><strong>Polymorphism:</strong> Objects can take many forms</li>
            <li><strong>Abstraction:</strong> Hiding complex implementation details</li>
          </ol>
        `,
        codeExample: `// Real-world example: A Car object
class Car {
  constructor(brand, model) {
    this.brand = brand;
    this.model = model;
  }
  
  start() {
    console.log(this.brand + " " + this.model + " is starting!");
  }
}

const myCar = new Car("Tesla", "Model S");
myCar.start(); // Tesla Model S is starting!`,
        quiz: {
          questions: [
            {
              question: "What is the main focus of Object-Oriented Programming?",
              options: [
                "Functions and procedures",
                "Objects and their interactions",
                "Database management",
                "User interfaces"
              ],
              correct: 1
            },
            {
              question: "Which is NOT a core pillar of OOP?",
              options: [
                "Encapsulation",
                "Inheritance",
                "Compilation",
                "Polymorphism"
              ],
              correct: 2
            },
            {
              question: "What benefit does OOP provide for code reusability?",
              options: [
                "Forces you to write more code",
                "Allows writing code once and using it multiple times",
                "Makes code slower to execute",
                "Removes the need for functions"
              ],
              correct: 1
            },
            {
              question: "In the car example, what is 'Car'?",
              options: [
                "A variable",
                "A function",
                "A class",
                "An array"
              ],
              correct: 2
            },
            {
              question: "What is the constructor in the Car class example?",
              options: [
                "A method for starting the car",
                "A method for stopping the car",
                "A special method that initializes object properties",
                "A method for accelerating the car"
              ],
              correct: 2
            },
            {
              question: "Which feature of OOP indicates code reusability?",
              options: [
                "Encapsulation",
                "Inheritance",
                "Abstraction",
                "Polymorphism"
              ],
              correct: 1
            }
          ],
          passingScore: 4
        }
      },
      {
        id: "b2",
        title: "Classes and Objects",
        content: `
          <h3>Understanding Classes and Objects</h3>
          <p>A <strong>class</strong> is a blueprint or template for creating objects. An <strong>object</strong> is an instance of a class.</p>
          
          <h4>Think of it Like This:</h4>
          <ul>
            <li><strong>Class:</strong> A cookie cutter (the template)</li>
            <li><strong>Object:</strong> The actual cookies (instances)</li>
          </ul>
          
          <h4>Creating a Class</h4>
          <p>A class defines properties (attributes) and behaviors (methods) that objects will have.</p>
          
          <h4>Creating Objects</h4>
          <p>You create objects from a class using the <code>new</code> keyword. Each object is independent with its own data.</p>
        `,
        codeExample: `// Define a class
class Dog {
  constructor(name, breed) {
    this.name = name;   // Property
    this.breed = breed; // Property
  }
  
  bark() {              // Method
    console.log(this.name + " says: Woof! Woof!");
  }
}

// Create objects (instances)
const dog1 = new Dog("Max", "Golden Retriever");
const dog2 = new Dog("Bella", "Poodle");

dog1.bark(); // Max says: Woof! Woof!
dog2.bark(); // Bella says: Woof! Woof!`,
        quiz: {
          questions: [
            {
              question: "What is a class?",
              options: [
                "An instance of an object",
                "A blueprint for creating objects",
                "A type of variable",
                "A programming language"
              ],
              correct: 1
            },
            {
              question: "What keyword is used to create an object from a class?",
              options: [
                "create",
                "make",
                "new",
                "instance"
              ],
              correct: 2
            },
            {
              question: "Can you create multiple objects from the same class?",
              options: [
                "No, only one object per class",
                "Yes, unlimited objects can be created",
                "Only two objects maximum",
                "Objects cannot be created from classes"
              ],
              correct: 1
            },
            {
              question: "In the Dog class example, what is 'bark'?",
              options: [
                "A property",
                "A method",
                "A class",
                "A constructor"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "b3",
        title: "Attributes and Methods",
        content: `
          <h3>Attributes (Properties) and Methods</h3>
          
          <h4>Attributes (Properties)</h4>
          <p>Attributes are variables that belong to an object. They store the state or data of the object.</p>
          <ul>
            <li>Defined inside the class</li>
            <li>Accessed using <code>this</code> keyword</li>
            <li>Can be different for each object instance</li>
          </ul>
          
          <h4>Methods</h4>
          <p>Methods are functions that belong to an object. They define the behaviors or actions the object can perform.</p>
          <ul>
            <li>Can access and modify object attributes</li>
            <li>Can accept parameters</li>
            <li>Can return values</li>
          </ul>
        `,
        codeExample: `class BankAccount {
  // Attributes defined in constructor
  constructor(owner, balance) {
    this.owner = owner;
    this.balance = balance;
  }
  
  // Method to deposit money
  deposit(amount) {
    this.balance += amount;
    console.log("Deposited $" + amount + ". New balance: $" + this.balance);
  }
  
  // Method to withdraw money
  withdraw(amount) {
    if (amount <= this.balance) {
      this.balance -= amount;
      console.log("Withdrew $" + amount + ". New balance: $" + this.balance);
    } else {
      console.log("Insufficient funds!");
    }
  }
  
  // Method to return current balance
  getBalance() {
    return this.balance;
  }
}

const myAccount = new BankAccount("Alice", 1000);
myAccount.deposit(500);   // Deposited $500. New balance: $1500
myAccount.withdraw(200);  // Withdrew $200. New balance: $1300`,
        quiz: {
          questions: [
            {
              question: "What are attributes in a class?",
              options: [
                "Functions that belong to an object",
                "Variables that store object data",
                "Keywords in programming",
                "External files"
              ],
              correct: 1
            },
            {
              question: "What keyword is used to access attributes and methods inside a class?",
              options: [
                "self",
                "my",
                "this",
                "object"
              ],
              correct: 2
            },
            {
              question: "Can methods modify attributes of an object?",
              options: [
                "No, attributes are read-only",
                "Yes, methods can read and modify attributes",
                "Only if declared as public",
                "Methods cannot access attributes"
              ],
              correct: 1
            },
            {
              question: "In the BankAccount example, what does the deposit() method do?",
              options: [
                "Only returns the balance",
                "Increases the balance by the given amount",
                "Decreases the balance",
                "Creates a new account"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "b4",
        title: "Constructors and Initialization",
        content: `
          <h3>The Constructor Method</h3>
          <p>A <strong>constructor</strong> is a special method that runs automatically when you create a new object. It's used to initialize the object's attributes.</p>
          
          <h4>Key Points About Constructors:</h4>
          <ul>
            <li>Named <code>constructor</code> in JavaScript</li>
            <li>Called automatically with <code>new</code> keyword</li>
            <li>Used to set initial values for attributes</li>
            <li>Can accept parameters to customize each object</li>
            <li>Every class can have only one constructor</li>
          </ul>
          
          <h4>Default Values</h4>
          <p>You can provide default values for constructor parameters, making them optional when creating objects.</p>
        `,
        codeExample: `class Player {
  // Constructor with parameters
  constructor(name, level = 1, health = 100) {
    this.name = name;
    this.level = level;
    this.health = health;
    this.score = 0; // Default value without parameter
    console.log("Player " + name + " has been created!");
  }
  
  levelUp() {
    this.level++;
    this.health = 100; // Reset health on level up
    console.log(this.name + " leveled up to " + this.level + "!");
  }
}

// Creating objects with different parameters
const player1 = new Player("Warrior");
// Player Warrior has been created!
// Uses defaults: level=1, health=100

const player2 = new Player("Mage", 5, 80);
// Player Mage has been created!
// Custom values: level=5, health=80

player1.levelUp(); // Warrior leveled up to 2!`,
        quiz: {
          questions: [
            {
              question: "When is the constructor method called?",
              options: [
                "When the program ends",
                "When an object is created with 'new'",
                "When a method is called",
                "Manually by the programmer"
              ],
              correct: 1
            },
            {
              question: "What is the main purpose of a constructor?",
              options: [
                "To delete objects",
                "To initialize object attributes",
                "To print output",
                "To create classes"
              ],
              correct: 1
            },
            {
              question: "How many constructors can a class have in JavaScript?",
              options: [
                "Unlimited",
                "One",
                "Two",
                "Three"
              ],
              correct: 1
            },
            {
              question: "Can constructor parameters have default values?",
              options: [
                "No, all parameters are required",
                "Yes, parameters can have default values",
                "Only the first parameter",
                "Default values are not allowed"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "b5",
        title: "The 'this' Keyword",
        content: `
          <h3>Understanding 'this'</h3>
          <p>The <code>this</code> keyword refers to the current object instance. It's how methods access and modify the object's own attributes.</p>
          
          <h4>Why Use 'this'?</h4>
          <ul>
            <li><strong>Clarity:</strong> Distinguishes object attributes from local variables</li>
            <li><strong>Reference:</strong> Points to the current object instance</li>
            <li><strong>Access:</strong> Allows methods to work with object data</li>
          </ul>
          
          <h4>Common Use Cases:</h4>
          <ol>
            <li>Accessing object attributes inside methods</li>
            <li>Modifying object state</li>
            <li>Calling other methods of the same object</li>
            <li>Returning the object itself for method chaining</li>
          </ol>
        `,
        codeExample: `class Rectangle {
  constructor(width, height) {
    this.width = width;   // 'this' refers to the object being created
    this.height = height;
  }
  
  // Using 'this' to access attributes
  getArea() {
    return this.width * this.height;
  }
  
  // Using 'this' to modify attributes
  scale(factor) {
    this.width *= factor;
    this.height *= factor;
    return this; // Return 'this' for method chaining
  }
  
  // Using 'this' to call other methods
  describe() {
    console.log("Rectangle: " + this.width + "x" + this.height);
    console.log("Area: " + this.getArea());
  }
}

const rect = new Rectangle(5, 10);
rect.describe();
// Rectangle: 5x10
// Area: 50

rect.scale(2).describe(); // Method chaining
// Rectangle: 10x20
// Area: 200`,
        quiz: {
          questions: [
            {
              question: "What does the 'this' keyword refer to?",
              options: [
                "The class itself",
                "The current object instance",
                "All objects of the class",
                "The previous object"
              ],
              correct: 1
            },
            {
              question: "Why is 'this' necessary inside class methods?",
              options: [
                "It makes code run faster",
                "To access the object's own attributes and methods",
                "It's optional and not needed",
                "To create new objects"
              ],
              correct: 1
            },
            {
              question: "Can a method return 'this'?",
              options: [
                "No, methods can only return primitive values",
                "Yes, returning 'this' allows method chaining",
                "Only in constructor",
                "'this' cannot be returned"
              ],
              correct: 1
            },
            {
              question: "In 'this.width', what does 'this' represent?",
              options: [
                "The global window object",
                "The specific object instance calling the method",
                "All Rectangle objects",
                "The Rectangle class"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      }
    ]
  },
  intermediate: {
    title: "Intermediate Level",
    requiredXP: 500,
    lessons: [
      {
        id: "i1",
        title: "Encapsulation",
        content: `
          <h3>Encapsulation: Data Protection</h3>
          <p><strong>Encapsulation</strong> is the practice of bundling data (attributes) and methods together, and controlling access to them.</p>
          
          <h4>Why Encapsulation?</h4>
          <ul>
            <li><strong>Data Protection:</strong> Prevents external code from directly modifying internal state</li>
            <li><strong>Controlled Access:</strong> Use getter/setter methods to validate data</li>
            <li><strong>Flexibility:</strong> Easy to change internal implementation without affecting external code</li>
            <li><strong>Maintainability:</strong> Reduces complexity and dependencies</li>
          </ul>
          
          <h4>Private Fields in JavaScript</h4>
          <p>Use <code>#</code> prefix to create truly private fields (ES2022).</p>
        `,
        codeExample: `class BankAccount {
  // Private field (cannot be accessed outside the class)
  #balance;
  
  constructor(owner, initialBalance) {
    this.owner = owner;
    this.#balance = initialBalance;
  }
  
  // Getter method (controlled access)
  getBalance() {
    return this.#balance;
  }
  
  // Setter method with validation
  deposit(amount) {
    if (amount > 0) {
      this.#balance += amount;
      return true;
    }
    console.log("Invalid amount!");
    return false;
  }
  
  withdraw(amount) {
    if (amount > 0 && amount <= this.#balance) {
      this.#balance -= amount;
      return true;
    }
    console.log("Invalid withdrawal!");
    return false;
  }
}

const account = new BankAccount("Bob", 1000);
console.log(account.getBalance()); // 1000
account.deposit(500);              // Valid
console.log(account.getBalance()); // 1500
// account.#balance = 99999;       // ERROR! Cannot access private field`,
        quiz: {
          questions: [
            {
              question: "What is encapsulation?",
              options: [
                "Making all variables public",
                "Bundling data and methods while controlling access",
                "Deleting unused code",
                "Creating multiple classes"
              ],
              correct: 1
            },
            {
              question: "How do you create a private field in JavaScript?",
              options: [
                "Use the 'private' keyword",
                "Prefix with underscore _",
                "Prefix with hash #",
                "Private fields are not possible"
              ],
              correct: 2
            },
            {
              question: "What is the benefit of using getter/setter methods?",
              options: [
                "Makes code longer",
                "Allows validation and controlled access to data",
                "Slows down the program",
                "No real benefit"
              ],
              correct: 1
            },
            {
              question: "Can external code directly access private fields?",
              options: [
                "Yes, all fields are accessible",
                "No, private fields can only be accessed within the class",
                "Only if using the 'new' keyword",
                "Only in constructor"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        },
        codingExercise: {
          description: `
            <h4>🎯 Coding Challenge: Create a Secure Bank Account</h4>
            <p>Create a BankAccount class that uses encapsulation to protect the balance:</p>
            <ul>
              <li>Use a private field <code>#balance</code> for the account balance</li>
              <li>Add a <code>deposit(amount)</code> method that only accepts positive amounts</li>
              <li>Add a <code>withdraw(amount)</code> method that checks for sufficient funds</li>
              <li>Add a <code>getBalance()</code> method to view the balance</li>
              <li>Test your class by creating an account and performing operations</li>
            </ul>
          `,
          starterCode: `class BankAccount {
  // TODO: Add private balance field
  
  constructor(owner, initialBalance) {
    this.owner = owner;
    // TODO: Initialize private balance
  }
  
  // TODO: Add getBalance() method
  
  // TODO: Add deposit(amount) method with validation
  
  // TODO: Add withdraw(amount) method with validation
}

// Test your BankAccount class
const myAccount = new BankAccount("Alice", 1000);
console.log("Initial balance:", myAccount.getBalance());

myAccount.deposit(500);
console.log("After deposit:", myAccount.getBalance());

myAccount.withdraw(200);
console.log("After withdrawal:", myAccount.getBalance());
`
        }
      },
      {
        id: "i2",
        title: "Inheritance Basics",
        content: `
          <h3>Inheritance: Reusing Code</h3>
          <p><strong>Inheritance</strong> allows a class to inherit properties and methods from another class, promoting code reuse.</p>
          
          <h4>Terminology:</h4>
          <ul>
            <li><strong>Parent Class (Superclass):</strong> The class being inherited from</li>
            <li><strong>Child Class (Subclass):</strong> The class that inherits</li>
            <li><strong>extends:</strong> Keyword to create inheritance relationship</li>
            <li><strong>super:</strong> Keyword to call parent class constructor and methods</li>
          </ul>
          
          <h4>Benefits:</h4>
          <ul>
            <li>Reduces code duplication</li>
            <li>Creates logical hierarchies</li>
            <li>Promotes code reusability</li>
            <li>Supports polymorphism</li>
          </ul>
        `,
        codeExample: `// Parent class
class Animal {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }
  
  eat() {
    console.log(this.name + " is eating");
  }
  
  sleep() {
    console.log(this.name + " is sleeping");
  }
}

// Child class inherits from Animal
class Dog extends Animal {
  constructor(name, age, breed) {
    super(name, age); // Call parent constructor
    this.breed = breed;
  }
  
  bark() {
    console.log(this.name + " says: Woof!");
  }
}

// Dog has all Animal methods + its own
const myDog = new Dog("Max", 3, "Labrador");
myDog.eat();   // Max is eating (inherited)
myDog.sleep(); // Max is sleeping (inherited)
myDog.bark();  // Max says: Woof! (own method)`,
        quiz: {
          questions: [
            {
              question: "What keyword is used to create an inheritance relationship?",
              options: [
                "inherit",
                "extends",
                "super",
                "parent"
              ],
              correct: 1
            },
            {
              question: "What does 'super' do in a child class constructor?",
              options: [
                "Deletes the parent class",
                "Calls the parent class constructor",
                "Creates a new object",
                "Nothing"
              ],
              correct: 1
            },
            {
              question: "Can a child class have its own methods in addition to inherited ones?",
              options: [
                "No, it can only use inherited methods",
                "Yes, child classes can add their own methods",
                "Only if the parent allows it",
                "Methods cannot be inherited"
              ],
              correct: 1
            },
            {
              question: "In the example, what is Animal?",
              options: [
                "Child class",
                "Parent class",
                "Object instance",
                "Method"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "i3",
        title: "Method Overriding",
        content: `
          <h3>Method Overriding</h3>
          <p><strong>Method overriding</strong> occurs when a child class provides its own implementation of a method inherited from the parent class.</p>
          
          <h4>Key Concepts:</h4>
          <ul>
            <li>Child method has the same name as parent method</li>
            <li>Child's version replaces (overrides) parent's version</li>
            <li>Can still call parent's version using <code>super.methodName()</code></li>
            <li>Allows customization of inherited behavior</li>
          </ul>
          
          <h4>When to Override:</h4>
          <ul>
            <li>Need specialized behavior for child class</li>
            <li>Parent implementation doesn't fit child's needs</li>
            <li>Want to extend parent functionality</li>
          </ul>
        `,
        codeExample: `class Vehicle {
  constructor(brand) {
    this.brand = brand;
  }
  
  start() {
    console.log(this.brand + " vehicle is starting...");
  }
  
  describe() {
    console.log("This is a " + this.brand + " vehicle");
  }
}

class ElectricCar extends Vehicle {
  constructor(brand, batteryCapacity) {
    super(brand);
    this.batteryCapacity = batteryCapacity;
  }
  
  // Override start method with electric-specific behavior
  start() {
    console.log(this.brand + " electric motor is powering up silently...");
    console.log("Battery at " + this.batteryCapacity + "%");
  }
  
  // Override and extend describe method
  describe() {
    super.describe(); // Call parent method first
    console.log("Battery capacity: " + this.batteryCapacity + "%");
  }
}

const gasCar = new Vehicle("Toyota");
gasCar.start(); // Toyota vehicle is starting...

const tesla = new ElectricCar("Tesla", 95);
tesla.start(); 
// Tesla electric motor is powering up silently...
// Battery at 95%

tesla.describe();
// This is a Tesla vehicle
// Battery capacity: 95%`,
        quiz: {
          questions: [
            {
              question: "What is method overriding?",
              options: [
                "Deleting a method from parent class",
                "Child class provides its own implementation of parent's method",
                "Calling multiple methods at once",
                "Renaming a method"
              ],
              correct: 1
            },
            {
              question: "How can you call the parent's overridden method from the child class?",
              options: [
                "parent.methodName()",
                "super.methodName()",
                "this.methodName()",
                "Cannot call parent's version"
              ],
              correct: 1
            },
            {
              question: "What happens when a child class overrides a method?",
              options: [
                "Both versions are called",
                "The parent's version is deleted",
                "The child's version is used instead of parent's",
                "An error occurs"
              ],
              correct: 2
            },
            {
              question: "Can an overridden method still use functionality from the parent method?",
              options: [
                "No, it must be completely different",
                "Yes, by calling super.methodName()",
                "Only if declared as public",
                "Parent methods cannot be accessed"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "i4",
        title: "Polymorphism",
        content: `
          <h3>Polymorphism: Many Forms</h3>
          <p><strong>Polymorphism</strong> means "many forms" - the ability of objects of different classes to be treated as objects of a common parent class, while still behaving according to their specific class.</p>
          
          <h4>Types of Polymorphism:</h4>
          <ul>
            <li><strong>Method Overriding:</strong> Different classes implement the same method differently</li>
            <li><strong>Interface Polymorphism:</strong> Objects of different types respond to the same method call</li>
          </ul>
          
          <h4>Benefits:</h4>
          <ul>
            <li>Write flexible, extensible code</li>
            <li>Treat different objects uniformly</li>
            <li>Easy to add new types without changing existing code</li>
            <li>Enables powerful design patterns</li>
          </ul>
        `,
        codeExample: `class Shape {
  constructor(color) {
    this.color = color;
  }
  
  draw() {
    console.log("Drawing a shape");
  }
  
  getArea() {
    return 0; // Default implementation
  }
}

class Circle extends Shape {
  constructor(color, radius) {
    super(color);
    this.radius = radius;
  }
  
  draw() {
    console.log("Drawing a " + this.color + " circle");
  }
  
  getArea() {
    return Math.PI * this.radius * this.radius;
  }
}

class Square extends Shape {
  constructor(color, side) {
    super(color);
    this.side = side;
  }
  
  draw() {
    console.log("Drawing a " + this.color + " square");
  }
  
  getArea() {
    return this.side * this.side;
  }
}

// Polymorphism in action: treating different objects uniformly
const shapes = [
  new Circle("red", 5),
  new Square("blue", 4),
  new Circle("green", 3)
];

shapes.forEach(shape => {
  shape.draw();           // Each calls its own version
  console.log("Area: " + shape.getArea().toFixed(2));
});
// Drawing a red circle
// Area: 78.54
// Drawing a blue square
// Area: 16.00
// Drawing a green circle
// Area: 28.27`,
        quiz: {
          questions: [
            {
              question: "What does polymorphism mean in OOP?",
              options: [
                "Using only one class",
                "Objects of different types can be treated uniformly while maintaining specific behavior",
                "All objects must behave identically",
                "Deleting unused methods"
              ],
              correct: 1
            },
            {
              question: "In the shapes example, how can Circle and Square be treated uniformly?",
              options: [
                "They cannot be treated uniformly",
                "They both inherit from Shape and implement the same methods",
                "They have the same name",
                "They are in the same file"
              ],
              correct: 1
            },
            {
              question: "What enables polymorphic behavior?",
              options: [
                "Using the 'new' keyword",
                "Method overriding in child classes",
                "Private fields",
                "Constructor functions"
              ],
              correct: 1
            },
            {
              question: "What is the benefit of polymorphism?",
              options: [
                "Makes code longer",
                "Allows writing flexible code that works with different object types",
                "Slows down execution",
                "No real benefit"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "i5",
        title: "Abstraction",
        content: `
          <h3>Abstraction: Hiding Complexity</h3>
          <p><strong>Abstraction</strong> is the concept of hiding complex implementation details and showing only the essential features of an object.</p>
          
          <h4>Key Principles:</h4>
          <ul>
            <li><strong>Hide complexity:</strong> Users don't need to know internal workings</li>
            <li><strong>Show interface:</strong> Expose only what's necessary</li>
            <li><strong>Simplify usage:</strong> Make objects easy to use</li>
            <li><strong>Reduce dependencies:</strong> Changes to internals don't affect users</li>
          </ul>
          
          <h4>Real-World Example:</h4>
          <p>When you drive a car, you use simple controls (steering wheel, pedals) without needing to understand the engine's internal combustion process. That's abstraction!</p>
        `,
        codeExample: `class CoffeeMachine {
  #waterLevel = 0;
  #beansLevel = 0;
  #temperature = 0;
  
  constructor() {
    this.#waterLevel = 100;
    this.#beansLevel = 100;
  }
  
  // Private method (internal complexity)
  #heatWater() {
    console.log("Heating water to 95°C...");
    this.#temperature = 95;
  }
  
  #grindBeans() {
    console.log("Grinding coffee beans...");
    this.#beansLevel -= 10;
  }
  
  #brew() {
    console.log("Brewing coffee...");
    this.#waterLevel -= 30;
  }
  
  // Public interface (simple abstraction)
  makeCoffee() {
    console.log("Making your coffee...");
    this.#heatWater();  // Hidden complexity
    this.#grindBeans(); // Hidden complexity
    this.#brew();       // Hidden complexity
    console.log("☕ Your coffee is ready!");
    return "☕ Coffee";
  }
  
  // Simple status check
  checkLevels() {
    return {
      water: this.#waterLevel + "%",
      beans: this.#beansLevel + "%"
    };
  }
}

// User doesn't need to know complex internal process
const machine = new CoffeeMachine();
machine.makeCoffee();
// Making your coffee...
// Heating water to 95°C...
// Grinding coffee beans...
// Brewing coffee...
// ☕ Your coffee is ready!

console.log(machine.checkLevels());
// { water: '70%', beans: '90%' }`,
        quiz: {
          questions: [
            {
              question: "What is the purpose of abstraction?",
              options: [
                "Make code as complex as possible",
                "Hide complex implementation and show only essential features",
                "Delete all methods",
                "Make all variables public"
              ],
              correct: 1
            },
            {
              question: "In the coffee machine example, which method represents abstraction?",
              options: [
                "makeCoffee() - provides simple interface hiding complex steps",
                "#heatWater() - internal detail",
                "Both are equal",
                "Neither"
              ],
              correct: 0
            },
            {
              question: "What do users need to know about abstracted functionality?",
              options: [
                "Every internal detail",
                "Only the public interface (what to call and what they get)",
                "Nothing at all",
                "How to modify internal code"
              ],
              correct: 1
            },
            {
              question: "How does abstraction benefit code maintenance?",
              options: [
                "It doesn't help maintenance",
                "Internal changes don't affect external code using the abstraction",
                "Makes code harder to change",
                "Requires rewriting everything"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "i6",
        title: "Interfaces and Abstract Classes",
        content: `
          <h3>Interfaces and Abstract Classes</h3>
          <p>While JavaScript doesn't have built-in abstract classes or interfaces like Java/C#, we can simulate these concepts to create contracts that classes must follow.</p>
          
          <h4>Abstract Class Concept:</h4>
          <ul>
            <li>A class that cannot be instantiated directly</li>
            <li>Serves as a base for other classes</li>
            <li>Can have both implemented and abstract methods</li>
            <li>Forces child classes to implement certain methods</li>
          </ul>
          
          <h4>Interface Concept:</h4>
          <ul>
            <li>A contract that classes must follow</li>
            <li>Defines method signatures without implementation</li>
            <li>Ensures consistent API across different classes</li>
          </ul>
        `,
        codeExample: `// Simulating an abstract class
class PaymentMethod {
  constructor(amount) {
    if (new.target === PaymentMethod) {
      throw new Error("Cannot instantiate abstract class");
    }
    this.amount = amount;
  }
  
  // Abstract method (must be overridden)
  processPayment() {
    throw new Error("processPayment() must be implemented");
  }
  
  // Concrete method (shared by all subclasses)
  getReceipt() {
    return "Payment of $" + this.amount + " processed";
  }
}

// Concrete implementations
class CreditCard extends PaymentMethod {
  processPayment() {
    console.log("Processing $" + this.amount + " via Credit Card");
    console.log("Verifying card details...");
    console.log("Payment successful!");
  }
}

class PayPal extends PaymentMethod {
  processPayment() {
    console.log("Processing $" + this.amount + " via PayPal");
    console.log("Redirecting to PayPal...");
    console.log("Payment successful!");
  }
}

// Usage
const payment1 = new CreditCard(100);
payment1.processPayment();
console.log(payment1.getReceipt());

const payment2 = new PayPal(50);
payment2.processPayment();
console.log(payment2.getReceipt());

// This will throw error:
// const payment = new PaymentMethod(100);`,
        quiz: {
          questions: [
            {
              question: "What is an abstract class?",
              options: [
                "A class that can be instantiated directly",
                "A base class that cannot be instantiated and may have abstract methods",
                "A class with no methods",
                "A class that deletes other classes"
              ],
              correct: 1
            },
            {
              question: "What must child classes do with abstract methods from the parent?",
              options: [
                "Ignore them",
                "Delete them",
                "Implement (override) them",
                "Make them private"
              ],
              correct: 2
            },
            {
              question: "Can an abstract class have concrete (implemented) methods?",
              options: [
                "No, all methods must be abstract",
                "Yes, it can have both abstract and concrete methods",
                "Only one concrete method allowed",
                "Abstract classes cannot have methods"
              ],
              correct: 1
            },
            {
              question: "What happens if you try to instantiate an abstract class directly?",
              options: [
                "A new object is created normally",
                "An error is thrown",
                "It creates all subclasses",
                "Nothing happens"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      }
    ]
  },
  advanced: {
    title: "Advanced Level",
    requiredXP: 1500,
    lessons: [
      {
        id: "a1",
        title: "Advanced Inheritance Patterns",
        content: `
          <h3>Advanced Inheritance Patterns</h3>
          <p>Explore sophisticated inheritance techniques including multi-level inheritance, method delegation, and the prototype chain.</p>
          
          <h4>Multi-Level Inheritance:</h4>
          <p>Creating inheritance chains with multiple levels (GrandParent → Parent → Child).</p>
          
          <h4>The Prototype Chain:</h4>
          <ul>
            <li>Understanding JavaScript's prototypal inheritance</li>
            <li>How property lookup works up the chain</li>
            <li>Using Object.getPrototypeOf()</li>
            <li>Modifying prototypes</li>
          </ul>
          
          <h4>Best Practices:</h4>
          <ul>
            <li>Favor composition over deep inheritance hierarchies</li>
            <li>Keep inheritance hierarchies shallow (3-4 levels max)</li>
            <li>Use inheritance for "is-a" relationships</li>
          </ul>
        `,
        codeExample: `// Multi-level inheritance
class LivingThing {
  constructor(name) {
    this.name = name;
  }
  
  breathe() {
    console.log(this.name + " is breathing");
  }
}

class Animal extends LivingThing {
  constructor(name, species) {
    super(name);
    this.species = species;
  }
  
  move() {
    console.log(this.name + " is moving");
  }
}

class Mammal extends Animal {
  constructor(name, species, furColor) {
    super(name, species);
    this.furColor = furColor;
  }
  
  feedYoung() {
    console.log(this.name + " is feeding its young");
  }
}

class Dog extends Mammal {
  constructor(name, breed) {
    super(name, "Canis familiaris", "brown");
    this.breed = breed;
  }
  
  bark() {
    console.log(this.name + " says: Woof!");
  }
}

const myDog = new Dog("Buddy", "Golden Retriever");
myDog.breathe();    // From LivingThing
myDog.move();       // From Animal
myDog.feedYoung();  // From Mammal
myDog.bark();       // From Dog

// Checking the prototype chain
console.log(myDog instanceof Dog);         // true
console.log(myDog instanceof Mammal);      // true
console.log(myDog instanceof Animal);      // true
console.log(myDog instanceof LivingThing); // true`,
        quiz: {
          questions: [
            {
              question: "What is multi-level inheritance?",
              options: [
                "Multiple classes inheriting from one parent",
                "A chain of inheritance with multiple levels",
                "Inheriting from multiple parents",
                "No inheritance at all"
              ],
              correct: 1
            },
            {
              question: "In the example, which class is at the top of the hierarchy?",
              options: [
                "Dog",
                "Mammal",
                "Animal",
                "LivingThing"
              ],
              correct: 3
            },
            {
              question: "What is generally recommended for inheritance depth?",
              options: [
                "As deep as possible",
                "Keep it shallow (3-4 levels max)",
                "Only 1 level",
                "Inheritance should be avoided"
              ],
              correct: 1
            },
            {
              question: "What does 'instanceof' check?",
              options: [
                "If two objects are equal",
                "If an object is an instance of a class or its ancestors",
                "The number of methods",
                "The object's name"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        },
        codingExercise: {
          description: `
            <h4>🎯 Advanced Challenge: Multi-Level Inheritance</h4>
            <p>Create a multi-level inheritance hierarchy:</p>
            <ul>
              <li>Create a <code>LivingThing</code> base class</li>
              <li>Create a <code>Mammal</code> class that extends LivingThing</li>
              <li>Create a <code>Dog</code> class that extends Mammal</li>
              <li>Each class should have its own unique method</li>
              <li>Test that Dog has access to all methods in the hierarchy</li>
            </ul>
          `,
          starterCode: `// TODO: Create LivingThing base class
class LivingThing {
  constructor(name) {
    this.name = name;
  }
  
  // TODO: Add breathe() method
}

// TODO: Create Mammal class extending LivingThing
class Mammal extends LivingThing {
  // TODO: Add giveBirth() method
}

// TODO: Create Dog class extending Mammal
class Dog extends Mammal {
  //TODO: Add bark() method
}

// Test multi-level inheritance
const myDog = new Dog("Rex");
myDog.breathe();   // From LivingThing
myDog.giveBirth(); // From Mammal
myDog.bark();      // From Dog
`
        }
      },
      {
        id: "a2",
        title: "Composition vs Inheritance",
        content: `
          <h3>Composition vs Inheritance</h3>
          <p><strong>Composition</strong> is an alternative to inheritance where objects are built by combining smaller, reusable components.</p>
          
          <h4>When to Use Inheritance:</h4>
          <ul>
            <li>Clear "is-a" relationship (Dog IS-A Animal)</li>
            <li>Sharing core behavior across related types</li>
            <li>Creating type hierarchies</li>
          </ul>
          
          <h4>When to Use Composition:</h4>
          <ul>
            <li>"Has-a" relationship (Car HAS-A Engine)</li>
            <li>Need flexible, reusable components</li>
            <li>Avoid deep inheritance hierarchies</li>
            <li>Mix and match behaviors</li>
          </ul>
          
          <h4>Composition Benefits:</h4>
          <ul>
            <li>More flexible and maintainable</li>
            <li>Easier to test components independently</li>
            <li>Avoid fragile base class problem</li>
            <li>Runtime behavior composition</li>
          </ul>
        `,
        codeExample: `// Composition approach - building with components

// Reusable components
const swimmer = {
  swim() {
    console.log(this.name + " is swimming");
  }
};

const flyer = {
  fly() {
    console.log(this.name + " is flying");
  }
};

const walker = {
  walk() {
    console.log(this.name + " is walking");
  }
};

// Compose objects from components
class Duck {
  constructor(name) {
    this.name = name;
    // Compose behaviors
    Object.assign(this, swimmer, flyer, walker);
  }
}

class Fish {
  constructor(name) {
    this.name = name;
    // Only swimming behavior
    Object.assign(this, swimmer);
  }
}

class Bird {
  constructor(name) {
    this.name = name;
    // Flying and walking behaviors
    Object.assign(this, flyer, walker);
  }
}

const duck = new Duck("Donald");
duck.swim();  // Donald is swimming
duck.fly();   // Donald is flying
duck.walk();  // Donald is walking

const goldfish = new Fish("Goldie");
goldfish.swim(); // Goldie is swimming

const eagle = new Bird("Eddie");
eagle.fly();  // Eddie is flying
eagle.walk(); // Eddie is walking

// Flexible: Can easily add/remove behaviors without complex inheritance`,
        quiz: {
          questions: [
            {
              question: "What relationship does composition represent?",
              options: [
                "IS-A relationship",
                "HAS-A relationship",
                "WAS-A relationship",
                "WILL-BE-A relationship"
              ],
              correct: 1
            },
            {
              question: "What is a key advantage of composition over inheritance?",
              options: [
                "Always faster execution",
                "More flexible and avoids deep hierarchies",
                "Uses less memory",
                "Easier to spell"
              ],
              correct: 1
            },
            {
              question: "In the example, how does Duck get its behaviors?",
              options: [
                "Through inheritance from multiple parents",
                "By composing swimmer, flyer, and walker components",
                "By copying code",
                "Duck has no behaviors"
              ],
              correct: 1
            },
            {
              question: "When should you prefer composition?",
              options: [
                "Never, always use inheritance",
                "When you need flexible, mix-and-match behaviors",
                "Only for small projects",
                "When writing HTML"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "a3",
        title: "Design Patterns: Factory",
        content: `
          <h3>Factory Pattern</h3>
          <p>The <strong>Factory Pattern</strong> is a creational design pattern that provides an interface for creating objects without specifying their exact class.</p>
          
          <h4>Key Concepts:</h4>
          <ul>
            <li>Encapsulates object creation logic</li>
            <li>Returns objects based on input parameters</li>
            <li>Reduces coupling between code and specific classes</li>
            <li>Makes code more flexible and maintainable</li>
          </ul>
          
          <h4>When to Use:</h4>
          <ul>
            <li>Object creation is complex</li>
            <li>Need to create different types based on conditions</li>
            <li>Want to centralize object creation logic</li>
            <li>Reduce dependencies on concrete classes</li>
          </ul>
        `,
        codeExample: `// Different vehicle types
class Car {
  constructor() {
    this.type = "Car";
    this.wheels = 4;
  }
  
  drive() {
    console.log("Driving a car with " + this.wheels + " wheels");
  }
}

class Motorcycle {
  constructor() {
    this.type = "Motorcycle";
    this.wheels = 2;
  }
  
  drive() {
    console.log("Riding a motorcycle with " + this.wheels + " wheels");
  }
}

class Truck {
  constructor() {
    this.type = "Truck";
    this.wheels = 6;
  }
  
  drive() {
    console.log("Driving a truck with " + this.wheels + " wheels");
  }
}

// Factory class
class VehicleFactory {
  static createVehicle(type) {
    switch(type.toLowerCase()) {
      case 'car':
        return new Car();
      case 'motorcycle':
        return new Motorcycle();
      case 'truck':
        return new Truck();
      default:
        throw new Error("Unknown vehicle type: " + type);
    }
  }
}

// Usage - client code doesn't know about specific classes
const vehicle1 = VehicleFactory.createVehicle('car');
vehicle1.drive(); // Driving a car with 4 wheels

const vehicle2 = VehicleFactory.createVehicle('motorcycle');
vehicle2.drive(); // Riding a motorcycle with 2 wheels

const vehicle3 = VehicleFactory.createVehicle('truck');
vehicle3.drive(); // Driving a truck with 6 wheels

// Easy to add new types without changing client code!`,
        quiz: {
          questions: [
            {
              question: "What is the main purpose of the Factory Pattern?",
              options: [
                "To delete objects",
                "To encapsulate object creation logic",
                "To make code slower",
                "To create factories"
              ],
              correct: 1
            },
            {
              question: "What advantage does Factory Pattern provide?",
              options: [
                "Client code doesn't need to know about specific classes",
                "Makes code more complex",
                "Reduces performance",
                "No real advantage"
              ],
              correct: 0
            },
            {
              question: "In the example, what does VehicleFactory.createVehicle() return?",
              options: [
                "Always a Car",
                "A string",
                "An object of the appropriate vehicle type",
                "Nothing"
              ],
              correct: 2
            },
            {
              question: "When should you use the Factory Pattern?",
              options: [
                "Never",
                "When object creation logic is complex or conditional",
                "Only for vehicles",
                "For every single class"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "a4",
        title: "Design Patterns: Singleton",
        content: `
          <h3>Singleton Pattern</h3>
          <p>The <strong>Singleton Pattern</strong> ensures a class has only one instance and provides a global point of access to it.</p>
          
          <h4>Key Characteristics:</h4>
          <ul>
            <li>Only one instance exists throughout the application</li>
            <li>Provides global access point</li>
            <li>Lazy initialization (created when first needed)</li>
            <li>Prevents direct instantiation</li>
          </ul>
          
          <h4>Common Use Cases:</h4>
          <ul>
            <li>Database connections</li>
            <li>Configuration managers</li>
            <li>Logging services</li>
            <li>Cache managers</li>
          </ul>
          
          <h4>Caution:</h4>
          <p>Use sparingly as it creates global state which can make testing harder.</p>
        `,
        codeExample: `class Database {
  constructor() {
    if (Database.instance) {
      return Database.instance; // Return existing instance
    }
    
    // Initialize database connection
    this.connection = "Connected to DB at localhost:5432";
    this.queries = 0;
    
    Database.instance = this; // Store the instance
    return this;
  }
  
  query(sql) {
    this.queries++;
    console.log("Executing query #" + this.queries + ": " + sql);
    return "Query results...";
  }
  
  getStats() {
    return {
      connection: this.connection,
      totalQueries: this.queries
    };
  }
}

// Usage
const db1 = new Database();
db1.query("SELECT * FROM users");
// Executing query #1: SELECT * FROM users

const db2 = new Database(); // Tries to create new instance
db2.query("SELECT * FROM products");
// Executing query #2: SELECT * FROM products

// db1 and db2 are the SAME instance
console.log(db1 === db2); // true
console.log(db1.getStats());
// { connection: 'Connected to DB at localhost:5432', totalQueries: 2 }

// Both variables share the same state
console.log(db2.getStats());
// { connection: 'Connected to DB at localhost:5432', totalQueries: 2 }`,
        quiz: {
          questions: [
            {
              question: "What does the Singleton Pattern guarantee?",
              options: [
                "Unlimited instances of a class",
                "Only one instance of a class exists",
                "No instances can be created",
                "Two instances maximum"
              ],
              correct: 1
            },
            {
              question: "In the example, what happens when you create db2 after db1?",
              options: [
                "A new database object is created",
                "The existing db1 instance is returned",
                "An error is thrown",
                "Both are deleted"
              ],
              correct: 1
            },
            {
              question: "What is a common use case for Singleton?",
              options: [
                "User input fields",
                "Database connections and configuration managers",
                "Temporary variables",
                "Random number generation"
              ],
              correct: 1
            },
            {
              question: "Why should Singleton be used carefully?",
              options: [
                "It's too simple",
                "It creates global state which can make testing harder",
                "It's always the best pattern",
                "It consumes too much memory"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "a5",
        title: "Design Patterns: Observer",
        content: `
          <h3>Observer Pattern</h3>
          <p>The <strong>Observer Pattern</strong> defines a one-to-many dependency between objects so that when one object changes state, all its dependents are notified automatically.</p>
          
          <h4>Key Components:</h4>
          <ul>
            <li><strong>Subject:</strong> The object being observed</li>
            <li><strong>Observers:</strong> Objects that want to be notified of changes</li>
            <li><strong>Subscribe:</strong> Observers register to receive updates</li>
            <li><strong>Notify:</strong> Subject alerts all observers of changes</li>
          </ul>
          
          <h4>Use Cases:</h4>
          <ul>
            <li>Event handling systems</li>
            <li>Data binding in UI frameworks</li>
            <li>Real-time notifications</li>
            <li>MVC architectures</li>
          </ul>
        `,
        codeExample: `// Subject (Observable)
class NewsAgency {
  constructor() {
    this.subscribers = [];
    this.latestNews = null;
  }
  
  subscribe(observer) {
    this.subscribers.push(observer);
    console.log(observer.name + " subscribed to news");
  }
  
  unsubscribe(observer) {
    this.subscribers = this.subscribers.filter(sub => sub !== observer);
    console.log(observer.name + " unsubscribed from news");
  }
  
  publishNews(news) {
    this.latestNews = news;
    console.log("\\n📰 Breaking News: " + news);
    this.notifyAll();
  }
  
  notifyAll() {
    this.subscribers.forEach(subscriber => {
      subscriber.update(this.latestNews);
    });
  }
}

// Observers
class NewsChannel {
  constructor(name) {
    this.name = name;
  }
  
  update(news) {
    console.log(this.name + " received: " + news);
  }
}

// Usage
const agency = new NewsAgency();

const cnn = new NewsChannel("CNN");
const bbc = new NewsChannel("BBC");
const fox = new NewsChannel("FOX");

agency.subscribe(cnn);
// CNN subscribed to news
agency.subscribe(bbc);
// BBC subscribed to news
agency.subscribe(fox);
// FOX subscribed to news

agency.publishNews("Major tech breakthrough!");
// 📰 Breaking News: Major tech breakthrough!
// CNN received: Major tech breakthrough!
// BBC received: Major tech breakthrough!
// FOX received: Major tech breakthrough!

agency.unsubscribe(fox);
// FOX unsubscribed from news

agency.publishNews("New policy announced");
// 📰 Breaking News: New policy announced
// CNN received: New policy announced
// BBC received: New policy announced`,
        quiz: {
          questions: [
            {
              question: "What is the Observer Pattern used for?",
              options: [
                "Deleting objects",
                "Notifying multiple objects when one object changes state",
                "Creating single instances",
                "Sorting data"
              ],
              correct: 1
            },
            {
              question: "What is the 'Subject' in the Observer Pattern?",
              options: [
                "The object being observed that notifies observers",
                "The object that receives notifications",
                "A database table",
                "A type of method"
              ],
              correct: 0
            },
            {
              question: "In the example, what happens when agency.publishNews() is called?",
              options: [
                "Nothing happens",
                "Only the first subscriber is notified",
                "All subscribed channels are notified",
                "The news is deleted"
              ],
              correct: 2
            },
            {
              question: "What method allows an observer to stop receiving updates?",
              options: [
                "delete()",
                "unsubscribe()",
                "remove()",
                "stop()"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      },
      {
        id: "a6",
        title: "SOLID Principles",
        content: `
          <h3>SOLID Principles</h3>
          <p>SOLID is an acronym for five design principles that make software more maintainable, flexible, and scalable.</p>
          
          <h4>The Five Principles:</h4>
          <ol>
            <li><strong>S</strong> - Single Responsibility Principle (SRP)
              <br>A class should have only one reason to change</li>
            
            <li><strong>O</strong> - Open/Closed Principle (OCP)
              <br>Open for extension, closed for modification</li>
            
            <li><strong>L</strong> - Liskov Substitution Principle (LSP)
              <br>Subtypes must be substitutable for their base types</li>
            
            <li><strong>I</strong> - Interface Segregation Principle (ISP)
              <br>Many specific interfaces are better than one general interface</li>
            
            <li><strong>D</strong> - Dependency Inversion Principle (DIP)
              <br>Depend on abstractions, not concretions</li>
          </ol>
          
          <h4>Benefits:</h4>
          <ul>
            <li>Easier to maintain and extend</li>
            <li>Reduced coupling</li>
            <li>Better testability</li>
            <li>More flexible architecture</li>
          </ul>
        `,
        codeExample: `// SOLID Principles Example

// 1. Single Responsibility Principle
// Bad: Class does too much
class UserBad {
  saveToDatabase() { }
  sendEmail() { }
  generateReport() { }
}

// Good: Each class has one responsibility
class User {
  constructor(name, email) {
    this.name = name;
    this.email = email;
  }
}

class UserRepository {
  save(user) {
    console.log("Saving user to database");
  }
}

class EmailService {
  send(user, message) {
    console.log("Sending email to " + user.email);
  }
}

// 2. Open/Closed Principle
// Good: Can add new shapes without modifying AreaCalculator
class Shape {
  area() {
    throw new Error("Must implement area()");
  }
}

class Circle extends Shape {
  constructor(radius) {
    super();
    this.radius = radius;
  }
  area() {
    return Math.PI * this.radius * this.radius;
  }
}

class Rectangle extends Shape {
  constructor(width, height) {
    super();
    this.width = width;
    this.height = height;
  }
  area() {
    return this.width * this.height;
  }
}

class AreaCalculator {
  calculate(shapes) {
    return shapes.reduce((sum, shape) => sum + shape.area(), 0);
  }
}

// 3. Liskov Substitution Principle
// Child classes should work in place of parent
function printArea(shape) {
  console.log("Area: " + shape.area());
}

const circle = new Circle(5);
const rect = new Rectangle(4, 6);

printArea(circle); // Works
printArea(rect);   // Works - substitutable

// Usage demonstration
const user = new User("Alice", "alice@example.com");
const repo = new UserRepository();
const emailService = new EmailService();

repo.save(user);
emailService.send(user, "Welcome!");

const shapes = [new Circle(3), new Rectangle(4, 5)];
const calculator = new AreaCalculator();
console.log("Total area: " + calculator.calculate(shapes).toFixed(2));`,
        quiz: {
          questions: [
            {
              question: "What does the 'S' in SOLID stand for?",
              options: [
                "Super Responsibility",
                "Single Responsibility Principle",
                "Simple Rules",
                "Singleton Pattern"
              ],
              correct: 1
            },
            {
              question: "According to Single Responsibility Principle, how many reasons should a class have to change?",
              options: [
                "As many as needed",
                "One",
                "Two",
                "Three minimum"
              ],
              correct: 1
            },
            {
              question: "What does Open/Closed Principle mean?",
              options: [
                "Classes should be open all the time",
                "Open for extension, closed for modification",
                "All methods should be public",
                "Code should be open source"
              ],
              correct: 1
            },
            {
              question: "What is the benefit of following SOLID principles?",
              options: [
                "Code runs faster",
                "Code is more maintainable and flexible",
                "Uses less memory",
                "No benefits"
              ],
              correct: 1
            }
          ],
          passingScore: 3
        }
      }
    ]
  }
};

// XP Configuration
const XP_CONFIG = {
  lessonComplete: 50,
  quizPass: 100,
  levels: {
    beginner: { min: 0, max: 500 },
    intermediate: { min: 500, max: 1500 },
    advanced: { min: 1500, max: 3000 }
  }
};
