import React, { useState } from 'react';
import Editor from '@monaco-editor/react';

const chapters = [
    {
        id: 'intro',
        title: 'Introduction to OOP',
        content: `Object-Oriented Programming (OOP) is a programming paradigm based on the concept of "objects" which contain data (attributes) and code (methods).

OOP models real-world entities as objects, making code more modular, reusable, and easier to maintain. C++ is not purely object-oriented, but Java and Python support OOP extensively.`,
        code: {
            cpp: `// Basic class example
class Car {
private:
    string brand;
    int speed;
    
public:
    // Constructor
    Car(string b, int s) : brand(b), speed(s) {}
    
    // Method
    void accelerate() {
        speed += 10;
    }
    
    void display() {
        cout << brand << " at " << speed << " km/h" << endl;
    }
};

int main() {
    Car myCar("Toyota", 60);
    myCar.accelerate();
    myCar.display();  // Toyota at 70 km/h
    return 0;
}`,
            python: `class Car:
    def __init__(self, brand, speed):
        self.brand = brand
        self.speed = speed
    
    def accelerate(self):
        self.speed += 10
    
    def display(self):
        print(f"{self.brand} at {self.speed} km/h")

# Usage
my_car = Car("Toyota", 60)
my_car.accelerate()
my_car.display()  # Toyota at 70 km/h`
        },
        problems: ['Create a BankAccount class', 'Implement a Student class']
    },
    {
        id: 'pillars',
        title: 'Four Pillars of OOP',
        content: `1. Encapsulation: Bundling data and methods that operate on data within a single unit (class). Data hiding using private/protected access.

2. Abstraction: Hiding implementation details and showing only functionality. Achieved through abstract classes and interfaces.

3. Inheritance: Creating new classes from existing ones. Child class inherits properties and methods from parent.

4. Polymorphism: One interface, multiple implementations. Same function behaves differently based on object type.`,
        code: {
            cpp: `// Encapsulation
class BankAccount {
private:
    double balance;  // Hidden data
public:
    void deposit(double amt) {
        if (amt > 0) balance += amt;
    }
    double getBalance() { return balance; }
};

// Abstraction (Abstract class)
class Shape {
public:
    virtual double area() = 0;  // Pure virtual
};

// Inheritance
class Dog : public Animal {
public:
    void speak() { cout << "Bark!"; }
};

// Polymorphism
void makeSound(Animal* a) {
    a->speak();  // Calls correct version
}`,
            python: `# Encapsulation
class BankAccount:
    def __init__(self):
        self.__balance = 0  # Private
    
    def deposit(self, amt):
        if amt > 0:
            self.__balance += amt
    
    def get_balance(self):
        return self.__balance

# Inheritance
class Dog(Animal):
    def speak(self):
        return "Bark!"

# Polymorphism
def make_sound(animal):
    print(animal.speak())  # Works for any Animal`
        },
        problems: ['Implement encapsulation in a class', 'Create inheritance hierarchy']
    },
    {
        id: 'constructors',
        title: 'Constructors & Destructors',
        content: `A constructor initializes objects when created. It has the same name as the class and no return type.

Types: Default (no args), Parameterized (with args), Copy (creates copy of another object).

A destructor cleans up when object is destroyed. In C++, it's ~ClassName(). Python uses __del__.`,
        code: {
            cpp: `class Student {
    string name;
    int age;
public:
    // Default constructor
    Student() : name("Unknown"), age(0) {}
    
    // Parameterized constructor
    Student(string n, int a) : name(n), age(a) {}
    
    // Copy constructor
    Student(const Student& s) : name(s.name), age(s.age) {}
    
    // Destructor
    ~Student() {
        cout << "Student destroyed" << endl;
    }
};

int main() {
    Student s1;              // Default
    Student s2("Alice", 20); // Parameterized
    Student s3(s2);          // Copy
    return 0;
}`,
            python: `class Student:
    # Constructor (init)
    def __init__(self, name="Unknown", age=0):
        self.name = name
        self.age = age
    
    # Destructor
    def __del__(self):
        print("Student destroyed")

# Usage
s1 = Student()
s2 = Student("Alice", 20)
s3 = Student(s2.name, s2.age)  # Manual copy`
        },
        problems: ['Implement all constructor types', 'Create destructor for resource cleanup']
    },
    {
        id: 'inheritance',
        title: 'Inheritance Types',
        content: `Single: One child inherits from one parent.

Multiple: Child inherits from multiple parents (C++ only, Python supports).

Multilevel: Chain of inheritance (A → B → C).

Hierarchical: Multiple children from one parent.

Hybrid: Combination of above types. Watch out for Diamond Problem!`,
        code: {
            cpp: `// Single Inheritance
class Animal {
public:
    void eat() { cout << "Eating..."; }
};

class Dog : public Animal {
public:
    void bark() { cout << "Barking..."; }
};

// Multiple Inheritance
class Flyable {
public:
    void fly() { cout << "Flying..."; }
};

class Bird : public Animal, public Flyable {
    // Inherits from both
};

// Diamond Problem Solution: Virtual Inheritance
class A { public: int x; };
class B : virtual public A {};
class C : virtual public A {};
class D : public B, public C {};  // Only one 'x'`,
            python: `# Single Inheritance
class Animal:
    def eat(self):
        print("Eating...")

class Dog(Animal):
    def bark(self):
        print("Barking...")

# Multiple Inheritance
class Flyable:
    def fly(self):
        print("Flying...")

class Bird(Animal, Flyable):
    pass  # Inherits from both

# Method Resolution Order (MRO)
print(Bird.__mro__)  # Shows inheritance order`
        },
        problems: ['Implement multilevel inheritance', 'Solve diamond problem']
    },
    {
        id: 'polymorphism',
        title: 'Polymorphism',
        content: `Compile-time (Static): Function overloading, operator overloading. Resolved at compile time.

Runtime (Dynamic): Virtual functions, method overriding. Resolved at runtime.

Function Overloading: Same name, different parameters.
Operator Overloading: Custom behavior for operators.`,
        code: {
            cpp: `// Function Overloading
class Calculator {
public:
    int add(int a, int b) { return a + b; }
    double add(double a, double b) { return a + b; }
    int add(int a, int b, int c) { return a + b + c; }
};

// Operator Overloading
class Complex {
    double real, imag;
public:
    Complex operator+(const Complex& c) {
        return Complex(real + c.real, imag + c.imag);
    }
};

// Virtual Functions (Runtime Polymorphism)
class Shape {
public:
    virtual void draw() { cout << "Shape"; }
};

class Circle : public Shape {
public:
    void draw() override { cout << "Circle"; }
};

// Usage
Shape* s = new Circle();
s->draw();  // Prints "Circle"`,
            python: `# Method Overriding
class Shape:
    def draw(self):
        print("Shape")

class Circle(Shape):
    def draw(self):
        print("Circle")

# Polymorphism in action
shapes = [Shape(), Circle()]
for s in shapes:
    s.draw()  # Calls correct version

# Operator Overloading
class Vector:
    def __init__(self, x, y):
        self.x, self.y = x, y
    
    def __add__(self, other):
        return Vector(self.x + other.x, self.y + other.y)`
        },
        problems: ['Implement function overloading', 'Create virtual function hierarchy']
    },
    {
        id: 'templates',
        title: 'Templates & Generics',
        content: `Templates allow writing type-independent code. Write once, use with any data type.

Function Templates: Generic functions.
Class Templates: Generic classes (like vector<T>).

In Python/Java, this is achieved through generics and duck typing.`,
        code: {
            cpp: `// Function Template
template <typename T>
T maximum(T a, T b) {
    return (a > b) ? a : b;
}

// Usage
cout << maximum(5, 3);        // int
cout << maximum(5.5, 3.2);    // double
cout << maximum('a', 'z');    // char

// Class Template
template <typename T>
class Stack {
    vector<T> data;
public:
    void push(T val) { data.push_back(val); }
    T pop() { 
        T val = data.back();
        data.pop_back();
        return val;
    }
};

// Usage
Stack<int> intStack;
Stack<string> strStack;`,
            python: `# Python uses duck typing, but you can use type hints
from typing import TypeVar, Generic

T = TypeVar('T')

class Stack(Generic[T]):
    def __init__(self):
        self.items: list[T] = []
    
    def push(self, item: T):
        self.items.append(item)
    
    def pop(self) -> T:
        return self.items.pop()

# Usage
int_stack: Stack[int] = Stack()
int_stack.push(1)
int_stack.push(2)`
        },
        problems: ['Create a generic swap function', 'Implement a template class']
    }
];

const OopsTutorialPage = () => {
    const [active, setActive] = useState(0);
    const [lang, setLang] = useState('cpp');
    const ch = chapters[active];

    return (
        <div className="tutorial-page">
            <nav className="tutorial-nav">
                <h2>OOPs Tutorial</h2>
                {chapters.map((c, i) => (
                    <button
                        key={c.id}
                        onClick={() => setActive(i)}
                        className={active === i ? 'active' : ''}
                    >
                        {c.title}
                    </button>
                ))}
            </nav>

            <div className="tutorial-content">
                <article className="article">
                    <h1>{ch.title}</h1>
                    <div className="article-meta">
                        <span>📚 Object-Oriented Programming</span>
                        <span>⏱️ 5 min read</span>
                    </div>

                    {ch.content.split('\n\n').map((p, i) => (
                        <p key={i}>{p}</p>
                    ))}

                    <h2>Implementation</h2>
                    <div className="code-block">
                        <div className="code-header">
                            <span></span>
                            <div className="code-tabs">
                                <button
                                    className={`code-tab ${lang === 'cpp' ? 'active' : ''}`}
                                    onClick={() => setLang('cpp')}
                                >C++</button>
                                <button
                                    className={`code-tab ${lang === 'python' ? 'active' : ''}`}
                                    onClick={() => setLang('python')}
                                >Python</button>
                            </div>
                        </div>
                        <Editor
                            height="320px"
                            language={lang === 'cpp' ? 'cpp' : 'python'}
                            value={ch.code[lang]}
                            theme="vs-dark"
                            options={{
                                fontSize: 14,
                                minimap: { enabled: false },
                                padding: { top: 16 },
                                scrollBeyondLastLine: false,
                            }}
                        />
                    </div>

                    <div className="problems-list">
                        <h3>Practice Problems</h3>
                        {ch.problems.map((p, i) => (
                            <div key={i} className="problem-item">
                                <span>{p}</span>
                                <span className="badge badge-easy">Practice</span>
                            </div>
                        ))}
                    </div>

                    <div className="article-nav">
                        <button
                            className="btn btn-secondary"
                            onClick={() => setActive(Math.max(0, active - 1))}
                            disabled={active === 0}
                        >← Previous</button>
                        <button
                            className="btn btn-primary"
                            onClick={() => setActive(Math.min(chapters.length - 1, active + 1))}
                            disabled={active === chapters.length - 1}
                        >Next →</button>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default OopsTutorialPage;
