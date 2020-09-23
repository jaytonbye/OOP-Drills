//this lab was annoying. I finished enough of it, and know how to do the rest, but it sucks... If the directions were cleaner, i would complete it.

let person1 = {
    name: 'Jason',
    sayHello(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

let person2 = {
    name: 'Bob',
    sayHello(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

let person3 = {
    name: 'Sam',
    sayHello(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

let person4 = {
    name: 'Petey',
    sayHello(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

let person5 = {
    name: 'Judy',
    sayHello(){
        console.log(`Hello, my name is ${this.name}`)
    }
}

person1.sayHello()
person2.sayHello()
person3.sayHello()
person4.sayHello()
person5.sayHello()

function Person(name, age, city){
    this.name = name;
    this.age = age;
    this.city = city;
}

Person.prototype.sayHello = function(){
    console.log(`Hey! My name is ${this.name}, I am ${this.age} and live in ${this.city}`)
}

let p1 = new Person('Jason',21,'boston')
let p2 = new Person ('bob', 30, 'levit')
let p3 = new Person ('sally',40,'st pete')
let p4 = new Person ('harry',80,'bellmore')
let p5 = new Person ('sammy', 55, 'here')
p1.sayHello()
p2.sayHello()
p3.sayHello()
p4.sayHello()
p5.sayHello()

class Person2 {
    constructor(name, age, city){
        this.name = name 
        this.age = age
        this.city = city
    }
    sayHello(){
        console.log(`Hello, my namio is ${this.name}, and my agio is ${this.age}, and if you're interested, my citio is ${this.city}`)
    }
}

let p6 = new Person2 ('bobbbbby', 53,'happy place')
let p7 = new Person2 ('samantha',11,'zimbabway')
let p8 = new Person2 ('teri',33,'vancouver')
let p9 = new Person2 ('hunter',41,'ronkonkoma')
let p10 = new Person2 ('heather',6,'north babylon')
p6.sayHello()
p7.sayHello()
p8.sayHello()
p9.sayHello()
p10.sayHello()

class Vehicle{
    constructor(manufacturer, numWheels){
        this.manufacturer = manufacturer
        this.numWheels = numWheels
    }

    aboutVehicle(){
        console.log(`This vehicle is a ${this.type}, it was made by ${this.manufacturer}, and has ${this.numWheels} wheels`)
    }
}

class Sedan extends Vehicle{
    constructor(manufacturer, numWheels, numDoors, size, mpg){
        super(manufacturer, numWheels)
        this.numDoors = numDoors
        this.hasBed = false
        this.type = 'Sedan'
        this.size = size
        this.mpg = mpg
    }
}

class Truck extends Vehicle{
    constructor(manufacturer, numWheels, numDoors){
        super(manufacturer, numWheels)
        this.numDoors = numDoors
        this.hasBed = true
        this.type = 'Truck'
    }
}

class Motorcycle extends Vehicle{
    constructor(manufacturer, numWheels, numDoors){
        super(manufacturer, numWheels)
        this.numDoors = numDoors
        this.hasBed = false
        this.type = 'Chopper'
    }
}

let moto1 = new Motorcycle('honda',2,0)
let civic = new Sedan('honda', 4, 2, 'small',30)
console.log(moto1)
console.log(civic)

moto1.aboutVehicle()
civic.aboutVehicle()