const aboutMe = {
    name: "Caezarie",
    age: 15,
    course: "BSIS",
    introduce: function() {
        console.log(`Hi, my name is ${this.name} and I am ${this.age} years old.`)
    }
}

aboutMe.hobby = "reading fiction books"
aboutMe.introduce()




