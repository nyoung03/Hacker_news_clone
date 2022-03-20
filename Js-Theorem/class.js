'use strict';
// Object-oriendted programming
// class: template
// object: instance of a class
// JavaScript classes
// - introduct in ES6
// - syntactical sugar over prototype-based inheritance

// 1. Class declarations
class Person {
    // constructor 생성자
    constructor(name, age) {
        // fields
        this.name = name;
        this.age = age;
    }

    // methods
    speak() {
        console.log(`${this.name}: hello!`);
    }
}

const gia = new Person('gia', 24);
console.log(gia.name);
console.log(gia.age);
gia.speak();

// 2. Getter and Setters
class User {
    constructor(firstName, lastName, age) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.age = age;
    }

    get age() {
        return this._age;
    }

    set age(value) {
        // if (value < 0) {
        //     throw error('age can not be negative');
        // } 
        this._age = value < 0 ? 0 : value;
    }
}

const user1 = new User('steve', 'job', -1);
console.log(user1.age);

// 3. Fields (public, private)
// Too soon!
//
class Experiment {
    publicField = 2;
    #privateField = 0   // class 내부에서만 읽고 변경 가능                                            
}
const experiment = new Experiment();
console.log(experiment.publicField);
console.log(experiment.privateField);

// 4. static properties and methods
// Too soon!
class Artical {
    static publisher = 'Dream Coding';
    constructor(articleNumber) {
        this.articleNumber = articleNumber;
    }

    static printPublisher() {
        console.log(Artical.publisher);
    }
}

const article1 = new Artical(1);
const article2 = new Artical(2);
console.log(Artical.publisher);
Artical.printPublisher();

// 5. Inheritance
// a way for one class to extend another class.
class Shape {
    constructor(width, height, color) {
        this.width = width;
        this.height = height;
        this.color = color;
    }

    draw() {
        console.log(`drawing ${this.color} color of`);
    }

    getArea() {
        return this.width * this.height;
    }
}

class Rectangle extends Shape {}

const rectangle = new Rectangle(20, 20, 'blue');
rectangle.draw();
