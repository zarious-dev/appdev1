const numbers = [1, 2, 3]
const user = {name: "Caezarie", age: 15} 

const newNum = [...numbers, 4, 5]
console.log(newNum)

const newUser = {...user, location: "Palawan"}
console.log(newUser)

function sum(...numbers) {
  return numbers.reduce((total, number) => total + number, 0)
}

console.log(sum(1, 2, 3, 4, 5, 6, 7, 8))
