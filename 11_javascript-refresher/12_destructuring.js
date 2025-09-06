const person = {
    name: "Caezarie",
    age: 15
}
const {name, age} = person
console.log (name)
console.log (age)


const hobbies = ["reading",  "sleeping"]
const [hobby1, hobby2] = hobbies
console.log(hobby1)
console.log(hobby2)


function printName({name}) {
    console.log(name)
}       
printName(person)
