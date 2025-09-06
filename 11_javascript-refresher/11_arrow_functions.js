//one parameter
const greet = (name) => {
    return "Hello, " + name
}
console.log(greet("Via"))


//implicit return
const square = n => n * n
console.log(square(8))


//no parameters
const sayHi = () => {
    console.log("Hi!")
}    
sayHi()
