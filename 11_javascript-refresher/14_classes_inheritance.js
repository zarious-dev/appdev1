class Person {
    constructor(name) {
        this.name = name
    }
    sayHello() {
        console.log("Hi, I am " + this.name)
    }
}

const person1 = new Person("Via")
person1.sayHello()


class Student extends Person {
    study() {
        console.log(this.name + " is studying")
    }       
}

const student1 = new Student("Cae")
student1.sayHello()
student1.study()




